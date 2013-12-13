	$.fbuilder.controls[ 'fnumber' ] = function(){};
	$.extend( 
		$.fbuilder.controls[ 'fnumber' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Number",
			ftype:"fnumber",
			predefined:"",
			predefinedClick:false,
			required:false,
			size:"small",
			min:"",
			max:"",
			dformat:"digits",
			formats:new Array("digits","number"),
			show:function()
				{
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" min="'+this.min+'" max="'+this.max+'" class="field '+this.dformat+' '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				}
		}
	);