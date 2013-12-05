<?php header('Content-Type: application/x-javascript; charset=UTF-8'); ?>
fbuilderjQuery = (typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;
fbuilderjQuery(function(){
(function($) {
	// Namespace of fbuilder
	$.fbuilder = $.fbuilder || {};
	$.fbuilder[ 'objName' ] = 'fbuilderjQuery';
	
<?php
    require 'fbuilder-pro-admin.jquery.js';
    try {
        $d = dir("./fields-admin");
        while (false !== ($entry = $d->read())) {            
            if (strlen($entry) > 3 && strtolower(substr($entry,strlen($entry)-3)) == '.js')
                if (file_exists('./fields-admin/'.$entry))
                    require './fields-admin/'.$entry;
        }

    } catch (Exception $e) {
        // ignore the error
    }

?>
})(fbuilderjQuery);
});
