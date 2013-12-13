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
			init:function()
				{
					this.choices = new Array("First Choice","Second Choice","Third Choice");
					this.choicesVal = new Array("First Choice","Second Choice","Third Choice");
					this.choicesDep = new Array(new Array(),new Array(),new Array());
				},
			show:function()
				{
					this.choicesVal = ((typeof(this.choicesVal) != "undefined" && this.choicesVal !== null)?this.choicesVal:this.choices.slice(0));
					var l = this.choices;
					var v = this.choiceSelected;
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
						var classDep = "",attrDep = "";
						var d = this.choicesDep;
						if (d[i].length>0)
						{
							classDep = "depItem";
							for (var j=0;j<d[i].length;j++)
							{
								attrDep += ","+d[i][j];
							}
						}
						str += '<option '+((classDep!="")?"dep=\""+attrDep+"\"":"")+' '+((this.choiceSelected==this.choicesVal[i])?"selected":"")+' class="depItem" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode(l[i])+'" >'+l[i]+'</option>';
					}
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><select id="'+this.name+'" name="'+this.name+'" class="field depItemSel '+this.size+((this.required)?" required":"")+'" >'+str+'</select><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div><div class="clearer"></div></div>';
				},
			showHideDep:function( toShow, toHide )
				{
					var item = $( '#'+this.name ),
						form_identifier = this.form_identifier;
						
					try
					{
						if( item.hasClass( 'depItemSel' ) )
						{
							if( ( item.parents( '#fieldlist' + form_identifier ).length == 1 ) ){
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
																$( '#'+d[i] ).parents( '.fields' ).css( 'display', '' );
																$( '#'+d[i] ).parents( '.fields' ).find( '.field' ).each( function(){
																		$(this).removeClass( 'ignoreCf' );
																		if ( !$(this).hasClass( 'ignorepb' ) )
																		{
																			$(this).removeClass( 'ignore' );
																		}	
																	});
																toShow[toShow.length] = d[i];
																var index = $.inArray( d[ i ], toHide );
																if( index != -1 )
																{
																	toHide.splice( index, 1);
																}	
															}
															else
															{
																$( '#' + d[i] ).parents( '.fields' ).css( 'display', 'none' );
																$( '#' + d[i] ).parents( '.fields' ).find( '.field' ).each(function()
																	{
																		$(this).addClass("ignoreCf");$(this).addClass("ignore");
																	});
																	
																toHide[ toHide.length ] = d[ i ];
															}
														} catch(e){}
													}
												}	
											}
										}
									});
							}	
						}
					}
					catch( e ){}					
				}	
		}
	);