	$.fbuilder.controls[ 'fhtml' ]=function(){};
	$.extend( 
		$.fbuilder.controls[ 'fhtml' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fhtml",
			fcontent:"",
			show:function()
				{
						return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'">'+$( '<div/>' ).html( this.fcontent ).html()+'<div class="clearer"></div></div>';
				}	
		}
	);