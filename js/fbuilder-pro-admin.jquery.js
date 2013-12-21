	$.fbuilder[ 'typeList' ] = [];
	$.fbuilder[ 'controls' ] = {};
	$.fbuilder[ 'htmlEncode' ] = function(value)
	{
		value = $('<div/>').text(value).html()
		value = value.replace(/"/g, "&quot;");
		return value;
	};
	
	// fbuilder plugin
	$.fn.fbuilder = function(options){
		var opt = $.extend({},
				{
	   				pub:false,
					identifier:"",
					title:""
				},
				options, true),
			typeList = 	$.fbuilder.typeList;
				
		$.fbuilder[ 'getNameByIdFromType' ] = function( id )
			{
				for ( var i = 0, h = typeList.length; i < h; i++ )
				{
					if ( typeList[i].id == id )
					{
						return  typeList[i].name;
					}	
				}		
				return "";
			}
		
		for ( var i=0, h = typeList.length; i < h; i++ )
		{
			$("#tabs-1").append('<div class="button itemForm width40" id="'+typeList[i].id+'">'+typeList[i].name+'</div>');
		}
		
		$("#tabs-1").append('<div class="clearer"></div>');
		$( ".button").button();
		
		// Create a items object
		var items = [],
			selected = -3;
			
		$.fbuilder[ 'editItem' ] = function( id ) 
			{		    
				$('#tabs').tabs("option", "active", 1);
				try 
				{ 
					$('#tabs-2').html( items[id].showAllSettings() ); 
				} catch (e) {}
				selected = id;
				items[id].editItemEvents();
			};
			
		$.fbuilder[ 'removeItem' ] = function( index ) 
			{
				items.splice(index,1);
				for ( var i=0, h = items.length; i<h; i++ )
				{
					items[i].index = i;
				}
				
				$('#tabs').tabs("option", "active", 0);
				$.fbuilder.reloadItems();
			};
			
		$.fbuilder[ 'duplicateItem' ] = function( index ) 
			{
				var n = 0;
				for ( var i=0, h = items.length; i<h; i++ )
				{
				   n1 = parseInt( items[i].name.replace( /fieldname/g,"" ) );
				   if (n1>n)
					   n = n1;
				}
				items.splice( index+1, 0, $.extend( true, {}, items[index], { name:"fieldname"+(n+1) } ) );
				for ( var i=0, h = items.length; i<h; i++ )
				{
					items[i].index = i;
				}	
				$('#tabs').tabs("option", "active", 0);
				$.fbuilder.reloadItems();
			}
		
		$.fbuilder[ 'editForm' ] = function() 
			{
				$('#tabs-3').html(theForm.showAllSettings());
				selected = -1;
				$("#fTitle").keyup(function()
				{
					theForm.title = $(this).val();
					$.fbuilder.reloadItems();
				});
				
				$("#fDescription").keyup(function()
				{
					theForm.description = $(this).val();
					$.fbuilder.reloadItems();
				});
				
				$("#fLayout").change(function()
				{
					theForm.formlayout = $(this).val();
					$.fbuilder.reloadItems();
				});
			};
		
		$.fbuilder[ 'reloadItems' ] = function() 
			{
				for ( var i=0, h = $.fbuilder.showSettings.formlayoutList.length; i < h; i++ )
				{
					$("#fieldlist"+opt.identifier).removeClass( $.fbuilder.showSettings.formlayoutList[i].id );
				}	
				$("#fieldlist"+opt.identifier).addClass(theForm.formlayout);
				$("#formheader"+opt.identifier).html(theForm.display());
				$("#fieldlist"+opt.identifier).html("");
				if ( parseInt( selected ) == -1 )
				{
					$(".fform").addClass("ui-selected");
				}
				else
				{
					$(".fform").removeClass("ui-selected");
				}
				
				for ( var i=0, h = items.length; i < h; i++ )
				{
					items[i].index = i;
					$("#fieldlist"+opt.identifier).append(items[i].display());
					if ( i == selected )
					{
						$("#field"+opt.identifier+"-"+i).addClass("ui-selected");
					}	
					else
					{
						$("#field"+opt.identifier+"-"+i).removeClass("ui-selected");
					}	
					$("#field"+opt.identifier+"-"+i+" .remove").click(function()
						{
							$.fbuilder[ 'removeItem' ]($(this).parent().attr("id").replace("field"+opt.identifier+"-",""));
						});
						
					$("#field"+opt.identifier+"-"+i+" .copy").click(function()
						{
							$.fbuilder[ 'duplicateItem' ]($(this).parent().attr("id").replace("field"+opt.identifier+"-",""));
						});
						
				}
				if (items.length>0)
				{
				    $(".fields").mouseover(function() 
						{
							$(this).addClass("ui-over");
						})
						.mouseout(function()
						{
							$(this).removeClass("ui-over")
						})
						.click(function()
						{
							$.fbuilder[ 'editItem' ]($(this).attr("id").replace("field"+opt.identifier+"-",""));
							$(this).siblings().removeClass("ui-selected");
							$(this).addClass("ui-selected");
						});
					$(".field").focus(function()
						{
							$(this).blur();
						});	
				}
				if ($("#fieldlist"+opt.identifier).html() == "")
				{
					$("#saveForm").css("display","none");
				}	
				else
				{
					$("#saveForm").css("display","none"); // changed "inline" to "none"
				}
				
				$(".fform").mouseover(function() 
					{
						$(this).addClass("ui-over");
					})
					.mouseout(function()
					{
						$(this).removeClass("ui-over");
					})
					.click(function(){
						$('#tabs').tabs("option", "active", 2);
						$.fbuilder.editForm();
						$(this).siblings().removeClass("ui-selected");
						$(this).addClass("ui-selected");
					});
					
				ffunct.saveData("form_structure");
				
				//email list
				var str = "";
				for ( var i=0, h = items.length; i < h; i++ )
				{
					var item = items[ i ];
					if (item.ftype=="femail")
					{
						str += '<option value="'+item.name+'" '+((item.name == $('#cu_user_email_field').attr("def"))?"selected":"")+'>'+(item.title)+'</option>';
					}
				}
				
				$('#cu_user_email_field').html(str);
				//field list for paypal request
				if (($('#request_cost').length > 0) && ($('#request_cost').is('select')))
				{
					var str = "";
					for (var i=0, h = items.length; i<h; i++)
					{
						var item = items[ i ];
						str += '<option value="'+item.name+'" '+((item.name == $('#request_cost').attr("def"))?"selected":"")+'>'+item.name+'('+(item.title)+')</option>';
					}	
					$('#request_cost').html(str);
				}
				
				//request amount list
				if ($('#paypal_price_field').length > 0)
				{
					var str = '<option value="" '+(('' == $('#paypal_price_field').attr("def"))?"selected":"")+'> ---- No ---- </option>';
					for (var i=0, h = items.length; i < h; i++)
					{
						var item = items[ i ];
						str += '<option value="'+item.name+'" '+((item.name == $('#paypal_price_field').attr("def"))?"selected":"")+'>'+(item.title)+'</option>';
					}		
					$('#paypal_price_field').html(str);
				}
			};
		
		var fform=function(){};
		$.extend(fform.prototype,
			{
				title:"Untitled Form",
				description:"This is my form. Please fill it out. It's awesome!",
				formlayout:"top_aligned",
				display:function()
				{
					return '<div class="fform" id="field"><div class="arrow ui-icon ui-icon-play "></div><h1>'+this.title+'</h1><span>'+this.description+'</span></div>';
				},
				
				showAllSettings:function()
				{
					var str = "";
					for (var i=0;i< $.fbuilder.showSettings.formlayoutList.length;i++)
					{
						str += '<option value="'+$.fbuilder.showSettings.formlayoutList[i].id+'" '+(($.fbuilder.showSettings.formlayoutList[i].id==this.formlayout)?"selected":"")+'>'+$.fbuilder.showSettings.formlayoutList[i].name+'</option>';
					}	
					return '<div><label>Form Name</label><input class="large" name="fTitle" id="fTitle" value="'+$.fbuilder.htmlEncode(this.title)+'" /></div><div><label>Description</label><textarea class="large" name="fDescription" id="fDescription">'+this.description+'</textarea></div><div><label>Label Placement</label><br /><select name="fLayout" id="fLayout">'+str+'</select></div>';
				}
			}
		);
		
		var theForm = new fform();
		$("#fieldlist"+opt.identifier).sortable(
			{
			    start: function(event, ui) 
				{
				   var start_pos = ui.item.index();
				   ui.item.data('start_pos', start_pos);
			    },
			    stop: function(event, ui) 
				{
				    var end_pos = parseInt(ui.item.index()),
						start_pos = parseInt(ui.item.data('start_pos')),
						tmp = items[start_pos];
						
				    if (end_pos > start_pos)
				    {
					    for (var i = start_pos; i<end_pos; i++)
						{
						   items[i] = items[i+1];
						}   
				   }
				   else
				   {
					    for (var i = start_pos; i > end_pos; i--)
					    {
						   items[i] = items[i-1];
						}   
				   }
				   items[end_pos] = tmp;
				   $.fbuilder.reloadItems();
			    }
			}   
		);
		
		$('#tabs').tabs(
			{
				activate: function(event, ui) 
					{
					   if ($(this).tabs( "option", "active" )!=1)
					   {
							$(".fields").removeClass("ui-selected");
							selected = -2;
							if ($(this).tabs( "option", "active" )==2)
							{
							   $(".fform").addClass("ui-selected");
							   $.fbuilder.editForm();
							}
							else
							{
							   $(".fform").removeClass("ui-selected");
							} 
					   }
					   else
					   {
							$(".fform").removeClass("ui-selected");
							if (selected < 0)
							{
							   $('#tabs-2').html('<b>No Field Selected</b><br />Please click on a field in the form preview on the right to change its properties.');
							}   
					   }
					}	   
			}		
		);
		
	    var ffunct = {
	        getItems: function() 
			{
			   return items;
		    },
		    addItem: function(id) 
			{
			    var obj = eval("new $.fbuilder.controls['"+id+"']();"),
					fBuild = this,
					n = 0;
			    
				obj.init();
			    
			    for (var i=0, h = items.length; i < h; i++)
			    {
		 		    n1 = parseInt(items[i].name.replace(/fieldname/g,""));
	 			    if (n1>n)
					{
					   n = n1;
					}   
 			    }
				obj.fBuild = fBuild;
			    $.extend(obj,{name:"fieldname"+(n+1)});
			    items[items.length] = obj;
			    $.fbuilder.reloadItems();
		    },
		    saveData:function(f)
			{
			   $("#"+f).val("["+ $.stringifyXX( items, false )+",["+ $.stringifyXX(theForm,false)+"]]");
		    },
		    loadData:function(f)
			{
		        var d, // JSON data
					json_str = $("#"+f).val(),
					fBuild = this;
					
			    if ( d = $.parseJSON( json_str ) )
				{
					if (d.length==2)
					{
						items = [];
						for (var i=0;i<d[0].length;i++)
						{
						   var obj = eval("new $.fbuilder.controls['"+d[0][i].ftype+"']();");
						   obj = $.extend(obj,d[0][i]);
						   obj.name = obj.name+opt.identifier;
						   obj.form_identifier = opt.identifier;
						   obj.fBuild = fBuild;
						   items[items.length] = obj;
						}
						theForm = new fform();
						theForm = $.extend(theForm,d[1][0]);
						$.fbuilder.reloadItems();
					}
				}
		    },
		    removeItem: $.fbuilder[ 'removeItem' ],
		    editItem:   $.fbuilder[ 'editItem' ]
	    }
	   
	    this.fBuild = ffunct;
	    return this;
	};

    $.fbuilder[ 'showSettings' ] = {
		sizeList:new Array({id:"small",name:"Small"},{id:"medium",name:"Medium"},{id:"large",name:"Large"}),
		layoutList:new Array({id:"one_column",name:"One Column"},{id:"two_column",name:"Two Column"},{id:"three_column",name:"Three Column"},{id:"side_by_side",name:"Side by Side"}),
		formlayoutList:new Array({id:"top_aligned",name:"Top Aligned"},{id:"left_aligned",name:"Left Aligned"},{id:"right_aligned",name:"Right Aligned"}),
		showTitle: function(f,v) 
		{
			var str = '<label>Field Label</label><textarea class="large" name="sTitle" id="sTitle">'+v+'</textarea>';
			if (v=="Page Break") str = "";
			return '<label>Field Type: '+$.fbuilder[ 'getNameByIdFromType' ](f)+'</label><br /><br />'+str;
		},
		showName: function(v1,v2) 
		{
			return '<div><label>Short label (optional) [<a class="helpfbuilder" text="The short label is used at title for the column when exporting the form data to CSV files.\n\nIf the short label is empty then, the field label will be used for the CSV file.">help?</a>] :</label><input class="large" name="sShortlabel" id="sShortlabel" value="'+v2+'" /></div>'+
				   '<div><label>Field tag for the message (optional):</label><input readonly="readonly" class="large" name="sNametag" id="sNametag" value="&lt;%'+v1+'%&gt;" />'+
				   '<input style="display:none" readonly="readonly" class="large" name="sName" id="sName" value="'+v1+'" /></div>';
		},
		showPredefined: function(v,c) 
		{
			return '<div><label>Predefined Value</label><textarea class="large" name="sPredefined" id="sPredefined">'+v+'</textarea><br /><input type="checkbox" name="sPredefinedClick" id="sPredefinedClick" '+((c)?"checked":"")+' value="1" > Hide predefined value on click.</div>';
		},
		showEqualTo: function(v,name) 
		{
			return '<div><label>Equal to [<a class="helpfbuilder" text="Use this field to create password confirmation field or email confirmation fields.\n\nSpecify this setting ONLY into the confirmation field, not in the original field.">help?</a>]</label><br /><select class="equalTo" name="sEqualTo" id="sEqualTo" dvalue="'+v+'" dname="'+name+'"></select></div>';
		},
		showRequired: function(v) 
		{
			return '<div><input type="checkbox" name="sRequired" id="sRequired" '+((v)?"checked":"")+'><label>Required</label></div>';
		},
		showSize: function(v) 
		{
			var str = "";
			for (var i=0;i<this.sizeList.length;i++)
			{
				str += '<option value="'+this.sizeList[i].id+'" '+((this.sizeList[i].id==v)?"selected":"")+'>'+this.sizeList[i].name+'</option>';
			}	
			return '<label>Field Size</label><br /><select name="sSize" id="sSize">'+str+'</select>';
		},
		showLayout: function(v) 
		{
			var str = "";
			for (var i=0;i<this.layoutList.length;i++)
			{
				str += '<option value="'+this.layoutList[i].id+'" '+((this.layoutList[i].id==v)?"selected":"")+'>'+this.layoutList[i].name+'</option>';
			}	
			return '<label>Field Layout</label><br /><select name="sLayout" id="sLayout">'+str+'</select>';
		},
		showUserhelp: function(v,c) 
		{
			return '<div><label>Instructions for User</label><textarea class="large" name="sUserhelp" id="sUserhelp">'+v+'</textarea><br /><input type="checkbox" name="sUserhelpTooltip" id="sUserhelpTooltip" '+((c)?"checked":"")+' value="1" > Show as floating tooltip.</div>';
		},
		showCsslayout: function(v) 
		{
			return '<label>Add Css Layout Keywords</label><input class="large" name="sCsslayout" id="sCsslayout" value="'+v+'" />';
		}
	};
	
	$.fbuilder.controls[ 'ffields' ] = function(){};
	$.extend( $.fbuilder.controls[ 'ffields' ].prototype, 
		{
			form_identifier:"",
			name:"",
			shortlabel:"",
			index:-1,
			ftype:"",
			userhelp:"",
			userhelpTooltip:false,
			csslayout:"",
			init:function(){},
			editItemEvents:function()
			{
				$("#sTitle").bind("keyup", {obj: this}, function(e) 
					{
						var str = $(this).val();
						e.data.obj.title = str.replace(/\n/g,"<br />");
						$.fbuilder.reloadItems();
					});
					
				$("#sShortlabel").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.shortlabel = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$("#sPredefined").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.predefined = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$("#sPredefinedClick").bind("click", {obj: this}, function(e) 
					{
						e.data.obj.predefinedClick = $(this).is(':checked');
						$.fbuilder.reloadItems();
					});
					
				$("#sRequired").bind("click", {obj: this}, function(e) 
					{
						e.data.obj.required = $(this).is(':checked');
						$.fbuilder.reloadItems();
					});
					
				$("#sUserhelp").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.userhelp = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$("#sUserhelpTooltip").bind("click", {obj: this}, function(e) 
					{
						e.data.obj.userhelpTooltip = $(this).is(':checked');
						$.fbuilder.reloadItems();
					});
					
				$("#sCsslayout").bind("keyup", {obj: this}, function(e) 
					{
						e.data.obj.csslayout = $(this).val();
						$.fbuilder.reloadItems();
					});
					
				$(".helpfbuilder").click(function()
					{
						alert($(this).attr("text"));
					});
			},
			
			showSpecialData:function()
			{
				if(typeof this.showSpecialDataInstance != 'undefined')
				{
					return this.showSpecialDataInstance();
				}	
				else
				{
					return "";
				}	
			},
			
			showEqualTo:function()
			{
				if(typeof this.equalTo != 'undefined')
				{
					return $.fbuilder.showSettings.showEqualTo(this.equalTo,this.name);
				}	
				else
				{
					return "";
				}	
			},
			
			showPredefined:function()
			{
				if(typeof this.predefined != 'undefined')
				{
					return $.fbuilder.showSettings.showPredefined(this.predefined,this.predefinedClick);
				}	
				else
				{
					return "";
				}	
			},
			
			showRequired:function()
			{
				if(typeof this.required != 'undefined')
				{
					return $.fbuilder.showSettings.showRequired(this.required);
				}	
				else
				{
					return "";
				}	
			},
			
			showSize:function()
			{
				if(typeof this.size != 'undefined')
				{
					return $.fbuilder.showSettings.showSize(this.size);
				}	
				else
				{
					return "";
				}	
			},
			
			showLayout:function()
			{
				if(typeof this.layout != 'undefined')
				{
					return $.fbuilder.showSettings.showLayout(this.layout);
				}	
				else
				{
					return "";
				}	
			},
			
			showRange:function()
			{
				if(typeof this.min != 'undefined')
				{
					return this.showRangeIntance();
				}	
				else
				{
					return "";
				}	
			},
			
			showFormat:function()
			{
				if(typeof this.dformat != 'undefined')
				{
					try 
					{
						return this.showFormatIntance();
					} catch(e) {return "";}
				}	
				else
				{
					return "";
				}	
			},
			
			showChoice:function()
			{
				if(typeof this.choices != 'undefined')
				{
					return this.showChoiceIntance();
				}	
				else
				{
					return "";
				}	
			},
			
			showUserhelp:function()
			{
				return ((this.ftype!="fPageBreak") ? $.fbuilder.showSettings.showUserhelp(this.userhelp,this.userhelpTooltip) : "");
			},
			
			showCsslayout:function()
			{
				return ((this.ftype!="fPageBreak") ? $.fbuilder.showSettings.showCsslayout(this.csslayout) : "");
			},
			
			showAllSettings:function()
			{
				return this.showTitle()+this.showName()+this.showSize()+this.showLayout()+this.showFormat()+this.showRange()+this.showRequired()+this.showSpecialData()+this.showEqualTo()+this.showPredefined()+this.showChoice()+this.showUserhelp()+this.showCsslayout();
			},
			
			showTitle:function()
			{
				return $.fbuilder.showSettings.showTitle(this.ftype,this.title);
			},
			
			showName:function()
			{
				return ((this.ftype!="fPageBreak") ? $.fbuilder.showSettings.showName(this.name,this.shortlabel) : "");
			},
			
			display:function()
			{
				return 'Not available yet';
			},
			
			show:function(){
				return 'Not available yet';
			}
		}
	);