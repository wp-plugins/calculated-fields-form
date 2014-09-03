	$.fbuilder.controls[ 'fsummary' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'fsummary' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Summary",
			ftype:"fsummary",
			fields:"",
			titleClassname:"summary-field-title",
			valueClassname:"summary-field-value",
			fieldsArray:[],
			show:function()
				{
				
					var p = $.trim(this.fields.replace( /\,+/g, ',') ).split( ',' ),
					    l = p.length,
						me = this;
					if( l )
					{
						var str = '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><h2>'+this.title+'</h2><div id="'+this.name+'">';
						for( var i = 0; i < l; i++ )
						{
							if( !/^\s*$/.test( p[ i ] ) )
							{
								p[ i ] = $.trim( p[ i ] );
								this.fieldsArray.push( p[ i ] + this.form_identifier );
								$( document ).on( 'change', '#' + p[ i ] + this.form_identifier, function(){ me.update(); } );
								
								str += '<div ref="'+p[i]+this.form_identifier+'" class="cff-summary-item"><span class="'+this.titleClassname+' cff-summary-title"></span><span class="'+this.valueClassname+' cff-summary-value"></span></div>';
							}	
						}
						str += '</div></div>';
						
						$( document ).one( 'showHideDepEvent', function( evt, form_identifier )
						{
							me.update();
						});
						
						return str;
					}
				},
			update:function()
				{
					var me = this;
					for ( var j = 0, k = this.fieldsArray.length; j < k; j++ )
					{
						var i  = this.fieldsArray[ j ],
							e  = $( '[id="' + i + '"]'),
							tt = $( '[ref="' + i + '"]');

						if( e.length && tt.length )
						{	
							var t  = $( '#' + i ).parents( '.fields' ).find( 'label:first' ).text(), 
								v  = [];
								
							e.each( 
								function(){ 
									var e = $(this);
									if( /(checkbox|radio)/i.test( e.attr( 'type' ) ) && !e.is( ':checked' ) ) 
									{
										return;
									}
									else if( e[0].tagName == 'SELECT' )
									{
										v.push( $(e[0].options[ e[0].selectedIndex ]).attr( 'vt' ) );
									}
									else
									{
									
										if( e.attr( 'vt' ) )
										{
											v.push( e.attr( 'vt' ) );
										}
										else
										{
											v.push( e.val() );
										}
									}	
								}
							);
							
							tt.find( '.cff-summary-title' ).html( ( /^\s*$/.test( t ) ) ? '' : t );
							tt.find( '.cff-summary-value' ).html( v.join( ', ' ) );	
							if( e.hasClass( 'ignore' ) )
							{
								tt.hide();
							}
							else
							{
								tt.show();
							}
						}	
					}
				}
	});
	