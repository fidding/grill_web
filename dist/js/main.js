/*导航跟随*/
jQuery(document).ready(function() {
    var topmenu = $(".header");
    reset_topmenu_top(topmenu);
    jQuery(window).scroll(function() {
        reset_topmenu_top(topmenu);
    });
});
function reset_topmenu_top(topmenu) {
    var document_scroll_top = jQuery(document).scrollTop();
    if (document_scroll_top > 0) {
        $(".header").addClass("header-active");
    }
    if (document_scroll_top <= 0) {
        $(".header").removeClass("header-active");
    }
}