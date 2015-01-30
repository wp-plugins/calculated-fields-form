	$.fbuilder.typeList.push(
		{
			id:"fdropdown",
			name:"Dropdown",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fdropdown' ] = function(){};
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
			display:function()
				{
					this.choicesVal = ((typeof(this.choicesVal) != "undefined" && this.choicesVal !== null)?this.choicesVal:this.choices.slice(0));
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><select class="field disabled '+this.size+'" ><option>'+this.choiceSelected+'</option></select><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$(".choice_text").bind("keyup", {obj: this}, function(e) 
						{
							if (e.data.obj.choices[$(this).attr("i")] == e.data.obj.choicesVal[$(this).attr("i")])
							{
								$("#"+$(this).attr("id")+"V"+$(this).attr("i")).val($(this).val());
								e.data.obj.choicesVal[$(this).attr("i")]= $(this).val();
							}
							e.data.obj.choices[$(this).attr("i")]= $(this).val();
							$.fbuilder.reloadItems();
						});
					$(".choice_value").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.choicesVal[$(this).attr("i")]= $(this).val();
							$.fbuilder.reloadItems();
						});
					
					$(".choice_select").bind("click", {obj: this}, function(e) 
						{
							var i = $(this).attr("i");
							if ($(this).is(':checked'))
							{
								e.data.obj.choiceSelected = e.data.obj.choices[i] + ' - ' + e.data.obj.choicesVal[i];
							}	
							$.fbuilder.reloadItems();
						});
					$("#sSize").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.size = $(this).val();
							$.fbuilder.reloadItems();
						});
					$(".choice_up").bind("click", {obj: this}, function(e) 
						{
							var i = $(this).attr("i")*1;
							if (i!=0)
							{
								e.data.obj.choices.splice(i-1, 0, e.data.obj.choices.splice(i, 1)[0]);
								e.data.obj.choicesVal.splice(i-1, 0, e.data.obj.choicesVal.splice(i, 1)[0]);
								e.data.obj.choicesDep.splice(i-1, 0, e.data.obj.choicesDep.splice(i, 1)[0]);
							}
							$.fbuilder.editItem(e.data.obj.index);
							$.fbuilder.reloadItems();
						});
					$(".choice_down").bind("click", {obj: this}, function(e) 
						{
							var i = $(this).attr("i")*1;
							var n = $(this).attr("n")*1;
							if (i!=n)
							{
								e.data.obj.choices.splice(i, 0, e.data.obj.choices.splice(i+1, 1)[0]);
								e.data.obj.choicesVal.splice(i, 0, e.data.obj.choicesVal.splice(i+1, 1)[0]);
								e.data.obj.choicesDep.splice(i, 0, e.data.obj.choicesDep.splice(i+1, 1)[0]);
							}
							$.fbuilder.editItem(e.data.obj.index);
							$.fbuilder.reloadItems();
						});
					$(".choice_removeDep").bind("click", {obj: this}, function(e) 
						{
							if (e.data.obj.choices.length==1)
							{
								e.data.obj.choicesDep[$(this).attr("i")][0]="";
							}	
							else
							{
								e.data.obj.choicesDep[$(this).attr("i")].splice($(this).attr("j"),1);
							}	
							$.fbuilder.editItem(e.data.obj.index);
							$.fbuilder.reloadItems();
						});
					$(".choice_addDep").bind("click", {obj: this}, function(e) 
						{
							e.data.obj.choicesDep[$(this).attr("i")].splice($(this).attr("j")*1+1,0,"");
							$.fbuilder.editItem(e.data.obj.index);
							$.fbuilder.reloadItems();
						});
					$(".choice_remove").bind("click", {obj: this}, function(e) 
						{
							var i = $(this).attr("i");
							
							if( e.data.obj.choices[ i ] + ' - ' + e.data.obj.choicesVal[ i ] == e.data.obj.choiceSelected )
							{
								e.data.obj.choiceSelected = "";
							}
								
							if (e.data.obj.choices.length==1)
							{
								e.data.obj.choices[0]="";
								e.data.obj.choicesVal[0]="";
								e.data.obj.choicesDep[0]=new Array();
							}
							else
							{
								e.data.obj.choices.splice( i, 1 );
								e.data.obj.choicesVal.splice( i, 1 );
								e.data.obj.choicesDep.splice( i, 1 );
							}
							
							$.fbuilder.editItem(e.data.obj.index);
							$.fbuilder.reloadItems();
						});
					$(".choice_add").bind("click", {obj: this}, function(e) 
						{
							e.data.obj.choices.splice($(this).attr("i")*1+1,0,"");
							e.data.obj.choicesVal.splice($(this).attr("i")*1+1,0,"");
							e.data.obj.choicesDep.splice($(this).attr("i")*1+1,0,new Array());
							$.fbuilder.editItem(e.data.obj.index);
							$.fbuilder.reloadItems();
						});
					$(".showHideDependencies").bind("click", {obj: this}, function(e) 
						{
							if (e.data.obj.showDep)
							{
								$(this).parent().removeClass("show");
								$(this).parent().addClass("hide");
								$(this).html("Show Dependencies");
								e.data.obj.showDep = false;
							}
							else
							{
								$(this).parent().addClass("show");
								$(this).parent().removeClass("hide");
								$(this).html("Hide Dependencies");
								e.data.obj.showDep = true;
							}
							return false;
						});
					$('.dependencies').bind("change", {obj: this}, function(e) 
						{
							e.data.obj.choicesDep[$(this).attr("i")][$(this).attr("j")] = $(this).val();
							$.fbuilder.reloadItems();
						});
					var items = this.fBuild.getItems();
					$('.dependencies').each(function()
						{
							var str = '<option value="" '+(("" == $(this).attr("dvalue"))?"selected":"")+'></option>';
							for (var i=0;i<items.length;i++)
							{
								if (items[i].name != $(this).attr("dname"))
								{
									str += '<option value="'+items[i].name+'" '+((items[i].name == $(this).attr("dvalue"))?"selected":"")+'>'+(items[i].name)+( ( typeof items[ i ].title != 'undefined' ) ? ' (' + items[ i ].title + ')' : '' )+'</option>';
								}
							}	
							$(this).html(str);
						});
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
			showChoiceIntance: function() 
				{
					this.choicesVal = ((typeof(this.choicesVal) != "undefined" && this.choicesVal !== null)?this.choicesVal:this.choices.slice(0));
					var l = this.choices;
					var lv = this.choicesVal;
					if (!(typeof(this.choicesDep) != "undefined" && this.choicesDep !== null))
					{
						this.choicesDep = new Array();
						for (var i=0;i<l.length;i++)
						{
							this.choicesDep[i] = new Array();
						}	
					}
					var d = this.choicesDep;
					var str = "";
					for (var i=0;i<l.length;i++)
					{
						str += '<div class="choicesEdit"><input class="choice_select" i="'+i+'" type="radio" '+((this.choiceSelected==l[i]+' - '+lv[i])?"checked":"")+' name="choice_select" /><input class="choice_text" i="'+i+'" type="text" name="sChoice'+this.name+'" id="sChoice'+this.name+'" value="'+$.fbuilder.htmlEncode(l[i])+'"/><input class="choice_value" i="'+i+'" type="text" name="sChoice'+this.name+'V'+i+'" id="sChoice'+this.name+'V'+i+'" value="'+$.fbuilder.htmlEncode(lv[i])+'"/><a class="choice_down ui-icon ui-icon-arrowthick-1-s" i="'+i+'" n="'+(l.length-1)+'" title="Down"></a><a class="choice_up ui-icon ui-icon-arrowthick-1-n" i="'+i+'" title="Up"></a><a class="choice_add ui-icon ui-icon-circle-plus" i="'+i+'" title="Add another choice."></a><a class="choice_remove ui-icon ui-icon-circle-minus" i="'+i+'" title="Delete this choice."></a></div>';
						for (var j=0;j<d[i].length;j++)
						{
							str += '<div class="choicesEditDep">If selected show: <select class="dependencies" i="'+i+'" j="'+j+'" dname="'+this.name+'" dvalue="'+d[i][j]+'" ></select><a class="choice_addDep ui-icon ui-icon-circle-plus" i="'+i+'" j="'+j+'" title="Add another dependency."></a><a class="choice_removeDep ui-icon ui-icon-circle-minus" i="'+i+'" j="'+j+'" title="Delete this dependency."></a></div>';
						}	
						if (d[i].length==0)
						{
							str += '<div class="choicesEditDep">If selected show: <select class="dependencies" i="'+i+'" j="'+d[i].length+'" dname="'+this.name+'" dvalue="" ></select><a class="choice_addDep ui-icon ui-icon-circle-plus" i="'+i+'" j="'+d[i].length+'" title="Add another dependency."></a><a class="choice_removeDep ui-icon ui-icon-circle-minus" i="'+i+'" j="'+d[i].length+'" title="Delete this dependency."></a></div>';
						}	
					}
					return '<div class="choicesSet '+((this.showDep)?"show":"hide")+'"><label>Choices</label> <a class="helpfbuilder dep" text="Dependencies are used to show/hide other fields depending of the option selected in this field.">help?</a> <a href="" class="showHideDependencies">'+((this.showDep)?"Hide":"Show")+' Dependencies</a><div><div class="t">Text</div><div class="t">Value</div><div class="clearer"></div></div>'+str+'</div>';
				}
	});