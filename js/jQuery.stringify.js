jQuery(function(){
(function($) {
$.extend({
    
    stringifyXX  : function stringifyXX(obj) {
        encodeParam  = function(param,urlp) {
            if (urlp)
            {
                param = param.replace(/&/g, "%26");
                return encodeURI(param);
            }
            else
                return param;
        }
        enc  = function(param) {
            param = param.replace(/\\/g, "\\\\");
            param = param.replace(/\"/g, "\\\"");
            
            return param;
        }
        var t = typeof (obj);
        if (t != "object" || obj === null) {
            // simple data type
            if (t == "string") obj = '"' + obj + '"';
            return encodeParam(String(obj));
        } else {
            // recurse array or object
            var n, v, json = [], arr = (obj && obj.constructor == Array);

            for (n in obj) {
                //alert(n+"-----------"+obj[n]);
                v = obj[n];
                t = typeof(v);
                if (t!="function")
                //if (obj.hasOwnProperty(n)) 
                {
                    if (t == "string") v = '"' + enc(v) + '"'; else if (t == "object" && v !== null) v = $.stringifyXX(v);
                    json.push((arr ? "" : '"' + n + '":') + String(v));
                }
            }
            return encodeParam(arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
        }
    }
});
})(jQuery);
});