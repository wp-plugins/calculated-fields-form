	$.fbuilder.controls[ 'fdropdown' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fdropdown' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Select a Choice",
			ftype:"fdropdown",
			size:"medium",
			required:false,
			choiceSelected:"",
			showDep:false,
			show:function()
				{
					this.choicesVal = ((typeof(this.choicesVal) != "undefined" && this.choicesVal !== null)?this.choicesVal:this.choices.slice(0))
					
					var lv = this.choicesVal,
						l = this.choices,
						str = "";
						
					if (!(typeof(this.choicesDep) != "undefined" && this.choicesDep !== null))
					{
						this.choicesDep = new Array();
						for (var i=0;i<l.length;i++)
						{
							this.choicesDep[i] = new Array();
						}	
					}
					var classDep = "";
					for (var i=0, h = this.choicesDep.length;i<h;i++)
					{
						if( this.choicesDep[i].length )
						{
							classDep = "depItem";
							break;
						}
					}
					for (var i=0;i<l.length;i++)
					{
						var attrDep = "",
							separator = "",
							d = this.choicesDep[ i ];
							
						for (var j=0;j<d.length;j++)
						{
							if( !/^\s*$/.test( d[j] ) )
							{
								attrDep += separator+d[j];
								separator = ",";
							}	
						}
						
						str += '<option '+((attrDep!="")?"dep=\""+attrDep+"\"":"")+' '+((this.choiceSelected == l[i]+' - '+lv[i])?"selected":"")+' '+( ( classDep != '' ) ? 'class="'+classDep+'"' : '' )+' value="'+$.fbuilder.htmlEncode(lv[i])+'" vt="'+$.fbuilder.htmlEncode(l[i])+'" >'+l[i]+'</option>';
					}
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><select id="'+this.name+'" name="'+this.name+'" class="field '+( ( classDep != '' ) ? ' depItemSel ' : '' )+this.size+((this.required)?" required":"")+'" >'+str+'</select><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div><div class="clearer"></div></div>';
				},
			showHideDep:function( toShow, toHide )
				{
					var item = $( '#'+this.name ),
						form_identifier = this.form_identifier;
		
					try
					{
						if( item.find( '.depItem' ).length )
						{
							var id = item.attr( 'id' );
							item.find( '.depItem' ).each( function()
								{
									var item = $( this );
									if( item.attr( 'dep' ) && item.attr( 'dep' ) != '' )
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
														if ( item.is( ':selected' ) && $.inArray( id, toHide ) == -1  )
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
																	$(this).addClass("ignore");
																});
																
															if( $.inArray( d[i], toHide ) == -1 )
															{
																toHide[ toHide.length ] = d[ i ];
															}	
														}
													} catch(e){}
												}
											}	
										}
									}
								});
						}
					}
					catch( e ){}					
				}	
		}
	);