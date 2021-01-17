<?php
if ( ! defined( 'ABSPATH' ) ) exit;
//add menu page
add_action('admin_menu', 'bfg_slack_credentials');
add_action( 'admin_init', 'bfg_register_slack_plugin_settings' );

function bfg_slack_credentials(){  
    if(is_admin()){
      add_menu_page( 'Slack', 'Slack', 'manage_options', 'bfg_slack_option', 'bfg_slack_admin_options' ); 
    }     
}

//register settings
function bfg_register_slack_plugin_settings() {
    register_setting( 'bfg-slack-plugin-settings-group', 'client_id_option' );
    // register_setting( 'bfg-slack-plugin-settings-group', 'secret_id_option' );
}

function bfg_slack_admin_options(){
  ?>
      <h1>Agregar credenciales</h1>
      <form method="post" action="options.php">
          <?php settings_fields( 'bfg-slack-plugin-settings-group' ); ?>
          <?php do_settings_sections( 'bfg-slack-plugin-settings-group' ); ?>
          <table class="form-table">
            <tr valign="top">
            <th scope="row">Client ID</th>
            <td><input type="text" name="client_id_option" value="<?php echo get_option( 'client_id_option' ); ?>"/></td>
            </tr>
            <th scope="row">Nombre del Espacio de</th>
            <td><input type="text" name="client_id_option" value="<?php echo get_option( 'client_id_option' ); ?>"/></td>
            </tr>
            <!-- <tr valign="top">
            <th scope="row">Secret ID</th>
            <td><input type="text" name="secret_id_option" value="<?php echo get_option( 'secret_id_option' ); ?>"/></td>
            </tr> -->
          </table>
      <?php submit_button(); ?>
      </form>
  
  <?php 
}
