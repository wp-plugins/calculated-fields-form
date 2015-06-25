	$.fbuilder.typeList.push(
		{
			id:"fCalculated", 
			name:"Calculated Field",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fCalculated' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fCalculated' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"fCalculated",
			predefined:"",
			required:false,
			size:"medium",
			toolbar:"default|mathematical",
			eq:"",
			optimizeEq:true,
			eq_factored:"",
			eq_factorize: function()
				{
					var items = this.fBuild.getItems(),
                        fieldsIndex = this.fBuild.getFieldsIndex(),
                        calculatedFields = this.fBuild.getCalculatedFields(),
						eq = this.eq,
						_match;

					this.eq_factored =  this.eq + ' ';
					while ( _match = /(fieldname\d+)/.exec(eq))
					{
                        if( typeof fieldsIndex[ _match[0] ] != 'undefined' )
                        {
                            var item = items[ fieldsIndex[ _match[0] ] ];
                            if( item.ftype == 'fCalculated' )
                            {
                                var factored = item.eq_factorize();
                                factored = factored.replace( /([\D\b])(prec|PREC)([\D\b])/g, "$11*$2$3" ).replace( /;\s*$/g, '');
                                this.eq_factored = this.eq_factored.replace( _match[0], factored );
                            }
                            eq = eq.replace( _match[0], '' );
                        }
                        else
						{
							eq = eq.replace( _match[0], '' );
						}
					}
					this.eq_factored = $.trim( this.eq_factored );
                    for( var index in calculatedFields)
                    {
                        var item = items[ calculatedFields[ index ] ],
                            re = new RegExp( '[\\D\\b]'+this.name+'[\\D\\b]');
                        if( re.test( '('+item.eq+')' ) && !re.test( '('+item.eq_factored+')' ) )
                        {
                            item.eq_factored = item.eq;
                        }
                    }
                    
                    if( /^\s*$/.test( this.eq_factored ) )
					{
						return this.name;
					}
					else{
                        this.eq_factored = '(' + this.eq_factored + ')';
                        if ( !this.readonly || /^\s*$/.test( this.eq_factored ) )
                        {
                            return this.name;
                        }
                        return this.eq_factored;
                    }
				},
			suffix:"",
			prefix:"",
			decimalsymbol:".",
			groupingsymbol:"",
			dependencies:[ {'rule' : '', 'complex' : false, 'fields' : [ '' ] } ],
			readonly:true,
			hidefield:false,
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+this.predefined+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sEq").bind("keyup", {obj: this}, function(e) 
						{
                            if( $.inArray( e.keyCode, [16,17,18,27,37,38,39,40] ) == -1 )
                            {
                                e.data.obj.eq = $(this).val();
                                e.data.obj.eq_factorize();
                                $.fbuilder.reloadItems();
                            }    
						});
					$("#sOptimizeEq").bind("click", {obj: this}, function(e) 
						{
							var items = e.data.obj.fBuild.getItems(),
								optimizeEq = e.data.obj.optimizeEq = $.fbuilder.controls[ 'ffields' ].prototype[ 'optimizeEq' ] = $( e.target ).is( ':checked' );
								
							for( var i = 0, h = items.length; i < h; i++)
							{
								if( items[ i ].ftype == 'fCalculated'  )
								{
									items[ i ].optimizeEq = optimizeEq;
								}
							}
							$.fbuilder.reloadItems();
							
						});	
					$("#sSuffix").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.suffix = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sPrefix").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.prefix = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sDecimalSymbol").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.decimalsymbol = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sGroupingSymbol").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.groupingsymbol = $(this).val();
							$.fbuilder.reloadItems();
						});
					$('.displayWizard').bind("click", {obj: this}, function(e) 
						{
							e.preventDefault();
							var me = $( this ),
								i  = me.attr("i");
							e.data.obj.dependencies[ i ].rule = '';
							e.data.obj.dependencies[ i ].complex = false;							
							$.fbuilder.editItem( e.data.obj.index  );
							$.fbuilder.reloadItems();
						});
					$('.displayComplexRule').bind("click", {obj: this}, function(e) 
						{
							e.preventDefault();
							e.data.obj.dependencies[ $(this).attr( "i" ) ].complex = true;
							$.fbuilder.editItem( e.data.obj.index );
							$.fbuilder.reloadItems();
						});
					$( ".cf_dependence_operator" ).bind("change", {obj: this}, function(e) 
						{
							var me = $(this),
								i  = me.attr("i"),
								o  = e.data.obj.dependencies[ i ];
								
							o.rule = 'value'+me.val()+$(".cf_dependence_value[i='"+i+"']").val().replace(/'/g, "\'");
							o.complex = false;
							e.data.obj.dependencies[ me.attr("i") ].rule = o.rule;
							$.fbuilder.reloadItems();
						});
					$( ".cf_dependence_value" ).bind("keyup", {obj: this}, function(e) 
						{
							var me = $(this),
								i  = me.attr("i"),
								o  = e.data.obj.dependencies[ i ];
								
							o.rule = 'value'+$(".cf_dependence_operator[i='"+i+"']").val()+me.val();
							o.complex = false;
							e.data.obj.dependencies[ me.attr("i") ].rule = o.rule;
							$.fbuilder.reloadItems();
						});
					$( ".cf_dependence_rule" ).bind("keyup", {obj: this}, function(e) 
						{
							var me = $(this);
							e.data.obj.dependencies[ me.attr("i") ].rule = me.val();
							e.data.obj.dependencies[ me.attr("i") ].complex = true;
							$.fbuilder.reloadItems();
						});
					$( ".cf_dependence_field" ).bind("change", {obj: this}, function(e) 
						{
							var me = $(this);
							e.data.obj.dependencies[ me.attr("i") ].fields[ me.attr("j") ]  = me.val();
							$.fbuilder.reloadItems();
						});
					$("#sReadOnly").bind("click", {obj: this}, function(e) 
						{
							e.data.obj.readonly = $(this).is(':checked');
							if( e.data.obj.ftype == "fCalculated" ) 
							{
								e.data.obj.eq_factorize();
							}	
							$.fbuilder.reloadItems();
						});
					$("#sHideField").bind("click", {obj: this}, function(e) 
						{
							e.data.obj.hidefield = $(this).is(':checked');
							$.fbuilder.reloadItems();
						});
					$("#sSize").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.size = $(this).val();
							$.fbuilder.reloadItems();
						});
					$( ".addDep" ).bind("click", {obj: this}, function(e) 
						{
							var j = $(this).attr("j");
							if( typeof j == 'undefined' )
							{
								e.data.obj.dependencies.splice($(this).attr("i")*1+1, 0, { 'rule' : '', 'complex' : false, 'fields' : [''] } );
							}else
							{
								e.data.obj.dependencies[$(this).attr("i")].fields.splice( j+1, 0, "")
							}

							$.fbuilder.editItem( e.data.obj.index );
							$.fbuilder.reloadItems();
						});
					$( ".removeDep" ).bind("click", {obj: this}, function(e) 
						{
							var i = $(this).attr("i"),
								j = $(this).attr("j");
						
							if( typeof j != 'undefined' )
							{
								if( e.data.obj.dependencies[ i ].fields.length != 1 )
								{
									e.data.obj.dependencies[ i ].fields.splice( j, 1 );
								}else
								{
									e.data.obj.dependencies[ i ].fields = [''];
								}
							}
							else
							{
								if( e.data.obj.dependencies.length != 1 )
								{
									e.data.obj.dependencies.splice( i, 1 );
								}
								else
								{
									e.data.obj.dependencies[ 0 ] = { 'rule' : '', 'complex' : false, 'fields' : [''] };
								}
							}
						
							$.fbuilder.editItem( e.data.obj.index );
							$.fbuilder.reloadItems();
						});
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
		showSpecialDataInstance: function()
			{
				return this.showReadOnly()+this.showHideField()+this.showOptimizeEq()+this.showEqEditor()+this.showDependencies();
			},
		showDependencies : function()
			{
				// Instance
				var me = this;

				function setOperator( indx, op )
				{
					var ops = [ 
								{'text' : 'Equal to', 'value' : '=='},
								{'text' : 'Not equal to', 'value' : '!='},
								{'text' : 'Greater than', 'value' : '>'},
								{'text' : 'Greater than or equal to', 'value' : '>='},
								{'text' : 'Less than', 'value' : '<'},
								{'text' : 'Less than or equal to', 'value' : '<='}
							],
						r = '';

					for( var i = 0, h = ops.length; i < h; i++)
					{
						r += '<option value="'+ops[i]['value']+'" '+( ( op == ops[i]['value'] ) ? 'SELECTED' : '' )+'>'+ops[i]['text']+'</option>';
					}

					return '<select i="'+indx+'" class="cf_dependence_operator">'+r+'</select>';
				}

				var r = '';
				var items = this.fBuild.getItems();
				$.each( this.dependencies, function ( i, o )
					{
						if( o.complex )
						{
							r += '<div><div style="position:relative;"><span style="font-weight:bold;">If value is</span><span class="cf_dependence_edition" i="'+i+'" ><input class="cf_dependence_rule" type="text" i="'+i+'" value="'+o.rule.replace(/"/g, '&quot;')+'" /><br></span><a class="addDep ui-icon ui-icon-circle-plus" i="'+i+'" title="Add another dependency."></a><a class="removeDep ui-icon ui-icon-circle-minus" i="'+i+'" title="Delete this dependency."></a><div style="text-align:right;position:relative;"><span style="float:left;">Ex: value==10</span><a href="#" class="displayWizard" i="'+i+'">Edit through wizard</a><br />(The rule entered will lost)</div></div>';
						}
						else
						{
							var operator = '',
								value = '';

							if( !/^\s*$/.test( o.rule ) )
							{
								var re    = new RegExp( '^value([!=<>]+)(.*)$'),
									parts = re.exec( o.rule );
									
								operator = parts[1];
								value = parts[2];
							}

							r += '<div><div style="position:relative;"><span style="font-weight:bold;">If value is</span><span class="cf_dependence_edition" i="'+i+'" >'+setOperator( i, operator )+' <input type="text" i="'+i+'" class="cf_dependence_value" value="'+value.replace(/"/g, '&quot;')+'" /></span><a class="addDep ui-icon ui-icon-circle-plus" i="'+i+'" title="Add another dependency."></a><a class="removeDep ui-icon ui-icon-circle-minus" i="'+i+'" title="Delete this dependency."></a></div><div style="text-align:right;"><a i="'+i+'" class="displayComplexRule" href="#">Edit rule manually</a></div>';
						}

						r += '<div>';
						$.each( o.fields, function( j, v )
							{
								
								var opt = '<option value=""></option>';
								for (var k=0;k<items.length;k++)
								{
									if (items[k].name != me.name)
									{
										opt += '<option value="'+items[k].name+'" '+( ( items[k].name == v ) ? 'selected="SELECTED"' : '' )+'>'+items[k].name+( ( typeof items[ k ].title != 'undefined' ) ? ' (' + items[ k ].title + ')' : '' ) + '</option>';
									}
								}
								r += '<div style="position:relative;">If rule is valid show: <select class="cf_dependence_field" i="'+i+'" j="'+j+'" >'+opt+'</select><a class="addDep ui-icon ui-icon-circle-plus" i="'+i+'" j="'+j+'" title="Add another dependency."></a><a class="removeDep ui-icon ui-icon-circle-minus" i="'+i+'" j="'+j+'" title="Delete this dependency."></a></div>';
							});
						r += '</div>';
						r += '</div>';
					});

				return '<label>Define dependencies</label><div class="dependenciesBox">'+r+'</div>';
			},
		showHideField:function()
			{
				return '<div><input type="checkbox" name="sHideField" id="sHideField" '+((this.hidefield)?"checked":"")+'><label>Hide Field From Public Page</label></div>';
			},
		showReadOnly:function()
			{
				return '<div><input type="checkbox" name="sReadOnly" id="sReadOnly" '+((this.readonly)?"checked":"")+'><label>Read Only</label></div>';
			},
		showOptimizeEq:function()
			{
				if( typeof $.fbuilder.controls[ 'ffields' ].prototype[ 'optimizeEq' ]  == 'undefined' )
				{
					$.fbuilder.controls[ 'ffields' ].prototype[ 'optimizeEq' ] = this.optimizeEq;
				}
				else
				{
					this.optimizeEq = $.fbuilder.controls[ 'ffields' ].prototype[ 'optimizeEq' ];
				}
				
				return '<div><input type="checkbox" name="sOptimizeEq" id="sOptimizeEq" '+( ( this.optimizeEq ) ? "checked" : "" )+'><label>Optimize Form Equations</label></div>';
			},
		showEqEditor:function(eq)
			{
				var me    = this,
					tools = $.fbuilder[ 'objName' ]+'.fbuilder.controls.fCalculated.tools';
				
				$.fbuilder.controls[ 'fCalculated' ][ 'tools' ] = {
						setField : function()
							{
								this.setSymbol( $( '#sFieldList' ).val() );
							},
						setSymbol : function(s)
							{
								var sEQ = $('#sEq');
								if(sEQ.length)
								{
									var p = sEQ.caret(),
										v = sEQ.val(),
										nv;
										
									sEQ.val(v.substr(0,p)+s+v.substr(p));
									sEQ.caret(p+s.length);
									me.eq = sEQ.val();
									me.eq_factorize();
									$.fbuilder.reloadItems();
								}
							},
						loadTutorial : function( toolbar )
							{
								var parts = toolbar.split('|'),
									out   = ''; 
								
								if( $.fbuilder[ 'modules' ][ parts[ 0 ] ][ 'tutorial' ] )
								{
									out = '<input type="button" class="eq_btn" onclick="window.open(\'' + $.fbuilder[ 'modules' ][ parts[ 0 ] ][ 'tutorial' ] + '\');" value="?" title="Tutorial" />';
								}
								$('#sEqModuleTutorial').html( out );
								return out;
							},	
						loadToolbarList : function()
							{
								var out = '<select onchange="'+tools+'.loadToolbar(this.options[this.selectedIndex].value);'+tools+'.loadTutorial(this.options[this.selectedIndex].value);" style="width:260px;">';
								
								if( $.fbuilder[ 'modules' ] )
								{
									for( var m in $.fbuilder[ 'modules' ] )
									{
										var module = $.fbuilder[ 'modules' ][ m ];
										for( var toolbar in module[ 'toolbars' ] )
										{
											out += '<option value="'+m+'|'+toolbar+'" '+( ( me.toolbar == m+'|'+toolbar) ? 'SELECTED' : '')+'>'+module[ 'toolbars' ][ toolbar ][ 'label' ]+'</options>';
										}
									}
								}	
								out += '</select>';
								return out;
							},
						loadToolbar : function( toolbar )
							{
								var parts = toolbar.split('|'),
									out   = '';
									
								if( $.fbuilder[ 'modules' ][ parts[ 0 ] ][ 'toolbars' ][ parts[ 1 ] ] )
								{
									var buttons = $.fbuilder[ 'modules' ][ parts[ 0 ] ][ 'toolbars' ][ parts[ 1 ] ][ 'buttons' ];
									for( var i = 0, h = buttons.length; i < h; i++ )
									{
										out += '<input type="button" value="'+buttons[ i ][ 'value' ]+'" onclick="'+tools+'.setSymbol(\''+buttons[ i ][ 'code' ]+'\');'+tools+'.setTip(\''+buttons[ i ][ 'tip' ]+'\');" class="eq_btn" />';
									}
									this.setTip( '' );
								}
								
								$( '#sEqButtonsContainer' ).html( out );
								return out;
							},	
						setTip : function( t )
							{
								if( !/^\s*$/.test( t ))
								{
									$('#sEqTipsContainer').html( t ).show();
								}
								else
								{
									$('#sEqTipsContainer').html( '' ).hide();
								}	
							}
					};
				
                    var out = '<label>Set Equation</label><textarea class="large" name="sEq" id="sEq">'+me.eq+'</textarea><label>Operands</label><div style="float:right;"><a href="javascript:window.open(\'http://wordpress.dwbooster.com/includes/calculated-field/equations.html\', \'_blak\');">Read an equation tutorial</a></div><div class="groupBox"><select id="sFieldList" style="width:260px;">';
								
                    var items = this.fBuild.getItems();
					for( var i in items )
					{
						var item = items[ i ];
						if( item[ 'name' ] != this.name )
						{
							var fName = item[ 'name' ],
								fTitle = item[ 'title' ];

							fName = fName.replace( /'/g, "\'" ).replace( /"/g, '\"' );
							out += '<option value="' + fName + '">'+item[ 'name' ] + ( ( item[ 'title' ] && !/^\s*$/.test( item[ 'title' ] ) ) ? '('+item[ 'title' ] + ')' : '' ) + '</option>';
						}
					}
                    out += '	</select><input type="button" value="+" class="eq_btn" onclick="'+tools+'.setField();" /></div><label>Operators</label><div style="text-align:center;" class="groupBox"><div style="text-align:left;">'+$.fbuilder.controls[ 'fCalculated' ][ 'tools' ].loadToolbarList()+'<span id="sEqModuleTutorial">'+$.fbuilder.controls[ 'fCalculated' ][ 'tools' ].loadTutorial( me.toolbar )+'</span></div><div id="sEqButtonsContainer">'+$.fbuilder.controls[ 'fCalculated' ][ 'tools' ].loadToolbar( me.toolbar )+'</div><div id="sEqTipsContainer" style="background-color:#DFEFFF;border:1px solid #C2D7EF;padding:5px;margin:5px;display:none;text-align:left;"></div></div><label>Symbol to display at beginning of calculated field</label><input type="text" name="sPrefix" id="sPrefix" class="large" value="'+me.prefix+'" /><label>Symbol to display at the end of calculated field</label><input type="text" name="sSuffix" id="sSuffix" class="large" value="'+me.suffix+'" /><label>Decimals separator symbol (Ex: 25.20)</label><input type="text" name="sDecimalSymbol" id="sDecimalSymbol" class="large" value="'+me.decimalsymbol+'" /><label>Symbol for grouping thousands (Ex: 3,000,000)</label><input type="text" name="sGroupingSymbol" id="sGroupingSymbol" class="large" value="'+me.groupingsymbol+'" />';

                    return out;
			}
	});