		$.fbuilder.controls[ 'fslider' ] = function(){};
		$.extend(
			$.fbuilder.controls[ 'fslider' ].prototype, 
			$.fbuilder.controls[ 'ffields' ].prototype,
			{
				title:"Slider",
				ftype:"fslider",
				predefined:"",
				predefinedMin:"",
				predefinedMax:"",
				predefinedClick:false,
				size:"small",
				thousandSeparator:",",
				centSeparator:".",
				min:0,
				max:100,
				step:1,
				range:false,
				caption:"{0}",
				init:function()
					{
						this.min  = ( /^\s*$/.test( this.min ) ) ? 0   : parseFloat( $.trim( this.min  ) );
						this.max  = ( /^\s*$/.test( this.max ) ) ? 100 : parseFloat( $.trim( this.max  ) );
						this.step = ( /^\s*$/.test( this.step )) ? 1   : parseFloat( $.trim( this.step ) );
						this.centSeparator 	   = ( /^\s*$/.test( this.centSeparator )) ? '.' : $.trim( this.centSeparator );
						this.thousandSeparator = $.trim( this.thousandSeparator );
						
						this.predefinedMin = ( /^\s*$/.test( this.predefinedMin ) )? this.min : Math.min( Math.max( parseFloat( $.trim( this.predefinedMin ) ), this.min ), this.max );
						
						this.predefinedMax = ( /^\s*$/.test( this.predefinedMax ) )? this.max : Math.min( Math.max( parseFloat( $.trim( this.predefinedMax ) ), this.min ), this.max );
						
						this.predefined = ( /^\s*$/.test( this.predefined ) ) ? this.min : parseFloat( $.trim( this.predefined ) );
					},
				show:function()
					{
						return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+'</label><div class="dfield slider-container"><input id="'+this.name+'" name="'+this.name+'" class="field" type="hidden" value="'+$.fbuilder.htmlEncode( $.trim( this.predefined ) )+'"/><div id="'+this.name+'_slider" class="slider '+this.size+'"></div><div id="'+this.name+'_caption"></div><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
					},
				set_values:function()
					{
						var me = this;
						function setThousandsSeparator( v )
						{
							v = $.fbuilder.parseVal( v, me.thousandSeparator, me.centSeparator );	 
							if( !isNaN( v ) )
							{
								v = v.toString();
								var parts = v.toString().split("."),
									counter = 0,
									str = '';
								
								if( !/^\s*$/.test( me.thousandSeparator ) )
								{
									for( var i = parts[0].length-1; i >= 0; i--)
									{
										counter++;
										str = parts[0][i] + str;
										if( counter%3 == 0 && i != 0 ) str = me.thousandSeparator + str;

									}
									parts[0] = str;
								}
								if( typeof parts[ 1 ] != 'undefined' && parts[ 1 ].length == 1 )
								{
									parts[ 1 ] += '0';
								}
						
								return parts.join( me.centSeparator );
							}
							else 
							{
								return v;
							}
						};
						
						if( me.range )
						{
							var values = $( '#'+me.name+'_slider' ).slider( 'values' );
							$( '#'+me.name ).val( '[' + values[ 0 ] + ',' + values[ 1 ] + ']' );
							$( '#'+me.name+'_caption' ).html( 
								me.caption
								  .replace( /\{\s*0\s*\}/, setThousandsSeparator( values[ 0 ] ) )
								  .replace( /\{\s*0\s*\}/, setThousandsSeparator( values[ 1 ] ) )
							);
						}
						else
						{
							var value = $( '#'+me.name+'_slider' ).slider( 'value' );	
							$( '#'+me.name ).val( value );
							$( '#'+me.name+'_caption' ).html( 
								me.caption
								  .replace( /\{\s*0\s*\}/, setThousandsSeparator( value ) )
							);
						}
						$( '#'+me.name ).change();
					},
				after_show:function()
					{
						var me  = this,
							opt = {
								range: me.range,
								min  : me.min,
								max  : me.max,
								step : me.step
							};
							
						if( me.range ) opt[ 'values' ] = [ me.predefinedMin, me.predefinedMax ];
						else opt[ 'value' ] = me.predefined;
						opt[ 'slide' ] = opt[ 'stop' ] = ( function( e ){
															return function( event, ui ) 
																{
																	if( typeof ui.value != 'undefined' ) $(this).slider('value', ui.value);
																	if( typeof ui.values != 'undefined' ) $(this).slider('values', ui.values);
																	e.set_values();
																}
														} )( me );
						$( '#'+this.name+'_slider' ).slider( opt );
						me.set_values();
					},
				val:function()
					{
						var e = $( '[id="' + this.name + '"]:not(.ignore)' );
						return ( e.length ) ? e.val() : 0;
					}
		});