<?php
if ( ! defined( 'ABSPATH' ) ) exit;

function bfg_slack_script() {
  $profileUserID = bp_displayed_user_id();
  $current_user = wp_get_current_user();
  $idSlack = get_option( 'client_id_option' );

  // wp_register_script('slackConnect', plugins_url('/bfg-slack-connect/bfg-slack-front/dist/js/app.js', dirname(__FILE__)), time(), false);
  wp_register_script('slackConnect', esc_url(plugins_url('bfg-slack-front/dist/js/app.js', dirname(__FILE__) )), time(), false);
  wp_localize_script('slackConnect', 'bpRestApi', array(
    'nonce' => wp_create_nonce( 'wp_rest' ),
    'sessionUserID' => $current_user->ID,
    'profileUserID' => $profileUserID
  ));

  wp_enqueue_script('slackConnect');

}
add_action( 'bfg-load-script-slack-connection', 'bfg_slack_script' );
