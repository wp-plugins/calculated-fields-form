	$.fbuilder.controls[ 'fhidden' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fhidden' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fhidden",
			predefined:"",
			show:function()
				{
					return '<input id="'+this.name+'" name="'+this.name+'" type="hidden" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/>';
				}
		}	
	);