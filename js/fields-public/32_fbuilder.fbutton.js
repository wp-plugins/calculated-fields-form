	$.fbuilder.controls[ 'fButton' ]=function(){};
	$.extend( 
		$.fbuilder.controls[ 'fButton' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fButton",
            sType:"button",
            sValue:"button",
            sOnclick:"",
			userhelp:"A description of the section goes here.",
			show:function()
				{
                    var esc = $.fbuilder.htmlEncode;
                    return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><input id="'+this.name+'" type="'+this.sType+'" value="'+esc( this.sValue )+'" class="field" onclick="'+esc( this.sOnclick )+'" /><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';
				}
		}
	);