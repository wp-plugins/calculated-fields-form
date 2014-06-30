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
						h;
					
					while( ( h = this.minHour + this.stepHour * i ) <= this.maxHour )
					{
						if( h < 10 )
						{
							h = '0'+''+h;
						}
						str += '<option value="' + h + '">' + h + '</option>';
						i++;
					}
					return ' ( <select id="'+this.name+'_hours" name="'+this.name+'_hours">' + str + '</select>:';
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
					return '<select id="'+this.name+'_minutes" name="'+this.name+'_minutes">' + str + '</select> )';
				},
			set_date_time:function()
				{
					var str = $( '#'+this.name+'_date' ).val();
					if( this.showTimepicker )
					{
						str += ' '+$( '#'+this.name+'_hours' ).val()+':'+$( '#'+this.name+'_minutes' ).val();
					}
					$( '#'+this.name ).val( str ).change();
				},
			show:function()
				{
					this.init();
					return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><label for="'+this.name+'">'+this.title+''+((this.required)?"<span class='r'>*</span>":"")+' ('+this.dformat+( ( this.showTimepicker ) ? ' HH:mm': '' )+')</label><div class="dfield"><input id="'+this.name+'" name="'+this.name+'" type="hidden" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/><input id="'+this.name+'_date" name="'+this.name+'_date" class="field date'+this.dformat.replace(/\//g,"")+' '+this.size+((this.required)?" required":"")+'" type="text" value="'+$.fbuilder.htmlEncode(this.predefined)+'"/>'+( ( this.showTimepicker ) ? this.get_hours()+this.get_minutes() : '' )+'<span class="uh">'+this.userhelp+'</span></div><div class="clearer"></div></div>';
				},
			setEvents : function()
				{
					var me = this;
					$( document ).on( 'change', '#'+this.name+'_date', 	  function(){ me.set_date_time(); } );
					$( document ).on( 'change', '#'+this.name+'_hours',   function(){ me.set_date_time(); } );
					$( document ).on( 'change', '#'+this.name+'_minutes', function(){ me.set_date_time(); } );
				},
			after_show:function()
				{
					function setValue( f, v, m )
					{
						f = '#'+f+' option';
						v = ( ( v+'' ).length == 1 ) ? '0'+v : v;
						m = ( ( m+'' ).length == 1 ) ? '0'+m : m;
						
						$( f ).each( function(){
							var t = $( this ).attr( 'value' );
							if( v <= t )
							{
								v = t;
								return false; 
							}
						} );
						$( f+'[value="' + ( ( v < m ) ? v : m ) + '"]' ).attr( 'selected', true );
					};
					
                    function validateDate( d, w, i )
                    {
                        if( d === null ) return [false,""];
                        if ( ! w[ d.getDay()]) return [false,""];
                        if( i !== null )
                        {
                            for( var j = 0, h = i.length; j < h; j++ )
                            {
                                if( d.getDate() == i[ j ].getDate() && d.getMonth() == i[ j ].getMonth() && d.getFullYear() == i[ j ].getFullYear() ) return [false,""];
                            }
                        }
                        
                        return [true,""]; 
                    };
                    
                    function validator( v, e )
                    {
                        var p = e.name.replace( '_date', '' ).split( '_' ),
                            item = $.fbuilder[ 'forms' ][ '_'+p[ 1 ] ].getItem( p[ 0 ]+'_'+p[ 1 ] );
                        return this.optional( e ) || validateDate( $( e ).datepicker( 'getDate' ), item.working_dates, item.invalidDates )[ 0 ];
                    };
                    
					this.setEvents();
					var p  = { 
							dateFormat: this.dformat.replace(/yyyy/g,"yy"),
							minDate: this.minDate,
							maxDate: this.maxDate
						},
						dp = $( "#"+this.name+"_date" ),
						dd = (this.defaultDate != "") ? this.defaultDate : new Date();
                        
					dp.click( function(){ $(document).click(); $(this).focus(); } );	
					if (this.showDropdown) p = $.extend(p,{changeMonth: true,changeYear: true,yearRange: this.dropdownRange});
					p = $.extend(p, { beforeShowDay: ( function ( w, i ) { return function( d ){ return validateDate( d, w, i ); }; } )( this.working_dates, this.invalidDates ) } );
					dp.datepicker(p);
                    
                    if( validateDate( dd, this.working_dates, this.invalidDates)[ 0 ]  )
                    {    
                        dp.datepicker( "setDate", dd);
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
						
						setValue( this.name+'_hours', time[ 'hour' ], this.maxHour );
						setValue( this.name+'_minutes', time[ 'minute' ], this.maxMinute );
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