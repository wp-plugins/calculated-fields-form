		$.fbuilder.typeList.push(
			{
				id:"fnumber",
				name:"Number",
				control_category:{ 
					id:1, 
					title:"Form Controls"
				}
			}
		);
        $.fbuilder.controls[ 'fnumber' ] = function(){};
		$.extend(
			$.fbuilder.controls[ 'fnumber' ].prototype, 
			$.fbuilder.controls[ 'ffields' ].prototype,
			{
				title:"Number",
				ftype:"fnumber",
				predefined:"",
				predefinedClick:false,
				required:false,
				size:"small",
				min:"",
				max:"",
				dformat:"digits",
				formats:new Array("digits","number"),
				display:function()
					{
						return '<div class="fields" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
					},
				editItemEvents:function()
					{
						$("#sSize").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.size = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sFormat").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.dformat = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sMin").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.min = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sMax").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.max = $(this).val();
								$.fbuilder.reloadItems();
							});
						$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
					},
				showFormatIntance: function() 
					{
						var str = "";
						for (var i=0;i<this.formats.length;i++)
							str += '<option value="'+this.formats[i]+'" '+((this.formats[i]==this.dformat)?"selected":"")+'>'+this.formats[i]+'</option>';
						return '<div><label>Number Format</label><br /><select name="sFormat" id="sFormat">'+str+'</select></div>';
					},
				showRangeIntance: function() 
					{
						return '<div class="column"><label>Min</label><br /><input name="sMin" id="sMin" value="'+this.min+'"></div><div class="column"><label>Max</label><br /><input name="sMax" id="sMax" value="'+this.max+'"></div><div class="clearer"></div>';
					}
		});