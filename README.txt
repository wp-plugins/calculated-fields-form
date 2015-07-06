=== Calculated Fields Form ===
Contributors: codepeople
Donate link: http://wordpress.dwbooster.com/forms/calculated-fields-form
Tags: form,contact form,calculated,calculator,form builder,quote calculator,forms,form editor,advanced forms,payment calculator,payment,quote,fields,calculated field,price calculator,email,form design,paypal,equation editor,formula,equation,quote calculator,post,posts,plugin,widget,admin,sidebar,images,image,page,shortcode,products form,woocommerce,addons,layout,session,post,cookie,get,webhook,Dropbox,pdf
Requires at least: 3.0.5
Tested up to: 4.2
Stable tag: 1.0.37
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

= Latest Features Added =

* Dependent fields: Fields can be shown/hidden based on other checkboxes, radiobuttons or drop-down selections
* Dependent fields from calculated values: Fields can be shown/hidden based on the value of a calculated field
* Throubleshoot area to automatically fix conflicts with other scripts on themes or third party plugins and also for special characters support
* Multi page calculated forms
* New validations, fields types and features in the form builder
* Calculated fields can be hidden fields.

There are five samples already included with the installation:

1. Simple Calculator Operations
2. Calculation with Dates (bookings with check-in and check-out dates)
3. Ideal Weight Calculator
4. Pregnancy Calculator
5. Lease Calculator

You can either "**clone**" those calculated forms to complete your own form or create a new calculated form from scratch for your application.

You can **mix text and numbers** into a field. If a field contains a number it will be automatically identified and used for the calculations. In addition to that, the checkboxes, radio buttons and drop-down fields can have separately a visual "text" and a hidden "value" linked to each test: the value will be the one used for the calculation.

The dates are also automatically identified and you can apply operations between them, for example, you can calculate the **number of days between two dates** with a simple operation like "date2-date1" or add some number of days or weeks to a date. To display the result as a date again you can use the CDate operator included in the calculator. The samples #2 and #4 are practical samples.

The form processing and payment processing aren't included in this version. There are other versions with form processing included and additional features. See the FAQ for more information.

The plugin has two additional (commercial) versions: **Premium** and **Developer**, each of them with its own features:

= Features in Premium version: =

* All features of free version of plugin
* Submits the form data, and stores the data on database, for future review
* Allows send notification emails with the data submitted, to the form editor and users
* Allows charge the calculated field directly through PayPal
* Allows export and import your forms between different WordPress
* Allows to display the submitted data in the thanks page
* Includes a dashboard widget to display the submissions of the last week

= Features in Developer version: =

* All features of free and premium version of plugin
* Includes new controls that get its information from different datasources (database, CSV file, Post, Taxonomies, and users data)
* Includes financial operations
* Includes operations for date times management
* Includes a script for saving the submitted data in an external database
* Includes an add-on to integrate the forms with the WooCommerce products (Beta Version).
* Includes an add-on to integrate the forms with the SalesForce service(Beta Version).
* Includes an add-on to post the submitted information by the forms to WebHooks URLs, allowing integrate the forms with services like Zapier. The Zapier service connects services as important and popular as Zoho CRM, Dropbox, Mailchimp, Evernote, Google Drive, Facebook, Twitter, and more than 300 services(Beta Version).

To know the last updates, and tips about the use of the plugin, please visit our blog, press like in our Facebook page, or follow our Twitter:

Blog: [http://blog.net-factor.com](http://blog.net-factor.com "Technical blog")

Facebook: [https://www.facebook.com/netfactorsl](https://www.facebook.com/netfactorsl "Facebook page")

Twitter: [https://twitter.com/netfactorsl](https://twitter.com/netfactorsl "Twitter account")

== Other Notes ==

This section contains mainly notes about the form builder features that are too long to explain in the main description page.

= Conditional Rules = 

The form fields can be shown or hidden depending of the selection made on checkboxes, radio-buttons and select/drop-down fields. 

When editing checkboxes, radio-buttons or select/drop-down fields in the form builder (click a field to select it and edit it details) you will see a link labeled "Show Dependencies".  When clicked, a new option will appear below each field's option, labeled "If selected show: ...". The field selected into that settings option will be displayed only of that option is selected into the parent checkbox, radio-button or select/drop-down field.

Conditional rules are useful for showing information to the used based on the previous selection or just to make the form friendlier: easier to read and understand.

There are other conditional rules that are applied to the calculated fields and depend of the equation results, to display a field, or fields, if the result is equal to, greater than, less than,.... a number.

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
* **cdate(A,format):** Returns the number A formatted like a Date, the second parameter defines the output date ('mm/dd/yyyy', 'dd/mm/yyyy'). The number represents the number of days from Jan 1, 1970. For example, if fieldname1 is a date field, and its value is 3/11/2013: cdate(fieldname1+10) would be 13/11/2013.
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

**Financial Module**

* **CALCULATEPAYMENT(x,y,z):**	Calculate the Financed Payment Amount. Three parameters: amount, months, interest rate (percent)
* **CALCULATEAMOUNT(x,y,z): ** Calculate the Financed Amount. Three parameters: months, interest rate (percent), payment
* **CALCULATEMONTHS(x,y,z):** Calculate the Months Financed. Three parameters: amount, interest rate (percent), payment
* **CALCULATEINTEREST(x,y,z):** Calculate the Financed Interest Rate. Three parameters: amount, months, payment
* **CALCULATEACCRUEDINTEREST(x,y,z):** Calculate the Accrued Interest. If your money is in a bank account accruing interest, how much does it earn over x months? Three parameters: principle amount, months, interest rate (percent)
* **CALCULATEAMORTIZATION(x,y,z,date):** Create Amortization Schedule. The result should be an array the length the number of months. Each entry is an object. Four parameters: principle amount, months, interest rate (percent), start date (optional Date object)
* **PRESENTVALUE(x,y,z):** The present value is the total amount that a series of future payments is worth now. Three parameters:  The interest rate per period, the total number of payment periods in an annuity, the payment made each period and cannot change over the life of the annuity.
* **FUTUREVALUE(v,w,x,y,z):** The future value of an investment based on an interest rate and a constant payment schedule. Five parameters:  The interest rate for the investment, the number of payments for the annuity, the  amount of the payment made each period, the present value of the payments (if this parameter is omitted, it assumes to be 0),  parameter that indicates when the payments are due (if this parameter is omitted, it assumes to be 0. The possible values are: 0 - Payments are due at the end of the period, 1 - Payments are due at the beginning of the period)

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

= Create JavaScript variables to be used in the equations, from GET, or POST parameters, SESSION variables, or COOKIES =

The icon with the "X" symbol, that appears when editing the contents of pages or posts, inserts a shortcode in the content with the structure:

[CP_CALCULATED_FIELDS_VAR name="..."]

The ... symbol should be replaced by the parameter or variable name, and will be the same name of the javascript variable. For example: [CP_CALCULATED_FIELDS_VAR name="varname"]

To restrict the source of variable, define the attribute "from" in the shortcode with any of following values: get, post, session, or cookie. For example, to create the javascript variable: varname, only if exist a session variable with the same name, insert the  shortcode: [CP_CALCULATED_FIELDS_VAR name="varname" from="session"]

After insert the shortcode to create the javascript variable, a valid equation would be: fieldname1*varname

= Tips for calculating prices = 

One of the most frequent uses is for calculating prices. When displaying prices a good you may want to divide the form in two pages, the first one for asking the information needed to calculate the price and in a second page display the calculated field with the price and using the "Instruct. Text" fields for adding the terms, conditions and valid time for the price. 

Note that you can make the "Instruct. Text" fields dependent from the calculated value, that way you can change the text shown to the user depending of the number shown in the calculated price, since frequently the terms, conditions or offers vary according to the price amount.

= Add-Ons - Only available in the Developer version of the plugin =

The list of add-ons available in the plugin, appear in the "Add-ons area" of settings page of the plugin. For enabling the add-ons, simply should tick the corresponding checkboxes, and press the "Activate/Deactivate Addons" button.

= WooCommerce add-on (Beta Version) - Only available in the Developer version of the plugin =

The developer version of the plugin includes the WooCommerce add-on, to integrate the forms created by the "Calculated Fields Form" with the WooCommerce products. The add-on inserts an additional metabox in the WooCommerce products, with two settings fields:

* Enter the ID of the form: Allows select the form that will be associated to the product.
* Calculate the product price through the form: Allows calculate the price of the products through the form.

Note: If you want calculate the price of products through the form, will be required that you select the field of the price in the attribute: "Request cost" in the form's settings.

= SalesForce add-on (Beta Version) - Only available in the Developer version of the plugin =

The add-on allows create new leads in the SalesForce account with the data submitted by the forms. 

To create new leads in SalesForce with the data submitted by a form, be sure that the SalesForce account has enabled the Web-to-lead option, and then go to the form's settings:

* Enter the OID (Organization ID)
* For debugging the lead creation, tick the "Enabling debug" option, and enter the email address where receive the information. For production, untick the debugging option.
* Press the "Add attribute" button, select the Lead attribute, and enter a fixed text, or the name of the field in the form (fieldname#)

Note: The Add-on includes the list of predefined attributes of Leads, but it is possible to enter custom attributes too.

= WebHook add-on (Beta Version) - Only available in the Developer version of the plugin =

The add-on allows posting the submitted information by the forms to WebHooks URLs. With the WebHook add-on it is possible integrate the forms created by the plugin with services like Zapier. The Zapier connects services as important and popular as Zoho CRM, Dropbox, Mailchimp, Evernote, Google Drive, Facebook, Twitter, and more than 300 services([https://zapier.com/zapbook/apps/](https://zapier.com/zapbook/apps/ "Zapier"))

Use this add-on is as simple as entering the WebHooks URLs, through the CFF-WebHook section in the forms settings. To associate a form with multiple WebHooks, simply press the "Add new url" button, to add a new input field.

Note: About Zapier service, select Webhook as the Trigger app, and "Catch Hook" as the trigger for this app.

== Installation ==

To install Calculated Fields Form, follow these steps:

1.	Download and unzip the Calculated Fields Form plugin 
2.	Upload the entire calculated-fields-form/ directory to the /wp-content/plugins/ directory
3.	Activate the Calculated Fields Form plugin through the Plugins menu in WordPress
4.	Configure the settings at the administration menu >> Settings >> Calculated Fields Form
5.	To insert the calculated / contact form into some content or post use the icon that will appear when editing contents

== Frequently Asked Questions ==

= Q: Is the "Calculated Fields Form" plugin compatible with "Autoptimize"? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q214](http://wordpress.dwbooster.com/faq/calculated-fields-form#q214 "Yes, both plugins are compatible...")

= Q: What means each field in the Calculated Fields Form settings area? =

A: The Calculated Fields Form's page contains detailed information about each field and customization:

http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Where can I publish a calculated fields form? =

A: You can publish the forms into pages and posts. The shortcode can be also placed into the template. Other versions of the plugin also allow publishing it as a widget.

= Q: Can I create global variables to be used in the equations? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q199](http://wordpress.dwbooster.com/faq/calculated-fields-form#q199 "Yes, it is possible create global variables in javascript through the shortcode of the plugin")

= Q: Is the form processing an option, for example, to email the form data and calculated results? =

A: The form processing isn't available in the version listed on this directory. There are other versions with form processing, email notifications and payment processing. You can check other versions at http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Which calculation operations are included? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q216](http://wordpress.dwbooster.com/faq/calculated-fields-form#q216 "Mathematical operations, logical operands and more")

= Q: How can I round the calculated result to 2 decimal digits? =

A: Use the "PREC" function/operator for that purpose, example:

    PREC(fieldname4*fieldname5,2)

The above sample rounds the result of fieldname4*fieldname5 to two decimal digits.

= Q: Which are the operations with date values that the plugin allows? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q217](http://wordpress.dwbooster.com/faq/calculated-fields-form#q217 "List and description of date/time operations")
    
= Q: Are there financial operations included in the plugin? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q218](http://wordpress.dwbooster.com/faq/calculated-fields-form#q218 "List and description of financial operations")

= Q: How calculate an amortization? =

A: The CALCULATEAMORTIZATION  is the operation with most complexity in the "Calculated Fields Form" and requires its own section. Please, visit the following link to read a detailed description about the use of CALCULATEAMORTIZATION operation:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q219](http://wordpress.dwbooster.com/faq/calculated-fields-form#q219 "How calculate an amortization?")
 
= Q: How to define an initial date in a date field? =
 
A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q220](http://wordpress.dwbooster.com/faq/calculated-fields-form#q220 "Initializing date/time fields")

= Q: How to change the language on datepicker? = 

A: To use a different language on datepickers will be needed create an additional file and touch some code. Please, visit the following link to read the instructions:  

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q221](http://wordpress.dwbooster.com/faq/calculated-fields-form#q221 "How to change the language on datepicker?")
        
= Q: Is there a way to format the form in a table structure (various fields in the same line) ? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q66](http://wordpress.dwbooster.com/faq/calculated-fields-form#q66 "Formatting a form with table structure")

= Q: How to convert a common button in a submit button? =

A: To convert a common button in a submit button, simply assigns, as part of the onclick event, the snippet of code:

		jQuery(this).closest('form').submit();		
		
 Note: this option is only compatible with the pro and developer versions of the plugin

= Q: How to display an image in a checkbox or radio button? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q222](http://wordpress.dwbooster.com/faq/calculated-fields-form#q222 "Displaying images in checkboxes and radio buttons")

Additionally, to hide the checkboxes and radio buttons, and use only the images for choices selection, open the "/wp-content/plugins/calculated-fields-form/css/stylepublic.css" file in the text editor your choice, and paste the following styles definition at the end of file's content:

#fbuilder input[type="radio"],
#fbuilder input[type="checkbox"]{display:none !important;}

= Q: How to insert an image in the notification emails? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q223](http://wordpress.dwbooster.com/faq/calculated-fields-form#q223 "Inserting images in the notification emails")

= Q: How to replace the image displayed in a Media Field, in function of choice selected in a radio buttons field? = 

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q266](http://wordpress.dwbooster.com/faq/calculated-fields-form#q266 "How to replace the image displayed in a Media Field, in function of choice selected in a radio buttons field?") 

= Q: How to insert changes of lines in the notification emails, when the HTML format is selected? =

A: If you are using the HTML format in the notification emails, you should insert the BR tags for the changes of lines in the emails content:

&lt;BR /&gt;

= Q: In which order are "calculated" the fields? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q79](http://wordpress.dwbooster.com/faq/calculated-fields-form#q79 "Evaluating the equations")

= Q: Can I link the calculated amount to a PayPal payment form? =

A: That feature is available in the pro version that can be acquired at this page http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Non-latin characters aren't being displayed in the calculator form. There is a workaround? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q225](http://wordpress.dwbooster.com/faq/calculated-fields-form#q225 "utf-8")

= Q: The calculated form doesn't appear in the public website. Solution? =

A: In the "throubleshoot area" (located below the list of forms in the settings area) change the "Script load method" from "Classic" to "Direct".

= Q: How to create multi-page forms? =

A: Use the "Page Break" field on the form builder to indicate the new pages on the form.

= Q: How to display the selected values in the slider control? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q228](http://wordpress.dwbooster.com/faq/calculated-fields-form#q228 "Displaying selected values in slider control")

= Q: How to display a summary of entered data in the form? =

A: Insert a summary control and select the fields to be displayed on summary.

= Q: How to highlight the fields in the summary control? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q229](http://wordpress.dwbooster.com/faq/calculated-fields-form#q229 "Highlighting fields in summary controls")

= Q: Could be displayed a summary of submitted fields in the thank you page? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q230](http://wordpress.dwbooster.com/faq/calculated-fields-form#q230 "Displaying the submitted in formation in the thank you page")

= Q: How can I apply CSS styles to the form fields? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q234](http://wordpress.dwbooster.com/faq/calculated-fields-form#q234 "Applying CSS styles to the form fields")

= Q: Is possible modify any of predefined templates included with the plugin? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q231](http://wordpress.dwbooster.com/faq/calculated-fields-form#q231 "Modifying the predefined templates")

= Q: How to create a new template to use with my forms? = 

A: [http://blog.net-factor.com/how-to-create-a-new-template-to-use-with-my-forms/](http://blog.net-factor.com/how-to-create-a-new-template-to-use-with-my-forms/ "How to create a new template to use with my forms?")

= Q: How to hide the fields on forms? =

A: [http://wordpress.dwbooster.com/faq/calculated-fields-form#q232](http://wordpress.dwbooster.com/faq/calculated-fields-form#q232 "Hiding the fields in form")

= Q: Why after assign some of class names: column2, column3, or column4, to a group of fields, the field that follow the group is displayed displaced at right? =

A: If that occur, I recommend to insert a DIV field, immediately after the group of fields, and assign the class name: clear, to the DIV field. The "clear" class is included in the plugin, to clear the fields before and after the DIV field.

= Q: How assign multiple class names to a field? =

A: The class names are assigned to the fields through the attribute: "Add Css Layout Keywords". If you need assign multiple class names to a field, you only should enter the class names separated by space characters. For example: myclass1 myclass2

= Q: What files can be uploaded through the form? =

A: The File control includes an attribute for entering the file extensions that can be uploaded. But, Can be entered any file extension? The answer is NO. The last decision is taken by WordPress. WordPress for security reasons, accepts a specific list of files extensions, but with the file control it is possible restrict this list even more. Furthermore to the files extensions supported by WordPress, it is possible add new types of files. To get the complete list of files supported by default, and how to add new types of files, visit the following link:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q235](http://wordpress.dwbooster.com/faq/calculated-fields-form#q235 "What files can be uploaded through the form?")

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

= Q: My company has different departments( the sales department, and the support group). Could you send a notification email to a representative of each departments when the form be submitted? =

A: Yes, that is possible, you only should enter all emails addresses separated by the comma symbol, through the attribute: "Destination emails", in the form's settings.

= Q: Why the users are not receiving the notification emails if was selected the option for send a copy to the user, and selected the email field, from the form's settings? =

A: If the users are not receiving the notification emails with submission data, the probable reasons are:

1. The email should be sent through SMTP. In this case you should install in your WordPress one of the available plugins for SMTP integration, in the WordPress directory.

2. The web server allows send emails directly, but the email address entered in the "from" attribute, does not belongs to the same domain of the website. In this case, the email services classify the notification email as a possible identity fishing; and the email is deleted by security. You should enter in this attribute an email address belonging to the website's domain.        

= Q: How could be printed the form only and not the complete page? =

A: To print only the form, but not the rest of page, you should insert a button in the form, and paste the snippet of code below, as its onlcick event. Be sure not entering any change of line:

        var w=window.open(null, 'Print_Page', 'scrollbars=yes');jQuery('#fbuilder input').each(function(){var e = jQuery(this);e.attr('value', e.val());});w.document.write(jQuery('#fbuilder').html());w.document.close();w.print();       

= Q: How to disable the dynamic evaluation of the equations, when vary the fields values? =         

A: To disable the dynamic evaluation of the equations in the form, you only should uncheck the option: "Eval dynamically the equations associated to the calculated fields", from the "Form Settings" tab, of form builder. But, should be inserted a button with "calculate" type, to evaluate the equations with an direct action of users.

= Q: I've implemented complex equations, but are not working. What can I do? =

A: The plugin tries to optimize the equations to improves forms performance, and reduce the sequence of equations, but if the equations are not working, I suggest to select any of the calculated field in the form, and untick the option: "Optimize Form Equations"

= Q: How to send specific fields in the notification emails, and not all form fields? =

A: The  notification emails can include all fields submitted by the form (&lt;%INFO%&gt;) or specific files (&lt;%fieldname#%&gt;), furthermore, some other special tags. Please, visit the following link to get the complete list of tags to include in the email:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q244](http://wordpress.dwbooster.com/faq/calculated-fields-form#q244 "How to send specific fields in the notification emails, and not all form fields?")

= Q: How to include my own javascript files to implement my own operations? =

A: The "Calculated Fields Form" plugin, loads dynamically all javascript files included in the directories: "/wp-content/plugins/calculated-fields-form/js/fields-admin/", and  "/wp-content/plugins/calculated-fields-form/js/fields-public/", for the form builder, and the public forms respectively, the files are loaded ordered by its names. So, if you want implement your own operations to be used from the equations, you simply should create a new javascript file in the "/wp-content/plugins/calculated-fields-form/js/fields-public/" directory, with the implementation of your own operations, and then, use the new operations from the equations associated to the calculated fields.

= Q: How to calculate the number of words in a text? = 

A: In my explanation I'll assume that the fieldname1 field is a textarea. The equation in this case would be:

		(function(){	
			var text = 'fieldname1';	
			text = text.replace( /[^\w]/g, ' ' ).replace( /^\s+/, '' ).replace( /\s+$/, '').replace(/\s+/g, ' ');	
			return (text.length) ? text.split(' ').length : 0;	
		})()	

= Q: How to calculate the number of characters in a text, excluding the blank characters? = 

A: In my explanation I'll assume that the fieldname1 field is a textarea. The equation in this case would be:

		(function(){	
			var text = 'fieldname1';	
			text = text.replace( /[\s\t\r\n]/g, '' );	
			return text.length;	
		})()

= Q: How to assign a value to a field that is not a calculated field from an equation? =

A: To enter a value programmatically to a field, that is not a calculated field, will require to assign custom class names to the fields, and edit any of the equations in your form. Please, visit the following link:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q248](http://wordpress.dwbooster.com/faq/calculated-fields-form#q248 "How to assign a value to a field that is not a calculated field from an equation?")

= Q: How to insert a link in the form? =

A: The form builder does not include a field to insert links explicitly in the form, but you can insert a link through an "Instruct. Text" field. Simply insert an "Instruct. Text" field in the form, and then, enter the tag of the link in any of the field's attributes: "Field Label", or "Instructions for User". For example, to insert a link to our website, you should enter the following tag:

&lt;a href="http://wordpress.dwbooster.com"&gt;Visit the website&lt;/a&gt;

= Q: How to define dependencies between fields in the form? =

A: Visit the following link with a tutorial about the use of dependencies between fields in the form,

[http://blog.net-factor.com/how-to-use-dependencies-between-fields-in-the-form/](http://blog.net-factor.com/how-to-use-dependencies-between-fields-in-the-form/ "How to use dependencies between fields in the form?")

= Q: How can be created dependencies with  multiple fields? =

A: To create dependencies that depend of values of multiple fields, will be needed validate the dependencies rules, and display or hide the fields through an equation. Please, visit the following link:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q250](http://wordpress.dwbooster.com/faq/calculated-fields-form#q250 "How can be created dependencies with  multiple fields?")

= Q: How to populate the form fields with URL parameters? =

A: I will explain the implementation through an example. I will assume that the URL parameters are 'productid' and 'productname'. So, I will insert two single text fields in the form, for the product's id, and the product's name, respectively. I will assign a class name to each field for identify the fields in the equations: productidclss, and productnameclss respectively (the class names are assigned to the fields through the attribute: "Add Css Layout Keywords")

Finally, insert a calculated field in the form with the following equation:

	(function(){	
		function urlParam(name){	
			var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);	
			return decodeURI(results[1]) || 0;	
		}	
		jQuery('.productidclss input').val(urlParam('productid'));	
		jQuery('.productnameclss input').val(urlParam('productname'));	
	})()	

The calculated field in this case is an auxiliary field that is not relevant in the form's interface, so I will check the option "Hide Field From Public Page" for the calculated field.

= Q: How to prevent users vary the values of fields, for paying less than the calculated price? = 

A: The form settings include the attribute "Base amount" to define the minimum price allowed. So, if an user manipulates the calculated field for paying less, will be applied the number entered in the "Base amount" attribute.

= Q: How to use the value of a field in the form, as the name of product submitted to PayPal? =

A: Through the attribute: "Paypal product name" in the form's settings, is defined the name of the product to be submitted to PayPal. It is possible to use a fixed text, or the value of a field in the form (for example, suppose that you have a DropDown field, or radio buttons field, to select the product's name), each field has associated a name with the format: fieldname#. For example to use the value of the fieldname1 field, as the product's name, should be entered the text &lt;fiedname1&gt; in the "Paypal product name" attribute.

= Q: How to allow to the users decide the frequency of payments for recurring payments? =

A: Please, read the instructions in the our technical blog.
[http://blog.net-factor.com/published-the-calculated-fields-form-pro-v5-0-21-dev-v5-0-22/](http://blog.net-factor.com/published-the-calculated-fields-form-pro-v5-0-21-dev-v5-0-22/ "How to allow to the users decide the frequency of payments for recurring payments?")

= Q: How to select a choice in a DropDown field, or Radio Button, based on calculated value? =

A: Please, read the answer in the our technical blog: 
[http://blog.net-factor.com/how-to-select-a-choice-in-a-dropdown-field-or-radio-button-based-on-calculated-value/](http://blog.net-factor.com/how-to-select-a-choice-in-a-dropdown-field-or-radio-button-based-on-calculated-value/ "How to select a choice in a DropDown field, or Radio Button, based on calculated value?")

= Q: How to use a session variable in the equations? =

A: Please, read the answer in the FAQ entry: 
[http://wordpress.dwbooster.com/faq/calculated-fields-form#q268](http://wordpress.dwbooster.com/faq/calculated-fields-form#q268 "How to use a session variable in the equations?")

= Q: How to use cookie variables in the equations? =

A: Please, read the answer in the FAQ entry: 
[http://wordpress.dwbooster.com/faq/calculated-fields-form#q269](http://wordpress.dwbooster.com/faq/calculated-fields-form#q269 "How to use cookie variables in the equations?")

= Q: How to use a parameter passed by post in the equations? =

A: Please, read the answer in the FAQ entry: 
[http://wordpress.dwbooster.com/faq/calculated-fields-form#q270](http://wordpress.dwbooster.com/faq/calculated-fields-form#q270 "How to use a parameter passed by post in the equations?")

= Q: How to use a parameter passed by get in the equations? =

A: Please, read the answer in the FAQ entry: 
[http://wordpress.dwbooster.com/faq/calculated-fields-form#q271](http://wordpress.dwbooster.com/faq/calculated-fields-form#q271 "How to use a parameter passed by get in the equations?")

= Q: How to use the data submitted by a form in another one? =

A: Please, read the instructions in the our technical blog.

[http://blog.net-factor.com/how-to-use-the-data-submitted-by-a-form-in-another-one/](http://blog.net-factor.com/how-to-use-the-data-submitted-by-a-form-in-another-one/ "How to use the data submitted by a form in another one?")

= Q: How to store the data sent on a different database? = 

A: Please, read the instructions in the our technical blog.

[http://blog.net-factor.com/how-store-data-sent-different-database/](http://blog.net-factor.com/how-store-data-sent-different-database/ "How to store the data sent on a different database?")

= Q: How integrate the forms with the WooCommerce products? = 

A: The forms should be created as usual, but if you want calculate the price of products through the form, you should select the calculated field in the "Request cost" attribute in the form settings. 

Pay attention, each form has associated a number, that represent the form ID (the first column of forms list, in the settings page of the plugin).

After create the form, is time to edit the product, the addon for WooCommerce includes a new section in the product's settings (the "Calculated Fields Form" section), that allows:

1. Associate the form with the product, entering the form ID , through the "Enter the ID of the form" attribute.
2. If you want calculate the final price of product through the form, check the option: "Calculate the product price through the form".
3. Define a minimum price for products, to avoid selling the products to a lower price than allowed.

The data submitted through the form are available from the Orders section of WooCommerce.

= Q: Why the WooCommerce product is not displaying the "Add to Cart" button? =

A: If you have created the form correctly, and associated it to the product, even if you have configured the product to calculate the price with the form, you will need to assign a price to the product, through the attribute: "Regular Price", or WooCommerce won't display the "Add to Cart" button.

= Q: What is SalesForce, and how to create new leads from my forms? =

A: To get a complete guide about the integration of forms created with the plugin and the SalesForce service, please visit the following link

[http://blog.net-factor.com/what-is-salesforce-and-how-to-create-new-leads-from-my-forms/](http://blog.net-factor.com/what-is-salesforce-and-how-to-create-new-leads-from-my-forms/ "What is SalesForce, and how to create new leads from my forms?")

= Q: How to export the submitted files to DropBox? =

A: Please, visits the following link to get a tutorial to integrate the form with the Dropbox service.

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q272](http://wordpress.dwbooster.com/faq/calculated-fields-form#q272 "How to export the submitted files to DropBox?")

= Q: How to generate a PDF file with the submitted information, and send it as attachment to the user? =

A: Please, visits the following link to get a tutorial:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q273](http://wordpress.dwbooster.com/faq/calculated-fields-form#q273 "How to generate a PDF file with the submitted information, and send it as attachment to the user?")

= Q: How to use a file field with multiple selection from Zapier? =

A: Please, visits the following link to get the answer to your question:

[http://wordpress.dwbooster.com/faq/calculated-fields-form#q274](http://wordpress.dwbooster.com/faq/calculated-fields-form#q274 "How to use a file field with multiple selection from Zapier?")

== Screenshots ==

1. Calculated forms list
2. Inserting a calculated form into a page
3. Sample calculated form
4. Calculated field settings
5. Calculator Form builder
6. Editing general fields
7. Available designs
8. Add-ons section
9. WooCommerce add-on
10. SalesForce add-on
11. WebHook add-on, and its integration with Zapier

== Changelog ==

= 1.0.37 =
* Corrects an issue with float numbers in the equations.

= 1.0.36 =
* Corrects an issue with float numbers in the equations.

= 1.0.35 =
* Improves the process for optimizing the equations.

= 1.0.34 =
* Adds a new predefined layout to the plugin, and modifies the existent.

= 1.0.33 =
* Corrects the location of the tooltips.

= 1.0.32 =
* Modifies all templates to adjust the slider control.

= 1.0.31 =
* Includes a new predefined Layout.

= 1.0.30 =
* Includes a new predefined Layout.

= 1.0.29 =
* The current update modifies the module for parsing numeric values, using the "." symbol as decimals separator in numbers, if the user leaves empty this attribute.

= 1.0.28 =
* Improves the design of the forms for printing.

= 1.0.27 =
* Corrects an issue with the hidden fields, that are displaying their labels when are inserted into a container field.

= 1.0.26 =
* Includes a new template.

= 1.0.25 =
* Modifies the insertion queries.

= 1.0.24 =
* Includes a validation text, for files bigger than size limit defined.

= 1.0.23 =
* Modifies the fields: summary, hidden, and calculated.

= 1.0.22 =
* Modifies the File fields for accepting multiple files in a same file tag.
* Includes new features in the Pro and Dev versions of plugin (http://blog.net-factor.com/xK6dJ)

= 1.0.21 =
* Corrects an issue loading the templates.

= 1.0.20 =
* Corrects an issue with the dependencies in the calculated fields, and where calculated fields are the dependent fields too.
* Sets the focus in the first invalid field, when the validation rules fail.

= 1.0.19 =
* Implements a new icon to insert a shortcode in the contents of pages and posts, to create JavaScript variables from GET, or POST parameters, SESSION variables, or COOKIES.

= 1.0.18 =
* Corrects a PHP notice, for a non initialized variable.

= 1.0.17 =
* Includes the "column" attribute in the container fields (DIV and FIELDSET) to display in columns the fields into the container.
* Improves the detection of the homepage's URL, for loading the resources.
* In the paid versions of the plugin, if WordPress uses SMTP for sending emails, then prevents to use the "phpmailer_init" actions.

= 1.0.16 =
* Modifies the validation rules for limiting infinite or NaN values, in numeric results.

= 1.0.15 =
* Modifies the validation rules for accepting textual values in the calculated fields.

= 1.0.14 =
* Hides the labels and the help for users, in the calculated fields configured as hidden from the public page, to prevent these fields are displayed if the calculated fields are dependent of a radio button, checkbox, or dropdown field, and the choice is selected.

= 1.0.13 =
* Modifies the styles associated to the forms.

= 1.0.12 =
* Increases the plugin's security, using the WordPress Nonces mechanism.
* Allows the installation of the plugin in a WordPress Multisite.

= 1.0.11 =
* Modifies the replacement of numbers in the equations to avoid invalid operations.
* Modifies the database queries to avoid some potential vulnerabilities.

= 1.0.10 =
* Modifies the slider control for accepting decimal numbers.

= 1.0.9 =
* Corrects some issues with the slider control, and enables the drag and drop feature of the slider in the mobile devices.

= 1.0.8 =
* Improves the behavior, and correct and issue with the following controls: date, checkbox, radio button group, and drop-down

= 1.0.7 =
* The current update add the slider control.

= 1.0.6 =
* The current update allows to define the time control as 12 or 24 hours.

= 1.0.5 =
* The fields defined as small or medium, are displayed large in small screens.
* Corrects a conflict with others of our plugins that use the form builder, when both plugins are inserted in the same page.

= 1.0.4 =
* Modifies the media control to insert multiple images in the same form.

= 1.0.3 =
* Modifies the loading process of the javascript files.
* Modifies some styles applied to the forms to improve the appearance of the forms in small screens, like mobiles and tablets.

= 1.0.2 =
* Corrects an issue with the placeholder attribute in the date/time fields
* The reset button clears the fields values in the summary fields
* Improves the performance of the calculated fields

= 1.0.1 =
* Compatibility issues fixed, faster loading
* New configuration settings
* Compatible with all the latest WP versions
* Fixed tags in WP directory

= 1.0 =
* First version released.
* Improved jQuery form builder published

== Upgrade Notice ==

= 1.0.37 =
* Corrects an issue with float numbers in the equations.

Important note: If you are using the Professional version don't update via the WP dashboard but using your personal update link. Contact us if you need further information: http://wordpress.dwbooster.com/support