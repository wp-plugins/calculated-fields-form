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
			
			currencyText:"USD",
			thousandSeparator:",",
			centSeparator:".",
			formatDynamically:false,

			getFormattedValue:function( value )
				{
					this.centSeparator = $.trim(this.centSeparator);	
					if( /^\s*$/.test( this.centSeparator ) )
					{
						this.centSeparator = '.';
					}
					
					var v = parseFloat( value.replace( new RegExp( "[^\\d" + $.fbuilder.escape_symbol( this.centSeparator ) + "]", "g" ), '' ) );
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
						if( /^\s*$/.test( this.centSeparator ) )
						{
							this.centSeparator = '.';
						}
						return this.currencySymbol+parts.join( this.centSeparator )+this.currencyText;
					}
					else
					{
						return value;
					}
				},	
			
			show:function()
				{
					if( this.formatDynamically )
					{

						var me = this;
						$( document ).on( 'change', '[name="' + this.name + '"]', function(){
							this.value = me.getFormattedValue( this.value );
						} );
					}

					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" class="field '+this.dformat+' '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode( this.getFormattedValue( this.predefined ) )+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			val:function()
				{
					var e = $( '[id="' + this.name + '"]:not(.ignore)' );
					if( e.length )
					{
						var v = $.trim( e.val() );
						
						v = v.replace( new RegExp( this.currencySymbol, 'g' ), '' )
						     .replace( new RegExp( this.currencyText, 'g' ), '' );
							 
						return $.fbuilder.parseVal( v, this.thousandSeparator, this.centSeparator );	 
					}
					return 0;
				}	
		}
	);