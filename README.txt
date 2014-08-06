=== Calculated Fields Form ===
Contributors: codepeople
Donate link: http://wordpress.dwbooster.com/forms/calculated-fields-form
Tags: form,calculated,calculator,form builder,quote calculator,forms,form editor,advanced forms,payment calculator,payment,quote,fields,calculated field,price calculator,email,form design,paypal,equation editor,formula,equation
Requires at least: 3.0.5
Tested up to: 3.9
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

A: In addition to the basic and most common operations (+,-,*,/) the following functions are also available: ABS (absolute value), ceil (rounds up to the nearest integer), floor (rounds a downwards to the nearest integer), round (integer round), prec (round with decimal precision), log (logarithm), pow (x to the power of y), sqrt (square root), max (maximum value between two numbers), min (minimum value between two numbers) and cdate (convert a value to display it as a date). For advanced users, the JavaScript ternary operator (condition ? value_if_true : value_if_false) is also supported.


= Q: Is there a way to format the form in a table structure (various fields in the same line) ? =

A: Into the calculated form editor click a field and into its settings there is one field named "Add Css Layout Keywords". Into that field you can put the name of a CSS class that will be applied to the field.

There are some pre-defined CSS classes to use align two, three or four fields into the same line. The CSS classes are named:

    column2
    column3
    column4

For example if you want to put two fields into the same line then specify for both fields the class name "column2". The above is valid for both the classic fields and the calculated fields.


= Q: In which order are "calculated" the fields? =

A: Each time a field value changes (including the calculated fields) an event is fired to re-calculate all the fields, so the order isn't relevant, just avoid creating an endless cycle between calculated fields.

The value of a calculated field will appear automatically once all the fields used in the calculations become available with a valid number or date. The calculation is instant in all cases.


= Q: How can I round the calculated result to 2 decimal digits? =

A: Use the "prec" function/operator for that purpose, example:

    prec(fieldname4*fieldname5,2)

The above sample rounds the result of fieldname4*fieldname5 to two decimal digits.


= Q: Can I link the calculated amount to a PayPal payment form? =

A: That feature is available in the pro version that can be acquired at this page http://wordpress.dwbooster.com/forms/calculated-fields-form


= Q: How can I apply CSS styles to the form fields? =

A: Into the calculated form editor, click a field to edit its details, there is a setting there named "Add CSS Layout Keywords". You can add the class name into that field, so the style specified into the CSS class will be applied to that field.

Note: Don't add style rules directly there but the the name of a CSS class.

You can place the CSS class either into the CSS file of your template or into the file "cp-calculated-fields-form\css\stylepublic.css" located int o the plugin's folder.


= Q: Non-latin characters aren't being displayed in the calculator form. There is a workaround? =

A: New: Use the "throubleshoot area" to change the character encoding. If you want to do that manually then please change the encoding of the database table "wp_cp_calculated_fields_form_settings" to utf-8. You can do that from the PHPMyAdmin or the tool that you are using to access the database. After changing the encoding, edit again the calculator form to re-enter the characters that aren't being correctly displayed.

= Q: The calculated form doesn't appear in the public website. Solution? =

A: In the "throubleshoot area" (located below the list of forms in the settings area) change the "Script load method" from "Classic" to "Direct".

= Q: How to create multi-page forms? =

A: Use the "Page Break" field on the form builder to indicate the new pages on the form.

= Q: How to display a summary of entered data? =

A: Insert a summary control and select the fields to be displayed on summary.

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

#1- Can be used for pre-filling the form with common values and save time to the end user.

#2- Can be used for showing a sample of the data that should be entered in the field. In this case you may want to mark also the checkbox "Hide predefined value on click", this way the value will disappear once the user starts using the field without having to manually delete the placeholder value.


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

    
    `(function(){`        
        `    if(fieldname3 > 100) return fieldname1+fieldname2;`       
        `    if(fieldname3 <= 100) return fieldname1*fieldname2;`        
    `})();`
    

* For complex equations where is required to define blocks of JavaScript code, you should use the following format:
    
    `(function(){`  
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

== Screenshots ==

1. Calculated forms list
2. Inserting a calculated form into a page
3. Sample calculated form
4. Calculated field settings
5. Calculator Form builder
6. Editing general fields
7. Available designs

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
Stable version released.