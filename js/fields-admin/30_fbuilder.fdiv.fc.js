	$.fbuilder.typeList.push(
		{
			id:"fdiv",
			name:"Div",
			control_category:10
		}
	);
	$.fbuilder.controls[ 'fdiv' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fdiv' ].prototype,
		$.fbuilder.controls[ 'fcontainer' ].prototype,
		{
			title: 'div', 
			ftype:"fdiv",
			fields:[],
			columns:1,
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div class="dfield"><div class="fcontainer"></div></div><div class="clearer"></div></div>';
				},
			showTitle:function(){ return ''; },
			editItemEvents:function()
				{
					$.fbuilder.controls[ 'fcontainer' ].prototype.editItemEvents.call(this);
				},
			remove : function()
				{
					return $.fbuilder.controls[ 'fcontainer' ].prototype.remove.call(this);
				},
			duplicateItem: function( currentField, newField )	
				{
					return $.fbuilder.controls[ 'fcontainer' ].prototype.duplicateItem.call( this, currentField, newField );
				},
			after_show:function()
				{
					return $.fbuilder.controls[ 'fcontainer' ].prototype.after_show.call(this);
				}
	});