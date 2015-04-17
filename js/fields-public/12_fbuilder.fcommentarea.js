	$.fbuilder.controls[ 'fCommentArea' ]=function(){};
	$.extend( 
		$.fbuilder.controls[ 'fCommentArea' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Comments here",
			ftype:"fCommentArea",
			userhelp:"A description of the section goes here.",
			show:function()
				{
						return '<div class="fields '+this.csslayout+' comment_area" id="field'+this.form_identifier+'-'+this.index+'"><label id="'+this.name+'">'+this.title+'</label><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';
				}	
		}
	);