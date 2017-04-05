//Customizer modify palette
function sp_customize_palette() {
    wp_enqueue_script("customize-palette" , plugins_url( '/customizerPalette.js', __FILE__ ),array( 'jquery' ));
}
add_action( 'customize_controls_enqueue_scripts', 'sp_customize_palette' );
