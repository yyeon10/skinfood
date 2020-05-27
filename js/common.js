$(function(){
//start
    
    function chaClass(className){
        $(this).addClass(className)
        .siblings().removeClass(className);
    }
    
    //버거 메뉴 열기
    $('.burger_menu').on('click', function(){
        $('header .sub_menu').toggleClass('on');
    })
    
    //버거 메뉴 닫기
    $('.sub_menu div').on('click', function(){
        $('header .sub_menu').toggleClass('on');
    })
    
    //언어 설정 변경
    $('footer input').on('click', function(){
        $(this).toggleClass('on');
        $('.lang_box').slideToggle();
    })
    
    $('.lang_box li').on('click', function(){
        $('.lang_box').slideToggle();
        var idx = $(this).index();
        var text = $('.lang_box li').eq(idx).text();
        $('footer input').val(text);
    })
    
    //top 버튼
    $('aside span').on('click', function(){
        $('html').animate({
            scrollTop:0
        },300)
    })
    
    //네비 선택 고정
    $('nav a').on('click', function(){
        localStorage.page = $(this).index();
    })
    
    $('.sub_menu a').on('click', function(){
        localStorage.page = $(this).attr('data-num');
    })
    
    $('nav a').eq(localStorage.page).addClass('on');

      
//end
})