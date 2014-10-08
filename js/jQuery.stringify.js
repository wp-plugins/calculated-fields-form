fbuilderjQuery = (typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;

fbuilderjQuery(function(){
    (function($) {
        $.extend({
            
            stringifyXX  : function stringifyXX(obj) {
                var enc  = function(param) {
                    param = param.replace(/\\/g, "\\\\");
                    param = param.replace(/\"/g, "\\\"");
                    
                    return param;
                };
                
                var t = typeof (obj);
                if (t != "object" || obj === null) {
                    // simple data type
                    if (t == "string") obj = '"' + obj + '"';
                    return String(obj);
                } else {
                    // recurse array or object
                    var n, v, json = [], arr = (obj && obj.constructor == Array);

                    for (n in obj) {
                        v = obj[n];
                        t = typeof(v);
                        if (t!="function")
                        {
                            if (t == "string") v = '"' + enc(v) + '"'; else if (t == "object" && v !== null) v = $.stringifyXX(v);
                            json.push((arr ? "" : '"' + n + '":') + String(v));
                        }
                    }
                    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
                }
            }
        });
    })(fbuilderjQuery);
});