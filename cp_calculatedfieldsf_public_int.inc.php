<?php if ( !defined('CP_AUTH_INCLUDE') ) { echo 'Direct access not allowed.';  exit; } ?>
<link href="<?php echo plugins_url('css/stylepublic.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<link href="<?php echo plugins_url('css/cupertino/jquery-ui-1.8.20.custom.css', __FILE__); ?>" type="text/css" rel="stylesheet" />
<?php
$form_data = cp_calculatedfieldsf_get_option( 'form_structure', CP_CALCULATEDFIELDSF_DEFAULT_form_structure, $id );
if( !empty( $form_data ) )	
{
	if( isset( $form_data[ 1 ] ) && isset( $form_data[ 1 ][ 0 ] ) && isset( $form_data[ 1 ][ 0 ]->formtemplate ) )
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
	$form_data[ 1 ][ 'formid' ]="cp_calculatedfieldsf_pform".$CP_CFF_global_form_count;
?>
<form name="<?php echo $form_data[ 1 ][ 'formid' ]; ?>" id="<?php echo $form_data[ 1 ][ 'formid' ]; ?>" action="" method="post" enctype="multipart/form-data"><pre><script>form_structure<?php echo $CP_CFF_global_form_count; ?>=<?php print str_replace( array( "\n", "\r" ), " ", json_encode( $form_data ) ); ?></script></pre>
<div id="fbuilder">
  <div id="fbuilder<?php echo $CP_CFF_global_form_count; ?>">
      <div id="formheader<?php echo $CP_CFF_global_form_count; ?>"></div>
      <div id="fieldlist<?php echo $CP_CFF_global_form_count; ?>"></div>
  </div>
</div> 
<div class="clearer"></div> 
</form>
<?php
}
?>