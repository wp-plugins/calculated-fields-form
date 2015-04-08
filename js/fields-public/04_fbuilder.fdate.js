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
			tformat:"24",
			showDropdown:false,
			dropdownRange:"-10:+10",
			minDate:"",
			maxDate:"",
            invalidDates:"",
			minHour:0,
			maxHour:23,
			minMinute:0,
			maxMinute:59,
			
			stepHour: 1,
			stepMinute: 1,
			
			showTimepicker: false,
			
			defaultDate:"",
			defaultTime:"",
			working_dates:[true,true,true,true,true,true,true],
			formats:new Array("mm/dd/yyyy","dd/mm/yyyy"),
			init:function()
				{
					function checkValue( v, min, max )
						{
							v = parseInt( v );
							if( isNaN( v ) )   v = max;
							else if( v < min ) v = min;
							else if( v > max ) v = max;
							return v;
						}
						
					this.minHour 	= checkValue( this.minHour, 0, 23 );
					this.maxHour 	= checkValue( this.maxHour, 0, 23 );
					this.minMinute 	= checkValue( this.minMinute, 0, 59 );
					this.maxMinute 	= checkValue( this.maxMinute, 0, 59 );
					this.stepHour 	= checkValue( this.stepHour, 1, Math.max( 1, this.maxHour - this.minHour ) );
					this.stepMinute = checkValue( this.stepMinute, 1, Math.max( 1, this.maxMinute - this.minMinute ) );
                    
                    this.invalidDates = this.invalidDates.replace( /\s+/g, '').match( /\d{1,2}\/\d{1,2}\/\d{4}/g );
                    if( this.invalidDates !== null )
                    {
                        for( var i = 0, h = this.invalidDates.length; i < h; i++ )
                            this.invalidDates[ i ] = new Date( this.invalidDates[ i ] );
                    }
                },
			get_hours:function()
				{
					var str = '',
						i = 0,
						h,
						from = ( this.tformat == 12 ) ? 1  : this.minHour,
						to   = ( this.tformat == 12 ) ? 12 : this.maxHour;
					
					while( ( h = from + this.stepHour * i ) <= to )
					{

						if( h < 10 ) h = '0'+''+h;
						str += '<option value="' + h + '">' + h + '</option>';
						i++;
					}
					return '<select id="'+this.name+'_hours" name="'+this.name+'_hours">' + str + '</select>:';
				},
			get_minutes:function()
				{
					var str = '',
						i = 0,
						m;
					
					while( ( m = this.minMinute + this.stepMinute * i ) <= this.maxMinute )
					{
						if( m < 10 )
						{
							m = '0'+''+m;
						}
						str += '<option value="' + m + '">' + m + '</option>';
						i++;
					}
					return '<select id="'+this.name+'_minutes" name="'+this.name+'_minutes">' + str + '</select>';
				},
			get_ampm:function()
				{
					var str = '';	
					if( this.tformat == 12 )
					{
						return '<select id="'+this.name+'_ampm"><option value="am">am</option><option value="pm">pm</option></select>';
					}
					return str;
				},
			set_date_time:function()
				{
					var str = $( '#'+this.name+'_date' ).val();
					if( this.showTimepicker )
					{
						var h = $( '#'+this.name+'_hours' ).val();
						str += ' '+( ( this.tformat == 12 && $( '#'+this.name+'_ampm' ).val() == 'pm' ) ? ( h*1 + 12 ) % 24 : h )+':'+$( '#'+this.name+'_minutes' ).val();
					}
					$( '#'+this.name ).val( str ).change();
				},
			show:function()
				{
                    var attr = 'value';
                    if( this.predefinedClick )
                    {
                        attr = 'placeholder';
                    }
                    
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+' <span class="dformat">('+this.dformat+( ( this.showTimepicker ) ? ' HH:mm': '' )+')</span></label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" type="hidden" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><input id="'+this.name+'_date" name="'+this.name+'_date" class="field date'+this.dformat.replace(/\//g,"")+' '+this.size+((this.required)?" required":"")+'" type="text" '+attr+'="'+$.fbuilder.htmlEncode(this.predefined)+'"/>'+( ( this.showTimepicker ) ? ' '+this.get_hours()+this.get_minutes()+' '+this.get_ampm() : '' )+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			setEvents : function()
				{
					var me = this;
					$( document ).on( 'change', '#'+this.name+'_date', 	  function(){ me.set_date_time(); } );
					$( document ).on( 'change', '#'+this.name+'_hours',   function(){ me.set_date_time(); } );
					$( document ).on( 'change', '#'+this.name+'_minutes', function(){ me.set_date_time(); } );
					$( document ).on( 'change', '#'+this.name+'_ampm', 	  function(){ me.set_date_time(); } );
				},
			after_show:function()
				{
					function setValue( f, v, m )
					{
						v = Math.min( v*1, m*1 );
						v = ( v < 10 ) ? 0+''+v : v; 
						$( '#' + f + ' [value="' + v + '"]' ).attr( 'selected', true );
					};
					
                    function validateDate( d, w, i )
                    {
                        try{
                            if( d === null ) return [false,""];
                            if ( !w[ d.getDay()]) return [false,""];
                            if( i !== null )
                            {
                                for( var j = 0, h = i.length; j < h; j++ )
                                {
                                    if( d.getDate() == i[ j ].getDate() && d.getMonth() == i[ j ].getMonth() && d.getFullYear() == i[ j ].getFullYear() ) return [false,""];
                                }
                            }
                        }
                        catch( _err ){}
                        return [true,""]; 
                    };
                    
					function validateTime( e, i )
					{
						if( i.showTimepicker )
						{
							var base = e.name.replace( '_date', '' ),
								h = $('#'+base+'_hours').val(),
								m = $('#'+base+'_minutes').val();
								
							if( i.tformat == 12 && $('#'+base+'_ampm').val() == 'pm' ) h = h*1 + 12;
							if( h < i.minHour || h > i.maxHour ) return false;
						}
						return true;	
					};

                    function validator( v, e )
                    {
												
                        try
                        {
                            var p           = e.name.replace( '_date', '' ).split( '_' ),
                                item        = $.fbuilder[ 'forms' ][ '_'+p[ 1 ] ].getItem( p[ 0 ]+'_'+p[ 1 ] ),
                                inst        = $.datepicker._getInst( e ),
                                minDate     = $.datepicker._determineDate( inst, $.datepicker._get( inst, 'minDate'), null),
                                maxDate     = $.datepicker._determineDate(inst, $.datepicker._get(inst, 'maxDate'), null),
                                dateFormat  = $.datepicker._get(inst, 'dateFormat'),
                                date        = $.datepicker.parseDate(dateFormat, v, $.datepicker._getFormatConfig(inst));

                            return 	this.optional( e ) || 
									( 
										( minDate == null || date >= minDate  ) && 
										( maxDate == null || date <= maxDate ) && 
										validateDate( $( e ).datepicker( 'getDate' ), item.working_dates, item.invalidDates )[ 0 ] &&
										validateTime( e, item )
									);
                        }
                        catch( er )
                        {
                            return false;
                        }
                    };
                    
					this.setEvents();
					var p  = { 
							dateFormat: this.dformat.replace(/yyyy/g,"yy"),
							minDate: this.minDate,
							maxDate: this.maxDate
						},
						dp = $( "#"+this.name+"_date" ),
						dd = (this.defaultDate != "") ? this.defaultDate : ( ( this.predefined != "" ) ? this.predefined : new Date() );

					dp.click( function(){ $(document).click(); $(this).focus(); } );	
					if (this.showDropdown) p = $.extend(p,{changeMonth: true,changeYear: true,yearRange: this.dropdownRange});
					p = $.extend(p, { beforeShowDay: ( function ( w, i ) { return function( d ){ return validateDate( d, w, i ); }; } )( this.working_dates, this.invalidDates ) } );
					dp.datepicker(p);
                    if( !this.predefinedClick ) dp.datepicker( "setDate", dd);
                    if( !validateDate( dp.datepicker( "getDate"), this.working_dates, this.invalidDates)[ 0 ]  )
                    {    
                        dp.datepicker( "setDate", '');
                    }
					
					if( this.showTimepicker )
					{
						var parts, time = {}, tmp = 0;
						if(  ( parts = /(\d{1,2}):(\d{1,2})/g.exec( this.defaultTime ) ) != null )
						{
							time[ 'hour' ] = parts[ 1 ];
							time[ 'minute' ] = parts[ 2 ];
						}
						else
						{
							var d = new Date();
							time[ 'hour' ] = d.getHours();
							time[ 'minute' ] = d.getMinutes();
						}
 
						setValue( 
							this.name+'_hours', 
							( this.tformat == 12 ) ? ( ( time[ 'hour' ] > 12 ) ? time[ 'hour' ] - 12 : ( ( time[ 'hour' ] == 0 ) ? 12 : time[ 'hour' ] ) ) : time[ 'hour' ], 
							( this.tformat == 12 ) ? 12 : this.maxHour 
						);

						setValue( this.name+'_minutes', time[ 'minute' ], this.maxMinute );					  						
						$( '#'+this.name+'_ampm'+' [value="' + ( ( time[ 'hour' ] < 12 ) ? 'am' : 'pm' ) + '"]' ).attr( 'selected', true );
					}
					
					$( '#'+this.name+'_date' ).change();
                    
                    $.validator.addMethod("dateddmmyyyy", validator );
					$.validator.addMethod("datemmddyyyy", validator );
				},
			val:function()
				{

					var e = $( '[id="' + this.name + '"]:not(.ignore)' );
					if( e.length )
					{
						var v = $.trim( e.val() ),
							d = /(\d{1,2})\/(\d{1,2})\/(\d{4})(\s(\d{1,2}):(\d{1,2}))?/.exec( v ),
							h = 0,
							m = 0;
												
						if( d )
						{
							if( typeof d[ 5 ] != 'undefined' ) h = d[ 5 ];
							if( typeof d[ 6 ] != 'undefined' ) m = d[ 6 ];
							
							var date = ( this.dformat == 'mm/dd/yyyy' ) ? new Date( d[ 3 ], ( d[ 1 ] * 1 - 1 ), d[ 2 ], h, m, 0, 0 ) : new Date( d[ 3 ], ( d[ 2 ] * 1 - 1 ), d[ 1 ], h, m, 0, 0 );

							if( this.showTimepicker )
							{
								return date.valueOf() / 86400000;
							}
							else
							{
								return Math.ceil( date.valueOf() / 86400000 );
							}
						}	
					}
					return 0;
				}
		}
	);