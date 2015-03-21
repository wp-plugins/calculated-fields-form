	$.fbuilder.controls[ 'fcontainer' ] = function(){};
	$.fbuilder.controls[ 'fcontainer' ].prototype = {
		fields:[],
		columns:1,
		after_show: function()
			{
				var e  = $( '#'+this.name ), f;
                for( var i = 0, h = this.fields.length; i < h; i++ )
				{
					f = $( '#'+this.fields[ i ]+this.form_identifier ).closest( '.fields' ).detach();
					if( this.columns > 1 )
					{
						f.addClass( 'column'+this.columns );
						if( i%this.columns == 0 ) f.css( 'clear', 'left' );
					}	
					f.appendTo( e );
				}					
			},
		showHideDep:function( toShow, toHide )
			{
				var hide = ( $.inArray( this.name, toHide ) != -1 ),
					index;
				
				
				for( var i = 0, h = this.fields; i < h; i++ )
				{
					if( $.inArray( this.fields[ i ]+this.form_identifier, toHide ) == -1 )
					{
						toHide.push( this.fields[ i ]+this.form_identifier );
						index = $.inArray( d[ i ], toShow );
						if( index != -1 )
						{
							toShow.splice( index, 1);
						}
						
						$( '#' + this.fields[ i ]+this.form_identifier ).closest( '.fields' )
																		.find( '.field' )
																		.each(function()
																		{
																			$(this).addClass('ignore');
																		});
					}
				}
			}
	};