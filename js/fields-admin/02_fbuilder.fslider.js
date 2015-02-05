		$.fbuilder.typeList.push(
			{
				id:"fslider",
				name:"Slider",
				control_category:1
			}
		);
        $.fbuilder.controls[ 'fslider' ] = function(){};
		$.extend(
			$.fbuilder.controls[ 'fslider' ].prototype, 
			$.fbuilder.controls[ 'ffields' ].prototype,
			{
				title:"Slider",
				ftype:"fslider",
				predefined:"",
				predefinedMin:"",
				predefinedMax:"",
				predefinedClick:false,
				size:"small",
				thousandSeparator:",",
				centSeparator:".",
				min:0,
				max:100,
				step:1,
				range:false,
				caption:"{0}",
				display:function()
					{
						return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+( ( !this.range ) ? $.fbuilder.htmlEncode( this.predefined ) : $.fbuilder.htmlEncode( '['+this.predefinedMin+','+this.predefinedMax+']' ) )+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
					},
				editItemEvents:function()
					{
						$("#sSize").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.size = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sMin").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.min = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sMax").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.max = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sStep").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.step = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sRange").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.range = this.checked;
								$( 'div.range'    )[ ( this.checked ) ? 'show' : 'hide' ]();
								$( 'div.no-range' )[ ( this.checked ) ? 'hide' : 'show' ]();
								$.fbuilder.reloadItems();
							});
						$("#sCaption").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.caption = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sPredefinedMin").bind("change keyup", {obj: this}, function(e) 
							{
								e.data.obj.predefinedMin = $(this).val();
								$.fbuilder.reloadItems();
							});	
						$("#sPredefinedMax").bind("change keyup", {obj: this}, function(e) 
							{
								e.data.obj.predefinedMax = $(this).val();
								$.fbuilder.reloadItems();
							});	
						$("#sThousandSeparator").bind("change keyup", {obj: this}, function(e) 
							{
								e.data.obj.thousandSeparator = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sCentSeparator").bind("change keyup", {obj: this}, function(e) 
							{
								e.data.obj.centSeparator = $(this).val();
								$.fbuilder.reloadItems();
							});
						$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
					},
				showRequired: function(){ return ''; },	
				showPredefined: function() 
					{
						return '<div class="no-range" style="display:'+( ( this.range ) ? 'none' : 'block')+';"><label>Predefined Value</label><input class="large" name="sPredefined" id="sPredefined" value="'+$.fbuilder.htmlEncode( this.predefined )+'"></div><div class="range" style="display:'+( ( this.range ) ? 'block' : 'none')+';"><div class="column"><label>Predefined Min</label><br /><input name="sPredefinedMin" id="sPredefinedMin" value="'+$.fbuilder.htmlEncode( this.predefinedMin )+'" style="width:95%;"></div><div class="column"><label>Predefined Max</label><br /><input name="sPredefinedMax" id="sPredefinedMax" value="'+$.fbuilder.htmlEncode( this.predefinedMax )+'" style="width:95%;"></div><div class="clearer"></div></div>';
					},
				showRangeIntance: function() 
					{
						return '<div><div class="column" style="width:30%;"><label>Min</label><br /><input name="sMin" id="sMin" value="'+this.min+'" placeholder="0 by default" style="width:95%;"></div><div class="column" style="width:30%;"><label>Max</label><br /><input name="sMax" id="sMax" value="'+this.max+'" placeholder="100 by default" style="width:95%;"></div><div class="column" style="width:30%;"><label>Step</label><br /><input name="sStep" id="sStep" value="'+this.step+'" placeholder="1 by default" style="width:95%;"></div><div class="clearer"></div></div><div><input type="checkbox" name="sRange" id="sRange" '+( ( this.range ) ? 'CHECKED' : '' )+' /> Range slider </div><div><label>Field Caption</label><br /><input class="large" type="text" name="sCaption" id="sCaption" value="'+$.fbuilder.htmlEncode( this.caption )+'"></div><div><label>Symbol for grouping thousands in the field\'s caption(Ex: 3,000,000)</label><input type="text" name="sThousandSeparator" id="sThousandSeparator" class="large" value="'+$.fbuilder.htmlEncode( this.thousandSeparator )+'" /></div><div><label>Decimals separator symbol (Ex: 25.20)</label><input type="text" name="sCentSeparator" id="sCentSeparator" class="large" value="'+$.fbuilder.htmlEncode( this.centSeparator )+'" /></div>';
					}
		});