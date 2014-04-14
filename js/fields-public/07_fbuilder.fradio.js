	$.fbuilder.controls[ 'fradio' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fradio' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Select a Choice",
			ftype:"fradio",
			layout:"one_column",
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
					var str = "";

					if (!(typeof(this.choicesDep) != "undefined" && this.choicesDep !== null))
					{
						this.choicesDep = new Array();
						for (var i=0;i<this.choices.length;i++)
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
					for (var i=0;i<this.choices.length;i++)
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
						
						str += '<div class="'+this.layout+'"><label><input name="'+this.name+'" id="'+this.name+'" '+((attrDep!="")?"dep=\""+attrDep+"\"":"")+' class="field '+classDep+' group '+((this.required)?" required":"")+'" value="'+$.fbuilder.htmlEncode(this.choicesVal[i])+'" vt="'+$.fbuilder.htmlEncode(this.choices[i])+'" type="radio" i="'+i+'"  '+((this.choices[i]+' - '+this.choicesVal[i]==this.choiceSelected)?"checked":"")+'/> '+this.choices[i]+'</label></div>';
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
							var parent = item.parents( '.fields' );
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
													if ( item.is( ':checked' ) && $.inArray( item.attr( 'id' ), toHide ) == -1 )
													{
														$( '#'+d[i] ).parents( '.fields' ).css( 'display', '' );
														$( '#'+d[i] ).parents( '.fields' ).find( '.field' ).each( function(){
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
														$( '#' + d[i] ).parents( '.fields' ).css( 'display', 'none' );
														$( '#' + d[i] ).parents( '.fields' ).find( '.field' ).each(function()
															{
																$(this).addClass("ignore");
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
					var e = $( '[id="' + this.name + '"]:checked:not(.ignore)' );
					if( e.length )
					{
						return $.fbuilder.parseVal( e.val() );
					}
					return 0;	
				}	
		}
	);