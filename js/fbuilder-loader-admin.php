<?php 
header('Content-Type: application/x-javascript; charset=UTF-8'); 
?>

fbuilderjQuery = (typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;
fbuilderjQuery(function(){
(function($) {
	// Namespace of fbuilder
	$.fbuilder = $.fbuilder || {};
	$.fbuilder[ 'objName' ] = 'fbuilderjQuery';
	
<?php
	// Load Module files
	try 
	{
        $md = dir("./modules");

        while( false !== ( $entry = $md->read() ) ) 
		{    
            if ( strlen( $entry ) > 3 && is_dir( $md->path.'/'.$entry ) )
			{
				if ( file_exists( $md->path.'/'.$entry.'/admin' ) )
				{
					$m = dir( $md->path.'/'.$entry.'/admin' );
					while( false !== ( $mentry = $m->read() ) )
					{	
						if( strlen( $mentry ) > 3 && strtolower( substr( $mentry, strlen( $mentry ) - 3 ) ) == '.js' )
						{
							require $m->path.'/'.$mentry;
						}
					}
				}	
						
			}			
        }
	} 
	catch (Exception $e) 
	{
        // ignore the error
    }

	// Load Control files
    require 'fbuilder-pro-admin.jquery.js';
    try 
	{
        $d = dir("./fields-admin");
		
		while (false !== ($entry = $d->read())) 
		{            
            if (strlen($entry) > 3 && strtolower(substr($entry,strlen($entry)-3)) == '.js')
			{
                if (file_exists('./fields-admin/'.$entry))
				{
                    require './fields-admin/'.$entry;
				}
			}	
        }
	} 
	catch (Exception $e) 
	{
        // ignore the error
    }

?>
})(fbuilderjQuery);
});
