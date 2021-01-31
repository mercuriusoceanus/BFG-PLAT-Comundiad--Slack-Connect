<?php
/*
Plugin Name: BFG Slack Connect
Description: Plugin que se conecta a los servicios de Slack
Version:     1.2
Author:      Beforget
Author URI:   https://beforget.com/
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/

require_once plugin_dir_path(__FILE__) . 'includes/bfg-slack-option.php';
require_once plugin_dir_path(__FILE__) . 'includes/bfg-slack-register-scripts.php';
require_once plugin_dir_path(__FILE__) . 'includes/bfg-slack-hook-landing.php';

// Agregamos Boton connect to Slack in profile

function bfg_show_button_slack($urlSrc, $text){
  echo '<a class="push-right button outline small" href="'.$urlSrc.'" id="connect-to-slack">'.$text.'</a>';
}
// define the bp_member_header_actions callback 
function bfg_add_slack_button() { 

  $clientID = get_option( 'client_id_option' );
  $profileUserID = bp_displayed_user_id();
  $current_user = wp_get_current_user();
  $slackUnfo = xprofile_get_field_data('4', $profileUserID);
  $dataUSer = explode(' - ', $slackUnfo);
	if(is_user_logged_in()){
    if($current_user->ID === $profileUserID){ 
      if($dataUSer[0] === ''){
        bfg_show_button_slack('https://slack.com/oauth/authorize?scope=users.profile:read&client_id='.$clientID.'', 'Conectar con Slack');
      }else{
        bfg_show_button_slack('slack://user?team='.$dataUSer[1].'', 'Ir a Slack');
      }
    }else{
      if($dataUSer[0] !== ''){
        bfg_show_button_slack('slack://user?team='.$dataUSer[1].'&id='.$dataUSer[0].'', 'Hola! Estoy aqui en Slack');
      }
    }
	}
}; 
// add the action 
add_action( 'bp_member_header_actions', 'bfg_add_slack_button', 10, 0 );

