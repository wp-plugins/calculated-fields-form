<?php header('Content-Type: application/x-javascript; charset=UTF-8'); ?>
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
				if ( file_exists( $md->path.'/'.$entry.'/public' ) )
				{
					$m = dir( $md->path.'/'.$entry.'/public' );
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
    require 'fbuilder-pro-public.jquery.js';
    try {
        $d = dir("./fields-public");
        while (false !== ($entry = $d->read())) {            
            if (strlen($entry) > 3 && strtolower(substr($entry,strlen($entry)-3)) == '.js')
                if (file_exists('./fields-public/'.$entry))
                    require './fields-public/'.$entry;
        }

    } catch (Exception $e) {
        // ignore the error
    }
?>
        var fcount = 1;
        var fnum = "_"+fcount;
        while (eval("typeof cp_calculatedfieldsf_fbuilder_config"+fnum+" != 'undefined'"))
        {
            try {
            var cp_calculatedfieldsf_fbuilder_config = eval("cp_calculatedfieldsf_fbuilder_config"+fnum);
            var f = $("#fbuilder"+fnum).fbuilder($.parseJSON(cp_calculatedfieldsf_fbuilder_config.obj));
			f.fBuild.loadData("form_structure"+fnum);
			$("#cp_calculatedfieldsf_pform"+fnum).validate({
                ignore:".ignore,.ignorepb",
			    errorElement: "div",
			    errorPlacement: function(e, element) {
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