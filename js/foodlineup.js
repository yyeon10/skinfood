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
        $('.content_box .food_list li').each(function(i){
            scrollTop = $(window).scrollTop();
            conTop = $(this).offset().top - $(window).height();

            if(conTop < scrollTop) {
                $(this).addClass('on');
            }
        })
        $('.content_box > a').each(function(i){
            scrollTop = $(window).scrollTop();
            conTop = $(this).offset().top - $(window).height();

            if(conTop < scrollTop) {
                $(this).addClass('on');
            }
        })
    }

    $.ajax({
        url: 'js/foodlist.json'
        , dataType: 'json'
        , success: function(data) {
            console.log('a')
            foodList($(data));
        }
    })
    
    function foodList(k){
        //console.log(k[0].foodlist[0].mainimg)
        for (var i = 0; i < k[0].foodlist.length; i++) {
            var key = k[0].foodlist[i],
                number = "<span>"+key.number+"</span><div>"+"<img src="+key.mainimg+"></div>",
                enName = "<small>"+key.engname+"</small>",
                korName = "<strong>"+key.korname+"</strong>",
                info = "<p>"+"<span>"+key.info1+"</span>"+"<span>"+key.info2+"</span>"+"</p>",
                sub1 = "<figure class='sub_info'><div>"+"<img src="+key.subimg1+"></div>"+"<figcaption><em>"+key.subname1+"</em>"+"<span>"+key.price1+"</span></figcaption>"+"</figure>",
                sub2 = "<figure class='sub_info'><div>"+"<img src="+key.subimg2+"></div>"+"<figcaption><em>"+key.subname2+"</em>"+"<span>"+key.price2+"</span></figcaption>"+"</figure>",
                sub3 = "<figure class='sub_info'><div>"+"<img src="+key.subimg3+"></div>"+"<figcaption><em>"+key.subname3+"</em>"+"<span>"+key.price3+"</span></figcaption>"+"</figure>",
                sub4 = "<figure class='sub_info'><div>"+"<img src="+key.subimg4+"></div>"+"<figcaption><em>"+key.subname4+"</em>"+"<span>"+key.price4+"</span></figcaption>"+"</figure>",
                subAll;
            
            if(i==4 || i==5 || i==9){
                subAll = "<div class='sub_all'>"+sub1+sub2+sub3+"<span></span></div>"
            } else if (i == 7){
                subAll = "<div class='sub_all'>"+sub1+sub2+"<span></span></div>"
            } else {
                subAll = "<div class='sub_all'>"+sub1+sub2+sub3+sub4+"<span></span></div>"
            }
            
            var foodList = "<li><figure>"+number+"<figcaption>"+enName+korName+info+subAll+"</figcaption>"+"</figure></li>"
            
            $('.food_list').append(foodList);
        }
    }
    
//end
})









