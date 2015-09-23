	$.fbuilder.controls[ 'fcheck' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fcheck' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Check All That Apply",
			ftype:"fcheck",
			layout:"one_column",
			required:false,
			showDep:false,
			show:function()
				{
					this.choicesVal = ((typeof(this.choicesVal) != "undefined" && this.choicesVal !== null)?this.choicesVal:this.choices.slice(0));
					var str = "";
					if (!(typeof(this.choicesDep) != "undefined" && this.choicesDep !== null))
					{
						this.choicesDep = new Array();
						for (var i=0;i<this.choices.length;i++)
						{
							this.choicesDep[i] = new Array();
						}	
					}
					for (var i=0;i<this.choices.length;i++)
					{
						var classDep = "",
							attrDep = "",
							separator = "",
							d = this.choicesDep[ i ];

						for (var j=0;j<d.length;j++)
						{
							if( !/^\s*$/.test( d[j] ) )
							{
								classDep = "depItem";
								attrDep += separator+d[j];
								separator = ",";
							}	
						}
						
						str += '<div class="'+this.layout+'"><label><input name="'+this.name+'[]" '+((classDep!="")?"dep=\""+attrDep+"\"":"")+' id="'+this.name+'" class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode(this.choices[i])+'" type="checkbox" '+((this.choiceSelected[i])?"checked":"")+'/> '+this.choices[i]+'</label></div>';
					}
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield">'+str+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			showHideDep:function( toShow, toHide )
				{
					var item = $( '#'+this.name+'.depItem' ),
						form_identifier = this.form_identifier;
						
					try
					{
						if( item.length )
						{
							var parent = item.closest( '.fields' );
							parent.find( '.field' ).each( function()
							{
								var item = $( this );

								if(  item.attr( 'dep' ) && item.attr( 'dep' ) != '' )
								{
									var d = item.attr( 'dep' ).split( ',' );
									for ( i=0; i<d.length; i++ )
									{
										if ( d[i] != "" )
										{
											d[i] = d[i] + form_identifier;
											if ( $.inArray( d[i], toShow ) == -1 )
											{
												try 
												{
													if ( item.is( ':checked' ) && $.inArray( item.attr( 'id' ), toHide ) == -1  )
													{
														$( '#'+d[i] ).closest( '.fields' ).css( 'display', '' );
														$( '#'+d[i] ).closest( '.fields' ).find( '.field' ).each( function(){
																$(this).removeClass( 'ignore' );
															});
															
														if( $.inArray( d[i], toShow ) == -1 )
														{
															toShow[toShow.length] = d[i];
														}
														
														var index = $.inArray( d[ i ], toHide );
														if( index != -1 )
														{
															toHide.splice( index, 1);
														}	
													}
													else
													{
														$( '#' + d[i] ).closest( '.fields' ).css( 'display', 'none' );
														$( '#' + d[i] ).closest( '.fields' ).find( '.field' ).each(function()
															{
																$(this).addClass('ignore');
															});
															
														if( $.inArray( d[i], toHide ) == -1 )
														{
															toHide[ toHide.length ] = d[ i ];
														}	
													}
												} catch(e){  }
											}
										}	
										
									}
								}
							});
						}
					}
					catch( e ){  }
				},
			val:function()
				{
					var e = $( '[id="' + this.name + '"]:checked:not(.ignore)' ),
						v = 0,
						me = this;
						
					if( e.length )
					{
						e.each( function(){
							v += $.fbuilder.parseVal( this.value );
						} );
					}
					return v;	
				}
		}
	);