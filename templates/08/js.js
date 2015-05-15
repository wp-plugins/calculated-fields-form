window[ 'cp_cff_dark_notebook' ] = function(){
	if( typeof jQuery == 'undefined' )
	{
		setTimeout( cp_cff_dark_notebook, 500 );
		return;
	}

	jQuery( document ).one( 'showHideDepEvent', function(){
		// Modifies the radio buttons and checkboxes appearances
		jQuery( '.cp_cff_dark_notebook input[type="radio"]:not(:checked)' ).before( '<span class="cp_cff_dark_notebook_radio"></span>' );
		jQuery( '.cp_cff_dark_notebook input[type="radio"]:checked' ).before( '<span class="cp_cff_dark_notebook_radio active"></span>' );
		jQuery( '.cp_cff_dark_notebook input[type="checkbox"]:not(:checked)' ).before( '<span class="cp_cff_dark_notebook_checkbox"></span>' );
		jQuery( '.cp_cff_dark_notebook input[type="checkbox"]:checked' ).before( '<span class="cp_cff_dark_notebook_checkbox active"></span>' );
		jQuery( '.cp_cff_dark_notebook input[type="radio"],.cp_cff_dark_notebook input[type="checkbox"]' ).change(function(){
			var e = jQuery( this );
			if( e.attr( 'type' ) == 'radio' )
			{
				e.closest( '.fields' ).find( '.cp_cff_dark_notebook_radio' ).removeClass( 'active' ); 
			}
			
			if( e.is( ':checked' ) )
			{
				e.siblings( '.cp_cff_dark_notebook_checkbox, .cp_cff_dark_notebook_radio' ).addClass( 'active' );	
			}
			else
			{
				e.siblings( '.cp_cff_dark_notebook_checkbox, .cp_cff_dark_notebook_radio' ).removeClass( 'active' );
			}
			
		});
	});
};
cp_cff_dark_notebook();