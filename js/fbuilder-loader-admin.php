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
		$modules_files = array();
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
    require 'fbuilder-pro-admin.jquery.js';
    try 
	{
        $d = dir("./fields-admin");
		$controls_files = array();
		while (false !== ($entry = $d->read())) 
		{            
            if (strlen($entry) > 3 && strtolower(substr($entry,strlen($entry)-3)) == '.js')
			{
                if (file_exists('./fields-admin/'.$entry))
				{
                    $controls_files[] =  './fields-admin/'.$entry;
				}
			}	
        }
		sort( $controls_files );
		foreach( $controls_files as $file )
		{
			require $file;
		}
	} 
	catch (Exception $e) 
	{
        // ignore the error
    }

?>
})(fbuilderjQuery);
});
