<?php

if ( !is_admin() ) 
{
    echo 'Direct access not allowed.';
    exit;
}

check_admin_referer( 'session_id_'.session_id(), '_cpcff_nonce' );
wp_enqueue_media();

if (!defined('CP_CALCULATEDFIELDSF_ID'))
    define ('CP_CALCULATEDFIELDSF_ID',intval($_GET["cal"]));
    

define('CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email', get_the_author_meta('user_email', get_current_user_id()) );
define('CP_CALCULATEDFIELDSF_DEFAULT_fp_destination_emails', CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email);

if ( 'POST' == $_SERVER['REQUEST_METHOD'] && isset( $_POST['cp_calculatedfieldsf_post_options'] ) )
    echo "<div id='setting-error-settings_updated' class='updated settings-error'> <p><strong>Settings saved.</strong></p></div>";
    
global $cpcff_default_texts_array;
$cpcff_texts_array = cp_calculatedfieldsf_get_option( 'vs_all_texts', $cpcff_default_texts_array );
$cpcff_texts_array = array_replace_recursive( 
        $cpcff_default_texts_array, 
        ( is_string( $cpcff_texts_array ) && is_array( unserialize( $cpcff_texts_array ) ) ) 
            ? unserialize( $cpcff_texts_array ) 
            : ( ( is_array( $cpcff_texts_array ) ) ? $cpcff_texts_array : array() )
    );

?>
<div class="wrap">
<h2>Calculated Fields Form</h2>

<input type="button" name="backbtn" value="Back to items list..." onclick="document.location='options-general.php?page=cp_calculated_fields_form';">
<br /><br />

<form method="post" action="" name="cpformconf"> 
<input type="hidden" name="_cpcff_nonce" value="<?php echo wp_create_nonce( 'session_id_'.session_id() ); ?>" />
<input name="cp_calculatedfieldsf_post_options" type="hidden" id="1" />
<input name="cp_calculatedfieldsf_id" type="hidden" value="<?php echo CP_CALCULATEDFIELDSF_ID; ?>" />


   
<div id="normal-sortables" class="meta-box-sortables">

 <h2>Form Settings:</h2>
 <hr />
 <div>* Different form styles available on the tab Form Settings &gt;&gt; Form Template</div>
 <div id="metabox_basic_settings" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Form Builder</span></h3>
  <div class="inside">
     <p style="border:1px solid #F0AD4E;background:#FBE6CA;padding:10px;">If you need also the form to be sent to the server side for processing (for example to deliver emails) then the <a href="http://wordpress.dwbooster.com/forms/calculated-fields-form#download">Professional or Developer versions</a> of the plugin will be required.</p>
     <input type="hidden" name="form_structure" id="form_structure" value="<?php echo str_replace('"','&quot;',str_replace("\r","",str_replace("\n","",esc_attr(cp_calculatedfieldsf_cleanJSON(cp_calculatedfieldsf_get_option('form_structure', CP_CALCULATEDFIELDSF_DEFAULT_form_structure)))))); ?>" />
	 <input type="hidden" name="templates" id="templates" value="<?php echo str_replace( '"', '&quot;', esc_attr( json_encode( cp_calculatedfieldsf_available_templates() ) ) ); ?>" /> 	
     <link href="<?php echo plugins_url('css/style.css', __FILE__); ?>" type="text/css" rel="stylesheet" />   
     <link href="<?php echo plugins_url('css/cupertino/jquery-ui-1.8.20.custom.css', __FILE__); ?>" type="text/css" rel="stylesheet" />   

     <script type="text/javascript">          
       try{$calculatedfieldsfQuery = jQuery.noConflict();window.jQuery = window.$ = jQuery;} catch (e) {}
       if (typeof $calculatedfieldsfQuery == 'undefined')
       {
			document.write ("<"+"script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'></"+"script>");
			$calculatedfieldsfQuery = jQuery.noConflict();
			window.jQuery = window.$ = jQuery;
			document.write ("<"+"script type='text/javascript' src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.20/jquery-ui.min.js'></"+"script>");
			document.write ("<"+"script type='text/javascript' src='<?php echo plugins_url('js/jQuery.stringify.js', __FILE__); ?>'></"+"script>");
			document.write ("<"+"script type='text/javascript' src='<?php echo plugins_url('js/jquery.validate.js', __FILE__); ?>'></"+"script>");         
			document.write ("<"+"script type='text/javascript' src='<?php echo plugins_url('/js/jquery.caret.js', __FILE__); ?>'></"+"script>");
	   }
       if ( typeof $fbuilderloadedflag == 'undefined' )
       {
         document.write ("<"+"script type='text/javascript' src='<?php echo cp_calculatedfieldsf_get_site_url( true ).'/?cp_cff_resources=admin'; ?>'></"+"script>");
       } 
     </script>         
        
     <script type="text/javascript">
         
         $calculatedfieldsfQuery(document).ready(function() {
            var f = $calculatedfieldsfQuery("#fbuilder").fbuilder();
            f.fBuild.loadData( "form_structure", "templates" );
            
            $calculatedfieldsfQuery(".itemForm").click(function() {
     	       f.fBuild.addItem($calculatedfieldsfQuery(this).attr("id"));
     	   });  
          
           $calculatedfieldsfQuery( ".itemForm" ).draggable({revert1: "invalid",helper: "clone",cursor: "move"});
     	   $calculatedfieldsfQuery( "#fbuilder" ).droppable({
     	       accept: ".button",
     	       drop: function( event, ui ) {
     	           f.fBuild.addItem(ui.draggable.attr("id"));				
     	       }
     	   });
     	   jQuery("#metabox_basic_settings1").append('<div id="c1" style="position:absolute;top:0px;left:0px;background:#aaa;z-index:99999;"></div>')
     	   jQuery("#c1").css({ opacity: 0.5 });
     	   jQuery("#c1").click( function(){
     	      if(confirm("These features aren't available in this version. Do you want to open the plugin's page to check other versions?"))
     	          document.location = 'http://wordpress.dwbooster.com/forms/calculated-fields-form';
     	   } );
     	   jQuery("#metabox_basic_settings2").append('<div id="c2" style="position:absolute;top:0px;left:0px;background:#aaa;z-index:99999;"></div>')
     	   jQuery("#c2").css({ opacity: 0.5 });
     	   jQuery("#c2").click( function(){{
     	      if(confirm("These features aren't available in this version. Do you want to open the plugin's page to check other versions?"))
     	          document.location = 'http://wordpress.dwbooster.com/forms/calculated-fields-form';
     	   } } );
     	   jQuery("#metabox_basic_settings3").append('<div id="c3" style="position:absolute;top:0px;left:0px;background:#aaa;z-index:99999;"></div>')
     	   jQuery("#c3").css({ opacity: 0.5 });
     	   jQuery("#c3").click( function(){{
     	      if(confirm("These features aren't available in this version. Do you want to open the plugin's page to check other versions?"))
     	          document.location = 'http://wordpress.dwbooster.com/forms/calculated-fields-form';
     	   } } );
     	   jQuery("#metabox_basic_settings4").append('<div id="c4" style="position:absolute;top:0px;left:0px;background:#aaa;z-index:99999;"></div>')
     	   jQuery("#c4").css({ opacity: 0.5 });
     	   jQuery("#c4").click( function(){{
     	      if(confirm("These features aren't available in this version. Do you want to open the plugin's page to check other versions?"))
     	          document.location = 'http://wordpress.dwbooster.com/forms/calculated-fields-form';
     	   } } );
     	   rLayer = function(){
     	      jQuery("#c1").css("width",jQuery("#metabox_basic_settings1").width()+"px").css("height",jQuery("#metabox_basic_settings1").height()+"px");
              jQuery("#c2").css("width",jQuery("#metabox_basic_settings2").width()+"px").css("height",jQuery("#metabox_basic_settings2").height()+"px");
              jQuery("#c3").css("width",jQuery("#metabox_basic_settings3").width()+"px").css("height",jQuery("#metabox_basic_settings3").height()+"px");
              jQuery("#c4").css("width",jQuery("#metabox_basic_settings4").width()+"px").css("height",jQuery("#metabox_basic_settings4").height()+"px");
           }  
     	   rLayer();
     	   jQuery(window).resize(function() {rLayer()});
     	   
         });
     </script>        
        

     
     <div style="background:#fafafa;" class="form-builder">
     
         <div class="column ctrlsColumn">
             <div id="tabs">
     			<ul>
     				<li><a href="#tabs-1">Add a Field</a></li>
     				<li><a href="#tabs-2">Field Settings</a></li>
     				<li><a href="#tabs-3">Form Settings</a></li>
     			</ul>
     			<div id="tabs-1">
     			    
     			</div>
     			<div id="tabs-2"></div>
     			<div id="tabs-3"></div>
     		</div>	
         </div>
         <div class="column dashboardColumn padding10" id="fbuilder">
             <div id="formheader"></div>
             <div id="fieldlist"></div>
         </div>
         <div class="clearer"></div>
         
     </div>        
   
  </div>    
 </div> 
 
 <p class="submit">
	<input type="submit" name="save" id="save" 	 class="button-primary" value="Save Changes"  />
	<input type="button" name="previewbtn" id="previewbtn" class="button-primary" value="Save & Preview" onclick="jQuery.fbuilder.preview( this );" />
</p>
 
  <div id="metabox_basic_settings" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Define Texts</span></h3>
  <div class="inside">   
     <table class="form-table">  
        <tr valign="top">
        <th scope="row">Previous button label (text):</th>
        <td><input type="text" name="vs_text_previousbtn" size="40" value="<?php $label = esc_attr(cp_calculatedfieldsf_get_option('vs_text_previousbtn', 'Previous')); echo ($label==''?'Previous':$label); ?>" /></td>
        </tr>    
        <tr valign="top">
        <th scope="row">Next button label (text):</th>
        <td><input type="text" name="vs_text_nextbtn" size="40" value="<?php $label = esc_attr(cp_calculatedfieldsf_get_option('vs_text_nextbtn', 'Next')); echo ($label==''?'Next':$label); ?>" /></td>
        </tr>    
        <tr valign="top">
        <td colspan="2">
        - The styles can be applied into any of the CSS files of your theme or into the CSS file <em>"calculated-fields-form\css\stylepublic.css"</em>. <br />        
        - For general CSS styles modifications to the form and samples <a href="http://wordpress.dwbooster.com/faq/calculated-fields-form#q82" target="_blank">check this FAQ</a>.
        </tr>
        <?php
         // Display all other text fields
         foreach( $cpcff_texts_array as $cpcff_text_index => $cpcff_text_attr )
         {
            print '
            <tr valign="top">
                <th scope="row">'.$cpcff_text_attr[ 'label' ].':</th>
                <td><input type="text" name="cpcff_text_array['.$cpcff_text_index.'][text]" size="40" value="'. esc_attr( $cpcff_text_attr[ 'text' ] ).'" /></td>
            </tr>
            ';
         }
        ?>
     </table>
  </div>    
 </div> 
  

 <div id="metabox_basic_settings" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Validation Settings</span></h3>
  <div class="inside">
     <table class="form-table">    
        <tr valign="top">
        <th scope="row">Use Validation?</th>
        <td>
          <?php $option = cp_calculatedfieldsf_get_option('vs_use_validation', CP_CALCULATEDFIELDSF_DEFAULT_vs_use_validation); ?>
          <select name="vs_use_validation">
           <option value="true"<?php if ($option == 'true') echo ' selected'; ?>>Yes</option>
           <!--<option value="false"<?php if ($option == 'false') echo ' selected'; ?>>No</option>-->
          </select>
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">"is required" text:</th>
        <td><input type="text" name="vs_text_is_required" size="40" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_is_required', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_required)); ?>" /></td>
        </tr>             
         <tr valign="top">
        <th scope="row">"is email" text:</th>
        <td><input type="text" name="vs_text_is_email" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_is_email', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_is_email)); ?>" /></td>
        </tr>       
        <tr valign="top">
        <th scope="row">"is valid captcha" text:</th>
        <td><input type="text" name="cv_text_enter_valid_captcha" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_text_enter_valid_captcha', CP_CALCULATEDFIELDSF_DEFAULT_cv_text_enter_valid_captcha)); ?>" /></td>
        </tr>

        <tr valign="top">
        <th scope="row">"is valid date (mm/dd/yyyy)" text:</th>
        <td><input type="text" name="vs_text_datemmddyyyy" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_datemmddyyyy', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_datemmddyyyy)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">"is valid date (dd/mm/yyyy)" text:</th>
        <td><input type="text" name="vs_text_dateddmmyyyy" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_dateddmmyyyy', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_dateddmmyyyy)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">"is number" text:</th>
        <td><input type="text" name="vs_text_number" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_number', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_number)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">"only digits" text:</th>
        <td><input type="text" name="vs_text_digits" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_digits', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_digits)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">"under maximum" text:</th>
        <td><input type="text" name="vs_text_max" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_max', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_max)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">"over minimum" text:</th>
        <td><input type="text" name="vs_text_min" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('vs_text_min', CP_CALCULATEDFIELDSF_DEFAULT_vs_text_min)); ?>" /></td>
        </tr>             
        
     </table>  
  </div>    
 </div>   
 
  
<div id="metabox_basic_settings" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Note</span></h3>
  <div class="inside">
   To insert this form in a post/page, use the dedicated icon 
   <?php print '<a href="javascript:cp_calculatedfieldsf_insertForm();" title="'.__('Insert Calculated Fields Form').'"><img hspace="5" src="'.plugins_url('/images/cp_form.gif', __FILE__).'" alt="'.__('Insert Calculated Fields Form').'" /></a>';     ?>
   which has been added to your Upload/Insert Menu, just below the title of your Post/Page.
   <br /><br />
  </div>
</div>   
 
 <p class="submit">
	<input type="submit" name="save" id="save" class="button-primary" value="Save Changes"  />
	<input type="button" name="previewbtn" id="previewbtn" class="button-primary" value="Save & Preview" onclick="jQuery.fbuilder.preview( this );" />
</p>

 [<a href="http://wordpress.dwbooster.com/contact-us" target="_blank">Request Custom Modifications</a>] | [<a href="http://wordpress.dwbooster.com/forms/calculated-fields-form" target="_blank">Help</a>]
 
 <br /><br /><br />
 
 <h3>The following settings are available only in the <a href="http://wordpress.dwbooster.com/forms/calculated-fields-form">pro version</a>:</h3>
 
 <h2>Form Processing and Payment Settings:</h2>
 <hr />
 
 <div id="metabox_basic_settings1" class="postbox" style="position:relative;">
  <h3 class='hndle' style="padding:5px;"><span>Paypal Payment Configuration</span></h3>
  <div class="inside">

    <table class="form-table">
        <tr valign="top">        
        <th scope="row">Enable Paypal Payments?</th>
        <td><input type="checkbox" name="enable_paypal" value="1" <?php if (cp_calculatedfieldsf_get_option('enable_paypal',CP_CALCULATEDFIELDSF_DEFAULT_ENABLE_PAYPAL)) echo 'checked'; ?> /></td>
        </tr>    
        
        <tr valign="top">        
        <th scope="row">Paypal Mode</th>
        <td><select name="paypal_mode">
             <option value="production" <?php if (cp_calculatedfieldsf_get_option('paypal_mode',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_MODE) != 'sandbox') echo 'selected'; ?>>Production - real payments processed</option> 
             <option value="sandbox" <?php if (cp_calculatedfieldsf_get_option('paypal_mode',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_MODE) == 'sandbox') echo 'selected'; ?>>SandBox - PayPal testing sandbox area</option> 
            </select>
        </td>
        </tr>
    
        <tr valign="top">        
        <th scope="row">Paypal email</th>
        <td><input type="text" name="paypal_email" size="40" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('paypal_email',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_EMAIL)); ?>" /></td>
        </tr>
         
        <tr valign="top">
        <th scope="row">Request cost</th>
        <td><select name="request_cost" id="request_cost" ></select></td>
        </tr>        
        
        
        <tr valign="top">
        <th scope="row">Currency</th>
        <td><input type="text" name="currency" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('currency',CP_CALCULATEDFIELDSF_DEFAULT_CURRENCY)); ?>" /></td>
        </tr>        
        
        <tr valign="top">        
        <th scope="row">A $0 amount to pay means:</th>
        <td><select name="paypal_zero_payment">
             <option value="0" <?php if (cp_calculatedfieldsf_get_option('paypal_zero_payment',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_ZERO_PAYMENT) != '1') echo 'selected'; ?>>Let the user enter any amount at PayPal (ex: for a donation)</option> 
             <option value="1" <?php if (cp_calculatedfieldsf_get_option('paypal_zero_payment',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_ZERO_PAYMENT) == '1') echo 'selected'; ?>>Don't require any payment. Form is submitted skiping the PayPal page.</option> 
            </select>
        </td>
        </tr>  
        
		<tr valign="top">        
        <th scope="row">Base amount:</th>
        <td><input type="text" name="paypal_base_amount" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option( 'paypal_base_amount', '0.01' ) ); ?>" /> Minimum amount to charge. If the final price is lesser than this number, the base amount will be applied.
        </td>
        </tr> 
		       
        <tr valign="top">
        <th scope="row">Paypal product name</th>
        <td><input type="text" name="paypal_product_name" size="50" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('paypal_product_name',CP_CALCULATEDFIELDSF_DEFAULT_PRODUCT_NAME)); ?>" /></td>
        </tr>        
        
        <tr valign="top">
        <th scope="row">Paypal language</th>
        <td><input type="text" name="paypal_language" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('paypal_language',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_LANGUAGE)); ?>" /></td>
        </tr>         
        
        <tr valign="top">        
        <th scope="row">Payment frequency</th>
        <td><select name="paypal_recurrent">
             <option value="0" <?php if (cp_calculatedfieldsf_get_option('paypal_recurrent',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT) == '0' || 
                                         cp_calculatedfieldsf_get_option('paypal_recurrent',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT) == ''
                                        ) echo 'selected'; ?>>One time payment (default option, user is billed only once)</option>
             <option value="1" <?php if (cp_calculatedfieldsf_get_option('paypal_recurrent',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT) == '1') echo 'selected'; ?>>Bill the user every 1 month</option> 
             <option value="3" <?php if (cp_calculatedfieldsf_get_option('paypal_recurrent',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT) == '3') echo 'selected'; ?>>Bill the user every 3 months</option> 
             <option value="6" <?php if (cp_calculatedfieldsf_get_option('paypal_recurrent',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT) == '6') echo 'selected'; ?>>Bill the user every 6 months</option> 
             <option value="12" <?php if (cp_calculatedfieldsf_get_option('paypal_recurrent',CP_CALCULATEDFIELDSF_DEFAULT_PAYPAL_RECURRENT) == '12') echo 'selected'; ?>>Bill the user every 12 months</option> 
            </select>
        </td>
        </tr>        
        
        <tr valign="top">
        <th scope="row">Discount Codes</th>
        <td> 
           <div id="dex_nocodes_availmsg">This feature isn't available in this version.</div>
          
           <br />               
           <strong>Add new discount code:</strong>
           <br />
           <nobr>Code: <input type="text" name="dex_dc_code" id="dex_dc_code" value="" /></nobr> &nbsp; &nbsp; &nbsp; 
           <nobr>Discount: <input type="text" size="3" name="dex_dc_discount" id="dex_dc_discount"  value="25" /><select name="dex_dc_discounttype" id="dex_dc_discounttype">
                   <option value="0">Percent</option>
                   <option value="1">Fixed Value</option>
                 </select></nobr>
                    &nbsp; &nbsp;
           <nobr>Valid until: <input type="text"  size="10" name="dex_dc_expires" id="dex_dc_expires" value="" /></nobr>&nbsp; &nbsp; &nbsp; 
           <input type="button" name="dex_dc_subccode" id="dex_dc_subccode" value="Add" onclick="alert('This feature ins\'t available in this version');" />
           <br />
           <em>Note: Expiration date based in server time. Server time now is <?php echo date("Y-m-d H:i"); ?></em>
        </td>
        </tr>  
                   
     </table>  

  </div>    
 </div>

 <div id="metabox_basic_settings2" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Form Processing / Email Settings</span></h3>
  <div class="inside">
     <table class="form-table">    
        <tr valign="top">
        <th scope="row">"From" email</th>
        <td><input type="text" name="fp_from_email" size="40" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('fp_from_email', CP_CALCULATEDFIELDSF_DEFAULT_fp_from_email)); ?>" /></td>
        </tr>             
        <tr valign="top">
        <th scope="row">Destination emails (comma separated)</th>
        <td><input type="text" name="fp_destination_emails" size="40" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('fp_destination_emails', CP_CALCULATEDFIELDSF_DEFAULT_fp_destination_emails)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">Email subject</th>
        <td><input type="text" name="fp_subject" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('fp_subject', CP_CALCULATEDFIELDSF_DEFAULT_fp_subject)); ?>" /></td>
        </tr>
        <tr valign="top">
        <th scope="row">Include additional information?</th>
        <td>
          <?php $option = cp_calculatedfieldsf_get_option('fp_inc_additional_info', CP_CALCULATEDFIELDSF_DEFAULT_fp_inc_additional_info); ?>
          <select name="fp_inc_additional_info">
           <option value="true"<?php if ($option == 'true') echo ' selected'; ?>>Yes</option>
           <option value="false"<?php if ($option == 'false') echo ' selected'; ?>>No</option>
          </select>
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">Thank you page (after sending the message)</th>
        <td><input type="text" name="fp_return_page" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('fp_return_page', CP_CALCULATEDFIELDSF_DEFAULT_fp_return_page)); ?>" /></td>
        </tr> 
        <tr valign="top">
        <th scope="row">Email format?</th>
        <td>
          <?php $option = cp_calculatedfieldsf_get_option('fp_emailformat', CP_CALCULATEDFIELDSF_DEFAULT_email_format); ?>
          <select name="fp_emailformat">
           <option value="text"<?php if ($option != 'html') echo ' selected'; ?>>Plain Text (default)</option>
           <option value="html"<?php if ($option == 'html') echo ' selected'; ?>>HTML (use html in the textarea below)</option>
          </select>
        </td>
        </tr>         
        <tr valign="top">
        <th scope="row">Message</th>
        <td><textarea type="text" name="fp_message" rows="6" cols="80"><?php echo cp_calculatedfieldsf_get_option('fp_message', CP_CALCULATEDFIELDSF_DEFAULT_fp_message); ?></textarea></td>
        </tr>                                                               
     </table>  
  </div>    
 </div>   
 
 
 <div id="metabox_basic_settings3" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Email Copy to User</span></h3>
  <div class="inside">
     <table class="form-table">    
        <tr valign="top">
        <th scope="row">Send confirmation/thank you message to user?</th>
        <td>
          <?php $option = cp_calculatedfieldsf_get_option('cu_enable_copy_to_user', CP_CALCULATEDFIELDSF_DEFAULT_cu_enable_copy_to_user); ?>
          <select name="cu_enable_copy_to_user">
           <option value="true"<?php if ($option == 'true') echo ' selected'; ?>>Yes</option>
           <option value="false"<?php if ($option == 'false') echo ' selected'; ?>>No</option>
          </select>
        </td>
        </tr>
        <tr valign="top">
        <th scope="row">Email field on the form</th>
        <td><select id="cu_user_email_field" name="cu_user_email_field" def="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cu_user_email_field', CP_CALCULATEDFIELDSF_DEFAULT_cu_user_email_field)); ?>"></select></td>
        </tr>             
        <tr valign="top">
        <th scope="row">Email subject</th>
        <td><input type="text" name="cu_subject" size="70" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cu_subject', CP_CALCULATEDFIELDSF_DEFAULT_cu_subject)); ?>" /></td>
        </tr>  
        <tr valign="top">
        <th scope="row">Email format?</th>
        <td>
          <?php $option = cp_calculatedfieldsf_get_option('cu_emailformat', CP_CALCULATEDFIELDSF_DEFAULT_email_format); ?>
          <select name="cu_emailformat">
           <option value="text"<?php if ($option != 'html') echo ' selected'; ?>>Plain Text (default)</option>
           <option value="html"<?php if ($option == 'html') echo ' selected'; ?>>HTML (use html in the textarea below)</option>
          </select>
        </td>
        </tr>                         
        <tr valign="top">
        <th scope="row">Message</th>
        <td><textarea type="text" name="cu_message" rows="6" cols="80"><?php echo cp_calculatedfieldsf_get_option('cu_message', CP_CALCULATEDFIELDSF_DEFAULT_cu_message); ?></textarea></td>
        </tr>        
     </table>  
  </div>    
 </div>  
 

 <div id="metabox_basic_settings4" class="postbox" >
  <h3 class='hndle' style="padding:5px;"><span>Captcha Verification</span></h3>
  <div class="inside">
     <table class="form-table">    
        <tr valign="top">
        <th scope="row">Use Captcha Verification?</th>
        <td colspan="5">
          <?php $option = cp_calculatedfieldsf_get_option('cv_enable_captcha', CP_CALCULATEDFIELDSF_DEFAULT_cv_enable_captcha); ?>
          <select name="cv_enable_captcha">
           <option value="true"<?php if ($option == 'true') echo ' selected'; ?>>Yes</option>
           <option value="false"<?php if ($option == 'false') echo ' selected'; ?>>No</option>
          </select>
        </td>
        </tr>
        
        <tr valign="top">
         <th scope="row">Width:</th>
         <td><input type="text" readonly=readonly name="cv_width" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_width', CP_CALCULATEDFIELDSF_DEFAULT_cv_width)); ?>"  onblur="generateCaptcha();"  /></td>
         <th scope="row">Height:</th>
         <td><input type="text" readonly=readonly name="cv_height" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_height', CP_CALCULATEDFIELDSF_DEFAULT_cv_height)); ?>" onblur="generateCaptcha();"  /></td>
         <th scope="row">Chars:</th>
         <td><input type="text" readonly=readonly name="cv_chars" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_chars', CP_CALCULATEDFIELDSF_DEFAULT_cv_chars)); ?>" onblur="generateCaptcha();"  /></td>
        </tr>             

        <tr valign="top">
         <th scope="row">Min font size:</th>
         <td><input type="text" readonly=readonly name="cv_min_font_size" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_min_font_size', CP_CALCULATEDFIELDSF_DEFAULT_cv_min_font_size)); ?>" onblur="generateCaptcha();"  /></td>
         <th scope="row">Max font size:</th>
         <td><input type="text" readonly=readonly name="cv_max_font_size" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_max_font_size', CP_CALCULATEDFIELDSF_DEFAULT_cv_max_font_size)); ?>" onblur="generateCaptcha();"  /></td>        
         <td colspan="2" rowspan="">
           Preview:<br />
             <br />
            <img src="<?php echo plugins_url('/captcha/captcha.php', __FILE__); ?>"  id="captchaimg" alt="security code" border="0"  />            
         </td> 
        </tr>             
                

        <tr valign="top">
         <th scope="row">Noise:</th>
         <td><input type="text" readonly=readonly name="cv_noise" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_noise', CP_CALCULATEDFIELDSF_DEFAULT_cv_noise)); ?>" onblur="generateCaptcha();" /></td>
         <th scope="row">Noise Length:</th>
         <td><input type="text" readonly=readonly name="cv_noise_length" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_noise_length', CP_CALCULATEDFIELDSF_DEFAULT_cv_noise_length)); ?>" onblur="generateCaptcha();" /></td>        
        </tr>          
        

        <tr valign="top">
         <th scope="row">Background:</th>
         <td><input type="text" readonly=readonly name="cv_background" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_background', CP_CALCULATEDFIELDSF_DEFAULT_cv_background)); ?>" onblur="generateCaptcha();" /></td>
         <th scope="row">Border:</th>
         <td><input type="text" readonly=readonly name="cv_border" size="10" value="<?php echo esc_attr(cp_calculatedfieldsf_get_option('cv_border', CP_CALCULATEDFIELDSF_DEFAULT_cv_border)); ?>" onblur="generateCaptcha();" /></td>        
        </tr>    
        
        <tr valign="top">
         <th scope="row">Font:</th>
         <td>
            <select name="cv_font" onchange="generateCaptcha();" >
              <option value="font-1.ttf"<?php if ("font-1.ttf" == cp_calculatedfieldsf_get_option('cv_font', CP_CALCULATEDFIELDSF_DEFAULT_cv_font)) echo " selected"; ?>>Font 1</option>
              <option value="font-2.ttf"<?php if ("font-2.ttf" == cp_calculatedfieldsf_get_option('cv_font', CP_CALCULATEDFIELDSF_DEFAULT_cv_font)) echo " selected"; ?>>Font 2</option>
              <option value="font-3.ttf"<?php if ("font-3.ttf" == cp_calculatedfieldsf_get_option('cv_font', CP_CALCULATEDFIELDSF_DEFAULT_cv_font)) echo " selected"; ?>>Font 3</option>
              <option value="font-4.ttf"<?php if ("font-4.ttf" == cp_calculatedfieldsf_get_option('cv_font', CP_CALCULATEDFIELDSF_DEFAULT_cv_font)) echo " selected"; ?>>Font 4</option>
            </select>            
         </td>              
        </tr>                          
           
        
     </table>  
  </div>    
 </div>    

</div> 


<p class="submit">
	<input type="submit" name="save" id="save" class="button-primary" value="Save Changes"  />
	<input type="button" name="previewbtn" id="previewbtn" class="button-primary" value="Save & Preview" onclick="jQuery.fbuilder.preview( this );" />
</p>


[<a href="http://wordpress.dwbooster.com/contact-us" target="_blank">Request Custom Modifications</a>] | [<a href="http://wordpress.dwbooster.com/forms/calculated-fields-form" target="_blank">Help</a>]
</form>
</div>
<script type="text/javascript">
        var $j = jQuery.noConflict();      
        window.jQuery = window.$ = jQuery;
        
        function generateCaptcha()
        {            
           var d=new Date();
           var f = document.cpformconf;    
           var qs = "?width="+f.cv_width.value;
           qs += "&height="+f.cv_height.value;
           qs += "&letter_count="+f.cv_chars.value;
           qs += "&min_size="+f.cv_min_font_size.value;
           qs += "&max_size="+f.cv_max_font_size.value;
           qs += "&noise="+f.cv_noise.value;
           qs += "&noiselength="+f.cv_noise_length.value;
           qs += "&bcolor="+f.cv_background.value;
           qs += "&border="+f.cv_border.value;
           qs += "&font="+f.cv_font.options[f.cv_font.selectedIndex].value;
           qs += "&rand="+d;
           
           document.getElementById("captchaimg").src= "<?php echo plugins_url('/captcha/captcha.php', __FILE__); ?>"+qs;
        }

     </script>
<script type="text/javascript">generateCaptcha();</script>