fbuilderjQuery = ( typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;
fbuilderjQuery[ 'fbuilder' ] = fbuilderjQuery[ 'fbuilder' ] || {};
fbuilderjQuery[ 'fbuilder' ][ 'modules' ] = fbuilderjQuery[ 'fbuilder' ][ 'modules' ] || {};

fbuilderjQuery[ 'fbuilder' ][ 'modules' ][ 'default' ] = {
	'prefix' : '',
	'callback'		: function()
	{
		if(window.PREC == undefined)
		{
			window.PREC = window.prec = function (num, pr)
				{
					if(/^\d+$/.test(pr) && /^[+-]?\d+(\.\d+)?$/.test(num))
					{
						result = num.toFixed( pr );
						return result;
					}
					return num;
				};
		} // End if window.PREC

		if(window.CDATE == undefined)
		{
			window.CDATE = window.cdate = function ( num, format )
				{
					format = ( typeof format != 'undefined' ) ? format : ( ( typeof window.DATETIMEFORMAT != 'undefined' ) ? window.DATETIMEFORMAT : 'dd/mm/yyyy' );

					if(isFinite(num*1))
					{
						num = Math.round(Math.abs(num)*86400000);
						
						var date = new Date(num),
							d = date.getDate(),
							m = date.getMonth()+1,
							y = date.getFullYear(),
							h = date.getHours(),
							i = date.getMinutes(),
							s = date.getSeconds(),
							a = '';
			
						m = (m < 10) ? '0'+m : m;
						d = (d < 10) ? '0'+d : d;
						
						if( /a/.test( format ) )
						{
							a = ( h >= 12 ) ? 'pm' : 'am';
							h = h % 12;
							h = ( h == 0 ) ? 12: h;
						}
						h = (h < 10) ? '0'+h : h;
						i = (i < 10) ? '0'+i : i;
						s = (s < 10) ? '0'+s : s;
													
						return format.replace( /y+/i, y)
									 .replace( /m+/i, m)
									 .replace( /d+/i, d)
									 .replace( /h+/i, h)
									 .replace( /i+/i, i)
									 .replace( /s+/i, s)
									 .replace( /a+/i, a);
					}
					return num;
				};
		} // End if window.CDATE
		
		var math_prop = ["LN10", "PI", "E", "LOG10E", "SQRT2", "LOG2E", "SQRT1_2", "LN2", "cos", "pow", "log", "tan", "sqrt", "ceil", "asin", "abs", "max", "exp", "atan2", "random", "round", "floor", "acos", "atan", "min", "sin"];

		for(var i = 0, h = math_prop.length; i < h; i++)
		{
			if( !window[ math_prop[ i ] ] )
			{
				window[ math_prop[ i ] ] = window[ math_prop[ i ].toUpperCase() ] = Math[ math_prop[ i ] ];
			}
		}
		
		fbuilderjQuery[ 'fbuilder' ][ 'extend_window' ]( fbuilderjQuery[ 'fbuilder' ][ 'modules' ][ 'default' ][ 'prefix' ], CF_LOGICAL );
	},
	
	'validator'	: function( v )
		{
			return isFinite( v ) || /\d{2}[\/\-\.]\d{2}[\/\-\.]\d{4}/.test( v );
		}
};