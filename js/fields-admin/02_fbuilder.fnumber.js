		$.fbuilder.typeList.push(
			{
				id:"fnumber",
				name:"Number",
				control_category:1
			}
		);
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
				thousandSeparator:"",
				decimalSymbol:".",
				min:"",
				max:"",
				dformat:"digits",
				formats:new Array("digits","number"),
				display:function()
					{
						return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
					},
				editItemEvents:function()
					{
						$("#sSize").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.size = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sFormat").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.dformat = $(this).val();
								if( e.data.obj.dformat == 'digits')
								{
									$( '.fnumber-symbols' ).hide();
								}
								else
								{
									$( '.fnumber-symbols' ).show();
								}
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
						$("#sThousandSeparator").bind("change keyup", {obj: this}, function(e) 
							{
								e.data.obj.thousandSeparator = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sDecimalSymbol").bind("change keyup", {obj: this}, function(e) 
							{
								e.data.obj.decimalSymbol = $(this).val();
								$.fbuilder.reloadItems();
							});
						$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
					},
				showFormatIntance: function() 
					{
						var str = "";
						for (var i=0;i<this.formats.length;i++)
						{
							
							str += '<option value="'+this.formats[i]+'" '+((this.formats[i]==this.dformat)?"selected":"")+'>'+this.formats[i]+'</option>';
						}	
						return '<div><label>Number Format</label><br /><select name="sFormat" id="sFormat">'+str+'</select></div><div class="fnumber-symbols" '+( (this.dformat == 'digits') ? 'style="display:none;"' : '' )+'><label>Decimals separator symbol (Ex: 25.20)</label><input type="text" name="sDecimalSymbol" id="sDecimalSymbol" class="large" value="'+this.decimalSymbol+'" /><label>Symbol for grouping thousands (Ex: 3,000,000)</label><input type="text" name="sThousandSeparator" id="sThousandSeparator" class="large" value="'+this.thousandSeparator+'" /></div>';
					},
				showRangeIntance: function() 
					{
						return '<div class="column"><label>Min</label><br /><input name="sMin" id="sMin" value="'+this.min+'"></div><div class="column"><label>Max</label><br /><input name="sMax" id="sMax" value="'+this.max+'"></div><div class="clearer"></div>';
					}
		});