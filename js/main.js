//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
  }(jQuery));


$(document).ready(function(){
    $('#leftMenu li').qToggle();
    $('#mainSlider').owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000
    });
    $('#clientsCarousel').owlCarousel({
        margin: 38,
        items: 4,
        autoWidth: true,
        nav: true,
        

    });
})