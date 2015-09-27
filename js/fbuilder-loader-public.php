<?php 
	error_reporting( E_ERROR | E_PARSE );
	header('Content-Type: application/x-javascript; charset=UTF-8'); 
	ob_start(); // Turn on output buffering
?>
fbuilderjQuery = (typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;
fbuilderjQuery(window).bind( 'pageshow', function( event ){ if( typeof event.originalEvent[ 'persisted' ] != 'undefined' && event.originalEvent[ 'persisted' ] ) location.reload(); } );
fbuilderjQuery(function(){
(function($) {
	// Namespace of fbuilder
	$.fbuilder = $.fbuilder || {};
	$.fbuilder[ 'objName' ] = 'fbuilderjQuery';	
	
<?php
	// Load Module files
	try 
	{
        $md = dir( dirname( __FILE__ )."/modules" );
		$modules_files = array();
        while( false !== ( $entry = $md->read() ) ) 
		{    
            if ( strlen( $entry ) > 3 && is_dir( $md->path.'/'.$entry ) )
			{
				if ( file_exists( $md->path.'/'.$entry.'/public' ) )
				{
					$m = dir( $md->path.'/'.$entry.'/public' );
					while( false !== ( $mentry = $m->read() ) )
					{	
						if( strlen( $mentry ) > 3 && strtolower( substr( $mentry, strlen( $mentry ) - 3 ) ) == '.js' )
						{
							$modules_files[] = $m->path.'/'.$mentry;
						}
					}
				}	
						
			}			
        }
		sort( $modules_files );
		foreach( $modules_files as $file )
		{
			require $file;
		}
	} 
	catch (Exception $e) 
	{
        // ignore the error
    }

	// Load Control files
    require 'fbuilder-pro-public.jquery.js';
    try {
        $d = dir( dirname( __FILE__ )."/fields-public" );
		$controls_files = array();
        while (false !== ($entry = $d->read())) {            
            if (strlen($entry) > 3 && strtolower(substr($entry,strlen($entry)-3)) == '.js')
                if ( file_exists( $d->path.'/'.$entry ) )
                    $controls_files[] = $d->path.'/'.$entry;
        }
		sort( $controls_files );
		foreach( $controls_files as $file )
		{
			require $file;
		}
    } catch (Exception $e) {
        // ignore the error
    }
?>
        var fcount = 1;
        var fnum = "_"+fcount;
		
        while (eval("typeof cp_calculatedfieldsf_fbuilder_config"+fnum+" != 'undefined'") || fcount < 10 )
        {
			try {
            var cp_calculatedfieldsf_fbuilder_config = eval("cp_calculatedfieldsf_fbuilder_config"+fnum);
            var f = $("#fbuilder"+fnum).fbuilder(( typeof cp_calculatedfieldsf_fbuilder_config.obj == 'string' ) ?  $.parseJSON(cp_calculatedfieldsf_fbuilder_config.obj) : cp_calculatedfieldsf_fbuilder_config.obj );
			f.fBuild.loadData("form_structure"+fnum);
			$("#cp_calculatedfieldsf_pform"+fnum).validate({
                ignore:".ignore,.ignorepb",
			    errorElement: "div",
			    errorPlacement: function(e, element) 
					{
						if (element.hasClass('group'))
							element = element.parent();
						e.insertBefore(element);
						e.addClass('message'); // add a class to the wrapper
						e.css('position', 'absolute');
						e.css('left',0 );
						e.css('top',element.parent().outerHeight(true));
					}
     		});
     		} catch (e) {}
	    	fcount++;
	    	fnum = "_"+fcount;
	    }
})(fbuilderjQuery);
});
<?php

	$buffered_contents = ob_get_contents();
	ob_end_clean(); // Clean the output buffer and turn off output buffering
	if( !empty( $_REQUEST[ 'min' ] ) )
	{
		if( !class_exists( 'JSMin' ) )
		{
			require_once rtrim( dirname( __FILE__ ), '/' ).'/JSMin.php';
		}	
		
		try{
			$buffered_contents = JSMin::minify( $buffered_contents );
			$all_js_path = rtrim( dirname( __FILE__ ), '/' ).'/cache/all.js';
			@file_put_contents( $all_js_path, $buffered_contents );
		}catch( Exception $err){}	
	}	
    print $buffered_contents;
	
?>