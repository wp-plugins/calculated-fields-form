window[ 'cp_cff_minimalist' ] = function(){
	if( typeof jQuery == 'undefined' )
	{
		setTimeout( cp_cff_minimalist, 500 );
		return;
	}

	jQuery( document ).one( 'showHideDepEvent', function(){
		var progressBar = function( e )
			{
				var p = (e.find( '.pbreak:visible' ).attr( 'page' ))*1+1,
					t = e.find( '.pbreak' ).length;
				e.find( '.wizard-progressbar-value' ).css( 'width',  (p/t*100)+'%' );	
			};
		if( jQuery( '.cp_cff_minimalist .pbreak' ).length > 1 )
		{	
			jQuery( '.cp_cff_minimalist .pbreak:visible' ).each(function(){
				jQuery(this).parent()
							.prepend( '<div><div class="wizard-progressbar"><div class="wizard-progressbar-value"></div></div></div>' );
				progressBar( jQuery( this ).closest( '#fbuilder' ) );
			});
			
			jQuery( '.cp_cff_minimalist .pbNext' ).click( 
				(function( f ){
					return function(){
						f( jQuery(this).closest( '#fbuilder' ) );
					};
				})( progressBar ) );
						
			jQuery( '.cp_cff_minimalist .pbPrevious' ).click( 
				(function( f ){
					return function(){
						f( jQuery(this).closest( '#fbuilder' ) );
					};
				})( progressBar ) );	
		}		
	});
};
cp_cff_minimalist();