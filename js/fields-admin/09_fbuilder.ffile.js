	$.fbuilder.typeList.push(
		{
			id:"ffile",
			name:"Upload File",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'ffile' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'ffile' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"ffile",
			required:false,
			size:"medium",
			accept:"",
			upload_size:"",
			multiple:false,
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input type="file" class="field disabled '+this.size+'" /><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sSize").bind("change", {obj: this}, function(e) {
						e.data.obj.size = $(this).val();
						$.fbuilder.reloadItems();
					});
					$("#sAccept").bind("change", {obj: this}, function(e) {
						e.data.obj.accept = $(this).val();
						$.fbuilder.reloadItems();
					});
					$("#sUpload_size").bind("change", {obj: this}, function(e) {
						e.data.obj.upload_size = $(this).val();
						$.fbuilder.reloadItems();
					});
					$("#sMultiple").bind("click", {obj: this}, function(e) {
						e.data.obj.multiple = $(this).is( ":checked" );
						$.fbuilder.reloadItems();
					});
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
			showSpecialDataInstance: function() 
				{
					return '<div><label>Accept these file extensions [<a class="helpfbuilder" text="Extensions comma separated and without the dot.\n\nExample: jpg,png,gif,pdf">help?</a>]</label><br /><input name="sAccept" id="sAccept" value="'+this.accept+'"></div><div><label>Maximun upload size in kB [<a class="helpfbuilder" text="1024 kB = 1 MB.\n\nThe support for this HTML5 feature may be partially available or not available in some browsers.">help?</a>]</label><br /><input name="sUpload_size" id="sUpload_size" value="'+this.upload_size+'"></div><div><label><input type="checkbox" id="sMultiple" name="sMultiple" '+( ( typeof this.multiple != 'undefined' && this.multiple ) ? 'CHECKED' : '' )+' /> Upload multiple files</label></div><div class="clearer"></div>';
				}	
	});