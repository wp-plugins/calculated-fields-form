=== Calculated Fields Form ===
Contributors: codepeople
Donate link: http://wordpress.dwbooster.com/forms/calculated-fields-form
Tags: form,calculated,calculator,form builder,quote calculator,forms,payment calculator,payment,quote,fields,calculated field
Requires at least: 3.0.5
Tested up to: 3.6
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
* Multi pages forms supported. 
* Conditional rules uupported. Useful for creating wizzards.
* Intuitive and interactive form builder interface

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

= Latest Features Added =

* Dependant fields: Fields can be shown/hidden based on other checkboxes, radiobuttons or drop-down selections
* Throubleshoot area to automatically fix conflicts with other scripts on themes or third party plugins and also for special characters support
* Multi page calculated forms
* New validations, fields types and features in the form builder


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

= Fields available in the Calculated Fields Form's form builder = 

The following fields are available:

* Single Line Text: A classic input field for a one-line text.
* Number: A classic input field with validation rules for numeric values.
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
* Calculated field: .. and of course, the calculated field that accepts formulas, functions and many related settings.

New fields may be added at any time, so check the latest version of the plugin since it may have new options.


== Screenshots ==

1. Calculated forms list
2. Inserting a calculated form into a page
3. Sample calculated form
4. Calculated field settings
5. Calculator Form builder
6. Editing general fields

== Changelog ==

= 1.0 =
* First version released.
* Improved jQuery form builder published

= 1.0.1 =
* Compatibility issues fixed, faster loading
* New configuration settings
* Compatible with all the latest WP versions

== Upgrade Notice ==

= 1.0.1 =
Stable version released.