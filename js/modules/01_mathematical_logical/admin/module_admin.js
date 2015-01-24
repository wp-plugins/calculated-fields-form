fbuilderjQuery = (typeof fbuilderjQuery != 'undefined' ) ? fbuilderjQuery : jQuery;
fbuilderjQuery[ 'fbuilder' ] = fbuilderjQuery[ 'fbuilder' ] || {};
fbuilderjQuery[ 'fbuilder' ][ 'modules' ] = fbuilderjQuery[ 'fbuilder' ][ 'modules' ] || {};

fbuilderjQuery[ 'fbuilder' ][ 'modules' ][ 'default' ] = {
	'tutorial'		: 'http://wordpress.dwbooster.com/includes/calculated-field/mathematical_logical.module.html',
	'toolbars'		: {
		'mathematical' : {
			'label' 	: "Mathematical Operations",
			'buttons' 	: [
							{ "value" : "+", 		"code" : "+", 		"tip" : "" },
							{ "value" : "-", 		"code" : "-", 		"tip" : "" },
							{ "value" : "*", 		"code" : "*", 		"tip" : "" },
							{ "value" : "/", 		"code" : "/", 		"tip" : "" },
							{ "value" : "(", 		"code" : "(", 		"tip" : "" },
							{ "value" : ")", 		"code" : ")", 		"tip" : "" },
							{ "value" : ",", 	   	"code" : ",", 		"tip" : "" },
							{ "value" : "ABS",   	"code" : "ABS(",   	"tip" : "Returns the absolute value of the number passed as parameter. <strong>ABS(number)</strong>" },
							{ "value" : "CEIL",  	"code" : "CEIL(",  	"tip" : "Returns the next higher integer that is greater than or equal to the number passed as parameter. <strong>CEIL(number)</strong>" },
							{ "value" : "FLOOR", 	"code" : "FLOOR(", 	"tip" : "Returns the next lower integer that is less than or equal to the number passed as parameter. <strong>FLOOR(number)</strong>" },
							{ "value" : "ROUND", 	"code" : "ROUND(", 	"tip" : "Returns an integer that follows rounding rules. If the value of the passed parameter is greater than or equal to x.5, the returned value is x+1; otherwise the returned value is x. <strong>ROUND(number)</strong>" },
							{ "value" : "PREC",  	"code" : "PREC(",  	"tip" : "Returns the value of the number passed in the first parameter with so many decimal digits as the number passed in the second parameter. <strong>PREC(number1, number2)</strong>" },
							{ "value" : "CDATE", 	"code" : "CDATE(", 	"tip" : "Returns the number formatted like a Date. <strong>CDATE(number)</strong>" },
							{ "value" : "LOG",   	"code" : "LOG(",   	"tip" : "Returns the natural logarithm (base e) of the number passed as parameter. <strong>LOG(number)</strong>" },
							{ "value" : "POW",   	"code" : "POW(",   	"tip" : "Returns the value of the first parameter raised to the power of the second parameter. <strong>POW(number1, number2)</strong>" },
							{ "value" : "SQRT",  	"code" : "SQRT(",  	"tip" : "Returns the square root of the number passed as parameter. <strong>SQRT(number1, number2)</strong>" },
							{ "value" : "MAX",   	"code" : "MAX(",   	"tip" : "Returns the greater value of the two parameters. <strong>MAX(number1, number2)</strong>" },
							{ "value" : "MIN",   	"code" : "MIN(",   	"tip" : "Returns the lesser value of the two parameters. <strong>MIN(number1, number2)</strong>" }
						]
		},
		
		'logical' : {
			'label' 	: "Logical Operators",
			'buttons' 	: [
							{ "value" : "IF",   	"code" : "IF(",   	"tip" : "Checks whether a condition is met, and returns one value if true, and another if false. <strong>IF(logical_test, value_if_true, value_if_false)</strong>" },
							{ "value" : "AND",  	"code" : "AND(",  	"tip" : "Checks whether all arguments are true, and return true if all values are true. <strong>AND(logical1,logical2,...)</strong>" },
							{ "value" : "OR",  		"code" : "OR(",  	"tip" : "Checks whether any of arguments are true. Returns false only if all arguments are false. <strong>OR(logical1,logical2,...)</strong>" },
							{ "value" : "NOT", 		"code" : "NOT(", 	"tip" : "Changes false to true, or true to false. <strong>NOT(logical)</strong>" },
							{ "value" : "IN", 		"code" : "IN(", 	"tip" : "Checks whether the term is included in the second argument, the second argument may be a string or strings array. <strong>IN(term, string/array)</strong>" }
						]
		},
		
		
	}
};