=== Calculated Fields Form ===
Contributors: codepeople
Donate link: http://wordpress.dwbooster.com/forms/calculated-fields-form
Tags: form,calculated,calculator,form builder,quote calculator,forms,payment calculator,payment,quote,fields,calculated field
Requires at least: 3.0.5
Tested up to: 3.5
Stable tag: 1.0.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Calculated Fields Form is a plugin for creating forms with dynamically calculated fields and display the result.

== Description ==

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
* Supports form separators and comments sections to layout the form in a more friendly way
* Manage multiple forms
* Practical "clone" button to duplicate a form
* Five pre-built practical samples included
* Intuitive and interactive form builder interface

There are five samples already included with the installation:

1. Simple Operations
2. Calculation with Dates (bookings with check-in and check-out dates)
3. Ideal Weight Calculator
4. Pregnancy Calculator
5. Lease Calculator

You can either "**clone**" those forms to complete your own form or create a new form from scratch for your application.

You can **mix text and numbers** into a field. If a field contains a number it will be automatically identified and used for the calculations. The dates are also automatically identified and you can apply operation between them, for example, you can calculate the **number of days between two dates** with a simple operation like "date2-date1" or add some number of days or weeks to a date. To display the result as a date again you can use the CDate operator included in the calculator. The samples #2 and #4 are practical samples.

The form processing isn't included in this version. There are other versions with form processing included and additional features. See the FAQ for more information.

== Installation ==

To install Calculated Fields Form, follow these steps:

1.	Download and unzip the plugin
2.	Upload the entire calculated-fields-form/ directory to the /wp-content/plugins/ directory
3.	Activate the plugin through the Plugins menu in WordPress
4.	Configure the settings at the administration menu >> Settings >> Calculated Fields Form
5.	To insert the contact form into some content or post use the icon that will appear when editing contents

== Frequently Asked Questions ==

= Q: What means each field in the settings area? =

A: The product's page contains detailed information about each field and customization:

http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Where can I publish a calculated fields form? =

A: You can publish the forms into pages and posts. The shortcode can be also placed into the template. Other versions of the plugin also allow publishing it as a widget.

= Q: Is the form processing an option, for example, to email the form data and calculated results? =

A: The form processing isn't available in the version listed on this directory. There are other versions with form processing, email notifications and payment processing. You can check other versions at http://wordpress.dwbooster.com/forms/calculated-fields-form

= Q: Which operations are included? =

A: In addition to the basic and most common operations (+,-,*,/) the following functions are also available: ABS (absolute value), ceil (rounds up to the nearest integer), floor (rounds a downwards to the nearest integer), round (integer round), prec (round with decimal precision), log (logarithm), pow (x to the power of y), sqrt (square root), max (maximun value between two numbers), min (minimum value between two numbers) and cdate (convert a value to display it as a date). For advanced users, the JavaScript ternary operator (condition ? value_if_true : value_if_false) is also supported.

== Screenshots ==

1. Contact forms list
2. Inserting a calculated form into a page
3. Sample calculated form
4. Calculated field settings
5. Form builder
6. Editing general fields

== Changelog ==

= 1.0 =
* First version released.
* Improved jQuery form builder published

= 1.0.1 =
* Compatibility issues fixed, faster loading
* New configuration settings

== Upgrade Notice ==

= 1.0.1 =
Stable version released.