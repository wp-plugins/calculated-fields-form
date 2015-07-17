/*
* logical.js v0.1
* By: CALCULATED FIELD PROGRAMMERS
* The script allows make logical operations like functions
* Copyright 2013 CODEPEOPLE
* You may use this project under MIT or GPL licenses.
*/

;(function(root){
	var lib = {};

	lib.cf_logical_version = '0.1';

	// IF( logical_test, value_if_true, value_if_false )
	lib.IF = function( _if, _then, _else ){
			if ( _if ) {
				return ( typeof _then === 'undefined' ) ? true : _then;
			} else {
				return ( typeof _else === 'undefined' ) ? false : _else;
			}
		};
	
	// AND( logical1, logical2, ... )
	lib.AND = function(){
			    for (var i = 0, h = arguments.length; i < h; i++) {
					if (!arguments[i]) {
						return false;
					}
				}
				return true;
		};
	
	// OR( logical1, logical2, ... )
	lib.OR = function(){
			    for (var i = 0, h = arguments.length; i < h; i++) {
					if ( arguments[i] ) {
						return true;
					}
				}
				return false;
		};
	
	// NOT( term )
	lib.NOT = function( _term ){
			    return ( typeof _term == 'undefined' ) ? true : !_term;
		};
	
	// IN( term, values ) values can be a string or an array
	lib.IN = function( _term, _values ){
				function _reduce( str ){
					return String(str).replace( /^\s+/, '').replace(/\s+$/, '').replace(/\s+/, ' ').toLowerCase();
				};

				_term = _reduce( _term );
				if( typeof _values == 'string' ) return _reduce( _values ).indexOf( _term ) != -1;
				else if( typeof _values == 'object' && _values.length ){
					for( var i = 0, h = _values.length; i < h; i++) if( _reduce( _values[ i ] ).indexOf( _term ) != -1 ) return true;
				}
				return false;
		};
	
	
	root.CF_LOGICAL = lib;
	
})(this);
