	$.fbuilder.controls[ 'fSectionBreak' ] = function(){};
	$.extend( 
		$.fbuilder.controls[ 'fSectionBreak' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Section Break",
			ftype:"fSectionBreak",
			userhelp:"A description of the section goes here.",
			show:function()
				{
						return '<div class="fields '+this.csslayout+' section_breaks" id="field'+this.form_identifier+'-'+this.index+'"><div class="section_break" id="'+this.name+'" ></div><label>'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';
				}
		}
	);