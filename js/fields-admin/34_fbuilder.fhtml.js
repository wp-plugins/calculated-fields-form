	$.fbuilder.typeList.push(
		{
			id:"fhtml",
			name:"HTML content",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fhtml' ]=function(){  this.init();  };
	$.extend(
		$.fbuilder.controls[ 'fhtml' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fhtml",
			fcontent: "",
			display:function()
				{
					return '<div class="fields '+this.name+' fhtml" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div>'+$( '<div/>' ).html( this.fcontent ).find( 'script' ).remove().end().html()+'<div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{
					$("#sContent").bind("change", {obj: this}, function(e) 
					{
						e.data.obj.fcontent = $(this).val();
						$.fbuilder.reloadItems();
					});
						
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				},
			showContent:function()
				{
					return '<label>HTML Content</label><textarea class="large" name="sContent" id="sContent">'+$( '<div/>' ).text( this.fcontent ).html()+'</textarea>';
				},
			showAllSettings:function()
				{
					return this.showFieldType()+this.showName()+this.showContent()+this.showCsslayout();
				}
		}
	);