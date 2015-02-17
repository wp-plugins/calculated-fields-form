	$.fbuilder.typeList.push(
		{
			id:"ftextarea",
			name:"Text Area",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'ftextarea' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'ftextarea' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"ftextarea",
			predefined:"",
			predefinedClick:false,
			required:false,
			size:"medium",
			minlength:"",
			maxlength:"",
            rows:4,
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><textarea '+((!/^\s*$/.test(this.rows)) ? 'rows='+this.rows : '' )+' class="field disabled '+this.size+'">'+this.predefined+'</textarea><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
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
					$("#sRows").bind("keyup", {obj: this}, function(e) 
						{
							e.data.obj.rows = $(this).val();
							$.fbuilder.reloadItems();
						});
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
			showSpecialDataInstance: function() 
				{
					return '<div class="column"><label>Min length/characters</label><br /><input name="sMinlength" id="sMinlength" value="'+this.minlength+'"></div><div class="column"><label>Max length/characters</label><br /><input name="sMaxlength" id="sMaxlength" value="'+this.maxlength+'"></div><div class="clearer"></div><div><label>Number of rows</label><br><input type="text" name="sRows" id="sRows" value="'+this.rows+'" /></div><div class="clearer"></div>';
				}
	});