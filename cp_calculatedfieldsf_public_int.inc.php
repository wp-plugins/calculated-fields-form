<?php if ( !defined('CP_AUTH_INCLUDE') ) { echo 'Direct access not allowed.';  exit; } ?>
</p>
<link href="<?php echo plugins_url('css/stylepublic.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<link href="<?php echo plugins_url('css/cupertino/jquery-ui-1.8.20.custom.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<form name="cp_calculatedfieldsf_pform<?php echo $CP_CFF_global_form_count; ?>" id="cp_calculatedfieldsf_pform<?php echo $CP_CFF_global_form_count; ?>" action="<?php echo get_site_url(); ?>" method="post"><input type="hidden" name="form_structure<?php echo $CP_CFF_global_form_count; ?>" id="form_structure<?php echo $CP_CFF_global_form_count; ?>" size="180" value="<?php echo str_replace('"','&quot;',str_replace("\r","",str_replace("\n","",esc_attr(cp_calculatedfieldsf_cleanJSON(cp_calculatedfieldsf_get_option('form_structure', CP_CALCULATEDFIELDSF_DEFAULT_form_structure,$id)))))); ?>" />
<div id="fbuilder">
  <div id="fbuilder<?php echo $CP_CFF_global_form_count; ?>">
      <div id="formheader<?php echo $CP_CFF_global_form_count; ?>"></div>
      <div id="fieldlist<?php echo $CP_CFF_global_form_count; ?>"></div>
  </div>
</div>  
</form>