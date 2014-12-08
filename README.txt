=== Calculated Fields Form ===
Contributors: codepeople
Donate link: http://wordpress.dwbooster.com/forms/calculated-fields-form
Tags: form,contact form,calculated,calculator,form builder,quote calculator,forms,form editor,advanced forms,payment calculator,payment,quote,fields,calculated field,price calculator,email,form design,paypal,equation editor,formula,equation,quote calculator,post,posts,plugin,widget,admin,sidebar,images,image,page,shortcode,products form,woocommerce
Requires at least: 3.0.5
Tested up to: 4.0
Stable tag: 1.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Calculated Fields Form is a plugin for creating forms with dynamically calculated fields and display the result.

== Description ==

Calculated Fields Form is for visually:

    ♦ Creating forms with automatically calculated fields
    ♦ Finance calculators
    ♦ Quote calculators
    ♦ Booking cost calculators
    ♦ Date calculators
    ♦ Health / fitness calculators
    ♦ Form builder for adding input fields on the form
    ♦ Add one or more calculated fields
    ♦ Predefined forms templates

With Calculated Fields Form you can create **forms with dynamically calculated fields** to **display the calculated values**.

It includes a **form builder** for adding/editing different field types, including one or more **automatically calculated fields** based in the data entered in other fields.

Calculated Fields Form can be used for creating both single and complex calculations, for example general calculators, ideal weight calculators, calorie calculators, calculate quotes for hotel booking and rent a car services, calculate quotes for appointments and services, loan & finance calculators, date calculators like pregnancy calculators, etc...

= Features: =

* Visual **form builder** with multiple fields and form formatting options
* Any number of **calculated fields** can be added
* Easy and visual calculator interface
* The calculator supports both easy and advanced operations, including ternary operators and common Math functions
* Supports **multiple field types**, like drop-down, checkboxes, radiobuttons, dates, numbers 
* Accept operations with dates (ex: days between two dates)
* Smart automatic number and prices identification into the field values
* Supports form separators and comments sections to layout the form in a friendlier way
* Manage multiple calculated forms
* Practical "clone" button to duplicate a form
* Five pre-built practical samples included
* Multi pages forms supported
* Conditional rules supported. Useful for creating wizards
* Intuitive and interactive form builder interface
* Predefined forms templates

There are five samples already included with the installation:

1. Simple Calculator Operations
2. Calculation with Dates (bookings with check-in and check-out dates)
3. Ideal Weight Calculator
4. Pregnancy Calculator
5. Lease Calculator

The plugin has two additional (commercial) versions: **Premium** and **Developer**, each of them with its own features:

=Features in Premium version=

* All features of free version of plugin
* Submits the form data, and stores the data on database, for future revisions
* Allows send notification emails with the data submitted, to the form editor and users
* Allows charge the calculated field directly through PayPal
* Allows export and import your forms between different WordPress
* Allows to display the submitted data in the thanks page

=Features in Developer version=

* All features of free and premium version of plugin
* Includes new controls that get its information from different datasources (database, CSV file, Post, Taxonomies, and users data)
* Includes financial operations
* Includes operations for date times management
* Includes a script for saving the submitted data in an external database
* Includes an add-on to integrate the forms with the WooCommerce products (Beta Version).

You can either "**clone**" those calculated forms to complete your own form or create a new calculated form from scratch for your application.

You can **mix text and numbers** into a field. If a field contains a number it will be automatically identified and used for the calculations. In addition to that, the checkboxes, radio buttons and drop-down fields can have separately a visual "text" and a hidden "value" linked to each test: the value will be the one used for the calculation.

The dates are also automatically identified and you can apply operations between them, for example, you can calculate the **number of days between two dates** with a simple operation like "date2-date1" or add some number of days or weeks to a date. To display the result as a date again you can use the CDate operator included in the calculator. The samples #2 and #4 are practical samples.

The form processing and payment processing aren't included in this version. There are other versions with form processing included and additional features. See the FAQ for more information.

= Latest Features Added =

* Dependent fields: Fields can be shown/hidden based on other checkboxes, radiobuttons or drop-down selections
* Dependent fields from calculated values: Fields can be shown/hidden based on the value of a calculated field
* Throubleshoot area to automatically fix conflicts with other scripts on themes or third party plugins and also for special characters support
* Multi page calculated forms
* New validations, fields types and features in the form builder
* Calculated fields can be hidden fields.



== Installation ==

To install Calculated Fields Form, follow these steps:

1.	Download and unzip the Calculated Fields Form plugin 
2.	Upload the entire calculated-fields-form/ directory to the /wp-content/plugins/ directory
3.	Activate the Calculated Fields Form plugin through the Plugins menu in WordPress
4.	Configure the settings at the administration menu >> Settings >> Calculated Fields Form
5.	To insert the calculated / contact form into some content or post use the icon that will appear when editing contents

== Frequently Asked Questions ==

= Q: What means each field in the Calculated Fields Form settings area? =

A: The Calculated Fields Form's page contains detailed information about each field and customization:

http://wordpress.dwbooster.com/forms/calculated-fields-form


= Q: Where can I publish a calculated fields form? =

A: You can publish the forms into pages and posts. The shortcode can be also placed into the template. Other versions of the plugin also allow publishing it as a widget.

= Q: Can I create global variables to be used in the equations? =

A: Yes, it is possible create global variables in javascript through the shortcode of the plugin. For example, in the following shortcode [CP_CALCULATED_FIELDS id=1 myvar=4], the id=1 identifies the form to be loaded, and myvar=4 will be a global variable in javascript with value 4, that may be used in the equations.

If your form includes the numeric field: "fieldname1", and a calculated field. The equation for the calculated field could be fieldname1*myvar

= Q: Is the form processing an option, for example, to email the form data and calculated results? =

A: The form processing isn't available in the version listed on this directory. There are other versions with form processing, email notifications and payment processing. You can check other versions at http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Which calculation operations are included? =

A: In addition to the basic and most common operations (+,-,*,/) the following functions are also available: ABS (absolute value), CEIL (rounds up to the nearest integer), FLOOR (rounds a downwards to the nearest integer), ROUND (integer round), PREC (round with decimal precision), LOG (logarithm), POW (x to the power of y), SQRT (square root), MAX (maximum value between two numbers), MIN (minimum value between two numbers) and CDATE (convert a value to display it as a date). For advanced users, the JavaScript ternary operator (condition ? value_if_true : value_if_false) is also supported.

The plugin includes other operations that are very important in multiple situations: the Logical Operators.

* IF: Checks whether a condition is met, and returns one value if true, and another if false. IF(logical_test, value_if_true, value_if_false)
* AND: Checks whether all arguments are true, and return true if all values are true. AND(logical1,logical2,...)
* OR: Checks whether any of arguments are true. Returns false only if all arguments are false. OR(logical1,logical2,...)
* NOT: Changes false to true, or true to false. NOT(logical)
* IN: Checks whether the term is included in the second argument, the second argument may be a string or strings array. IN(term, string/array)

= Q: How can I round the calculated result to 2 decimal digits? =

A: Use the "PREC" function/operator for that purpose, example:

    PREC(fieldname4*fieldname5,2)

The above sample rounds the result of fieldname4*fieldname5 to two decimal digits.

= Q: Does the plugin operations to calculate dates? =

A: The free and pro versions of the plugin allow obtain the number of days between two date fields, or add a number of days to a date and get the result as a date string through the operation CDATE. CDATE( number, format ), but the developer version of the plugin includes a module dedicated solely for dates operations.

The operations included in the date module are:

* DATEOBJ: Get the date object from an string representation of date. DATEOBJ( date_string, format ). 

    DATEOBJ('2013-05-21', 'yyyy-mm-dd')     
    Result: date object     

* YEAR: Get the year from an string representation of date. YEAR( date_string, format )

    YEAR('2013-05-21', 'yyyy-mm-dd')    
    Result: 2013        

* MONTH: Get the month from an string representation of date. MONTH( date_string, format )

    MONTH('2013-05-21', 'yyyy-mm-dd')   
    Result: 5       

* DAY: Get the days from an string representation of date. DAY( date_string, format )

    DAY('2013-05-21', 'yyyy-mm-dd')     
    Result: 21      
    
* WEEKDAY: Get the week day from an string representation of date. WEEKDAY( date_string, format )

    WEEKDAY('2013-10-27', 'yyyy-mm-dd')     
    Result: 1 Sunday is the day number one      
    
* WEEKNUM: Get the week number from an string representation of date, a year has 53 weeks. WEEKNUM( date_string, format )

    WEEKNUM('2013-10-27', 'yyyy-mm-dd')     
    Result: 43      
    
* HOURS: Get hours from an string representation of datetime. HOURS( datetime_string, format )

    HOURS('2013-10-27 01:21', 'yyyy-mm-dd hh:ii')       
    Result: 1       
    
* MINUTES: Get minutes from an string representation of datetime. MINUTES( datetime_string, format )

    MINUTES('2013-10-27 01:22', 'yyyy-mm-dd hh:ii')     
    Result: 22      
    
* SECONDS: Get seconds from an string representation of datetime. SECONDS( datetime_string, format )

    SECONDS('2013-10-27 01:22:56', 'yyyy-mm-dd hh:ii:ss')       
    Result: 56          
    
* NOW: Get a date object with the current day-time information. NOW()

    NOW()       
    Result: 2013-10-27 01:42:19     
    
* TODAY: Get a date object with the current day information, without the time part. TODAY()    
* DATEDIFF: Get the difference between two dates strings representation. DATEDIFF(date_one, date_two, date_format, return)   

The function return an object, whose value depends of argument 'return'
Possible values of return argument:
d - return the number of days between two dates
m - return the number of months between two dates, and remaining days
y - return the number of years between two dates, remaining months, and remaining days

    DATEDIFF('2013-10-27', '2012-06-22', 'yyyy-mm-dd', 'y')['months']       
    Result: 5       

* DATETIMESUM: Increases the date-time string representation in the number of seconds, minutes, hours, days, months, or years, passed as parameter. DATETIMESUM( date_string, format, number, to_increase )

    DATETIMESUM('2013-10-27', 'yyyy-mm-dd', 5, 'd')     
    Result: The date object representation of 2013/11/01        
    
* GETDATETIMESTRING: Returns the string representation of a date object. GETDATETIMESTRING( datetime_object, format )

    GETDATETIMESTRING(TODAY(), 'yyyy-mm-dd')        
    Result: 2013-10-27      
    
= Q: Does the plugin includes financial operations? =

A: The developer version of the plugin includes a module solely for financial operations. See the complete operations list below:

* CALCULATEPAYMENT: Calculate the Financed Payment Amount. The operation requires three parameters: amount, months, interest rate (percent)

        CALCULATEPAYMENT(25000, 60, 5.25)       
        Result: 474.65      
    
* CALCULATEAMOUNT: Calculate the Financed Amount. The operation accepts three parameters: months, interest rate (percent), payment

        CALCULATEAMOUNT(60, 5.25, 474.65)       
        Result: 25000.02        
    
* CALCULATEMONTHS: Calculate the Months Financed. The operation accepts three parameters: amount, interest rate (percent), payment

        CALCULATEMONTHS(25000, 5.25, 474.65)        
        Result: 60      

* CALCULATEINTEREST: Calculate the Financed Interest Rate. The operation accepts three parameters: amount, months, payment

        CALCULATEINTEREST(25000, 60, 474.65)        
        Result: 5.25        

* CALCULATEACCRUEDINTEREST: Calculate the Accrued Interest. If your money is in a bank account accruing interest, how much does it earn over x months?. The operation accepts three parameters: principle amount, months, interest rate (percent)

        CALCULATEACCRUEDINTEREST(25000, 60, 5.25)       
        Result: 7485.806648756854       

* CALCULATEAMORTIZATION: Create Amortization Schedule. This operation is very particular, and its result should be an array the length the number of months. Each entry is an object. Four parameters: principle amount, months, interest rate (percent), start date (optional Date object).

        CALCULATEAMORTIZATION(25000, 60, 5.25, new Date(2011,11,20) )       
        Result:         
        [       
          {         
            principle: 24634.725        
            interest: 109.375       
            payment: 474.65         
            paymentToPrinciple: 365.275         
            paymentToInterest: 109.375      
            date: Tue Dec 20 2011 00:00:00 GMT+0100 (Romance Daylight Time)         
          },        
          {         
            principle: 24267.851921874997       
            interest: 217.151921875         
            payment: 474.65         
            paymentToPrinciple: 366.873078125       
            paymentToInterest: 107.776921875        
            date: Fri Jan 20 2012 00:00:00 GMT+0100 (Romance Daylight Time)         
          },        
        ...         
        ]               
        
* NUMBERFORMAT: Format a Number. The number of parameters of this operation can vary, and the result will depend of parameters passed to the operation.
    
One parameters: number

        NUMBERFORMAT(-2530023420269.123456)     
        Result: -2,530,023,420,269

        NUMBERFORMAT(25000.123456, {precision:2})       
        Result: 25,000.12

Format Currency

Format a number to a certain currency. Two parameters: number, settings (optional). If settings option is a string it is treated as a currency name. If it is an object it is used as currency settings.

        NUMBERFORMAT(25000.123456, 'USD')       
        Result: $25,000.12      

Settings can be format, and then override with options.

        NUMBERFORMAT(-25000.123456, 'GBP', { negative: '()', precision: 3, thousand: '' })      
        Result: £(25000.123)

Format a Percent

Format a number with a certain precision. Two parameters: number, settings ("percent" is a format)

        NUMBERFORMAT(25000.123456, 'percent')       
        Result: 25,000%     

* ADDFORMAT: Create a Currency. You may create a currency. The library comes with "USD", "GBP", and "EUR" currency formats and "number" and "percent" numeric formats. Two parameters: key, settings

        ADDFORMAT('Dollars', { before: '', after: ' Dollars', precision: 0, thousand: ',', group: 3, decimal: '.', negative: '-' })     
        Result: true        
        NUMBERFORMAT(25000.123456, 'Dollars')       
        Result: 25,000 Dollars        

* REMOVEFORMAT: Remove a Currency. To remove a currency. One parameter: key

        REMOVEFORMAT('Dollars')     
        Result: true        

= Q: How calculate the amortization? =

A: The CALCULATEAMORTIZATION  is the operation with most complexity in the "Calculated Fields Form" and requires its own section. 

The CALCULATEAMORTIZATION operation returns a list of objects. For example:

        CALCULATEAMORTIZATION(25000, 60, 5.25, new Date(2011,11,20) )       
        Result:         
        [       
          {         
            principle: 24634.725        
            interest: 109.375       
            payment: 474.65         
            paymentToPrinciple: 365.275         
            paymentToInterest: 109.375      
            date: Tue Dec 20 2011 00:00:00 GMT+0100 (Romance Daylight Time)         
          },        
          {         
            principle: 24267.851921874997       
            interest: 217.151921875         
            payment: 474.65         
            paymentToPrinciple: 366.873078125       
            paymentToInterest: 107.776921875        
            date: Fri Jan 20 2012 00:00:00 GMT+0100 (Romance Daylight Time)         
          },        
        ...         
        ]           

* principle: how much remains for paying.
* interest: is the accumulated of interest paid until this date.
* payment: is the monthly payment (payment of interests and payment of principle).
* paymentToPrinciple: is the part of payment that is considered as payment of principle.
* paymentToInterest: is the part of payment that is considered as payment of interest.
* date: is the date of payment.

In the example, followed to explain the use of the CALCULATEAMORTIZATION operation: the fieldname1 represents the principle amount, fieldname3 the number of months, and the fieldname2 the interest rate.

So, the value returned by CALCULATEAMORTIZATION(fieldname1,fieldname3,fieldname2) cannot by assigned directly to the calculated field, or will be displayed a text like: [object],[object],...... So, will be needed create a formatted string, with HTML tags, to display the CALCULATEAMORTIZATION results in an understandable  format.

        (function(){    
            var r = CALCULATEAMORTIZATION(fieldname1,fieldname3,fieldname2),    
            str = '';   
            
            if(r.length)    
            {   
                str = '<table cellpadding=" 10" >';     
                str += '<tr>';      
                str += '<td>Date</td>';     
                str += '<td>Interest</td>';     
                str += '<td>Payment</td>';      
                str += '<td>Payment to Interest</td>';      
                str += '<td>Payment to Principle</td>';     
                str += '<td>Principle</td>';        
                str += '</tr>';     
                for(var i = 0, h = r.length; i < h; i++)        
                {       
                    str += '<tr>';      
                    str += '<td>'+GETDATETIMESTRING( new Date(r[i]['date']), 'yyyy-mm-dd')+'</td>';     
                    str += '<td>'+PREC(r[i]['interest'],2)+'</td>';     
                    str += '<td>'+PREC(r[i]['payment'],2)+'</td>';      
                    str += '<td>'+PREC(r[i]['paymentToInterest'],2)+'</td>';        
                    str += '<td>'+PREC(r[i]['paymentToPrinciple'],2)+'</td>';       
                    str += '<td>'+PREC(r[i]['principle'],2)+'</td>';        
                    str += '</tr>';     
                }       
                str += '</table>';      
            }       
            jQuery('.comment_area .uh').html( str );        
        })()        

The first step will be store the list of objects returned by the CALCULATEAMORTIZATION operation, in a local variable, and create another variable to store the amortization data, but with an HTML format:
 
        var r = CALCULATEAMORTIZATION(fieldname1,fieldname3,fieldname2),        
        str = '';       

The equation validates if the previous operation returns a value, because if the CALCULATEAMORTIZATION was called with wrong values can return an empty array:
    
        if(r.length)        
        {       
        ....        
        }       

I've decided display the results of CALCULATEAMORTIZATION operation in a tabular format because is easier to understand. The first element in the result is the tag to open the table: &lt;table&gt;, and the row with the column names:
    
        str = '<table cellpadding=" 10" >';     
        str += '<tr>';      
        str += '<td>Date</td>';     
        str += '<td>Interest</td>';     
        str += '<td>Payment</td>';      
        str += '<td>Payment to Interest</td>';      
        str += '<td>Payment to Principle</td>';     
        str += '<td>Principle</td>';        
        str += '</tr>';     

Now, is the moment to traverse the list to create each row of the table with the values of monthly amortization.

        for(var i = 0, h = r.length; i < h; i++)        
        {       
            str += '<tr>';      
            str += '<td>'+GETDATETIMESTRING( new Date(r[i]['date']), 'yyyy-mm-dd')+'</td>';     
            str += '<td>'+PREC(r[i]['interest'],2)+'</td>';     
            str += '<td>'+PREC(r[i]['payment'],2)+'</td>';      
            str += '<td>'+PREC(r[i]['paymentToInterest'],2)+'</td>';        
            str += '<td>'+PREC(r[i]['paymentToPrinciple'],2)+'</td>';       
            str += '<td>'+PREC(r[i]['principle'],2)+'</td>';        
            str += '</tr>';     
        }       

The previous code has its particularities. By default the dates returned by the CALCULATEAMORTIZATION operation have the complete format including hours and seconds, In this form the information about hours and seconds is not relevant, so, is preferred to use a short date format: yyyy-mm-dd. The date string will be formatted with the GETDATETIMESTRING operation, included in the Date module of developers version of the plugin (the second parameter is the format to use):

        str += '<td>'+GETDATETIMESTRING( new Date(r[i]['date']), 'yyyy-mm-dd')+'</td>';     
    
Another particularity is the use of the PREC operation. By default the CALCULATEAMORTIZATION returns the numeric values with all its decimals digits, for example: 366.873078125, but for humans is common to identify the money representation with two decimal digits. So, I've used the PREC operation with the number 2 as the second parameter.
    
        str += '<td>'+PREC(r[i]['interest'],2)+'</td>';     
    
After create all table rows, is the moment to close the table, and print the results:

        str += '</table>';      
    
If you display the result directly in the calculated field, you will see a weird text (or very hard to understand) because the input fields in HTML are not able to display tables, in this case I've preferred show the result in an "Instruct Text" field. I've inserted an "Instruct Text" field in the form, this type of field uses the class name "comment_are", and includes an &lt;span&gt; tag with the class "uh". Then, using jQuery to select the correct field, I've inserted the formatted result of the CALCULATEAMORTIZATION in the &lt;span&gt; tag included in the "Instruct Text" field:

        jQuery('.comment_area .uh').html( str );        
    
The complete equation is:    
        (function(){        
            var r = CALCULATEAMORTIZATION(fieldname1,fieldname3,fieldname2),        
            str = '';       
                    
            if(r.length)        
            {       
                str = '<table cellpadding=" 10" >';     
                str += '<tr>';      
                str += '<td>Date</td>';     
                str += '<td>Interest</td>';     
                str += '<td>Payment</td>';      
                str += '<td>Payment to Interest</td>';      
                str += '<td>Payment to Principle</td>';     
                str += '<td>Principle</td>';        
                str += '</tr>';     
                for(var i = 0, h = r.length; i < h; i++)        
                {       
                    str += '<tr>';      
                    str += '<td>'+GETDATETIMESTRING( new Date(r[i]['date']), 'yyyy-mm-dd')+'</td>';     
                    str += '<td>'+PREC(r[i]['interest'],2)+'</td>';     
                    str += '<td>'+PREC(r[i]['payment'],2)+'</td>';      
                    str += '<td>'+PREC(r[i]['paymentToInterest'],2)+'</td>';        
                    str += '<td>'+PREC(r[i]['paymentToPrinciple'],2)+'</td>';       
                    str += '<td>'+PREC(r[i]['principle'],2)+'</td>';        
                    str += '</tr>';     
                }       
                str += '</table>';      
            }       
            jQuery('.comment_area .uh').html( str );        
        })()        
 
= Q: How to define an initial date in a date field? =
 
A: The Date control allows to define two types of initial dates, a static date, for example 03/24/2015, or a relative date depending of the current date, for example 3 days after today.

The static dates are very easy to define: select the date field in the form, and type the date string in any of the attributes: "Predefined Value", or "Default Date",for the static dates, any of attributes can be used interchangeably.

The case of relative dates is a little more restrictive, the rules must be typed in the "Default date" attribute, and should comply any of formats:

Number: will be considered a number of days from today. For example, the number 2 represent two days from today, and the number -1 represent yesterday.

String: A smart text indicating a relative date. Relative dates must contain a pair of value(number) and period; valid periods are "y" representing years, "m" representing months, "w"  represents weeks, and "d" represents days. For example "+1m +7d" indicates one month and seven days from today.

= Q: How to change the language on datepicker? = 

A: The following steps describe how to use the French language in the datepicker, but it is possible translate the months and days names to another language:

* Creates a new file in the text editor your choice.
* Paste the following code in the file.

        jQuery(function($){     
                $.datepicker.regional['fr'] = {         
                        closeText: 'Fermer',        
                        prevText: '&#x3c;Préc',         
                        nextText: 'Suiv&#x3e;',         
                        currentText: 'Courant',         
                        monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin', 'Juillet','Août','Septembre','Octobre','Novembre','Décembre'],      
                        monthNamesShort: ['Jan','Fév','Mar','Avr','Mai','Jun', 'Jul','Aoû','Sep','Oct','Nov','Déc'],        
                        dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],      
                        dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],         
                        dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],      
                        weekHeader: 'Sm',       
                        dateFormat: 'dd/mm/yy',         
                        firstDay: 1,        
                        isRTL: false,       
                        showMonthAfterYear: false,      
                        yearSuffix: ''};        
                $.datepicker.setDefaults($.datepicker.regional['fr']);      
        });         

* Finally, store the new file in the "/wp-content/plugins/calculated-fields-form/js/fields-public", with the name you prefer, but with "js" as the file's extension, for example: datepicker_fr.js
        
= Q: Is there a way to format the form in a table structure (various fields in the same line) ? =

A: Into the calculated form editor click a field and into its settings there is one field named "Add Css Layout Keywords". Into that field you can put the name of a CSS class that will be applied to the field.

There are some pre-defined CSS classes to use align two, three or four fields into the same line. The CSS classes are named:

    column2
    column3
    column4

For example if you want to put two fields into the same line then specify for both fields the class name "column2". The above is valid for both the classic fields and the calculated fields.

= Q: How to display an image in a checkbox or radio button? =

A: The choices of the Radio Buttons, and Checkboxes controls, are formed by two input fields, the input field for choice value, and the input field for the text. In the input field for the choice text, should be entered an IMG tag, with an absolute URL in the src attribute:

&lt;IMG src="http://..." &gt;

= Q: How to insert an image in the notification emails? =

A: If you want send an image in the notification emails, like a header, you should insert an IMG tag in the "Message" attribute of form settings, with an absolute URL in the SRC attribute of IMG tag:

&lt;IMG src="http://..." &gt;

= Q: In which order are "calculated" the fields? =

A: Each time a field value changes (including the calculated fields) an event is fired to re-calculate all the fields, so the order isn't relevant, just avoid creating an endless cycle between calculated fields.

The value of a calculated field will appear automatically once all the fields used in the calculations become available with a valid number or date. The calculation is instant in all cases.

= Q: Can I link the calculated amount to a PayPal payment form? =

A: That feature is available in the pro version that can be acquired at this page http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Non-latin characters aren't being displayed in the calculator form. There is a workaround? =

A: New: Use the "throubleshoot area" to change the character encoding. If you want to do that manually then please change the encoding of the database table "wp_cp_calculated_fields_form_settings" to utf-8. You can do that from the PHPMyAdmin or the tool that you are using to access the database. After changing the encoding, edit again the calculator form to re-enter the characters that aren't being correctly displayed.

= Q: The calculated form doesn't appear in the public website. Solution? =

A: In the "throubleshoot area" (located below the list of forms in the settings area) change the "Script load method" from "Classic" to "Direct".

= Q: How to create multi-page forms? =

A: Use the "Page Break" field on the form builder to indicate the new pages on the form.

= Q: How to display a summary of entered data in the form? =

A: Insert a summary control and select the fields to be displayed on summary.

= Q: How to highlight the fields in the summary control? =

A: The summary uses two specific class names: cff-summary-title, and cff-summary-value, for the fields labels, and fields values respectively; you only should define both classes in any of css files loaded by your website:

.cff-summary-title{}
.and cff-summary-value{}

These styles will be applied to all summary fields in your form, but what to do if you want change the styles for only one summary field? The summary field includes two attributes: "Classname for fields titles", and "Classname for fields values", you can enter, through these attributes, the class names you want applied to the labels and values of the fields displayed in a specific summary field, using particular class names for each summary control,  allows show summary fields with different designs.

= Q: Could be displayed a summary of submitted fields in the thank you page? =

A: The thank you page can be associated to the form through the attribute: "Thank you page (after sending the message)", in this page is possible publish a text of thanks to the form's users, but you can also insert a shortcode to display a summary of submitted fields, like follow:

[CP_CALCULATED_FIELDS_RESULT]

= Q: How can I apply CSS styles to the form fields? =

A: Into the calculated form editor, click a field to edit its details, there is a setting there named "Add CSS Layout Keywords". You can add the class name into that field, so the style specified into the CSS class will be applied to that field.

Note: Don't add style rules directly there but the the name of a CSS class.

You can place the CSS class either into the CSS file of your template or into the file "cp-calculated-fields-form\css\stylepublic.css" located int o the plugin's folder.

= Q: Is possible modify any of predefined templates included with the plugin? =

A: The plugin includes multiple templates that can be assigned to the Forms to display a predefined design: Default template, Letter template, Professional, Natural, Elegant, Decorative and Clean Design.

Each template is stored in its own directory, in the "templates" folder ( "/wp-content/plugins/calculated-fields-form/templates"). Basically the templates are formed by a CSS file ( style.css ). If you want change the appearance of a predefined template, you simply should modify the style.css file corresponding to the template. The directories of each template are:

* Letter Template: templates/01 directory.
* Professional Template: templates/02 directory.
* Natural Template: templates/03 directory.
* Elegant Template: templates/04 directory.
* Decorative Template: templates/05 directory.
* Clean Design Template: templates/06 directory.

= Q: How to hide the fields on forms? =

A: In the case of Calculated Fields, the action is very simple, you only should check the option "Hide Field From Public Page", in this case the field use the type="hidden", instead of type="text" (used by default). 

For the other fields, you should use a custom class name. All fields include the attribute "Add Css Layout Keywords", you only should enter through this attribute a custom class name (the class name you prefer), for example myclass, and then define the new class in a css file of your website, that could be the "wp-content/plugins/cp-calculated-fields-form/css/stylepublic.css" file, like follow:

.myclass{ display:none; }

= Q: How assign multiple class names to a field? =

A: The class names are assigned to the fields through the attribute: "Add Css Layout Keywords". If you need assign multiple class names to a field, you only should enter the class names separated by space characters. For example: myclass1 myclass2

= Q: How can I apply CSS styles to the form fields? =

A: To modify the whole styles of the form fields and labels, edit the styles file "wp-content/plugins/cp-calculated-fields-form/css/stylepublic.css" and add these rules at the end of that file:

* Change all the labels:

        #fbuilder, #fbuilder label, #fbuilder span {    
            color: #00f;    
        }    
        
* Change all the input, textarea and select fields:
    
        #fbuilder input[type=text], #fbuilder textarea, #fbuilder select {    
            border: 2px solid #00f;    
        }    
    
* Change the submit button:
    
        #fbuilder .pbSubmit {    
            color: #00f;    
            font-weight: bold;    
        }     
    
* Change the "Section Break" field:
    
        #fbuilder .section_breaks .section_break { border:0px; }    
        #fbuilder .section_breaks label { font-size:18px; }    
        #fbuilder .section_breaks span { font-size:14px; }    
    
* Change the "Instructions Text" field:
    
        #fbuilder .comment_area label { font-size:18px; }    
        #fbuilder .comment_area span { font-size:14px; }    
    
* Change the "next" and "previous" buttons:
    
        #fbuilder .pbNext,#fbuilder .pbPrevious {    
            color: #00f;    
            font-weight: bold;    
        }    
    
* Change the "form title" and "header description":
    
        #fbuilder .fform h1 {font-size:32px;}    
        #fbuilder .fform span {font-size:16px;}    
    
* Change the "asterisk" in required fields:
    
        #fbuilder label .r {color:#f00;}
    
* Hide the ### ### #### in the phone field:
    
        .uh_phone .l {display:none;}
    
* Hide the Date Format label in the date field:
    
        #fbuilder .dformat {display:none;}
    
* On the other hand to modify only a specific field into the form:

Step #1: Into the form editor, click a field to edit its details, there is a setting there named "Add CSS Layout Keywords".

Step #2: You can add a class name into that field, so the style specified into the CSS class will be applied to that field.

Step #3 (Note): Don't add style rules directly there but the the name of a CSS class.

Step #4: You can place the CSS class either into the CSS file of your template or into the file "wp-content/plugins/cp-calculated-fields-form/css/stylepublic.css" located into the plugin's folder.

Examples: Add a class named "specialclass" into the setting "Add CSS Layout Keywords" and add one of these CSS rules into the mentioned file: 

* Change the field label:
    
        .specialclass label {        
            color: #00f;        
        }        
    
* Change the input, textarea or select of the field:
    
        .specialclass input[type=text],.specialclass textarea,.specialclass select {        
            border: 2px solid #00f;        
        }        

* Change the input box in the calculated fields:
    
        #fbuilder .codepeoplecalculatedfield{        
            background: #00ff00;        
        }        

= Q: What files can be uploaded through the form? =

A: The File control includes an attribute for entering the file extensions that can be uploaded. But, Can be entered any file extension? The answer is NO. The last decision is taken by WordPress. WordPress for security reasons, accepts a specific list of files extensions, but with the file control it is possible restrict this list even more.

The files accepted in WordPress by default are: 

* Images

    .jpg
    .jpeg
    .png
    .gif

* Documents

    .pdf (Portable Document Format; Adobe Acrobat)
    .doc, .docx (Microsoft Word Document)
    .ppt, .pptx, .pps, .ppsx (Microsoft PowerPoint Presentation)
    .odt (OpenDocument Text Document)
    .xls, .xlsx (Microsoft Excel Document)

* Audio

    .mp3
    .m4a
    .ogg
    .wav

* Video

    .mp4, .m4v
    .mov
    .wmv
    .avi
    .mpg
    .ogv (Ogg)
    .3gp (3GPP)
    .3g2 (3GPP2)

= Q: How can be modified the files allowed to be uploaded in WordPress? =

A: You need to add a new plugin hook. In your theme's functions.php file, add this line:

        add_filter('upload_mimes', 'cpcff_custom_upload_mimes');        
        function cpcff_custom_upload_mimes ( $existing_mimes=array() ) {        
            // add your ext => mime to the array ($existing_mimes['extension'] = 'mime/type';). For example to add files ai      
            $existing_mimes['ai'] = 'application/postscript';     
            // add as many as you like      
            // and return the new full result       
            return $existing_mimes;     
        }       

= Q: How can I include the link to the uploaded file into the email message? =

A: The uploaded file is attached to the email and in addition to that you can include a link to it by adding a specific field tag into the email message.

In the form builder select/click the upload field for that field, there is a read-only setting named "Field tag for the message (optional):" that shows the field tag for the "uploaded file name", for example: &lt;%fieldname7%&gt;. If that is the tag for your file field then copy and paste that tag into the email message, adding the postfix _url, example: &lt;%fieldname7_url%&gt;

= Q: How can be displayed texts in the calculated fields? =

A: The calculated fields have been implemented to display the result of mathematical equations, but if you want display texts in the calculated fields, you only should modify a little the plugin's code. 

1. Open the "/wp-content/plugins/calculated-fields-form/js/modules/01_mathematical_logical/public/module_public.js" file, in the text editor your choice.

2. Go to the snippet of code:

        return isFinite( v ) || /\d{2}[\/\-\.]\d{2}[\/\-\.]\d{4}/.test( v );        

and edit it like follow:

        return (typeof v != 'undefined');  

= Q: Why the form builder is displaying the error message: "The entered data includes invalid characters..."? =

A: Sometimes the users copy the text for the fields labels, and descriptions, from a different platform, for example Excel or MS Word, but the text copied can include invalid characters. The plugin validates the form's structure to avoid this type of errors.

= Q: How to use conditional statements in the equations? =

A: There are three ways to use conditional statements in the equations:

* Using the IF operation (don't confuse the operation "IF" with the reserved word "if" of javascript, the code in javascript  is case sensitive)

        IF( condition, value if true, value if false)       
        
For example, if the result of the equation is 100 when the value of fieldname1 is less than 100 and 1000 in another case, the equation would be:
        
        IF(fieldname1<100,100,1000)     
        
* Using the ternary operator of javascript

        (condition) ? value if true : value if false    

Following the same example in the previous point:

        (fieldname1<100) ? 100 : 1000       
        
* With a more powerful equation
        
        (function(){        
            if( fieldname1 < 100) return 100;       
            else return 1000;       
        })()        

= Q: Why the users are not receiving the notification emails if was selected the option for send a copy to the user, and selected the email field, from the form's settings? =

A: If the users are not receiving the notification emails with submission data, the probable reasons are:

1. The email should be sent through SMTP. In this case you should install in your WordPress one of the available plugins for SMTP integration, in the WordPress directory.

2. The web server allows send emails directly, but the email address entered in the "from" attribute, does not belongs to the same domain of the website. In this case, the email services classify the notification email as a possible identity fishing; and the email is deleted by security. You should enter in this attribute an email address belonging to the website's domain.        

= Q: How could be printed the form only and not the complete page? =

A: To print only the form, but not the rest of page, you should insert a button in the form, and paste the snippet of code below, as its onlcick event. Be sure not entering any change of line:

        var w=window.open(null, 'Print_Page', 'scrollbars=yes');jQuery('#fbuilder input').each(function(){var e = jQuery(this);e.attr('value', e.val());});w.document.write(jQuery('#fbuilder').html());w.document.close();w.print();       

= Q: How to disable the dynamic evaluation of the equations, when vary the fields values? =         

A: To disable the dynamic evaluation of the equations in the form, you only should uncheck the option: "Eval dynamically the equations associated to the calculated fields", from the "Form Settings" tab, of form builder. But, should be inserted a button with "calculate" type, to evaluate the equations with an direct action of users.

= Q: How to send specific fields in the notification emails, and not all form fields? =

A: There are special tags that can be used in the notification emails to display the forms information:

&lt;%INFO%&gt;, the tag &lt;%INFO%&gt; is replaced by the labels and values of fields that are submitted from the form, all of them.

To insert only specific fields, use the format &lt;%fieldnameX%&gt;, for example, if you want include the fieldname1 and fieldname3 in the notification email, use the tags &lt;%fieldname1%&gt;, and &lt;%fieldname3%&gt;, the tag will be replace by the pair: label-value of field.

To insert only the field's label, use the format &lt;%fieldnameX_label%&gt;, for example &lt;%fieldname1_label%&gt;

To insert only the field's value, use the format &lt;%fieldnameX_value%&gt;, for example &lt;%fieldname3_value%&gt;

To display the final price, after apply the discount if was defined, use the tag &lt;%final_price%&gt;

To display the coupon/discount applied, if was applied a discount, uses the tag &lt;%coupon%&gt;

To display the payment option selected, in case that PayPal has been set as optional, use the tag <%payment_option%>
 
== Other Notes ==

This section contains mainly notes about the form builder features that are too long to explain in the main description page.

= Conditional Rules = 

The form fields can be shown or hidden depending of the selection made on checkboxes, radio-buttons and select/drop-down fields. 

When editing checkboxes, radio-buttons or select/drop-down fields in the form builder (click a field to select it and edit it details) you will see a link labeled "Show Dependencies".  When clicked, a new option will appear below each field's option, labeled "If selected show: ...". The field selected into that settings option will be displayed only of that option is selected into the parent checkbox, radio-button or select/drop-down field.

Conditional rules are useful for showing information to the used based on the previous selection or just to make the form friendlier: easier to read and understand.

= The "Equal to" validation rules = 

This rule can be used to make the user enter the same value in two or more fields, usually as a confirmation field.

The "Single Line Text", "Email" and "Password" fields have a validation option labeled "Equal to: ...". The field selected in "Equal to: ..." will be validated against the field that contains the rule.

This feature is frequently used to ask the user enter the email address twice to be sure that it is correct or to enter a password twice to avoid mistakes.

= Predefined value =

The fields can have "predefined" or "prefilled" values. There are two possible uses for this:

1- Can be used for pre-filling the form with common values and save time to the end user.

2- Can be used for showing a sample of the data that should be entered in the field. In this case you may want to mark also the checkbox "Hide predefined value on click", this way the value will disappear once the user starts using the field without having to manually delete the placeholder value.


= The "Instructions for User" option =

Each field has a settings value labeled "Instructions for User". Use that settings value to put instructions to the end user about filling that field. The instructions will appear in a smaller text immediately below the field in the public website.

= Add Css Layout Keywords = 

This is also explained in the FAQ. The "Add Css Layout Keywords" is a way to apply CSS styles separately for each field. This settings field is available for each form builder field in the admin area. Into that field you can put the name of a CSS class that will be applied to the field.

Important: Put only the name of the CSS class into the "Add Css Layout Keywords"; don't put the css styles rules directly there.

There are some pre-defined CSS classes to use align two, three or four fields into the same line. The CSS classes are named:

    column2
    column3
    column4

For example if you want to put two fields into the same line then specify for both fields the class name "column2". The above is valid for both the classic fields and the calculated fields.

The CSS classes/rules can be placed into the file "wp-content\plugins\calculated-fields-form\css\stylepublic.css" or into your theme CSS files.


= Multi Page Forms = 

For adding a new page to create multi-page forms just insert the field named "Page Break". Each form's page will be validated separately before going to the next form, however note that the calculations are applied to the whole form every time a field is modified, so a calculated field in other page may be modified even if that page isn't visible.


= Calculated "hidden" Fields = 

The calculated fields can be "hidden" fields. This way the calculated values of those "hidden" fields won't be displayed in the form. This is useful for using intermediate calculated values or for showing the calculated values only into the email (pro version).


= Equations / formulas Format for Calculated Fields =

Here are some sample formulas that can be used as base:

* With simple mathematical operations:

    
    `fieldname1 + fieldname2`
    
    `fieldname1 * fieldname2`
    
    `fieldname1 / fieldname2`
    
    `fieldname1 - fieldname2`
    
    

* With multiple fields and fields grouping included:

    
    `fieldname1 * ( fieldname2 + fieldname3 )`
    


* Rounded to two decimal digits:

    
    `prec( fieldname2 / fieldname3 , 2)`
    


* There is a huge number of equations that can't be recreated with simple mathematical operators, or the operations listed above, requiring "IF" conditions, here is a sample of the formula that can be used in that case:

    ```
    (function(){       
            if(fieldname3 > 100) return fieldname1+fieldname2;       
            if(fieldname3 <= 100) return fieldname1*fieldname2;        
    })();
    ```
    

* For complex equations where is required to define blocks of JavaScript code, you should use the following format:
    
    `
    (function(){`  
        `    var calculatedValue = 0;`    
        `    //Your code here`        
        `    return calculatedValue;`        
    `})();`
    

.... and note that the **return** value of that function will be the value assigned to the calculated field.


= Functions that can be used for the formulas = 

In addition to the JavaScript functions, the following functions can be used directly into the formulas:

* **prec(A,B):** Return the A number with B decimal digits
* **round(A):** Rounds A to the nearest integer. In most cases "prec(A, B)" is more useful for indicating the digits precision.
* **cdate(A):** Returns the number A formatted like a Date. The number represents the number of days from Jan 1, 1970. For example, if fieldname1 is a date field, and its value is 3/11/2013: cdate(fieldname1+10) would be 13/11/2013.
* **min(x,y,z,...,n):** Returns the number with the lowest value (minimum from the list).
* **max(x,y,z,...,n):** Returns the number with the highest value (maximum from the list).
* **random():** Returns a random number between 0 and 1.
* **Other mathematical operations:**  abs(x) , acos(x) , asin(x) , atan(x) , atan2(x,y) , ceil(x) , cos(x) , exp(x) , floor(x) , log(x) , pow(x,y) , sin(x) , sqrt(x) , tan(x)

In addition to the above, the following operations that are available in the **Developer** version of plugin:

**Date Time module**

* **DATEOBJ(x,y):** Get the date object from an string representation of date. DATEOBJ( date_string, format )
* **YEAR(x,y):** Get the year from an string representation of date. YEAR( date_string, format )
* **MONTH(x,y):** Get the month from an string representation of date. MONTH( date_string, format )
* **DAY(x,y):**	Get the days from an string representation of date. DAY( date_string, format )
* **WEEKDAY(x,y):** Get the week day from an string representation of date. WEEKDAY( date_string, format )
* **WEEKNUM(x,y):** Get the week number from an string representation of date, a year has 53 weeks.WEEKNUM( date_string, format )
* **HOURS(x,y):** Get hours from an string representation of datetime. HOURS( datetime_string, format )
* **MINUTES(x,y):** Get minutes from an string representation of datetime. MINUTES( datetime_string, format )
* **SECONDS(x,y):** Get seconds from an string representation of datetime. SECONDS( datetime_string, format )
* **NOW():** Get a date object with the current day-time information. NOW()
* **TODAY():**	Get a date object with the current day information, without the time part.TODAY()	
* **DATEDIFF(date_one, date_two, date_format, return):** Get the difference between two dates strings representation

The function return an object, whose value depends of argument 'return'

Possible values of return argument:
d - return the number of days between two dates
m - return the number of months between two dates, and remaining days
y - return the number of years between two dates, remaining months, and remaining days

* **DATETIMESUM(date_string, format, number, to_increase):** Increases the date-time string representation in the number of seconds, minutes, hours, days, months, or years, passed as parameter.
* **GETDATETIMESTRING(datetime_object, format): ** Returns the string representation of a date object

** Financial Module**

* **CALCULATEPAYMENT(x,y,z):**	Calculate the Financed Payment Amount. Three parameters: amount, months, interest rate (percent)
* **CALCULATEAMOUNT(x,y,z): ** Calculate the Financed Amount. Three parameters: months, interest rate (percent), payment
* **CALCULATEMONTHS(x,y,z):** Calculate the Months Financed. Three parameters: amount, interest rate (percent), payment
* **CALCULATEINTEREST(x,y,z):** Calculate the Financed Interest Rate. Three parameters: amount, months, payment
* **CALCULATEACCRUEDINTEREST(x,y,z):** Calculate the Accrued Interest. If your money is in a bank account accruing interest, how much does it earn over x months? Three parameters: principle amount, months, interest rate (percent)
* **CALCULATEAMORTIZATION(x,y,z,date):** Create Amortization Schedule. The result should be an array the length the number of months. Each entry is an object. Four parameters: principle amount, months, interest rate (percent), start date (optional Date object)

* **Format a Number**

One parameters: number
Ex:NUMBERFORMAT(-2530023420269.123456)
Result: -2,530,023,420,269

Ex: NUMBERFORMAT(25000.123456, {precision:2})
Result: 25,000.12

* **Format Currency**

Format a number to a certain currency. Two parameters: number, settings (optional). If settings option is a string it is treated as a currency name. If it is an object it is used as currency settings.
Ex: NUMBERFORMAT(25000.123456, 'USD')
Result: $25,000.12

Settings can be format, and then override with options.
Ex: NUMBERFORMAT(-25000.123456, 'GBP', { negative: '()', precision: 3, thousand: '' })
Result: £(25000.123)

* **Format a Percent**

Format a number with a certain precision. Two parameters: number, settings ("percent" is a format)
Ex: NUMBERFORMAT(25000.123456, 'percent')
Result: 25,000%

* **Create a Currency**

You may create a currency. The library comes with "USD", "GBP", and "EUR" currency formats and "number" and "percent" numeric formats. Two parameters: key, settings
Ex: ADDFORMAT('Dollars', { before: '', after: ' Dollars', precision: 0, thousand: ',', group: 3, decimal: '.', negative: '-' })
Result: true

Ex: NUMBERFORMAT(25000.123456, 'Dollars')
Result: 25,000 Dollars

* **REMOVEFORMAT(x):** Remove a Currency. To remove a currency. One parameter: key

Into the plugin interface you will find additional help for these functions.


= Fields available in the Calculated Fields Form's form builder = 

The following fields are available:

* Single Line Text: A classic input field for a one-line text.
* Number: A classic input field with validation rules for numeric values.
* Currency: A classic input field for currency values, that allows separator for thousands, and currency symbols.
* Hidden: A hidden field.
* Email: A classic input field with validation rules for email addresses.
* Date: A date field. It can be used directly in calculations without a previous conversion or processing.
* Text Area: A multi-line text field.
* Checkboxes: Checkboxes for selecting one or more options into the same field.
* Radio Buttons: Radiobuttons for selecting one option between the options available for the field.
* Drop-down: A select / drop down list for selecting one of the values listed.
* Upload File: An upload field. Not frequently used in calculations.
* Password: A classic password / input field that shows **** when something is typed.
* Phone field: A very configurable sequence of input fields for entering phone numbers, serial numbers or a sequence of values with limited size.
* Instruct. Text: Use this area for adding instructions to the end user.
* Section Break: A line / separator for sections into the same page.
* Page Break: A separator for pages on multi page forms.
* Summary: Displays a summary of form fields with the values entered.
* Calculated field: .. and of course, the calculated field that accepts formulas, functions and many related settings.

The form builder includes some container controls. The container controls allow to insert another controls in them:

* Fieldset Container: Allows insert a fieldset control in the form, with a legend.
* Div Container: Inserts a container very useful for grouping related controls, and not modifies the appearance of the form.

In addition to the above, the following fields are available only in the **Developer** version of plugin:

* Line Text DS: An input field that gets its default values from one of following datasources - Database, Posts information, Taxonomies information or Users information
* Email DS: An input field for Email address that gets its default values from one of following datasources - Database or Users information
* Text Area DS: A text area field that gets its default values from one of following datasources - Database, Posts information
* Checkboxes DS: Checkboxes for selecting one or more options into the same field that gets its options from one of following datasources - Database, CSV, Posts information, Taxonomies information or Users information
* Radio Btns DS: Radiobuttons for selecting one option between the options available for the field that gets its options from one of following datasources - Database, CSV, Posts information, Taxonomies information or Users information
* Drop-down DS:  A select / drop down list for selecting one of the values listed that gets its options from one of following datasources - Database, CSV, Posts information, Taxonomies information or Users information
* Hidden DS: A hidden field that gets its value from one of following datasources - Database, Posts information, Taxonomies information, or Users information

New fields may be added at any time, so check the latest version of the plugin since it may have new options.

= Tips for calculating prices = 

One of the most frequent uses is for calculating prices. When displaying prices a good you may want to divide the form in two pages, the first one for asking the information needed to calculate the price and in a second page display the calculated field with the price and using the "Instruct. Text" fields for adding the terms, conditions and valid time for the price. 

Note that you can make the "Instruct. Text" fields dependent from the calculated value, that way you can change the text shown to the user depending of the number shown in the calculated price, since frequently the terms, conditions or offers vary according to the price amount.

= WooCommerce add-on (Beta Version) - Only available in the Developer version of the plugin =

The developer version of the plugin includes the WooCommerce add-on, to integrate the forms created by the "Calculated Fields Form" with the WooCommerce products. The add-on inserts an additional metabox in the WooCommerce products, with two settings fields:

* Enter the ID of the form: Allows select the form that will be associated to the product.
* Calculate the product price through the form: Allows calculate the price of the products through the form.

Note: If you want calculate the price of products through the form, will be required that you select the field of the price in the attribute: "Request cost" in the form's settings.

== Screenshots ==

1. Calculated forms list
2. Inserting a calculated form into a page
3. Sample calculated form
4. Calculated field settings
5. Calculator Form builder
6. Editing general fields
7. Available designs
7. WooCommerce add-on

== Changelog ==

= 1.0 =
* First version released.
* Improved jQuery form builder published

= 1.0.1 =
* Compatibility issues fixed, faster loading
* New configuration settings
* Compatible with all the latest WP versions
* Fixed tags in WP directory

== Upgrade Notice ==

= 1.0.1 =
* Stable version released.
* New behaviour in the Phone controls.