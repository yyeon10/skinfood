$(function(){
//start
    
    function chaClass(className){
        $(this).addClass(className)
        .siblings().removeClass(className);
    }
    
    //본문 스크롤 이벤트
    
    var scrollTop = '';
    var conTop= '';
    var lastScroll = 0;
    
    $(window).on('scroll', function(e){
         
        headerMove();
        contentMove();

    });
    
    function headerMove(){
        scrollTop = $(window).scrollTop()
             if(scrollTop >= lastScroll){
                $('header').addClass('up');
                 $('header .sub_menu').css('top','196px')
             } else {
                $('header').removeClass('up');
                 $('header .sub_menu').css('top','0px')
             }

        lastScroll = scrollTop
    }

    function contentMove() {
        $('.con_body li').each(function(i){
            scrollTop = $(window).scrollTop();
            conTop = $(this).offset().top - $(window).height();

            if(conTop < scrollTop) {
                $(this).addClass('on');
            }
        })
    }
    
//end
})