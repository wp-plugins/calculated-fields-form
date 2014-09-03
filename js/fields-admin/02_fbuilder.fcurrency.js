		$.fbuilder.typeList.push(
			{
				id:"fcurrency",
				name:"Currency",
				control_category:1
			}
		);
        $.fbuilder.controls[ 'fcurrency' ] = function(){};
		$.extend(
			$.fbuilder.controls[ 'fcurrency' ].prototype, 
			$.fbuilder.controls[ 'ffields' ].prototype,
			{
				title:"Currency",
				ftype:"fcurrency",
				predefined:"",
				predefinedClick:false,
				required:false,
				size:"small",
				readonly:false,
				currencySymbol:"$",
				currencyText:"USD",
				thousandSeparator:",",
				centSeparator:".",
				min:"",
				max:"",
				formatDynamically:false,
				showReadonly:function()
					{
						return '<div><label><input type="checkbox" name="sReadonly" id="sReadonly" '+( ( this.readonly ) ? 'CHECKED' : '' )+' > Read Only</label></div>';
					},
				getPredefinedValue:function()
					{
						
						this.centSeparator = $.trim(this.centSeparator);	
						if( /^\s*$/.test( this.centSeparator ) )
						{
							this.centSeparator = '.';
						}
						
						var v = $.trim( this.predefined );
						
						v = v.replace( new RegExp( $.fbuilder[ 'escape_symbol' ](this.currencySymbol), 'g' ), '' )
						     .replace( new RegExp( $.fbuilder[ 'escape_symbol' ](this.currencyText), 'g' ), '' );
						
						v = $.fbuilder.parseVal( v, this.thousandSeparator, this.centSeparator );	 
						
						if( !isNaN( v ) )
						{
							v = v.toString();
							var parts = v.toString().split("."),
								counter = 0,
								str = '';
									
							if( !/^\s*$/.test( this.thousandSeparator ) )
							{
								for( var i = parts[0].length-1; i >= 0; i--){
									counter++;
									str = parts[0][i] + str;
									if( counter%3 == 0 && i != 0 ) str = this.thousandSeparator + str;

								}
								parts[0] = str;
							}
							if( typeof parts[ 1 ] != 'undefined' && parts[ 1 ].length == 1 )
							{
								parts[ 1 ] += '0';
							}
							return this.currencySymbol+parts.join( this.centSeparator )+this.currencyText;
						}
						else
						{
							return this.predefined;
						}
					},
				display:function()
					{
						return '<div class="fields '+this.name+'" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+$.fbuilder.htmlEncode(this.getPredefinedValue())+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
					},
				editItemEvents:function()
					{
						$("#sSize").bind("change", {obj: this}, function(e) 
							{
								e.data.obj.size = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sCurrencySymbol").bind("keyup", {obj: this}, function(e) 
							{
								e.data.obj.currencySymbol = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sCurrencyText").bind("keyup", {obj: this}, function(e) 
							{
								e.data.obj.currencyText = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sThousandSeparator").bind("keyup", {obj: this}, function(e) 
							{
								e.data.obj.thousandSeparator = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sCentSeparator").bind("keyup", {obj: this}, function(e) 
							{
								e.data.obj.centSeparator = $(this).val();
								$.fbuilder.reloadItems();
							});
						$("#sFormatDynamically").bind("click", {obj: this}, function(e) 
							{
								e.data.obj.formatDynamically = $(this).is(':checked');
								$.fbuilder.reloadItems();
							});
						$("#sReadonly").bind("click", {obj: this}, function(e) 
							{
								e.data.obj.readonly = $(this).is(':checked');
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
							
						$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
					},
				showSpecialDataInstance: function()
					{
						return this.showCurrencyFormat();
					},
				showCurrencyFormat: function() 
					{
						var str = '<div><label>Currency Symbol</label><br /><input type="text" name="sCurrencySymbol" id="sCurrencySymbol" value="'+this.currencySymbol+'"></div>';
						str += '<div><label>Currency</label><br /><input type="text" name="sCurrencyText" id="sCurrencyText" value="'+this.currencyText+'"></div>';
						str += '<div><label>Thousands Separator</label><br /><input type="text" name="sThousandSeparator" id="sThousandSeparator" value="'+this.thousandSeparator+'"></div>';
						str += '<div><label>Cents Separator</label><br /><input type="text" name="sCentSeparator" id="sCentSeparator" value="'+this.centSeparator+'"></div>';
						str += '<div><label>Format Dynamically</label><br /><input type="checkbox" name="sFormatDynamically" id="sFormatDynamically" '+( (this.formatDynamically) ? 'CHECKED' : '')+'></div>';
						return str;
					},
                showRangeIntance: function() 
					{
						return '<div class="clearer"></div><div class="column"><label>Min</label><br /><input name="sMin" id="sMin" value="'+this.min+'"></div><div class="column"><label>Max</label><br /><input name="sMax" id="sMax" value="'+this.max+'"></div><div class="clearer">Enter the min/max values as numbers, and not as currencies</div>';
					}    
		});