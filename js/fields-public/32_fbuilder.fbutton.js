	$.fbuilder.controls[ 'fButton' ]=function(){};
	$.extend( 
		$.fbuilder.controls[ 'fButton' ].prototype, 
		$.fbuilder.controls[ 'ffields' ].prototype,
		{
			ftype:"fButton",
            sType:"button",
            sValue:"button",
            sOnclick:"",
			userhelp:"A description of the section goes here.",
			show:function()
				{
                    var esc  = $.fbuilder.htmlEncode,
                        type = this.sType,
                        clss = '';
                        
                    if( this.sType == 'calculate' )
                    {
                        type = 'button';
                        clss = 'calculate-button';
                    }
                    
                    return '<div class="fields '+this.csslayout+'" id="field'+this.form_identifier+'-'+this.index+'"><input id="'+this.name+'" type="'+type+'" value="'+esc( this.sValue )+'" class="field '+clss+'" onclick="'+esc( this.sOnclick )+'" /><span class="uh">'+this.userhelp+'</span><div class="clearer"></div></div>';
				},
            after_show:function()
                {
                    $( '#'+this.name ).click(
                        function()
                            {
                                var e = $( this );
                                if( e.hasClass( 'calculate-button' ) )
                                {
                                    var suffix = e.attr( 'id' ).match(/_\d+$/)[0],
                                        items = $.fbuilder[ 'forms' ][ suffix ].getItems();
                                    
                                    $.fbuilder[ 'calculator' ].defaultCalc( '#'+e.closest( 'form' ).attr( 'id' ) );
                                    for(var i = 0, h = items.length; i < h; i++ )
                                    {
                                        if(items[i].ftype == 'fsummary')
                                        { 
                                            items[i].update();
                                        }
                                    }    
                                }
                            }
                    );
                }
		}
	);