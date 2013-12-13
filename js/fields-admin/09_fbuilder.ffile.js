	$.fbuilder.typeList.push({id:"ffile",name:"Upload File"});
	$.fbuilder.controls[ 'ffile' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'ffile' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"ffile",
			required:false,
			size:"medium",
			display:function()
				{
					return '<div class="fields" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input type="file" class="field disabled '+this.size+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sSize").bind("change", {obj: this}, function(e) {
						e.data.obj.size = $(this).val();
						$.fbuilder.reloadItems();
					});
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				}
	});