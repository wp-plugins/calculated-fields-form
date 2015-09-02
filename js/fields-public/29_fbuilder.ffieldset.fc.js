	$.fbuilder.controls[ 'ffieldset' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'ffieldset' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Untitled",
			ftype:"ffieldset",
			fields:[],
			columns:1,
			show:function()
				{
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><FIELDSET id="'+this.name+'">'+( ( !/^\s*$/.test( this.title ) ) ? '<LEGEND>'+this.title+'</LEGEND>' : '' )+'</FIELDSET><div class="clearer"></div></div>';
				},
			after_show: function()
				{
					$.fbuilder.controls[ 'fcontainer' ].prototype.after_show.call(this);
				},
			showHideDep:function( toShow, toHide )
				{
					$.fbuilder.controls[ 'fcontainer' ].prototype.showHideDep.call( this, toShow, toHide );
				}
		}	
	);