	$.fbuilder.controls[ 'fdate' ] = function(){};
	$.extend(
		$.fbuilder.controls[ 'fdate' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			title:"Date",
			ftype:"fdate",
			predefined:"",
			predefinedClick:false,
			size:"medium",
			required:false,
			dformat:"mm/dd/yyyy",
			showDropdown:false,
			dropdownRange:"-10:+10",
			minDate:"",
			maxDate:"",
			defaultDate:"",
			working_dates:[true,true,true,true,true,true,true],
			formats:new Array("mm/dd/yyyy","dd/mm/yyyy"),
			show:function()
				{
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+' ('+this.dformat+')</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" class="field date'+this.dformat.replace(/\//g,"")+' '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			after_show:function()
				{
					var p = { dateFormat: this.dformat.replace(/yyyy/g,"yy")};
					if (this.showDropdown) p = $.extend(p,{changeMonth: true,changeYear: true,yearRange: this.dropdownRange});
					
					var dp = $( "#"+this.name );
					p = $.extend(p,{beforeShowDay: function (d) {if (!eval($(this).attr("working_dates"))[d.getDay()]) return [false,""]; else return [true,""];}});
					dp.datepicker(p);
					dp.attr("working_dates", $.stringifyXX(this.working_dates));
					dp.datepicker( "option", "minDate", this.minDate );
					dp.datepicker( "option", "maxDate", this.maxDate );
					var dd = this.defaultDate;
					if (this.defaultDate=="") 
					{
						dd = new Date();
					}	
					dp.datepicker( "option", "defaultDate", dd );
					dp.datepicker( "setDate", dd);
					$.validator.addMethod("dateddmmyyyy", function(value, element) 
						{
						  return this.optional(element) || /^(?:[1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])[\/\-](?:[1-9]|0[1-9]|1[0-2])[\/\-]\d{4}$/.test(value);
						});
					
					$.validator.addMethod("datemmddyyyy", function(value, element) 
						{
						  return this.optional(element) || /^(?:[1-9]|0[1-9]|1[0-2])[\/\-](?:[1-9]|0[1-9]|1[0-9]|2[0-9]|3[0-1])[\/\-]\d{4}$/.test(value);
						});//{required: true, range: [11, 22]}
				},
			val:function()
				{
					var e = $( '[id="' + this.name + '"]:not(.ignore)' );
					if( e.length )
					{
						var v = $.trim( e.val() ),
							d = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec( v );
						
						if( d )
						{
							var date = ( this.dformat == 'mm/dd/yyyy' ) ? new Date( d[ 3 ], ( d[ 1 ] * 1 - 1 ), d[ 2 ] ) : new Date( d[ 3 ], ( d[ 2 ] * 1 - 1 ), d[ 1 ] );
							return Math.ceil( date.valueOf() / 86400000 );
						}	
						return undefined;
					}
					return 0;
				}
		}
	);