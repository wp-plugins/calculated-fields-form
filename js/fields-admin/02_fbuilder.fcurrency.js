		$.fbuilder.typeList.push(
			{
				id:"fcurrency",
				name:"Currency",
				control_category:{ 
					id:1, 
					title:"Form Controls"
				}
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
				
				currencySymbol:"$",
				currencyText:"USD",
				thousandSeparator:",",
				centSeparator:".",
				formatDynamically:false,
				
				getPredefinedValue:function()
					{
						
						function escape_symbol( value ) // Escape the symbols used in regulars expressions
						{
							return value.replace(/([\^\$\-\.\,\[\]\(\)\/\\\*\?\+\!\{\}])/g, "\\$1");
						};
						
						this.centSeparator = $.trim(this.centSeparator);	
						if( /^\s*$/.test( this.centSeparator ) )
						{
							this.centSeparator = '.';
						}
					
						var v = parseFloat( this.predefined.replace( new RegExp( "[^\\d" + escape_symbol( this.centSeparator ) + "]", "g" ), '' ) );	
						
						if( !isNaN( v ) )
						{
							v = v.toFixed(2).toString();
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
							return this.currencySymbol+parts.join( this.centSeparator )+this.currencyText;
						}
						else
						{
							return this.predefined;
						}
					},
				display:function()
					{
						return '<div class="fields" id="field'+this.form_identifier+'-'+this.index+'"><div class="arrow ui-icon ui-icon-play "></div><div title="Delete" class="remove ui-icon ui-icon-trash "></div><div title="Duplicate" class="copy ui-icon ui-icon-copy "></div><label>'+this.title+''+((this.required)?"*":"")+'</label><div class="dfield"><input class="field disabled '+this.size+'" type="text" value="'+$.fbuilder.htmlEncode(this.getPredefinedValue())+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
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
							
						$.fbuilder.controls[ 'ffields' ].prototype.editItemEvents.call(this);
					},
				showAllSettings:function()
					{
						return this.showTitle()+this.showName()+this.showSize()+this.showLayout()+this.showRequired()+this.showCurrencyFormat()+this.showPredefined()+this.showUserhelp()+this.showCsslayout();
					},	
				showCurrencyFormat: function() 
					{
						var str = '<div><label>Currency Symbol</label><br /><input type="text" name="sCurrencySymbol" id="sCurrencySymbol" value="'+this.currencySymbol+'"></div>';
						str += '<div><label>Currency</label><br /><input type="text" name="sCurrencyText" id="sCurrencyText" value="'+this.currencyText+'"></div>';
						str += '<div><label>Thousands Separator</label><br /><input type="text" name="sThousandSeparator" id="sThousandSeparator" value="'+this.thousandSeparator+'"></div>';
						str += '<div><label>Cents Separator</label><br /><input type="text" name="sCentSeparator" id="sCentSeparator" value="'+this.centSeparator+'"></div>';
						str += '<div><label>Format Dynamically</label><br /><input type="checkbox" name="sFormatDynamically" id="sFormatDynamically" '+( (this.formatDynamically) ? 'CHECKED' : '')+'></div>';
						return str;
					}
		});