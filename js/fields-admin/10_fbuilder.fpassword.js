	$.fbuilder.typeList.push(
		{
			id:"fpassword",
			name:"Password",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fpassword' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'fpassword' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"fpassword",
			predefined:"",
			predefinedClick:false,
			required:false,
			size:"medium",
			minlength:"",
			maxlength:"",
			equalTo:"",
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="password" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sSize").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.size = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sMinlength").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.minlength = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sMaxlength").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.maxlength = $(this).val();
							$.fbuilder.reloadItems();
						});
					$("#sEqualTo").bind("change", {obj: this}, function(e) 
						{
							e.data.obj.equalTo = $(this).val();
							$.fbuilder.reloadItems();
						});
					var items = this.fBuild.getItems();
					$('.equalTo').each(function()
						{
							var str = '<option value="" '+(("" == $(this).attr("dvalue"))?"selected":"")+'></option>';
							for (var i=0;i<items.length;i++)
							{
								if ((items[i].ftype=="ftext" || items[i].ftype=="femail" || items[i].ftype=="fpassword") && (items[i].name != $(this).attr("dname")))
								{
									str += '<option value="'+items[i].name+'" '+((items[i].name == $(this).attr("dvalue"))?"selected":"")+'>'+(items[i].title)+'</option>';
								}
							}	
							$(this).html(str);
						}); 				    
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
			showSpecialDataInstance: function() 
				{
					return '<div class="column"><label>Min length/characters</label><br /><input name="sMinlength" id="sMinlength" value="'+this.minlength+'"></div><div class="column"><label>Max length/characters</label><br /><input name="sMaxlength" id="sMaxlength" value="'+this.maxlength+'"></div><div class="clearer"></div>';
				}
	});