$(function(){
//start
    var idx = 0, i = 0, inter, newsInter;

    $('.back_img div').not(':first').hide();
    
    
    
    function loop(){
        inter = setInterval(function(){
            //동영상을 재생하지 않을 때만 실행
            if(player.getPlayerState() != 1 && player2.getPlayerState() != 1 && player3.getPlayerState() != 1){
                ani('next');
            }
        },5000)
    }
        
    //배너 루프
    function ani(i){
        $('.back_img div').eq(idx).fadeOut(1000);
        if(i=='next'){
            idx++;
        }else{
            idx--;
        }
         
        if(idx == $('.back_img div').length){
            idx = 0;
        }else if(idx == -1){
            idx = 2;         
        }
        $('.back_img div').eq(idx).fadeIn(1000);
        
        $('.con_all li').eq(idx).addClass('on')
        .siblings().removeClass('on');
        $('.con_indi em').text(idx+1 + ' / ' + $('.con_all li').length);
    }
    
    //뉴스 루프
    function newsLoop() {
        newsInter = setInterval(function(){
            i++;
            if(i==$('.news_list ul li').length){
                i = 0
            }
            $('.news_list ul li').eq(i).addClass('on')
            .siblings().removeClass('on');
            
        },2500)
    }
    
    loop();
    newsLoop();
    
    //배너 정지 버튼 클릭 이벤트
    $('.con_indi span').eq(2).on('click', function(){
        $(this).toggleClass('play');
        if($('.con_indi span').eq(2).hasClass('play')){
            update(1)
        } else {
            update(0)
        }
    }) 
    
    //배너 링크 마우스 오버 이벤트
    $('.con_all .con_text a').on({
        mouseenter:function(){
            update(1)
        },
        mouseleave:function(){
            update(0)
        }
    });
    
    //베너 좌우 버튼 이벤트
    $('.con_indi span').eq(0).on({
        mouseenter:function(){
            update(1)
        },
        mouseleave:function(){
            update(0)
        },
        click:function(){
            ani('prev');
        }
    })
    
    $('.con_indi span').eq(1).on({
        mouseenter:function(){
            update(1)
        },
        mouseleave:function(){
            update(0)
        },
        click:function(){
            ani('next');
        }
    })
    
    //뉴스 상하 버튼 이벤트
    $('.news_list span').eq(0).on({
        click: function(){
        i--;
        if(i==-1){
            i = $('.news_list ul li').length -1
        }
        $('.news_list ul li').eq(i).addClass('on')
        .siblings().removeClass('on');
        },
        mouseenter:function(){
            clearInterval(newsInter);
        },
        mouseleave:function(){
            newsLoop();
        }
    })
    
    $('.news_list span').eq(1).on({
        click: function(){
        i++;
        if(i==$('.news_list ul li').length){
            i = 0
        }
        $('.news_list ul li').eq(i).addClass('on')
        .siblings().removeClass('on');
        },
        mouseenter:function(){
            clearInterval(newsInter);
        },
        mouseleave:function(){
            newsLoop();
        }
                                   
    })
    
    //배너 일시정지, 재생 이벤트
    function update(k){
       if(k){
            clearInterval(inter);
        } else {
            loop();
        }
    }

//end
})






