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
/*book*/
var bookBox = $(".bookBox");
var menuBox = $(".menuBox");
var joinBox = $(".joinBox");
$('#j-book').click(function(){
    bookBox.show();
    $('body').addClass('o-hidden');
})
$("#j-close").click(function(){
    bookBox.hide();
    $('body').removeClass('o-hidden');
})
/*menu*/
$("#j-menu").click(function () {
    $('body').addClass('o-hidden');
    menuBox.show();
})
$(".menuBox .the-close").click(function(){
    menuBox.hide();
    $('body').removeClass('o-hidden');
})
/*<!-- join 弹窗 -->*/
$("#j-joinOur").click(function() {
    menuBox.hide();
    joinBox.show();
})
$(".joinBox .the-close").click(function(){
    joinBox.hide();
    $('body').removeClass('o-hidden');
})

/*ourfood 切换*/
$('.weui-navbar__item').on('click', function () {
    $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
    var index = $(this).index();
    $('.j-navbarContent').eq(index).show().siblings('.j-navbarContent').hide();
    
});