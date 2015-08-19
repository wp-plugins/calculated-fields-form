	$.fbuilder.controls[ 'fdiv' ]=function(){};
	$.extend(
		$.fbuilder.controls[ 'fdiv' ].prototype,
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fdiv",
			fields:[],
			columns:1,
			show:function()
				{
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><div id="'+this.name+'"></div><div class="clearer"></div></div>';
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