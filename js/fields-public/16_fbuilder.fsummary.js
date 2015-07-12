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
					var me = this,
                        p = $.trim( me.fields.replace( /\,+/g, ',') ).split( ',' ),
					    l = p.length;
					if( l )
					{
						var str = '<div class="fields '+me.csslayout+'" id="field'+me.form_identifier+'-'+me.index+'">'+( ( !/^\s*$/.test( me.title ) ) ? '<h2>'+me.title+'</h2>': '' )+'<div id="'+me.name+'">';
						for( var i = 0; i < l; i++ )
						{
							if( !/^\s*$/.test( p[ i ] ) )
							{
								p[ i ] = $.trim( p[ i ] );
								str += '<div ref="'+p[i]+me.form_identifier+'" class="cff-summary-item"><span class="'+me.titleClassname+' cff-summary-title"></span><span class="'+me.valueClassname+' cff-summary-value"></span></div>';
							}	
						}
						str += '</div></div>';
						
						return str;
					}
				},
			after_show: function(){
                    var me = this,
                        p = $.trim(me.fields.replace( /\,+/g, ',') ).split( ',' ),
                        l = p.length;
                        
                    if( l )
                    {
                        for( var i = 0; i < l; i++ )
                        {
                            if( !/^\s*$/.test( p[ i ] ) )
                            {
                                p[ i ] = $.trim( p[ i ] );
                                me.fieldsArray.push( p[ i ] + me.form_identifier );    
                                $( document ).on( 'change', '#' + p[ i ] + me.form_identifier, function(){ me.update(); } );
                            }	
                        }
                        $( document ).on( 'showHideDepEvent', function( evt, form_identifier )
                        {
						    me.update();
                        });
                        
                        $( '#cp_calculatedfieldsf_pform'+me.form_identifier ).bind( 'reset', function(){ setTimeout( function(){ me.update(); }, 10 ); } );
                    }
                },    
			update:function()
				{
					for ( var j = 0, k = this.fieldsArray.length; j < k; j++ )
					{
						var i  = this.fieldsArray[ j ],
							e  = $( '[id="' + i + '"]'),
							tt = $( '[ref="' + i + '"]');

						if( e.length && tt.length )
						{	
							var t  = $( '#' + i ).closest( '.fields' ).find( 'label:first' ).text(), 
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
	