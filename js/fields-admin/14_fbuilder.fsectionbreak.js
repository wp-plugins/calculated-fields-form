	$.fbuilder.typeList.push(
		{
			id:"fSectionBreak",
			name:"Section break",
			control_category:1
		}
	);
	$.fbuilder.controls[ 'fSectionBreak' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'fSectionBreak' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Section Break",
			ftype:"fSectionBreak",
			userhelp:"A description of the section goes here.",
			display:function()
				{
					return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><div class="section_break"></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';
				},
			editItemEvents:function()
				{ 				    
					$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
				}
	});