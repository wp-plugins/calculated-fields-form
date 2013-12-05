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

					if( /^\s*$/.test( this.eq_factored ) )
					{
						this.eq_factored = this.eq;
					}
					
					var eq = ( /^\s*$/.test( this.eq_factored ) ) ? this.eq : this.eq_factored;
					eq = eq.replace(/"/g, '\\"').replace(/\n/g, ' ').replace(/fieldname(\d+)/g, "fieldname$1"+this.form_identifier).replace( /;\)/g, ')')
					
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
														$(this).removeClass( 'ignoreCf' );
														if ( !$(this).hasClass( 'ignorepb' ) )
														{
															$(this).removeClass( 'ignore' );
														}	
													});
												toShow[ toShow.length ] = d[i];
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
														$(this).addClass( 'ignoreCf');
														$(this).addClass( 'ignore');
													});
												toHide[ toHide.length ] = d[i];
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
														$(this).addClass( 'ignoreCf' );
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
				}		
		}
	);
	
	// Calculate Field code
	$.fbuilder[ 'calculator' ] = (function()
		{
                // Check if the Math class contains the prec and cdate routines
                // Associate a new property to Math object to get the correct date format
                if( Math.date_format == undefined )
				{
					Math.date_format = 'mmddyyyy';
				}
                if(Math.prec == undefined)
				{
                    Math.prec  = function (num, pr)
						{
							if( /^\d+$/.test( pr ) && /^[+-]?\d+(\.\d+)?$/.test( num ) )
							{
								var result = Math.round( num * Math.pow( 10, pr ) ),
									tmp;
								
								result = result / Math.pow(10,pr);
								tmp    = result.toString().indexOf('.');
								
								if(tmp == -1 && pr > 0)
								{
								  tmp = pr;
								  result = result+'.';
								}
								else
								{
								  tmp = pr-((result.toString().length) - (tmp+1));
								}
								for(var i = 0; i < tmp; i++)
								{
								  result += '0';
								}
								return result;
							}
							return num;
						};
                } // End if Math.prec

                if(Math.cdate == undefined)
				{
                    Math.cdate  = function (num)
						{
							if(isFinite(num*1))
							{
								num = Math.round( Math.abs( num ) * 86400000 );
								var date = new Date(num),
									d = date.getDate(),
									m = date.getMonth()+1,
									y = date.getFullYear();
									
								m = ( m < 10 ) ? '0'+m : m;
								d = ( d < 10 ) ? '0'+d : d;
								return ( Math.date_format == 'mmddyyyy' ) ? m+'/'+d+'/'+y : d+'/'+m+'/'+y;
							}
							return num;
						};
                } // End if Math.cdate
				
				// Associate the Math operations to the Windows Object
				var math_prop = ["LN10", "PI", "E", "LOG10E", "SQRT2", "LOG2E", "SQRT1_2", "LN2", "cos", "pow", "log", "tan", "sqrt", "ceil", "asin", "abs", "max", "exp", "atan2", "random", "round", "floor", "acos", "atan", "min", "sin", "prec", "cdate"];
				for(var i = 0, h = math_prop.length; i < h; i++)
				{
                    if( typeof window[ math_prop[ i ] ] == 'undefined' )
					{
                        window[ math_prop[ i ] ] = Math[ math_prop[ i ] ];
                    }
                }
				
				// Private function, the variable names in the equations are replaced by its values, return the equation result or false if error
				_calculate = function( form , eq )
					{
						var f = $(form),
							_match;
							
						while ( _match = /(fieldname\d+_\d+)/.exec( eq ) )
						{
							var e = f.find('[id="'+_match[0]+'"]'), 
								values = []; // Will contain an array with values of fields that coincide with selector

							e.each(function()
								{
									var e = $(this), 
									    v; // field value
									
									// The dependent fields that are marked to be ignored are set to zero
									if( e.hasClass( 'ignoreCf' ) )
									{
										values.push( 0 );
										return false;
									}
									
									// The unchecked radio buttons or checkboxes are ignored
									if( /(checkbox|radio)/i.test( e[0].type ) && !e[0].checked ) 
									{
										return;
									}	
									
									if( e.hasClass( 'codepeoplecalculatedfield' ) ) 
									{ // Remove format from calculated fields
									   v = obj.unformat( e );
									}
									else
									{
									   v = e.val();
									}
									
									// Check if value has a date format or number format
									var d = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(v),
										p = /[+-]?(([0-9]{1,3}(,[0-9]{3})+(\.[0-9]+)?)|(\d+(\.\d+)?)|(\.\d+))/.exec(v);

									if( e.hasClass( 'dateddmmyyyy' ) || e.hasClass( 'datemmddyyyy' ) )
									{
										// Allows the future transform of a number to a date format string
										Math.date_format = (e.hasClass('dateddmmyyyy')) ? 'ddmmyyyy' : 'mmddyyyy';

										if( d ) // Is a date
										{
											var date = (Math.date_format == 'ddmmyyyy') ? new Date(d[3], (d[2]*1-1), d[1]) : new Date(d[3], (d[1]*1-1), d[2]);
											values.push( Math.ceil(date.valueOf()/86400000) );
										}
										else
										{
											// Use a string to provoke an equation's fault
											values.push('codepeople_calculate_field');
										}
									}
									else
									{
										values.push( (p) ? p[0].replace( /\,/g, '' )*1 : v );
									}
								});
							
							function field_value(v) // Corrects the value
								{
									if (/^\s*$/.test(v))
									{
										return 0;
									}	
									
									if(typeof v == 'string') 
									{
										return "'" + v.replace(/'/g, "\\'").replace( /\$/g, '') + "'";
									}	
									return v;
								}

							var x; // Convert all values in array to an unique value
							if(values.length == 0)
							{
								x = 0;
							}
							else
							{
								for( var i=0; i<values.length; i++ )
								{
									values[i] = field_value( values[i] );
								}
								
								x = ( values.length == 1 ) ? values[0] : eval(values.join('+'));
							}
							
							eq = eq.replace( _match[0], x ); // Replace the variable name by value
						}

						try
						{
							var r = eval(eq); // Evaluate the final equation
							return (isFinite(r) || /\d{1,2}\/\d{1,2}\/\d{4}/.test(r)) ? r : false;
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
							return list;
						},

                    defaultCalc : function( form_identifier ) // Evaluate all equations in form
						{ 
							
							var form = $( form_identifier );
							
							// The form exists and has equations
							if( form.length && ( typeof form[0].equations != 'undefined' ) )
							{
								var equation_object = form[0].equations;

								for( var i in equation_object )
								{
									var calculated_field = $( '[id="' + equation_object[i].result+'"]' );
									if( calculated_field.length )
									{
										var result = _calculate( form[0], equation_object[i].equation );
										
										// Check the dependent fields after evaluate the equations
										this.getDepList( equation_object[i].result, result, equation_object[i].dep );
										$.fbuilder.showHideDep( equation_object[i].identifier, false );
										
										calculated_field.val(( ( result !== false ) ? this.format( result, equation_object[i].conf) : '' ));
										calculated_field.change(); // Throw the event to evaluate other calculated fields
									}
								}
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
											var result = _calculate( form, equations[i].equation );
											
											// Check dependent fields
											this.getDepList( equations[i].result, result, equations[i].dep );
											$.fbuilder.showHideDep( equations[i].identifier, false );
										
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
								var parts = value.toString().split("."),
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
								value = parts.join( config.decimalsymbol );
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

							function escape_symbol( value ) // Escape the symbols used in regulars expressions
							{
								return value.replace(/([\^\$\-\.\,\[\]\(\)\/\\\*\?\+\!\{\}])/g, "\\$1");
							};

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
							if( t.prop( 'tagName' ) == 'INPUT' && t.attr( 'type' ).toLowerCase() == 'text' && evt.type != 'change' ) 
							{
								return;
							}	
							obj.Calculate(evt.target);
						}
					});
				
				//Associate an event to the document waiting for the showHideDepEvent and recalculate all equations
				$(document).bind( 'showHideDepEvent', function( evt, form_identifier )
					{
						obj.defaultCalc( '#cp_calculatedfieldsf_pform'+form_identifier );
					});
                return obj; // Return the public object
            }
        )();
		
		