	$.fbuilder.typeList.push({id:"fCalculated", name:"Calculated Field"});
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
			eq:"",
			eq_factored:"",
			eq_factorize: function()
				{
					if ( !this.readonly )
					{
						this.eq_factored = this.name;
						return this.eq_factored;
					}
					
					var items = this.fBuild.getItems(),
						eq = this.eq,
						_match;
						
					this.eq_factored =  this.eq + ' ';
					
					while ( _match = /(fieldname\d+)/.exec(eq))
					{
						for( var i in items )
						{
							if( items[ i ].name == _match[0] )
							{
								if( items[ i ].ftype == 'fCalculated' )
								{
									var factored = items[ i ].eq_factorize(),
										reg = new RegExp( _match[0]+'[\\D\\b]' );
										
									this.eq_factored = this.eq_factored.replace( _match[0], factored );
								}
								eq = eq.replace( _match[0], '' );
								break;
							}
						}	
					}
					
					this.eq_factored = $.trim( this.eq_factored );
					this.eq_factored = '('+this.eq_factored.replace( /([\D\b])(prec)([\D\b])/g, "$11*$2$3" ).replace( /;$/g)+')';
					
					return this.eq_factored;
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
					return '<div class="fields" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+this.predefined+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sEq").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.eq = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sEq").bind('blur', {obj: this}, function(e)
						{
							e.data.obj.eq_factorize();
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
		showAllSettings:function()
			{
				return this.showTitle()+this.showName()+this.showSize()+this.showLayout()+this.showFormat()+this.showRange()+this.showRequired()+this.showReadOnly()+this.showHideField()+this.showSpecialData()+this.showPredefined()+this.showEqEditor()+this.showDependencies()+this.showUserhelp()+this.showCsslayout();
			},
		showDependencies : function()
			{
				// Instance
				var me = this;

				function setOperator( indx, op )
				{
					var ops = [ 
								{'text' : 'Equal to', 'value' : '=='},
								{'text' : 'Different to', 'value' : '!='},
								{'text' : 'Greater than', 'value' : '>'},
								{'text' : 'Greater than or equal', 'value' : '>='},
								{'text' : 'Less than', 'value' : '<'},
								{'text' : 'Less than or equal', 'value' : '<='}
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
							r += '<div><div style="position:relative;"><span style="font-weight:bold;">If value</span><span class="cf_dependence_edition" i="'+i+'" ><input class="cf_dependence_rule" type="text" i="'+i+'" value="'+o.rule.replace(/"/g, '&quot;')+'" /><br></span><a class="addDep ui-icon ui-icon-circle-plus" i="'+i+'" title="Add another dependency."></a><a class="removeDep ui-icon ui-icon-circle-minus" i="'+i+'" title="Delete this dependency."></a><div style="text-align:right;position:relative;"><span style="float:left;">Ex: value==10</span><a href="#" class="displayWizard" i="'+i+'">Edit through wizard</a><br />(The rule entered will lost)</div></div>';
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

							r += '<div><div style="position:relative;"><span style="font-weight:bold;">If value</span><span class="cf_dependence_edition" i="'+i+'" >'+setOperator( i, operator )+' <input type="text" i="'+i+'" class="small cf_dependence_value" value="'+value.replace(/"/g, '&quot;')+'" /></span><a class="addDep ui-icon ui-icon-circle-plus" i="'+i+'" title="Add another dependency."></a><a class="removeDep ui-icon ui-icon-circle-minus" i="'+i+'" title="Delete this dependency."></a></div><div style="text-align:right;"><a i="'+i+'" class="displayComplexRule" href="#">Edit rule manually</a></div>';
						}

						r += '<div>';
						$.each( o.fields, function( j, v )
							{
								
								var opt = '<option value=""></option>';
								for (var k=0;k<items.length;k++)
								{
									if (items[k].name != me.name)
									{
										opt += '<option value="'+items[k].name+'" '+( ( items[k].name == v ) ? 'selected="SELECTED"' : '' )+'>'+items[k].title+'</option>';
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
		showEqEditor:function(eq)
			{
				var me    = this,
					tools = $.fbuilder[ 'objName' ]+'.fbuilder.controls.fCalculated.tools';
					
				$.fbuilder.controls[ 'fCalculated' ][ 'tools' ] = {
						setField : function()
							{
								this.setSymbol($('#sFieldList').val());
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
									$.fbuilder.reloadItems();
								}
							},
						setTip : function(e)
							{
								var tips = {
									"+":"",
									"-":"",
									"*":"",
									"/":"",
									"(":"",
									")":"",
									",":"",
									"abs":"Returns the absolute value of the number passed as parameter. <strong>abs(number)</strong>",
									"ceil":"Returns the next higher integer that is greater than or equal to the number passed as parameter. <strong>ceil(number)</strong>",
									"floor":"Returns the next lower integer that is less than or equal to the number passed as parameter. <strong>floor(number)</strong>",
									"round":"Returns an integer that follows rounding rules. If the value of the passed parameter is greater than or equal to x.5, the returned value is x+1; otherwise the returned value is x. <strong>round(number)</strong>",
									"prec":"Returns the value of the number passed in the first parameter with so many decimal digits as the number passed in the second parameter. <strong>prec(number1, number2)</strong>",
									"cdate":"Returns the number formated like a Date. <strong>cdate(number)</strong>",
									"log":"Returns the natural logarithm (base e) of the number passed as parameter. <strong>log(number)</strong>",
									"pow":"Returns the value of the first parameter raised to the power of the second parameter. <strong>pow(number1, number2)</strong>",
									"sqrt":"Returns the square root of the number passed as parameter. <strong>sqrt(number1, number2)</strong>",
									"max":"Returns the greater value of the two parameters. <strong>max(number1, number2)</strong>",
									"min":"Returns the lesser value of the two parameters. <strong>min(number1, number2)</strong>"
								};
								
								$('#sEqTipsContainer').html(tips[e]);
							}
					};
				
				var out = 	'<label>Set Equation</label><textarea class="large" name="sEq" id="sEq">'+this.eq+'</textarea>\
							<label>Operands</label><div style="float:right;"><a href="javascript:window.open(\'http://wordpress.dwbooster.com/includes/calculated-field/equations.html\', \'_blak\');">Read an equation tutorial</a></div><div style="border:1px dashed #888;">\
							<select id="sFieldList" style="width:260px;">'
				
				var items = this.fBuild.getItems();
				for(var i in items)
				{
					var item = items[i];
					if(item['name'] != this.name)
					{
						var fName = item['name'],
							fTitle = item['title'];

						fName = fName.replace(/'/g, "\'").replace(/"/g, '\"');
						out += '<option value="'+fName+'">'+item['name']+((item['title'] && !/^\s*$/.test(item['title'])) ? '('+item['title']+')' : '')+'</option>';
					}
				}
				out += '</select>\
						<input type="button" value="+" class="eq_btn" onclick="'+tools+'.setField();" />\
						</div>\
						<label>Operators</label><div style="border:1px dashed #888;text-align:center;">\
						<input type="button" value="+"     onclick="'+tools+'.setSymbol(\'+\');'+tools+'.setTip(\'+\');" class="eq_btn" />\
						<input type="button" value="-"     onclick="'+tools+'.setSymbol(\'-\');'+tools+'.setTip(\'-\');" class="eq_btn" />\
						<input type="button" value="*"     onclick="'+tools+'.setSymbol(\'*\');'+tools+'.setTip(\'*\');" class="eq_btn" />\
						<input type="button" value="/"     onclick="'+tools+'.setSymbol(\'/\');'+tools+'.setTip(\'/\');" class="eq_btn" />\
						<input type="button" value="("     onclick="'+tools+'.setSymbol(\'(\');'+tools+'.setTip(\'(\');" class="eq_btn" />\
						<input type="button" value=")" 	   onclick="'+tools+'.setSymbol(\')\');'+tools+'.setTip(\')\');" class="eq_btn" /><br />\
						<input type="button" value=","     onclick="'+tools+'.setSymbol(\',\');'+tools+'.setTip(\',\');" class="eq_btn" />\
						<input type="button" value="abs"   onclick="'+tools+'.setSymbol(\'abs(\');'+tools+'.setTip(\'abs\');" class="eq_btn" />\
						<input type="button" value="ceil"  onclick="'+tools+'.setSymbol(\'ceil(\');'+tools+'.setTip(\'ceil\');" class="eq_btn" />\
						<input type="button" value="floor" onclick="'+tools+'.setSymbol(\'floor(\');'+tools+'.setTip(\'floor\');" class="eq_btn" />\
						<input type="button" value="round" onclick="'+tools+'.setSymbol(\'round(\');'+tools+'.setTip(\'round\');" class="eq_btn" />\
						<input type="button" value="prec"  onclick="'+tools+'.setSymbol(\'prec(\');'+tools+'.setTip(\'prec\');" class="eq_btn" /><br />\
						<input type="button" value="log"   onclick="'+tools+'.setSymbol(\'log(\');'+tools+'.setTip(\'log\');" class="eq_btn" />\
						<input type="button" value="pow"   onclick="'+tools+'.setSymbol(\'pow(\');'+tools+'.setTip(\'pow\');" class="eq_btn" />\
						<input type="button" value="sqrt"  onclick="'+tools+'.setSymbol(\'sqrt(\');'+tools+'.setTip(\'sqrt\');" class="eq_btn" />\
						<input type="button" value="max"   onclick="'+tools+'.setSymbol(\'max(\');'+tools+'.setTip(\'max\');" class="eq_btn" />\
						<input type="button" value="min"   onclick="'+tools+'.setSymbol(\'min(\');'+tools+'.setTip(\'min\');" class="eq_btn" />\
						<input type="button" value="cdate" onclick="'+tools+'.setSymbol(\'cdate(\');'+tools+'.setTip(\'cdate\');" class="eq_btn" /><br />\
						</div>\
						<div id="sEqTipsContainer" style="padding:5px;"></div>\
						<label>Symbol to display at beginning of calculated field</label><input type="text" name="sPrefix" id="sPrefix" class="large" value="'+this.prefix+'" />\
						<label>Symbol to display at the end of calculated field</label><input type="text" name="sSuffix" id="sSuffix" class="large" value="'+this.suffix+'" />\
						<label>Decimals separator symbol (Ex: 25.20)</label><input type="text" name="sDecimalSymbol" id="sDecimalSymbol" class="large" value="'+this.decimalsymbol+'" />\
						<label>Symbol for grouping thousands (Ex: 3,000,000)</label><input type="text" name="sGroupingSymbol" id="sGroupingSymbol" class="large" value="'+this.groupingsymbol+'" />';

				return out;
			}
	});