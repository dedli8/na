(function($){
    $.fn.scrollTo = function(offset){
        if(offset == undefined){
            offset = 0;
        }
        return $(this).on('click', function(e){
                e = e || event;
                e.preventDefault();
                var id = '#'+$(this).attr('data-target');
                $('html, body').animate({
                    scrollTop: $(id).offset().top - offset
                }, 1000, 'linear');
            })
    }
})(jQuery);