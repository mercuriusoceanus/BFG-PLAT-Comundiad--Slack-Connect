<?php
if ( ! defined( 'ABSPATH' ) ) exit;
// Redirect Slack Connection
function bfg_slack_landing() {
	do_action('bfg-load-script-slack-connection');
}
add_shortcode('bfg-landing-slack', 'bfg_slack_landing');