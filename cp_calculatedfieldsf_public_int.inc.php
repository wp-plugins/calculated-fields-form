<?php if ( !defined('CP_AUTH_INCLUDE') ) { echo 'Direct access not allowed.';  exit; } ?>
<link href="<?php echo plugins_url('css/stylepublic.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<link href="<?php echo plugins_url('css/cupertino/jquery-ui-1.8.20.custom.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<?php
$raw_form_str = str_replace("\r"," ",str_replace("\n"," ",cp_calculatedfieldsf_cleanJSON(cp_calculatedfieldsf_get_option('form_structure', CP_CALCULATEDFIELDSF_DEFAULT_form_structure,$id))));
$form_data = json_decode( $raw_form_str );
if( is_null( $form_data ) ){
	$json = new JSON;
	$form_data = $json->unserialize( $raw_form_str );
}

if( !is_null( $form_data ) && isset( $form_data[ 1 ] ) && isset( $form_data[ 1 ][ 0 ] ) && isset( $form_data[ 1 ][ 0 ]->formtemplate ) )	
{
	$templatelist = cp_calculatedfieldsf_available_templates();
	if( isset( $templatelist[ $form_data[ 1 ][ 0 ]->formtemplate ] ) )
	{
		print '<link href="'.esc_attr( esc_url( $templatelist[ $form_data[ 1 ][ 0 ]->formtemplate ][ 'file' ] ) ).'" type="text/css" rel="stylesheet" />';
		if( isset( $templatelist[ $form_data[ 1 ][ 0 ]->formtemplate ][ 'js' ] ) )
		{
			print '<script src="'.esc_attr( esc_url( $templatelist[ $form_data[ 1 ][ 0 ]->formtemplate ][ 'js' ] ) ).'"></script>';    
		}           
	}
}

$raw_form_str = str_replace('"','&quot;',esc_attr($raw_form_str));
?>
<form name="cp_calculatedfieldsf_pform<?php echo $CP_CFF_global_form_count; ?>" id="cp_calculatedfieldsf_pform<?php echo $CP_CFF_global_form_count; ?>" action="" method="post"><input type="hidden" name="form_structure<?php echo $CP_CFF_global_form_count; ?>" id="form_structure<?php echo $CP_CFF_global_form_count; ?>" size="180" value="<?php echo $raw_form_str; ?>" />
<div id="fbuilder">
  <div id="fbuilder<?php echo $CP_CFF_global_form_count; ?>">
      <div id="formheader<?php echo $CP_CFF_global_form_count; ?>"></div>
      <div id="fieldlist<?php echo $CP_CFF_global_form_count; ?>"></div>
  </div>
</div> 
<div class="clearer"></div> 
</form>