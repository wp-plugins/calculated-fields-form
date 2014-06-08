	$.fbuilder.controls[ 'fCalculated' ] = function(){};
	$.extend( 
		$.fbuilder.controls[ 'fCalculated' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"fCalculated",
			predefined:"",
			required:false,
			size:"medium",
			eq:"",
			eq_factored:"",
			suffix:"",
			prefix:"",
			decimalsymbol:".",
			groupingsymbol:"",
			dependencies:[ {'rule' : '', 'complex' : false, 'fields' : [ '' ] } ],
			readonly:true,
			hidefield:false,
			show:function()
				{
					var me = this,
						configuration = { "suffix" : me.suffix, "prefix" : me.prefix, "groupingsymbol" : me.groupingsymbol, "decimalsymbol" : me.decimalsymbol },
						dependencies = [];

					$.each( this.dependencies, function( i, d )
						{
							d.rule = d.rule.replace( /^\s+/, '').replace( /\s+$/, '');
							if( d.rule != '' && d.fields.length ){
							
								var fields = [];
								$.each( d.fields, function( j, f ){
									if( f != '' ) 
									{
										fields.push( f );
									}	
								});

								if( fields.length ){
									dependencies.push( { 'rule' : d.rule, 'fields' : fields } );
								}
							}
						});

					if( typeof this.optimizeEq == 'undefined' || !this.optimizeEq || /^\s*$/.test( this.eq_factored ) )
					{
						this.eq_factored = this.eq;
					}
					
					var eq = this.eq_factored;
					eq = eq.replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/fieldname(\d+)/g, "fieldname$1"+this.form_identifier).replace( /;\s*\)/g, ')').replace(/;\s*$/, '');
					
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'" '+( ( this.hidefield ) ? 'style="display:none;"' : '' )+'>\
					        <label>'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label>\
							<div class="dfield">\
							<input id="'+this.name+'" name="'+this.name+'" '+((this.readonly) ? ' readonly ' : '')+' class="codepeoplecalculatedfield field '+this.size+((this.required)?" required":"")+'" type="'+( ( this.hidefield ) ? 'hidden' : 'text' )+'" value="'+this.predefined+'"/>\
							<span class="uh">'+this.userhelp+'</span>\
							</div>\
							<div class="clearer">\
							</div>'+((!/^\s*$/.test(this.eq))? '<script>'+$.fbuilder[ 'objName' ]+'.fbuilder.calculator.addEquation("'+this.name.replace(/"/g, '\\"')+'", "'+eq+'", '+$.stringifyXX( configuration, false )+', '+$.stringifyXX( dependencies, false )+', "'+this.form_identifier+'");</script>' : '')+'</div>';
				},
			showHideDep: function( toShow, toHide )
				{
					var item = $( '#'+this.name ),
						identifier = this.form_identifier;
					try 
					{
						if ( ( item.parents( '#fieldlist' + identifier ).length==1 ) && ( ( item.attr( 'dep' ) && item.attr( 'dep' ) != '' ) || ( item.attr( 'notdep' ) && item.attr( 'notdep' ) != '' ) ) )
						{
							var d = item.attr( 'dep').split( ',' );
							for ( i=0; i<d.length; i++ )
							{
								if ( d[i] != '')
								{
									d[i] = d[i]+identifier;
									if ( $.inArray( d[i], toShow ) == -1 )
									{
										try 
										{
											if  ( $.inArray( item.attr( 'id' ), toHide ) == -1 )
											{
												$( '#' + d[i] ).parents( '.fields' ).css( 'display', '' );
												$( '#' + d[i] ).parents( '.fields' ).find( '.field' ).each( function()
													{
														$(this).removeClass( 'ignore' );
													});
													
												if( $.inArray( d[i], toShow ) == -1 )
												{
													toShow[ toShow.length ] = d[i];
												}	
												
												var index = $.inArray( d[ i ], toHide );
												if( index != -1 )
												{
													toHide.splice( index, 1 );
												}	
											}
											else
											{
												$( '#' + d[i] ).parents( '.fields' ).css( 'display', 'none' );
												$( '#' + d[i] ).parents( '.fields' ).find( '.field' ).each(function()
													{
														$(this).addClass( 'ignore');
													});
												
												if( $.inArray( d[i], toHide ) == -1 )
												{
													toHide[ toHide.length ] = d[i];
												}	
											}
										} 
										catch(e){}
									}
								}	
								
							}
							
							var d = item.attr( 'notdep' ).split( ',' );
							for ( i=0; i<d.length; i++ )
							{
								if ( d[i] != '' ) 
								{
									d[i] = d[i]+identifier;
									if ( d[i] != ''  && $.inArray( d[i], toShow ) == -1 )
									{
										try 
										{
												$( '#' + d[i] ).parents( '.fields' ).css( 'display', 'none' );
												$( '#' + d[i] ).parents( '.fields' ).find( '.field' ).each(function()
													{
														$(this).addClass( 'ignore');
													});
												toHide[ toHide.length ] = d[i];
										} 
										catch(e){}
									}
								}	
							}
						}
					} 
					catch(e){}
				},
			val : function()
				{
					var e = $( '[id="' + this.name + '"]:not(.ignore)' );
					if( e.length )
					{
						var v = $.trim( e.val() );
						
						v = v.replace( new RegExp( $.fbuilder[ 'escape_symbol' ](this.prefix), 'g' ), '' )
						     .replace( new RegExp( $.fbuilder[ 'escape_symbol' ](this.suffix), 'g' ), '' );
						
						return $.fbuilder.parseVal( v, this.groupingsymbol, this.decimalsymbol );	 
					}
					return 0;
				}
		}
	);
	
	/*
	* Extend the window object with the methods of obj, the prefix is used to avoid redefine window methods
	*/
	$.fbuilder[ 'extend_window' ]  = function( prefix, obj)
		{
			for( method in obj )
			{ 
				window[ prefix+method ] = (function( m )
					{ 
						return function()
							{
								return m.obj[ m.method_name ].apply( m.obj, arguments );
							};
					})({ "method_name" : method, 'obj' : obj });
			}
		};

	// Calculate Field code
	$.fbuilder[ 'calculator' ] = (function()
		{
				// Used to validate the equations results
				var validators = [];
				
                // Loading available modules
				if( typeof $.fbuilder[ 'modules' ] != 'undefined' )
				{
					var modules = $.fbuilder[ 'modules' ];
					for( var module in modules )
					{
						if( typeof modules[ module ][ 'callback' ] != 'undefined' )
						{
							modules[ module ][ 'callback' ]();
						}
						
						if( typeof modules[ module ][ 'validator' ] != 'undefined' )
						{
							validators.push( modules[ module ][ 'validator' ] );
						}
					}
				}
				
				// Private function to validate the equation results
				_validate_result = function( v )
					{
						if( validators.length )
						{
							var h = validators.length;
							while( h-- )
							{
								if( validators[ h ]( v ) )
								{
									return true;
								}	
							}
						}
						else
						{
							return true;
						}
						
						return false;
					};
				
				// Private function, the variable names in the equations are replaced by its values, return the equation result or false if error
				_calculate = function( form , eq, suffix )
					{

						var f = $(form),
							_match,
							field_regexp = new RegExp( '(fieldname\\d+'+suffix+')([\\D\\b])');
						
						eq = '(' + eq + ')';	
						
						while ( _match = field_regexp.exec( eq ) )
						{
							var field = $.fbuilder[ 'forms' ][ suffix ].getItem( _match[1] ),
								v = '';
							if( field )
							{
								v = field.val();
							}
							eq = eq.replace( _match[0], v+''+_match[2] ); // Replace the variable name by value
						}
						try
						{
							var r = eval( eq.replace( /^\(/, '' ).replace( /\)$/, '' ) ); // Evaluate the final equation
							return ( _validate_result( r ) ) ? r : false;
						}
						catch(e)
						{
							return false;
						}
					};
					
				// The public object
                var CalcFieldClss = function(){};
				CalcFieldClss.prototype = {
					enqueue_fields : [], // Used to avoid overload the users browsers 
					addEquation : function( calculeated_field, equation, configuration, dependencies, form_identifier )
						{
							var equation_result = $('[id="'+calculeated_field+'"]');
							if(equation_result.length)
							{
								var form = equation_result[0].form;
								if( typeof form.equations == 'undefined' ) form['equations'] = [];

								var  i, h = form.equations.length;
								
								// Avoid insert the equation multiple times to the form	
								for( i = 0 ; i < h; i++ ){
									if( form.equations[ i ].result == calculeated_field ) break;
								}
								// The equation hasn't been inserted previously
								if( i == h ){
									form.equations.push( {'result':calculeated_field, 'equation':equation, 'conf':configuration, 'dep':dependencies, 'identifier' : form_identifier} );
								}
							}

						},
						
					getDepList : function( calculated_field, value, dependencies ) // Get the list of dependent fields
						{
							var list    = [], // Fields that comply the rules
								list_h  = []; // Fields that don't comply the rules

							// The value is correct and the field has dependencies
							if( value !== false && dependencies.length )
							{
								for( var i = 0, h = dependencies.length; i < h; i++ )
								{
									try
									{
										// Get the rule and evaluate
										var rule = dependencies[i].rule.replace( /value/gi, value );
																	
										if( eval( rule ) )
										{
											$.each( dependencies[i].fields, function( j, e )
												{
													// Set the field if doesn't fail in other rule
													if( $.inArray( e, list_h ) == -1 && $.inArray( e, list ) == -1 )
													{
														list.push( e );
													}	
												} );
										}
										else
										{
											list_h = list_h.concat( dependencies[i].fields );
											// Remove dependent field from valid list
											$.each( dependencies[i].fields, function( j, e)
												{
													var j = $.inArray(e, list);
													if( j != -1) list.splice( j, 1 );
												});
										}
									}
									catch(e)
									{
										continue;
									}
								}
							}

							$('[id="'+calculated_field+'"]').attr( 'dep', list.join(',') ).attr('notdep', list_h.join( ',' ) );
							return list.length || list_h.length;
						},

                    defaultCalc : function( form_identifier ) // Evaluate all equations in form
						{ 
							var form = $( form_identifier ),
								dep  = false;
								
							// The form exists and has equations
							if( form.length && ( typeof form[0].equations != 'undefined' ) )
							{
								var equation_object = form[0].equations;

								for( var i in equation_object )
								{
									var calculated_field = $( '[id="' + equation_object[i].result+'"]' );
									if( calculated_field.length )
									{
										var result = _calculate( form[0], equation_object[i].equation,  equation_object[i].identifier );
										// Check the dependent fields after evaluate the equations
										dep = this.getDepList( equation_object[i].result, result, equation_object[i].dep ) || dep;
										calculated_field.val(( ( result !== false ) ? this.format( result, equation_object[i].conf) : '' ));
									}
								}
							}
							
							var _match = /(_\d+)$/.exec( form_identifier );
							if( dep && _match != null )
							{
								$.fbuilder.showHideDep( 
									{
										'formIdentifier' : _match[ 0 ], 
										'throwEvent' 	 : false 
									}
								);
							}
						},

                    Calculate : function ( field )
						{
							if( field.id == undefined ) return;
							var form = field.form, 
								me = this;
							
							// If the fields is a button or image, return
							if(/(button|img)/i.test(field.tagName) || (field.type && /(button|submit)/i.test(field.type)))
							{
								return;
							}

							if( form && typeof form.equations != 'undefined' )
							{
								var equations = form.equations,
									id = field.id,
									reg = new RegExp( id+'[\\D\\b]' );

								for (var i in equations )
								{
									if( reg.test( equations[i].equation + ' ' ) ) // If the field is in the equation
									{ 
										var calculated_field = $( '[id="'+equations[i].result+'"]' );
										if( calculated_field.length )
										{
											var result = _calculate( form, equations[i].equation, equations[i].identifier );
											
											// Check dependent fields
											if( this.getDepList( equations[i].result, result, equations[i].dep ) )
											{
												$.fbuilder.showHideDep( 
													{
														'formIdentifier' : equations[i].identifier, 
														'throwEvent' 	 : false 
													}
												);
											}	
										
											calculated_field.val( ( ( result !== false ) ? this.format( result, equations[i].conf ) : '' ) );
											calculated_field.change(); // Throw the change event to evaluate other equations
										}
									}
								}
							}
						},

                    format : function( value,  config )
						{
							if( $.isNumeric( value ) ) // If is a number set the separators symbols for thousands and decimals
							{
								
								var symbol = ( value < 0 ) ? '-' : '',
									parts = value.toString().replace( "-", "" ).split("."),
									counter = 0,
									str = '';

								if(config.groupingsymbol)
								{
									for( var i = parts[0].length-1; i >= 0; i--){
										counter++;
										str = parts[0][i] + str;
										if( counter%3 == 0 && i != 0 ) str = config.groupingsymbol + str;

									}
									parts[0] = str;
								}
								
								value = symbol+parts.join( config.decimalsymbol );
							}
							
							if( config.prefix )
							{
								value = config.prefix + value;
							}	
							if( config.suffix ) 
							{
								value += config.suffix;
							}	
							return value;
						},

                    unformat : function( field )
						{

							var escape_symbol = $.fbuilder.escape_symbol;

							var eq = field[0].form.equations,
								v = field.val();

							for(var i = 0, h = eq.length; i < h; i++)
							{
								if(eq[i].result == field[0].id)
								{
									var c = eq[i].conf; // Configuration object

									if( c.prefix && !/^\s*$/.test( c.prefix ) ) 
									{
										v = v.replace( new RegExp( "^" + escape_symbol( c.prefix ) ), '' );
									}
									
									if( c.suffix && !/^\s*$/.test( c.suffix ) )
									{
										v = v.replace( new RegExp( escape_symbol( c.suffix ) + "$" ), '' );
									}
									
									if( c.groupingsymbol && !/^\s*$/.test( c.groupingsymbol ) )
									{
										v = v.replace( new RegExp( escape_symbol( c.groupingsymbol ), 'g' ), '' );
									}
									
									if( c.decimalsymbol && !/^\s*$/.test( c.decimalsymbol ) )
									{
										v = v.replace( new RegExp( escape_symbol( c.decimalsymbol ), 'g' ), '.' );
									}	
								}
							}
							return v;
						}
				};

				var obj = new CalcFieldClss();
				
				// Associate events to the document for throw the corresponding equations
                $( document ).bind('keyup change blur', function(evt)
					{
						if( evt.type == 'keyup' )
						{
							// The key out of range
							if(evt.keyCode && (evt.keyCode >= 33 && evt.keyCode <= 40))
							{
								return;
							}
							
							if( $.inArray( evt.target, $.fbuilder[ 'calculator' ][ 'enqueue_fields' ] ) == -1 )
							{
								setTimeout( (function( t )
											{
												return function()
													{
														$.fbuilder[ 'calculator' ][ 'enqueue_fields' ].splice( $.inArray( t, $.fbuilder[ 'calculator' ][ 'enqueue_fields' ] ), 1 );
														obj.Calculate( t );
													};
											})( evt.target ), 500 );
							}
						}
						else
						{
							var t = $( evt.target );
							if( t.hasClass( 'depItem' ) || ( t.prop( 'tagName' ) == 'INPUT' && t.attr( 'type' ).toLowerCase() == 'text' && evt.type != 'change' ) )
							{
								return;
							}	
							obj.Calculate(evt.target);
						}
					});
				
				//Associate an event to the document waiting for the showHideDepEvent and recalculate all equations
				$(document).bind( 'showHideDepEvent', function( evt, form_identifier )
					{
						obj.defaultCalc( '#'+form_identifier );
					});
                return obj; // Return the public object
            }
        )();
		
		