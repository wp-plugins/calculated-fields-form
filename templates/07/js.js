window[ 'cp_cff_minimalist' ] = function(){
	if( typeof fbuilderjQuery == 'undefined' )
	{
		setTimeout( cp_cff_minimalist, 500 );
		return;
	}

	fbuilderjQuery( document ).one( 'showHideDepEvent cp_cff_minimalistEvent', function(){
		var progressBar = function( e )
			{
				var p = (e.find( '.pbreak:visible' ).attr( 'page' ))*1+1,
					t = e.find( '.pbreak' ).length;
				e.find( '.wizard-progressbar-value' ).css( 'width',  (p/t*100)+'%' );	
			};
		if( fbuilderjQuery( '.cp_cff_minimalist .pbreak' ).length > 1 )
		{	
			fbuilderjQuery( '.cp_cff_minimalist .pbreak:visible' ).each(function(){
				fbuilderjQuery(this).parent()
							.prepend( '<div><div class="wizard-progressbar"><div class="wizard-progressbar-value"></div></div></div>' );
				progressBar( fbuilderjQuery( this ).closest( '#fbuilder' ) );
			});
			
			fbuilderjQuery( '.cp_cff_minimalist .pbNext' ).click( 
				(function( f ){
					return function(){
						f( fbuilderjQuery(this).closest( '#fbuilder' ) );
					};
				})( progressBar ) );
						
			fbuilderjQuery( '.cp_cff_minimalist .pbPrevious' ).click( 
				(function( f ){
					return function(){
						f( fbuilderjQuery(this).closest( '#fbuilder' ) );
					};
				})( progressBar ) );	
		}		
	});
	
	fbuilderjQuery( document ).trigger( 'cp_cff_minimalistEvent' );
};
cp_cff_minimalist();