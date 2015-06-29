<?php
/*
Plugin Name: Calculated Fields Form
Plugin URI: http://wordpress.dwbooster.com/forms/calculated-fields-form
Description: Create forms with field values calculated based in other form field values.
Version: 1.0.37
Author: CodePeople.net
Author URI: http://codepeople.net
License: GPL
*/


/* initialization / install / uninstall functions */

function cp_calculatedfieldsf_get_site_url( $admin = false )
{
	$blog = get_current_blog_id();
	if( $admin ) $url = get_admin_url( $blog );		
	else $url = get_home_url( $blog );		
	return rtrim( $url, '/' );
}

// Calculated Fields Form constants

define('CP_CALCULATEDFIELDSF_DEFAULT_DEFER_SCRIPTS_LOADING', (get_option('CP_CFF_LOAD_SCRIPTS',"1") == "1"?true:false) );

define('CP_CALCULATEDFIELDSF_DEFAULT_CURRENCY_SYMBOL','$');
define('CP_CALCULATEDFIELDSF_GBP_CURRENCY_SYMBOL',chr(163)); 
define('CP_CALCULATEDFIELDSF_EUR_CURRENCY_SYMBOL_A','EUR ');
define('CP_CALCULATEDFIELDSF_EUR_CURRENCY_SYMBOL_B',chr(128));

define('CP_CALCULATEDFIELDSF_DEFAULT_form_structure', '[[{"name":"fieldname2","index":0,"title":"Number","predefined":"5","ftype":"fnumber","userhelp":"","csslayout":"","required":false,"size":"small","min":"","max":"","dformat":"digits","formats":["digits","number"]},{"name":"separator1","index":1,"title":"The field below will show the double of the number above.","userhelp":"","ftype":"fSectionBreak","csslayout":""},{"name":"fieldname1","index":2,"title":"Calculated Value","eq":"fieldname2*2","ftype":"fCalculated","userhelp":"","csslayout":"","predefined":"","required":false,"size":"medium","readonly":true}],[{"title":"Calculated Form","description":"Starting form. Basic calculated fields sample. ","formlayout":"top_aligned"}]]');
define('CP_CALCULATEDFIELDSF_DEFAULT_form_structure1', '[[{"name":"fieldname5","index":0,"title":"Simple Sum of two numbers","userhelp":"","ftype":"fSectionBreak","csslayout":""},{"name":"fieldname2","index":1,"title":"First Number","userhelp":"","dformat":"number","min":"","max":"","predefined":"3","ftype":"fnumber","csslayout":"","required":false,"size":"small","formats":["digits","number"]},{"name":"fieldname6","index":2,"title":"Second Number","predefined":"2","ftype":"fnumber","userhelp":"","csslayout":"","required":false,"size":"small","min":"","max":"","dformat":"digits","formats":["digits","number"]},{"name":"fieldname4","index":3,"readonly":true,"title":"Sum","predefined":"","userhelp":"Note: Sum of First Number + Second Number","eq":"fieldname2+fieldname6","ftype":"fCalculated","csslayout":"","required":false,"size":"medium"},{"name":"fieldname7","index":4,"title":"Sum of selected fields","userhelp":"","ftype":"fSectionBreak","csslayout":""},{"choices":["Item A: $10","Item B: $20","Item C: $40"],"choiceSelected":[true,true,false],"name":"fieldname8","index":5,"title":"Select/un-select some items","ftype":"fcheck","userhelp":"","csslayout":"","layout":"one_column","required":false},{"name":"fieldname9","index":6,"title":"Sum of selected items","eq":"fieldname8","ftype":"fCalculated","userhelp":"","csslayout":"","predefined":"","required":false,"size":"medium","readonly":false}],[{"title":"Simple Operations","description":"Below you can test two simple and frequent operations.","formlayout":"top_aligned"}]]');
define('CP_CALCULATEDFIELDSF_DEFAULT_form_structure2', '[[{"name":"fieldname1","index":0,"title":"Check-in","ftype":"fdate","userhelp":"","csslayout":"","predefined":"","size":"medium","required":false,"dformat":"mm/dd/yyyy","showDropdown":false,"dropdownRange":"-10,+10","formats":["mm/dd/yyyy","dd/mm/yyyy"]},{"name":"fieldname2","index":1,"title":"Check-out","ftype":"fdate","userhelp":"","csslayout":"","predefined":"","size":"medium","required":false,"dformat":"mm/dd/yyyy","showDropdown":false,"dropdownRange":"-10,+10","formats":["mm/dd/yyyy","dd/mm/yyyy"]},{"choices":["Parking - $10","Breakfast - $20","Premium Internet Access - $3"],"choiceSelected":[false,false,false],"name":"fieldname3","index":2,"title":"Optional Services","ftype":"fcheck","userhelp":"","csslayout":"","layout":"one_column","required":false},{"name":"fieldname4","index":3,"title":"","userhelp":"Note: The cost of the optional services are per each night.","ftype":"fSectionBreak","csslayout":""},{"name":"fieldname5","index":4,"title":"Total Cost","eq":"abs(fieldname2-fieldname1) * (fieldname3+50)","userhelp":"The formula is: (checkout - checkin) * (optionals + base rate)<br />Without the optional services the formula would be: (checkout-checkin) * base rate","ftype":"fCalculated","csslayout":"","predefined":"","required":false,"size":"medium","readonly":false}],[{"title":"Calculation with Dates","description":"The form below gives a quote for a stay in a hotel based in the check-in date, check-out date and some optional services. The base rate used is $50 per night.","formlayout":"top_aligned"}]]');
define('CP_CALCULATEDFIELDSF_DEFAULT_form_structure3', '[[{"name":"fieldname2","index":0,"title":"Height","userhelp":"In centimeters","dformat":"number","min":"30","max":"250","predefined":"180","ftype":"fnumber","csslayout":"","required":false,"size":"small","formats":["digits","number"]},{"choices":["Male","Female"],"name":"fieldname3","index":1,"choiceSelected":"Male","title":"Sex","ftype":"fdropdown","userhelp":"","csslayout":"","size":"medium","required":false},{"name":"fieldname5","index":2,"title":"Ideal Weight","userhelp":"Formula used:<br />Men: (height - 100)*0.90<br />Woman: (height - 100)*0.85","ftype":"fSectionBreak","csslayout":""},{"name":"fieldname4","index":3,"readonly":true,"title":"Ideal Weight","predefined":"","userhelp":"Note: Based in the above data and formula","eq":"(fieldname2-100)*(fieldname3==\'Male\'?0.90:0.85)","ftype":"fCalculated","csslayout":"","required":false,"size":"medium"}],[{"title":"Ideal Weight Calculator","description":"This sample uses a simple formula but with a conditional rule (if male or female).  The conditional expression is built using the JavaScript ternary operator. It\'s basically as follows: <em>condition ? value_if_true : value_if_false</em>.","formlayout":"top_aligned"}]]');
define('CP_CALCULATEDFIELDSF_DEFAULT_form_structure4', '[[{"name":"fieldname1","index":0,"title":"Enter the first day of last menstrual period","ftype":"fdate","userhelp":"","csslayout":"","predefined":"01/01/2013","size":"medium","required":false,"dformat":"mm/dd/yyyy","showDropdown":false,"dropdownRange":"-10,+10","formats":["mm/dd/yyyy","dd/mm/yyyy"]},{"name":"fieldname4","index":1,"title":"","userhelp":"Note: The dates below are approximate calculations. The real date may be slightly different.","ftype":"fSectionBreak","csslayout":""},{"name":"fieldname5","index":2,"title":"Conception Date","eq":"cdate(fieldname1+14)","userhelp":"","ftype":"fCalculated","csslayout":"","predefined":"","required":false,"size":"medium","readonly":false},{"name":"fieldname6","index":3,"title":"Due Date","eq":"cdate(fieldname1+40*7)","ftype":"fCalculated","userhelp":"","csslayout":"","predefined":"","required":false,"size":"medium","readonly":false}],[{"title":"Pregnancy Calculator","description":"The form below calculates the conception date and due date based in the first day of last menstrual period. The calculated values are converted to date again after the calculation.","formlayout":"top_aligned"}]]');
define('CP_CALCULATEDFIELDSF_DEFAULT_form_structure5', '[[{"name":"fieldname2","index":0,"title":"Loan Amount","userhelp":"","dformat":"number","min":"","max":"","predefined":"20000","ftype":"fnumber","csslayout":"","required":false,"size":"small","formats":["digits","number"]},{"name":"fieldname6","index":1,"title":"Residual Value","userhelp":"","predefined":"10000","ftype":"fnumber","csslayout":"","required":false,"size":"small","min":"","max":"","dformat":"number","formats":["digits","number"]},{"name":"fieldname7","index":2,"predefined":"7.5","title":"Interest Rate %","ftype":"fnumber","userhelp":"","csslayout":"","required":false,"size":"small","min":"","max":"","dformat":"number","formats":["digits","number"]},{"name":"fieldname8","index":3,"title":"Number of Months","dformat":"number","predefined":"36","ftype":"fnumber","userhelp":"","csslayout":"","required":false,"size":"small","min":"","max":"","formats":["digits","number"]},{"name":"fieldname5","index":4,"title":"","userhelp":"Results based in the data entered above:","ftype":"fSectionBreak","csslayout":""},{"name":"fieldname4","index":5,"readonly":true,"title":"Monthly Payment","predefined":"","userhelp":"","eq":"prec((fieldname2*fieldname7/1200*pow(1+fieldname7/1200,fieldname8)-fieldname6*fieldname7/1200)/(pow(1+fieldname7/1200,fieldname8)-1),2)","ftype":"fCalculated","csslayout":"","required":false,"size":"medium","dformat":"number"},{"name":"fieldname9","index":6,"title":"Total Payment","readonly":true,"eq":"prec(fieldname4*fieldname8,2)","ftype":"fCalculated","userhelp":"","csslayout":"","predefined":"","required":false,"size":"medium"},{"name":"fieldname10","index":7,"title":"Interest Amount","eq":"prec(fieldname6+fieldname9-fieldname2,2)","ftype":"fCalculated","userhelp":"","csslayout":"","predefined":"","required":false,"size":"medium","readonly":false}],[{"title":"Lease Calculator","description":"This sample uses a more complex formula for a lease calculator. It includes the \"power\" (pow) and \"precision\" (prec) functions.","formlayout":"top_aligned"}]]');

define('CP_CALCULATEDFIELDSF_DEFAULT_fp_subject', 'Contact from the blog...');
define('CP_CALCULATEDFIELDSF_DEFAULT_fp_inc_additional_info', 'true');
define('CP_CALCULATEDFIELDSF_DEFAULT_fp_return_page', cp_calculatedfieldsf_get_site_url().'/' );
define('CP_CALCULATEDFIELDSF_DEFAULT_fp_message', "The following contact message has been sent:\n\n<%INFO%>\n\n");

define('CP_CALCULATEDFIELDSF_DEFAULT_cu_enable_copy_to_user', 'true');
define('CP_CALCULATEDFIELDSF_DEFAULT_cu_user_email_field', '');
define('CP_CALCULATEDFIELDSF_DEFAULT_cu_subject', 'Confirmation: Message received...');
define('CP_CALCULATEDFIELDSF_DEFAULT_cu_message', "Thank you for your message. We will reply you as soon as possible.\n\nThis is a copy of the data sent:\n\n<%INFO%>\n\nBest Regards.");
define('CP_CALCULATEDFIELDSF_DEFAULT_email_format','text');

define('CP_CALCULATEDFIELDSF_DEFAULT_vs_use_validation', 'true');

define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_required', 'This field is required.');
define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_email', 'Please enter a valid email address.');

define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_datemmddyyyy', 'Please enter a valid date with this format(mm/dd/yyyy)');
define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_dateddmmyyyy', 'Please enter a valid date with this format(dd/mm/yyyy)');
define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_number', 'Please enter a valid number.');
define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_digits', 'Please enter only digits.');
define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_max', 'Please enter a value less than or equal to {0}.');
define('CP_CALCULATEDFIELDSF_DEFAULT_vs_text_min', 'Please enter a value greater than or equal to {0}.');


define('CP_CALCULATEDFIELDSF_DEFAULT_cv_enable_captcha', 'true');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_width', '180');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_height', '60');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_chars', '5');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_font', 'font-1.ttf');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_min_font_size', '25');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_max_font_size', '35');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_noise', '200');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_noise_length', '4');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_background', 'ffffff');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_border', '000000');
define('CP_CALCULATEDFIELDSF_DEFAULT_cv_text_enter_valid_captcha', 'Please enter a valid captcha code.');


define('CP_CALCULATEDFIELDSF_DEFAULT_ENABLE_PAYPAL', 1);
define('CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_MODE', 'production');
define('CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT', '0');
define('CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_IDENTIFY_PRICES', '0');
define('CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_ZERO_PAYMENT', '0');
define('CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_EMAIL','put_your@email_here.com');
define('CP_CALCULATEDFIELDSF_DEFAULT_PRODUCT_NAME','Reservation');
define('CP_CALCULATEDFIELDSF_DEFAULT_COST','25');
define('CP_CALCULATEDFIELDSF_DEFAULT_CURRENCY','USD');
define('CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_LANGUAGE','EN');

// database
define('CP_CALCULATEDFIELDSF_FORMS_TABLE', 'cp_calculated_fields_form_settings');

define('CP_CALCULATEDFIELDSF_DISCOUNT_CODES_TABLE_NAME_NO_PREFIX', "cp_calculated_fields_form_discount_codes");
define('CP_CALCULATEDFIELDSF_DISCOUNT_CODES_TABLE_NAME', @$wpdb->prefix ."cp_calculated_fields_form_discount_codes");

define('CP_CALCULATEDFIELDSF_POSTS_TABLE_NAME_NO_PREFIX', "cp_calculated_fields_form_posts");
define('CP_CALCULATEDFIELDSF_POSTS_TABLE_NAME', @$wpdb->prefix ."cp_calculated_fields_form_posts");
// end Calculated Fields Form constants

// Defined general texts
$cpcff_default_texts_array = array(
    'page_of_text' => array( 
                             'label' => 'Page X of Y (text)',
                             'text' => 'Page {0} of {0}'
                            )
);

if( !function_exists( 'array_replace_recursive' ) )
{
    function array_replace_recursive($array1, $array2)
    {
        foreach( $array2 as $key1 => $val1 )
        {
            if( isset( $array1[ $key1 ] ) )
            {
                if( is_array( $val1 ) )
                {
                    foreach( $val1 as $key2 => $val2)
                    {
                        $array1[ $key1 ][ $key2 ] = $val2;
                    }
                }
                else
                {
                    $array1[ $key1 ] = $val1;
                }
            }
            else
            {
                $array1[ $key1 ] = $val1;
            }
        }
        return $array1; 
    }
}

// code initialization, hooks
// -----------------------------------------

register_activation_hook(__FILE__,'cp_calculatedfieldsf_install');
add_action( 'init', 'cp_calculated_fields_form_load_resources', 1 );
function cp_calculated_fields_form_load_resources()
	{
		
		if( isset( $_REQUEST[ 'cp_cff_resources' ] ) )
		{
			if( $_REQUEST[ 'cp_cff_resources' ] == 'admin' )
			{
				require_once dirname( __FILE__ ).'/js/fbuilder-loader-admin.php';
			}
			else
			{
				require_once dirname( __FILE__ ).'/js/fbuilder-loader-public.php';
			}
			exit;
		}
	}
	
add_action( 'init', 'cp_calculated_fields_form_check_posted_data', 11 );
    
if ( is_admin() ) {
	if( session_id() == "" ) @session_start();
    add_action('media_buttons', 'set_cp_calculatedfieldsf_insert_button', 100);
    add_action('admin_enqueue_scripts', 'set_cp_calculatedfieldsf_insert_adminScripts', 1);
    add_action('admin_menu', 'cp_calculatedfieldsf_admin_menu');    

    $plugin = plugin_basename(__FILE__);
    add_filter("plugin_action_links_".$plugin, 'cp_calculatedfieldsf_customAdjustmentsLink');
    add_filter("plugin_action_links_".$plugin, 'cp_calculatedfieldsf_settingsLink');
    add_filter("plugin_action_links_".$plugin, 'cp_calculatedfieldsf_helpLink');

    function cp_calculatedfieldsf_admin_menu() {
		add_options_page('Calculated Fields Form Options', 'Calculated Fields Form', 'manage_options', 'cp_calculated_fields_form', 'cp_calculatedfieldsf_html_post_page' );
	}
} else { // if not admin
    add_shortcode( 'CP_CALCULATED_FIELDS', 	   'cp_calculatedfieldsf_filter_content' );        
    add_shortcode( 'CP_CALCULATED_FIELDS_VAR', 'cp_calculatedfieldsf_create_var'     );        
}


// functions
//------------------------------------------

add_action( 'wpmu_new_blog', 'cp_calculatedfieldsf_new_blog', 10, 6);        
 
function cp_calculatedfieldsf_new_blog($blog_id, $user_id, $domain, $path, $site_id, $meta ) {
    global $wpdb;
 
    if (is_plugin_active_for_network('calculated-fields-form/cp_calculatedfieldsf.php')) {
        $old_blog = $wpdb->blogid;
        switch_to_blog($blog_id);
        _cp_calculatedfieldsf_install();
        switch_to_blog($old_blog);
    }
}

function cp_calculatedfieldsf_install($networkwide)  {
	global $wpdb;

	if (function_exists('is_multisite') && is_multisite()) {
		// check if it is a network activation - if so, run the activation function for each blog id
		if ($networkwide) {
	                $old_blog = $wpdb->blogid;
			// Get all blog ids
			$blogids = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
			foreach ($blogids as $blog_id) {
				switch_to_blog($blog_id);
				_cp_calculatedfieldsf_install();
			}
			switch_to_blog($old_blog);
			return;
		}
	}
	_cp_calculatedfieldsf_install();
}

function _cp_calculatedfieldsf_install() {
    global $wpdb;
    
	if( !defined( 'CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email' ) ) define('CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email', get_the_author_meta('user_email', get_current_user_id()) );
    if( !defined( 'CP_CALCULATEDFIELDSF_DEFAULT_fp_destination_emails' ) ) define('CP_CALCULATEDFIELDSF_DEFAULT_fp_destination_emails', CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email);

    $table_name = $wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE;

    $sql = "CREATE TABLE ".$wpdb->prefix.CP_CALCULATEDFIELDSF_POSTS_TABLE_NAME_NO_PREFIX." (
         id mediumint(9) NOT NULL AUTO_INCREMENT,
         formid INT NOT NULL,
         time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
         ipaddr VARCHAR(32) DEFAULT '' NOT NULL,
         notifyto VARCHAR(250) DEFAULT '' NOT NULL,
         data text,
         paypal_post text,
         paid INT DEFAULT 0 NOT NULL,
         UNIQUE KEY id (id)
         );";
    $wpdb->query($sql);

    $sql = "CREATE TABLE ".$wpdb->prefix.CP_CALCULATEDFIELDSF_DISCOUNT_CODES_TABLE_NAME_NO_PREFIX." (
         id mediumint(9) NOT NULL AUTO_INCREMENT,
         form_id mediumint(9) NOT NULL DEFAULT 1,
         code VARCHAR(250) DEFAULT '' NOT NULL,
         discount VARCHAR(250) DEFAULT '' NOT NULL,
         expires datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,       
         availability int(10) unsigned NOT NULL DEFAULT 0,
         used int(10) unsigned NOT NULL DEFAULT 0,
         UNIQUE KEY id (id)
         );";             
    $wpdb->query($sql); 


    $sql = "CREATE TABLE $table_name (
         id mediumint(9) NOT NULL AUTO_INCREMENT,

         form_name VARCHAR(250) DEFAULT '' NOT NULL,

         form_structure mediumtext,

         fp_from_email VARCHAR(250) DEFAULT '' NOT NULL,
         fp_destination_emails text,
         fp_subject VARCHAR(250) DEFAULT '' NOT NULL,
         fp_inc_additional_info VARCHAR(10) DEFAULT '' NOT NULL,
         fp_return_page VARCHAR(250) DEFAULT '' NOT NULL,
         fp_message text,
         fp_emailformat VARCHAR(10) DEFAULT '' NOT NULL,

         cu_enable_copy_to_user VARCHAR(10) DEFAULT '' NOT NULL,
         cu_user_email_field VARCHAR(250) DEFAULT '' NOT NULL,
         cu_subject VARCHAR(250) DEFAULT '' NOT NULL,
         cu_message text,
         cu_emailformat VARCHAR(10) DEFAULT '' NOT NULL,

         vs_use_validation VARCHAR(10) DEFAULT '' NOT NULL,
         vs_text_is_required VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_is_email VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_datemmddyyyy VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_dateddmmyyyy VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_number VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_digits VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_max VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_min VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_submitbtn VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_previousbtn VARCHAR(250) DEFAULT '' NOT NULL,
         vs_text_nextbtn VARCHAR(250) DEFAULT '' NOT NULL,         
         vs_all_texts text DEFAULT '' NOT NULL,         
         
         enable_paypal varchar(10) DEFAULT '' NOT NULL,
         paypal_email varchar(255) DEFAULT '' NOT NULL ,
         request_cost varchar(255) DEFAULT '' NOT NULL ,
         paypal_product_name varchar(255) DEFAULT '' NOT NULL,
         currency varchar(10) DEFAULT '' NOT NULL,
         paypal_language varchar(10) DEFAULT '' NOT NULL,
         paypal_mode varchar(20) DEFAULT '' NOT NULL ,
         paypal_recurrent varchar(20) DEFAULT '' NOT NULL ,
         paypal_identify_prices varchar(20) DEFAULT '' NOT NULL ,
         paypal_zero_payment varchar(10) DEFAULT '' NOT NULL ,

         cv_enable_captcha VARCHAR(20) DEFAULT '' NOT NULL,
         cv_width VARCHAR(20) DEFAULT '' NOT NULL,
         cv_height VARCHAR(20) DEFAULT '' NOT NULL,
         cv_chars VARCHAR(20) DEFAULT '' NOT NULL,
         cv_font VARCHAR(20) DEFAULT '' NOT NULL,
         cv_min_font_size VARCHAR(20) DEFAULT '' NOT NULL,
         cv_max_font_size VARCHAR(20) DEFAULT '' NOT NULL,
         cv_noise VARCHAR(20) DEFAULT '' NOT NULL,
         cv_noise_length VARCHAR(20) DEFAULT '' NOT NULL,
         cv_background VARCHAR(20) DEFAULT '' NOT NULL,
         cv_border VARCHAR(20) DEFAULT '' NOT NULL,
         cv_text_enter_valid_captcha VARCHAR(200) DEFAULT '' NOT NULL,

         UNIQUE KEY id (id)
         );";
    $wpdb->query($sql);

    $count = $wpdb->get_var(  "SELECT COUNT(id) FROM ".$table_name  );
    if (!$count)
    {   
		$values = array( 'fp_from_email' => CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email,
                         'fp_destination_emails' => CP_CALCULATEDFIELDSF_DEFAULT_fp_destination_emails,
                         'fp_subject' => CP_CALCULATEDFIELDSF_DEFAULT_fp_subject,
                         'fp_inc_additional_info' => CP_CALCULATEDFIELDSF_DEFAULT_fp_inc_additional_info,
                         'fp_return_page' => CP_CALCULATEDFIELDSF_DEFAULT_fp_return_page,
                         'fp_message' => CP_CALCULATEDFIELDSF_DEFAULT_fp_message,
                         'fp_emailformat' => CP_CALCULATEDFIELDSF_DEFAULT_email_format,

                         'cu_enable_copy_to_user' => CP_CALCULATEDFIELDSF_DEFAULT_cu_enable_copy_to_user,
                         'cu_user_email_field' => CP_CALCULATEDFIELDSF_DEFAULT_cu_user_email_field,
                         'cu_subject' => CP_CALCULATEDFIELDSF_DEFAULT_cu_subject,
                         'cu_message' => CP_CALCULATEDFIELDSF_DEFAULT_cu_message,
                         'cu_emailformat' => CP_CALCULATEDFIELDSF_DEFAULT_email_format,

                         'vs_use_validation' => CP_CALCULATEDFIELDSF_DEFAULT_vs_use_validation,
                         'vs_text_is_required' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_required,
                         'vs_text_is_email' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_email,
                         'vs_text_datemmddyyyy' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_datemmddyyyy,
                         'vs_text_dateddmmyyyy' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_dateddmmyyyy,
                         'vs_text_number' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_number,
                         'vs_text_digits' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_digits,
                         'vs_text_max' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_max,
                         'vs_text_min' => CP_CALCULATEDFIELDSF_DEFAULT_vs_text_min,
                         'vs_text_submitbtn' => 'Submit',
                         'vs_text_previousbtn' => 'Previous',
                         'vs_text_nextbtn' => 'Next',                         
                         
                         'enable_paypal' => CP_CALCULATEDFIELDSF_DEFAULT_ENABLE_PAYPAL,
                         'paypal_email' => CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_EMAIL,
                         'request_cost' => CP_CALCULATEDFIELDSF_DEFAULT_COST,
                         'paypal_product_name' => CP_CALCULATEDFIELDSF_DEFAULT_PRODUCT_NAME,
                         'currency' => CP_CALCULATEDFIELDSF_DEFAULT_CURRENCY,
                         'paypal_language' => CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_LANGUAGE,                                      
                         'paypal_mode' => CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_MODE,
                         'paypal_recurrent' => CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT,
                         'paypal_identify_prices' => CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_IDENTIFY_PRICES,
                         'paypal_zero_payment' => CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_ZERO_PAYMENT,

                         'cv_enable_captcha' => CP_CALCULATEDFIELDSF_DEFAULT_cv_enable_captcha,
                         'cv_width' => CP_CALCULATEDFIELDSF_DEFAULT_cv_width,
                         'cv_height' => CP_CALCULATEDFIELDSF_DEFAULT_cv_height,
                         'cv_chars' => CP_CALCULATEDFIELDSF_DEFAULT_cv_chars,
                         'cv_font' => CP_CALCULATEDFIELDSF_DEFAULT_cv_font,
                         'cv_min_font_size' => CP_CALCULATEDFIELDSF_DEFAULT_cv_min_font_size,
                         'cv_max_font_size' => CP_CALCULATEDFIELDSF_DEFAULT_cv_max_font_size,
                         'cv_noise' => CP_CALCULATEDFIELDSF_DEFAULT_cv_noise,
                         'cv_noise_length' => CP_CALCULATEDFIELDSF_DEFAULT_cv_noise_length,
                         'cv_background' => CP_CALCULATEDFIELDSF_DEFAULT_cv_background,
                         'cv_border' => CP_CALCULATEDFIELDSF_DEFAULT_cv_border,
                         'cv_text_enter_valid_captcha' => CP_CALCULATEDFIELDSF_DEFAULT_cv_text_enter_valid_captcha
                        );
        $values['id'] = 1;
        $values['form_name'] = 'Simple Operations';
        $values['form_structure'] = CP_CALCULATEDFIELDSF_DEFAULT_form_structure1;
        $wpdb->insert( $table_name, $values );   
        $values['id'] = 2;
        $values['form_name'] = 'Calculation with Dates';
        $values['form_structure'] = CP_CALCULATEDFIELDSF_DEFAULT_form_structure2;
        $wpdb->insert( $table_name, $values );   
        $values['id'] = 3;
        $values['form_name'] = 'Ideal Weight Calculator';
        $values['form_structure'] = CP_CALCULATEDFIELDSF_DEFAULT_form_structure3;
        $wpdb->insert( $table_name, $values );
        $values['id'] = 4;
        $values['form_name'] = 'Pregnancy Calculator';
        $values['form_structure'] = CP_CALCULATEDFIELDSF_DEFAULT_form_structure4;
        $wpdb->insert( $table_name, $values );     
        $values['id'] = 5;
        $values['form_name'] = 'Lease Calculator';
        $values['form_structure'] = CP_CALCULATEDFIELDSF_DEFAULT_form_structure5;
        $wpdb->insert( $table_name, $values );
    }    
}

/**
 * Create a javascript variable, from: Post, Get, Session or Cookie 
 */
function cp_calculatedfieldsf_create_var( $atts ) {
	if( isset( $atts[ 'name' ] ) )
	{
		$var = trim( $atts[ 'name' ] );
		if( !empty( $var ) )
		{
			$from = '_';
			if( session_id() == "" ) @session_start();	
			if( isset( $atts[ 'from' ] ) ) $from .= strtoupper( trim( $atts[ 'from' ] ) );
			if( in_array( $from, array( '_POST', '_GET', '_SESSION', '_COOKIE' ) ) )
			{
				if( isset( $GLOBALS[ $from ][ $var ] ) ) $value = $GLOBALS[ $from ][ $var ];
			}
			else
			{	
				if( isset( $_POST[ $var ] ) ) 			$value = $_POST[ $var ];
				elseif( isset( $_GET[ $var ] ) ) 		$value = $_GET[ $var ];
				elseif( isset( $_SESSION[ $var ] ) )	$value = $_SESSION[ $var ];
				elseif( isset( $_COOKIE[ $var ] ) )		$value = $_COOKIE[ $var ];
			}
			
			if( isset( $value ) )
			{
				return '
				<script>
					var '.$var.'='.json_encode( $value ).';
				</script>
				';
			}	
		}	
	}	
} // End cp_calculatedfieldsf_create_var

function cp_calculatedfieldsf_filter_content( $atts ) {
    global $wpdb;	
    if( empty( $atts[ 'id' ] ) )
	{
        $atts[ 'id' ] = '';
    }
    ob_start();  
    cp_calculatedfieldsf_get_public_form($atts[ 'id' ]);
    $buffered_contents = ob_get_contents();
    if( count( $atts ) > 1 )
    {
        $buffered_contents .= '<script>'; 
        foreach( $atts as $i => $v )
        {
            if( $i != 'id' && !is_numeric( $i ) )
            {
                $buffered_contents .= $i.'='.( ( is_numeric( $v ) ) ? $v : '"'.addcslashes( $v, '"' ).'"' ).';';
            }
        }
        $buffered_contents .= '</script>';
    }
    ob_end_clean();       
    return $buffered_contents;
}

$CP_CFF_global_form_count_number = 0;
$CP_CFF_global_form_count = "_".$CP_CFF_global_form_count_number;

function cp_calculatedfieldsf_available_templates(){	
	global $CP_CFF_global_templates;
	
	if( empty( $CP_CFF_global_templates ) )
	{
		// Get available designs
		$tpls_dir = dir( plugin_dir_path( __FILE__ ).'templates' );
		$CP_CFF_global_templates = array();
		while( false !== ( $entry = $tpls_dir->read() ) ) 
		{    
			if ( $entry != '.' && $entry != '..' && is_dir( $tpls_dir->path.'/'.$entry ) && file_exists( $tpls_dir->path.'/'.$entry.'/config.ini' ) )
			{
				if( ( $ini_array = parse_ini_file( $tpls_dir->path.'/'.$entry.'/config.ini' ) ) !== false )
				{
					if( !empty( $ini_array[ 'file' ] ) ) $ini_array[ 'file' ] = plugins_url( 'templates/'.$entry.'/'.$ini_array[ 'file' ], __FILE__ );
					if( !empty( $ini_array[ 'js' ] ) ) $ini_array[ 'js' ] = plugins_url( 'templates/'.$entry.'/'.$ini_array[ 'js' ], __FILE__ );					
					if( !empty( $ini_array[ 'thumbnail' ] ) ) $ini_array[ 'thumbnail' ] = plugins_url( 'templates/'.$entry.'/'.$ini_array[ 'thumbnail' ], __FILE__ );
					$CP_CFF_global_templates[ $ini_array[ 'prefix' ] ] = $ini_array;
				}
			}			
		}
	}
		
	return $CP_CFF_global_templates;
}

function cp_calculatedfieldsf_get_public_form($id) {
    global $wpdb, $cpcff_default_texts_array;
    global $CP_CFF_global_form_count;
    global $CP_CFF_global_form_count_number;
    
    $CP_CFF_global_form_count_number++;
    $CP_CFF_global_form_count = "_".$CP_CFF_global_form_count_number;    
    if ( !defined('CP_AUTH_INCLUDE') ) define('CP_AUTH_INCLUDE', true); 
    
    if ($id != '')
        $myrows = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM ".$wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE." WHERE id=%d",$id ) );
    else
        $myrows = $wpdb->get_results( "SELECT * FROM ".$wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE );
    
    $previous_label = cp_calculatedfieldsf_get_option('vs_text_previousbtn', 'Previous',$id);
    $previous_label = ($previous_label==''?'Previous':$previous_label);
    $next_label = cp_calculatedfieldsf_get_option('vs_text_nextbtn', 'Next',$id);
    $next_label = ($next_label==''?'Next':$next_label);
    
    $cpcff_texts_array = cp_calculatedfieldsf_get_option( 'vs_all_texts', $cpcff_default_texts_array, $id );
    $cpcff_texts_array = array_replace_recursive( 
        $cpcff_default_texts_array, 
        ( is_string( $cpcff_texts_array ) && is_array( unserialize( $cpcff_texts_array ) ) ) 
            ? unserialize( $cpcff_texts_array ) 
            : ( ( is_array( $cpcff_texts_array ) ) ? $cpcff_texts_array : array() )
    );
    $page_of_label = $cpcff_texts_array[ 'page_of_text' ][ 'text' ];
    
    if (CP_CALCULATEDFIELDSF_DEFAULT_DEFER_SCRIPTS_LOADING)
    {        
        wp_deregister_script('query-stringify');
        wp_register_script('query-stringify', plugins_url('/js/jQuery.stringify.js', __FILE__));
        
        wp_deregister_script('cp_calculatedfieldsf_validate_script');
        wp_register_script('cp_calculatedfieldsf_validate_script', plugins_url('/js/jquery.validate.js', __FILE__));
        
        wp_enqueue_script( 'cp_calculatedfieldsf_buikder_script', 
        cp_calculatedfieldsf_get_site_url().( ( strpos( cp_calculatedfieldsf_get_site_url(),'?' ) === false ) ? '/?' : '&' ).'cp_cff_resources=public',array("jquery","jquery-ui-core","jquery-ui-button","jquery-ui-datepicker","jquery-ui-widget","jquery-ui-position","jquery-ui-tooltip","query-stringify","cp_calculatedfieldsf_validate_script", "jquery-ui-slider"), false, true );    
        
        if ($id == '') $id = $myrows[0]->id;
        wp_localize_script('cp_calculatedfieldsf_buikder_script', 'cp_calculatedfieldsf_fbuilder_config'.$CP_CFF_global_form_count, array('obj'  	=>
        '{"pub":true,"identifier":"'.$CP_CFF_global_form_count.'","messages": {
        	                	"required": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_is_required', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_required,$id)).'",
        	                	"email": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_is_email', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_email,$id)).'",
        	                	"datemmddyyyy": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_datemmddyyyy', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_datemmddyyyy,$id)).'",
        	                	"dateddmmyyyy": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_dateddmmyyyy', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_dateddmmyyyy,$id)).'",
        	                	"number": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_number', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_number,$id)).'",
        	                	"digits": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_digits', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_digits,$id)).'",
        	                	"max": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_max', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_max,$id)).'",
        	                	"min": "'.str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_min', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_min,$id)).'",
    	                    	"previous": "'.str_replace(array('"'),array('\\"'),$previous_label).'",
    	                    	"next": "'.str_replace(array('"'),array('\\"'),$next_label).'",
                                "pageof": "'.str_replace(array('"'),array('\\"'),$page_of_label).'"
        	                }}'
        ));    
    }  
    else
    {
        wp_enqueue_script( "jquery" );
        wp_enqueue_script( "jquery-ui-core" );
        wp_enqueue_script( "jquery-ui-datepicker" );        
		wp_enqueue_script( "jquery-ui-slider" );
    }   
    $codes = $wpdb->get_results( $wpdb->prepare( 'SELECT * FROM '.CP_CALCULATEDFIELDSF_DISCOUNT_CODES_TABLE_NAME.' WHERE `form_id`=%d', $id ) );
    @include dirname( __FILE__ ) . '/cp_calculatedfieldsf_public_int.inc.php';
    if (!CP_CALCULATEDFIELDSF_DEFAULT_DEFER_SCRIPTS_LOADING)
    {              
        // This code won't be used in most cases. This code is for preventing problems in wrong WP themes and conflicts with third party plugins.
        $plugin_url = plugins_url('', __FILE__); 
        $prefix_ui = '';
        if ( @file_exists( dirname( _FILE_ ).'/../../../wp-includes/js/jquery/ui/jquery.ui.core.min.js' ) )
        $prefix_ui = 'jquery.ui.';
    ?>
     <script> if( typeof jQuery != 'undefined' ) var jQueryBK = jQuery.noConflict(); </script>
     <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/jquery.js'; ?>'></script>
     <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'core.min.js'; ?>'></script>
     <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'datepicker.min.js'; ?>'></script>
	 <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'widget.min.js'; ?>'></script>
     <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'position.min.js'; ?>'></script> 
     <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'tooltip.min.js'; ?>'></script>
     <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'mouse.min.js'; ?>'></script>
	 <script type='text/javascript' src='<?php echo $plugin_url.'/../../../wp-includes/js/jquery/ui/'.$prefix_ui.'slider.min.js'; ?>'></script>
	 
     <script> 
        var fbuilderjQuery = jQuery.noConflict( ); 
        if( typeof jQueryBK != 'undefined' ) jQuery = jQueryBK;
     </script>
     <script type='text/javascript' src='<?php echo plugins_url('js/jQuery.stringify.js', __FILE__); ?>'></script>
     <script type='text/javascript' src='<?php echo plugins_url('js/jquery.validate.js', __FILE__); ?>'></script>
     <script type='text/javascript'>     
     /* <![CDATA[ */
     var cp_calculatedfieldsf_fbuilder_config<?php echo $CP_CFF_global_form_count; ?> = {"obj":"{\"pub\":true,\"identifier\":\"<?php echo $CP_CFF_global_form_count; ?>\",\"messages\": {\n    \t                \t\"required\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_is_required', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_required,$id));?>\",\n    \t                \t\"email\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_is_email', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_email,$id));?>\",\n    \t                \t\"datemmddyyyy\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_datemmddyyyy', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_datemmddyyyy,$id));?>\",\n    \t                \t\"dateddmmyyyy\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_dateddmmyyyy', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_dateddmmyyyy,$id));?>\",\n    \t                \t\"number\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_number', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_number,$id));?>\",\n    \t                \t\"digits\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_digits', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_digits,$id));?>\",\n    \t                \t\"max\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_max', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_max,$id));?>\",\n    \t                \t\"min\": \"<?php echo str_replace(array('"'),array('\\"'),cp_calculatedfieldsf_get_option('vs_text_min', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_min,$id));?>\",\"previous\": \"<?php echo str_replace(array('"'),array('\\"'),$previous_label); ?>\",\"next\": \"<?php echo str_replace(array('"'),array('\\"'),$next_label); ?>\",\"pageof\": \"<?php echo str_replace(array('"'),array('\\"'),$page_of_label); ?>\"\n    \t                }}"};
     /* ]]> */
     </script>     
     <script type='text/javascript' src='<?php echo cp_calculatedfieldsf_get_site_url().( ( strpos( cp_calculatedfieldsf_get_site_url(),'?' ) === false ) ? '/?' : '&' ).'cp_cff_resources=public'; ?>'></script>
<?php
    }    
}


function cp_calculatedfieldsf_settingsLink($links) {
    $settings_link = '<a href="options-general.php?page=cp_calculated_fields_form">'.__('Settings').'</a>';
	array_unshift($links, $settings_link);
	return $links;
}


function cp_calculatedfieldsf_helpLink($links) {
    $help_link = '<a href="http://wordpress.dwbooster.com/forms/calculated-fields-form">'.__('Help').'</a>';
	array_unshift($links, $help_link);
	return $links;
}


function cp_calculatedfieldsf_customAdjustmentsLink($links) {
    $customAdjustments_link = '<a href="http://wordpress.dwbooster.com/contact-us">'.__('Request custom changes').'</a>';
	array_unshift($links, $customAdjustments_link);
	return $links;
}


function set_cp_calculatedfieldsf_insert_button() {
    print '<a href="javascript:cp_calculatedfieldsf_insertForm();" title="'.__('Insert Calculated Fields Form').'"><img src="'.plugins_url('/images/cp_form.gif', __FILE__).'" alt="'.__('Insert Calculated Fields Form').'" /></a>';
	
	print '<a href="javascript:cp_calculatedfieldsf_insertVar();" title="'.__('Create a JavaScript var from POST, GET, SESSION, or COOKIE var').'"><img src="'.plugins_url('/images/cp_var.gif', __FILE__).'" alt="'.__('Create a JavaScript var from POST, GET, SESSION, or COOKIE var').'" /></a>';
}


function cp_calculatedfieldsf_html_post_page() {
    if (isset($_GET["cal"]) && $_GET["cal"] != '')
    {
        @include_once dirname( __FILE__ ) . '/cp_calculatedfieldsf_admin_int.php';
    }    
    else
        @include_once dirname( __FILE__ ) . '/cp_calculatedfieldsf_admin_int_list.inc.php';        
}


function set_cp_calculatedfieldsf_insert_adminScripts($hook) {
    if ( isset($_GET["page"]) && $_GET["page"] == "cp_calculated_fields_form" )
    {        
        wp_deregister_script('query-stringify');
        wp_register_script('query-stringify', plugins_url('/js/jQuery.stringify.js', __FILE__));
		
		wp_enqueue_script( "jquery" );
		wp_enqueue_script( "jquery-ui-core" );
		wp_enqueue_script( "jquery-ui-sortable" );
		wp_enqueue_script( "jquery-ui-tabs" );
		wp_enqueue_script( "jquery-ui-droppable" );
		wp_enqueue_script( "jquery-ui-button" );
		wp_enqueue_script( "jquery-ui-datepicker" );
		wp_enqueue_script( "query-stringify" );

        wp_enqueue_script( 'cp_calculatedfieldsf_buikder_script', cp_calculatedfieldsf_get_site_url( true ).'/?cp_cff_resources=admin', array("jquery","jquery-ui-core","jquery-ui-sortable","jquery-ui-tabs","jquery-ui-droppable","jquery-ui-button","jquery-ui-datepicker","query-stringify") );

		wp_enqueue_script( 'cp_calculatedfieldsf_buikder_script_caret', plugins_url('/js/jquery.caret.js', __FILE__),array("jquery"));
        wp_enqueue_style('jquery-style', 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.2/themes/smoothness/jquery-ui.css');
    }    

    if( 'post.php' != $hook  && 'post-new.php' != $hook )
        return;
    wp_enqueue_script( 'cp_calculatedfieldsf_script', plugins_url('/cp_calculatedfieldsf_scripts.js', __FILE__) );
}


function cp_calculatedfieldsf_cleanJSON($str)
{
    $str = str_replace('&qquot;','"',$str);
    $str = str_replace('	',' ',$str);
    $str = str_replace("\n",'\n',$str);
    $str = str_replace("\r",'',$str);    
    return $str;
}


function cp_calculated_fields_form_check_posted_data() {
    
    global $wpdb;
        
    if ( 'POST' == $_SERVER['REQUEST_METHOD'] && isset( $_POST['cp_calculatedfieldsf_post_options'] ) && is_admin() )
    {
        cp_calculatedfieldsf_save_options();
		if( isset( $_POST[ 'preview' ] ) )
		{
			print '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body>'; 
			print( cp_calculatedfieldsf_filter_content( array( 'id' => $_POST[ 'cp_calculatedfieldsf_id' ] ) ));
			wp_footer();
			print '</body></html>';
			exit;
		}	
		return;
    }
}            


function cp_calculatedfieldsf_save_options() 
{
	check_admin_referer( 'session_id_'.session_id(), '_cpcff_nonce' );
    global $wpdb;
    if (!defined('CP_CALCULATEDFIELDSF_ID'))
        define ('CP_CALCULATEDFIELDSF_ID',$_POST["cp_calculatedfieldsf_id"]);    
    
   /**
    $sql = "ALTER TABLE  `".$wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE."` CHANGE `form_structure` `form_structure` mediumtext"; 
    $wpdb->query($sql);
   */
    cp_calculatedfieldsf_add_field_verify($wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE,'vs_text_previousbtn'," varchar(250) NOT NULL default ''");
    cp_calculatedfieldsf_add_field_verify($wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE,'vs_text_nextbtn'," varchar(250) NOT NULL default ''");   
    
    cp_calculatedfieldsf_add_field_verify($wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE,'vs_all_texts'," text NOT NULL default ''");
    
    global $cpcff_default_texts_array;
    $cpcff_text_array = '';
        
    if( isset( $_POST[ 'cpcff_text_array' ] ) )
    {
        foreach( $_POST[ 'cpcff_text_array' ] as $cpcff_text_index => $cpcff_text_attr )
        {
            $_POST[ 'cpcff_text_array' ][ $cpcff_text_index ][ 'text' ] = stripcslashes( $cpcff_text_attr[ 'text' ] );
        }
        $cpcff_text_array = $_POST[ 'cpcff_text_array' ];
        unset( $_POST[ 'cpcff_text_array' ] );
        
    }
        
    foreach ($_POST as $item => $value)    
        $_POST[$item] = stripcslashes($value);

    $data = array(
                  'form_structure' => $_POST['form_structure'],

                  'fp_from_email' => $_POST['fp_from_email'],
                  'fp_destination_emails' => $_POST['fp_destination_emails'],
                  'fp_subject' => $_POST['fp_subject'],
                  'fp_inc_additional_info' => $_POST['fp_inc_additional_info'],
                  'fp_return_page' => $_POST['fp_return_page'],
                  'fp_message' => $_POST['fp_message'],
                  'fp_emailformat' => $_POST['fp_emailformat'],

                  'cu_enable_copy_to_user' => $_POST['cu_enable_copy_to_user'],
                  'cu_user_email_field' => (isset($_POST['cu_user_email_field'])?$_POST['cu_user_email_field']:''),
                  'cu_subject' => $_POST['cu_subject'],
                  'cu_message' => $_POST['cu_message'],
                  'cu_emailformat' => $_POST['cu_emailformat'],
                  
                  'enable_paypal' => @$_POST["enable_paypal"],
                  'paypal_email' => $_POST["paypal_email"],
                  'request_cost' => $_POST["request_cost"],
                  'paypal_product_name' => $_POST["paypal_product_name"],
                  'currency' => $_POST["currency"],
                  'paypal_language' => $_POST["paypal_language"],
                  'paypal_mode' => $_POST["paypal_mode"],
                  'paypal_recurrent' => $_POST["paypal_recurrent"],
                  'paypal_identify_prices' => (isset($_POST['paypal_identify_prices'])?$_POST['paypal_identify_prices']:'0'),
                  'paypal_zero_payment' => $_POST["paypal_zero_payment"],

                  'vs_use_validation' => $_POST['vs_use_validation'],
                  'vs_text_is_required' => $_POST['vs_text_is_required'],
                  'vs_text_is_email' => $_POST['vs_text_is_email'],
                  'vs_text_datemmddyyyy' => $_POST['vs_text_datemmddyyyy'],
                  'vs_text_dateddmmyyyy' => $_POST['vs_text_dateddmmyyyy'],
                  'vs_text_number' => $_POST['vs_text_number'],
                  'vs_text_digits' => $_POST['vs_text_digits'],
                  'vs_text_max' => $_POST['vs_text_max'],
                  'vs_text_min' => $_POST['vs_text_min'],
                  'vs_text_previousbtn' => $_POST['vs_text_previousbtn'],
                  'vs_text_nextbtn' => $_POST['vs_text_nextbtn'],
                  'vs_all_texts' => serialize( $cpcff_text_array ),

                  'cv_enable_captcha' => $_POST['cv_enable_captcha'],
                  'cv_width' => $_POST['cv_width'],
                  'cv_height' => $_POST['cv_height'],
                  'cv_chars' => $_POST['cv_chars'],
                  'cv_font' => $_POST['cv_font'],
                  'cv_min_font_size' => $_POST['cv_min_font_size'],
                  'cv_max_font_size' => $_POST['cv_max_font_size'],
                  'cv_noise' => $_POST['cv_noise'],
                  'cv_noise_length' => $_POST['cv_noise_length'],
                  'cv_background' => $_POST['cv_background'],
                  'cv_border' => $_POST['cv_border'],
                  'cv_text_enter_valid_captcha' => $_POST['cv_text_enter_valid_captcha']
    );
    $wpdb->update ( 
		$wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE, 
		$data, 
		array( 'id' => CP_CALCULATEDFIELDSF_ID ),
		array( '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s' ),
		array( '%d' )
	);
}


function cp_calculatedfieldsf_add_field_verify ($table, $field, $type = "text") 
{
    global $wpdb;
    $results = $wpdb->get_results("SHOW columns FROM `".$table."` where field='".$field."'");    
    if (!count($results))
    {               
        $sql = "ALTER TABLE  `".$table."` ADD `".$field."` ".$type; 
        $wpdb->query($sql);
    }
}


// cp_calculatedfieldsf_get_option:
$cp_calculatedfieldsf_option_buffered_item = false;
$cp_calculatedfieldsf_option_buffered_id = -1;

function cp_calculatedfieldsf_get_option ($field, $default_value, $id = '')
{
	$value = '';
    if (!defined("CP_CALCULATEDFIELDSF_ID"))
        define ("CP_CALCULATEDFIELDSF_ID", 1);
    if ($id == '') 
        $id = CP_CALCULATEDFIELDSF_ID;         
    global $wpdb, $cp_calculatedfieldsf_option_buffered_item, $cp_calculatedfieldsf_option_buffered_id;
    if ($cp_calculatedfieldsf_option_buffered_id == $id)
	{	
        if( property_exists( $cp_calculatedfieldsf_option_buffered_item, $field ) ) $value = @$cp_calculatedfieldsf_option_buffered_item->$field;
	}	
    else
    {
		$myrows = $wpdb->get_results( $wpdb->prepare( "SELECT * FROM ".$wpdb->prefix.CP_CALCULATEDFIELDSF_FORMS_TABLE." WHERE id=%d", $id ) );
		if( !empty( $myrows ) )
		{ 
			if( property_exists( $myrows[0], $field ) )
			{	
				$value = @$myrows[0]->$field;
			}	
			else
			{
				$value = $default_value;
			}	
			$cp_calculatedfieldsf_option_buffered_item = $myrows[0];
			$cp_calculatedfieldsf_option_buffered_id  = $id;
		}
		else
		{
			$value = $default_value;
		}	
    }
    
    if ( ( $field == 'vs_all_texts' && empty( $value ) ) || ( $value == '' && $cp_calculatedfieldsf_option_buffered_item->form_structure == '' ) )
        $value = $default_value;
        
    return $value;
}
?>