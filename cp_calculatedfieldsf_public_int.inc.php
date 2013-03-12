<?php if ( !defined('CP_AUTH_INCLUDE') ) { echo 'Direct access not allowed.';  exit; } ?>
</p>
<link href="<?php echo plugins_url('css/stylepublic.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<link href="<?php echo plugins_url('css/cupertino/jquery-ui-1.8.20.custom.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<form name="cp_calculatedfieldsf_pform" id="cp_calculatedfieldsf_pform" action="<?php get_site_url(); ?>" method="post"> 
  <input type="hidden" name="form_structure" id="form_structure" size="180" value="<?php echo str_replace("\r","",str_replace("\n","",esc_attr(cp_calculatedfieldsf_cleanJSON(cp_calculatedfieldsf_get_option('form_structure', CP_CALCULATEDFIELDSF_DEFAULT_form_structure))))); ?>" />
  <div id="fbuilder">
      <div id="formheader"></div>
      <div id="fieldlist"></div>
  </div>
</form>