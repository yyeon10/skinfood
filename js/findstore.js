$(function () {
    //start
    function chaClass(className) {
        $(this).addClass(className).siblings().removeClass(className);
    }
    //본문 스크롤 이벤트
    var scrollTop = '';
    var conTop = '';
    var lastScroll = 0;
    $(window).on('scroll', function (e) {
        headerMove();
    });

    function headerMove() {
        scrollTop = $(window).scrollTop()
        if (scrollTop >= lastScroll) {
            $('header').addClass('up');
            $('header .sub_menu').css('top', '196px')
        }
        else {
            $('header').removeClass('up');
            $('header .sub_menu').css('top', '0px')
        }
        lastScroll = scrollTop
    }
    $(".store_body").mCustomScrollbar({
        theme: "minimal-dark"
    });
    $(".loca_body").mCustomScrollbar({
        theme: "minimal-dark"
    });
    $('.con_finder input').on('click', function () {
        $('.con_finder .loca_body').slideToggle();
    });
    $.ajax({
        url: 'js/store.json'
        , dataType: 'json'
        , success: function (data) {
            store($(data));
        }
    })

    function store(k) {
        var city = ["서울특별시", "경기도", "인천광역시", "강원도", "대전광역시", "충청북도", "충청남도", "대구광역시", "전라북도", "전라남도", "광주광역시", "경상북도", "경상남도", "부산광역시", "제주특별자치도"];
        for (var l = 0; l < city.length; l++) {
            var city_list = "<li>" + city[l] + "</li>";
            $('.loca_list').append(city_list);
        }
        for (var i = 0; i < k[0].search.length; i++) {
            // console.log(k[0].search[i])
            storeList(i);
        }
        
        $('.con_finder .loca_list li').on('click', function () {
            $('.con_finder .loca_body').slideToggle();
            $('.con_finder input').val($(this).text());
            $('.store_list').html('');
            storeList($(this).index());
            mapCha();
        });
        $('.con_finder > span').eq(1).on('click', function () {
            $('.con_finder input').val('시 / 도');
            $('.store_list').html('');
            for (var i = 0; i < k[0].search.length; i++) {
                // console.log(k[0].search[i])
                storeList(i);
                mapCha();
            }
        })
        
        mapCha();

        function storeList(i) {
            for (var j = 0; j < k[0].search[i][city[i]].length; j++) {
                var keyword = k[0].search[i][city[i]][j];
                //console.log(k[0].search[i][city[i]][j].name);
                var name = "<strong>" + keyword.name + "</strong>";
                var add = "<span>" + keyword.add + "</span>";
                var tel = "<span>" + keyword.tel + "</span>";
                var storeList = "<li>" + name + add + tel + "</li>"
                $('.store_list').append(storeList);
            }
        }
        
        function mapCha() {
            $('.store_list li').on('click', function () {
                key('스킨푸드 ' + $(this).find('strong').text());
            })
        }
    }
    //end
})