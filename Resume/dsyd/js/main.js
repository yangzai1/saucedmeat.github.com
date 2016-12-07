var tabs_Swiper = new Swiper('.swiper-container', {
    speed: 500,
    onSlideChangeStart: function () {
        //当事件触发时
        $(".tabs .active").removeClass('active');
        $(".tabs a").eq(tabs_Swiper.activeIndex).addClass('active');
        //返回当前活动块的索引,添加active class
    }
});
$(".tabs a").on('touchstart mousedown', function (e) {
    e.preventDefault();
    $(".tabs .active").removeClass('active');
    $(this).addClass('active');
    tabs_Swiper.swipeTo($(this).index());
});
$(".tabs a").click(function (e) {
    e.preventDefault();
    //阻止a的默认事件
});