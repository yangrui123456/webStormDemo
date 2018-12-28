(function($) {
    var ui = {
        $step1: $('.step_1')
        , $godown: $('.go-down')
    };
    var oPageConfig = window.oPageConfig;
    var oPage = {
        init: function() {
            this.view();
            this.listen();
        }
        , view: function() {
            var self = this;

            // 滚动插件初始化
            $('#fullpage').fullpage({
                // menu: true,
                scrollingSpeed: 1200,
                //定义锚链接
                anchors: ['page1', 'page2', 'page3', 'page4','page5'],
                // 是否显示项目导航
                navigation: true,
                navigationTooltips: ['首页', '二', '三', '四','五'],
                navigationColor: '#000',
                navigationPosition: 'right',
                // 滚动到最底部后是否滚回顶部
                loopBottom: true,
                // 每一屏底色
                sectionsColor: ['#45b19a', '#4BBFC3', '#80ac50','#fff', '#EAE1C0'],
                // 是否显示左右滑块的项目导航
                slidesNavigation: true,
                // 左右滑块的箭头的背景颜色
                controlArrowColor: 'yellow',
                // 左右滑块是否循环滑动
                loopHorizontal: false,
                // 离开某一屏的回调函数
                onLeave: function(index, nextIndex, direction){

                }
            });

            // 滚动插件初始化 结束
            // 小箭头
            self.fCustomArrows();
            setInterval(self.fCustomArrows, 2000);


        }
        , listen: function() {
            var self = this;

            ui.$step1.hover(
                function () {
                    $(this).addClass('swing');
                    $(this).siblings().removeClass("swing");
                },
                function () {
                    $(this).removeClass('swing');
                }
            );
            // ui.$infoBtn.on('click',function() {
            // $.ajax({
            //   url: oPageConfig.oUrl.url
            // , type: 'POST'
            // , data: {}
            // , dataType: 'json'
            // }).done(function(msg) {
            //   if (msg.code === 0) {
            //     console.log(msg.message)
            //   }
            // });
            // });
        }
        // 箭头动画
        , fCustomArrows: function() {
            ui.$godown.animate({
                    bottom: "50px"
                },
                200).animate({
                    bottom: "20px"
                },
                200).animate({
                    bottom: "30px"
                },
                200).animate({
                    bottom: "20px"
                },
                200).animate({
                    bottom: "25px"
                },
                200).animate({
                    bottom: "20px"
                },
                200).animate({
                    bottom: "22px"
                },
                200).animate({
                    bottom: "20px"
                },
                200);
        }
    };
    oPage.init();
})($);

$(document).ready(function(){
    var nowimg=0;
    var timer=null;
    // 克隆第一张图片，并且放到最后
    $(".box-in li:first").clone().appendTo('.box-in')
    // 右按钮业务
    $(".you").click(rightFunc)
    function rightFunc(){

        if(nowimg<5){
            nowimg++
            $(".box-in").animate({"left":nowimg*-730},1000)
        }else{
            nowimg=0
            $(".box-in").animate({"left":6*-730},1000,function(){
                $(".box-in").css("left",0)

            })
        }
        $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')

    }
    // 左按钮业务
    $(".zuo").click(function(){
        if(nowimg>0){
            nowimg--
            $(".box-in").animate({"left":nowimg*-730},1000)
        }else{
            nowimg=5
            $(".box-in").css({"left":6*-730},1000)
            $(".box-in").animate({"left":nowimg*-730},1000)
        }
        $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')
    })
    // 小圆点业务
    $(".circle span").click(function(){
        nowimg=$(this).index()
        $(".circle span").eq(nowimg).addClass('current').siblings().removeClass('current')
        $(".box-in").animate({"left":nowimg*-730}, 1000)
    });

    // 自动轮播

    timer=setInterval(rightFunc,2000)

    $(".box").mouseenter(function(){
        clearInterval(timer)
    })
    $(".box").mouseout(function(){
        clearInterval(timer)
        timer=setInterval(rightFunc,2000)
    })

})