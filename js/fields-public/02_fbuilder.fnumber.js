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
			show:function()
				{
					var _type = ( this.dformat == 'digits' || ( /^\s*$/.test( this.thousandSeparator ) &&  /^\s*\.\s*$/.test( this.decimalSymbol ) ) ) ? 'number' : 'text';
					
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+'</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" '+( ( !/^\s*$/.test( this.min) ) ? 'min="'+$.fbuilder.parseVal( this.min, this.thousandSeparator, this.decimalSymbol )+'" ' : '' )+( ( !/^\s*$/.test( this.max) ) ? ' max="'+$.fbuilder.parseVal( this.max, this.thousandSeparator, this.decimalSymbol )+'" ' : '' )+' class="field '+this.dformat+' '+this.size+((this.required)?" required":"")+'" type="'+_type+'" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			after_show:function()
				{
					if( typeof $[ 'validator' ] != 'undefined' )
					{
                        $.validator.addMethod( 'number', function( value, element )
										{
                                            var e = element;
                                            if( element.id.match( /_\d+$/) )
                                            {
                                                e = $.fbuilder[ 'forms' ][ element.id.match( /_\d+$/)[ 0 ] ].getItem( element.name )
                                            }
                                            else if( 
												typeof $.fbuilder[ 'forms' ] != 'undefined' && 
												typeof $.fbuilder[ 'forms' ][ '' ] != 'undefined' 
											)
											{
												e = $.fbuilder[ 'forms' ][ '' ].getItem( element.name )
											}	
                                            
                                            var thousandSeparator = ( typeof e.thousandSeparator != 'undefined' ) ? e.thousandSeparator : '',
                                                decimalSymbol = ( typeof e.decimalSymbol != 'undefined' && $.trim( e.decimalSymbol ) ) ? e.decimalSymbol : '.';
                                                
                                            var regExp = new RegExp( '^-?(?:\\d+|\\d{1,3}(?:' + $.fbuilder.escape_symbol( thousandSeparator ) + '\\d{3})+)?(?:' + $.fbuilder.escape_symbol( decimalSymbol ) + '\\d+)?$' );

                                            return this.optional(element) || regExp.test( value );
                                        }
						);
						
                        $.validator.addMethod( 'min', function( value, element, param ) 
                                        {
                                            var e = element;
                                            if( element.id.match( /_\d+$/) )
                                            {
                                                e = $.fbuilder[ 'forms' ][ element.id.match( /_\d+$/)[ 0 ] ].getItem( element.name )
                                            }
                                            else if( 
												typeof $.fbuilder[ 'forms' ] != 'undefined' && 
												typeof $.fbuilder[ 'forms' ][ '' ] != 'undefined' 
											)
											{
												e = $.fbuilder[ 'forms' ][ '' ].getItem( element.name )
											}	
                                            
                                            var thousandSeparator = ( typeof e.thousandSeparator != 'undefined' ) ? e.thousandSeparator : '',
                                                decimalSymbol = ( typeof e.decimalSymbol != 'undefined' && $.trim( e.decimalSymbol ) ) ? e.decimalSymbol : '.';
                                                
                                            return this.optional(element) || $.fbuilder.parseVal( value, thousandSeparator, decimalSymbol ) >= param;
                                        }
						);

						$.validator.addMethod( 'max', function( value, element, param ) 
                                        {
                                            var e = element;
                                            if( element.id.match( /_\d+$/) )
                                            {
                                                e = $.fbuilder[ 'forms' ][ element.id.match( /_\d+$/)[ 0 ] ].getItem( element.name )
                                            }
                                            else if( 
												typeof $.fbuilder[ 'forms' ] != 'undefined' && 
												typeof $.fbuilder[ 'forms' ][ '' ] != 'undefined' 
											)
											{
												e = $.fbuilder[ 'forms' ][ '' ].getItem( element.name )
											}	
                                            
                                            var thousandSeparator = ( typeof e.thousandSeparator != 'undefined' ) ? e.thousandSeparator : '',
                                                decimalSymbol = ( typeof e.decimalSymbol != 'undefined' && $.trim( e.decimalSymbol ) ) ? e.decimalSymbol : '.';
                                                
                                            return this.optional(element) || $.fbuilder.parseVal( value, thousandSeparator, decimalSymbol ) <= param;
                                        }
						);
						
					}
				},
			val:function()
				{
					var e = $( '[id="' + this.name + '"]:not(.ignore)' );
					if( e.length )
					{
						var v = $.trim( e.val() );
						return $.fbuilder.parseVal( v, this.thousandSeparator, this.decimalSymbol );	 
					}
					return 0;
				}		
		}
	);