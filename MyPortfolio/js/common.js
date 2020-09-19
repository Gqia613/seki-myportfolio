jQuery(function() {
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        // スマートフォン用コード
        $('#drawer').click(function() {
            $(".column").addClass('open');
            $(".column").slideDown();
            
        });
        
        $('.close-btn').click(function() {
            $(".column").slideUp();
        });
        
        $('.information,.performance,.conect').click(function() {
            $(".column").removeClass('open');
            $(".column").slideUp();
        });

        var i = 1;
        setInterval(function() {
            if(i > 3) i = 1;
            $("header").css("background","url('./img/back"+i+".jpg')");
            $("header").css("background-repeat","no-repeat");
            $("header").css("background-size","cover");
            i++;
            }, 4000
        );

    } else {
        // PC用コード
        var pagetop = $('#page_top');   
        pagetop.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {  //100pxスクロールしたら表示
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500); //0.5秒かけてトップへ移動
            return false;
        });

        $('.information').on('click', function(){
            var targetTop = $('#information').offset().top;
            $('html,body').animate({
                scrollTop: targetTop
            }, 500);
            return false;
        });
        $('.performance').on('click', function(){
            var targetTop = $('#performance').offset().top;
            $('html,body').animate({
                scrollTop: targetTop
            }, 700);
            return false;
        });
        $('.conect').on('click', function(){
            var targetTop = $('#conect').offset().top;
            $('html,body').animate({
                scrollTop: targetTop
            }, 800);
            return false;
        });

        // 変更ここから
        $('.nav').hover(function(){
            $(this).animate({
                width: '330'
            },180)
            
        },function(){
            $(this).animate({
                width: '280'
            },180)
        });
        
        var i = 1;
        setInterval(function() {
            if(i > 3) i = 1;
            $("header").css("background","url('./img/back"+i+".jpg')");
            $("header").css("background-repeat","no-repeat");
            $("header").css("background-size","cover");
            i++;
            }, 4000
        );


        $('.production1 .drop-in').hover(function(){
            $('.production1 .drop-in')
            .css('position','absolute')
            .css('right','0px')
            .animate({top: '-25'},200).animate({top: '-4'},200)
            .animate({top: '-18'},130).animate({top: '-4'},130)
            .animate({top: '-13'},100).animate({top: '-4'},100)
            
        },function(){
            $('.production1 .drop-in')
            .animate({top: '0'},100)
        });

        $('.production2 .anime').hover(function(){
            $('.production2 .anime')
            .css('position','absolute')
            .css('right','0px')
            .animate({top: '-25'},200).animate({top: '-4'},200)
            .animate({top: '-18'},130).animate({top: '-4'},130)
            .animate({top: '-13'},100).animate({top: '-4'},100)
            
        },function(){
            $('.production2 .anime')
            .animate({top: '0'},100)
        });

        // 変更ここまで
    }


});