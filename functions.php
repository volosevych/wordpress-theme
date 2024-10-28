<?php
function allow_cors() {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}
add_action('rest_api_init', 'allow_cors', 15);

function redirect_to_react_frontend() {
    if (!is_admin()) { // Only redirect non-admin pages
        wp_redirect('https://splendorous-sunburst-df100c.netlify.app' . $_SERVER['REQUEST_URI']);
        exit;
    }
}
add_action('template_redirect', 'redirect_to_react_frontend');
