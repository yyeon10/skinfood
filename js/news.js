$(function(){
//start
    
    var num = 0
    
    $('.con_menu span').on('click', function(){
        $(this).addClass('on')
        .siblings().removeClass('on');
    })
    
    
    $('.close_btn').on('click', function(){
        $('.pop_all').removeClass('on');
    })
    
    //본문 스크롤 이벤트
    
    var scrollTop = '';
    var conTop= '';
    var lastScroll = 0;
    
    $(window).on('scroll', function(e){
         
        headerMove();

    });
    var dataName='';
    $.ajax({
        url: 'js/newslist.json'
        , dataType: 'json'
        , success: function(data) {
            console.log('a')
            newsList($(data));
            $('.more_btn').on('click', function(){
                $('.con_list').html('');
                num += 9;
                newsList($(data));
            })
            $('.con_menu span').eq(0).on('click', function(){
                $('.con_list').html('');
                $('.more_btn').show();
                dataName = null;
                num = 0;
                newsList($(data));
            })
            
            $('.con_menu span').not(':first').on('click', function(){
                $('.con_list').html('');
                dataName = $(this).text();
                $('.more_btn').hide();
                num = 9;
                newsList($(data));
            })
        }
    })
    
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
    
    
    function newsList(k){
        for(var i=0; i < 9+num; i++){
            var key = k[0].newslist[i],
                thumImg = "<img src="+key.thumimg+">",
                title = "<h3>"+key.title+"</h3>",
                newsList,
                popUp;
            if(!dataName){
               newsList = "<li class="+key.datatype+" data-type="+key.datatype+" data-num="+key.datanum+"><div>"+thumImg+"</div><div class='news_title'>"+title+"</div></li>" ;
                $('.con_list').append(newsList);
            }
            if(key.datatype == dataName){
                newsList = "<li class="+key.datatype+" data-type="+key.datatype+" data-num="+key.datanum+"><div>"+thumImg+"</div><div class='news_title'>"+title+"</div></li>";
                $('.con_list').append(newsList);
            }
            
            
            
            
        }
        $('.con_list li').on('click',function(){
            var key = k[0].newslist[$(this).attr('data-num')-1],
                title = "<strong>"+key.title+"</strong>",
                date = "<small>"+key.date+"</small>",
                img1 = "<img src="+key.img1+">",
                img2 = "<img src="+key.img2+">",
                detail = "<p>"+key.detail+"</p>",
                url = "<iframe width='1000' height='600' src="+key.url+" frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
            if($(this).attr('data-type')=='product'){
                $('.pop_up').html('');
                popUp = "<figure class='pop_header'>"+"<img src='img/icon_product.png'><figcaption>"+title+date+"</figcaption></figure>"+"<div>"+img1+img2+"</div>";
            } else if($(this).attr('data-type')=='cf'){
                $('.pop_up').html('');
                popUp = "<figure class='pop_header'>"+"<img src='img/icon_cf.png'><figcaption>"+title+date+"</figcaption></figure>"+"</div>"+"<div>"+url+"</div>";
            } else if($(this).attr('data-type')=='event'){
                $('.pop_up').html('');
                popUp = "<figure class='pop_header'>"+"<img src='img/icon_event.png'><figcaption>"+title+date+"</figcaption></figure>"+"</div>"+"<div>"+img1+detail+"</div>";
            }
            $('.pop_up').append(popUp);
            $('.pop_all').addClass('on');
        })
       
    }

    

    
//end
})