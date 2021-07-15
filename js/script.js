(function($) {
    $(document).ready(function() {
        $('.logo-box > a').on('click', function() {
             $(this).toggleClass('toggle').siblings('.top-list').slideToggle(200);
        });
        $('.support-item > a').on('click', function() {
             $(this).siblings('.sup-list').slideToggle(200);
        })

        $('.support-item > a').on('click', function(){
                $(this).children().toggle();
                $(this).parent().toggleClass('b-support');
                $(this).toggleClass('bbn');
        })

        $('.turn').on('click', function(){
             $('.account-list').toggle();
             $('.account-main').toggleClass('b-account')
        })
         $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
         });

        $('.chat-mini').on('click', function(){
             $('.chat').toggle();
             $('.chat-mini-box').toggleClass('bm-470')
             $('.chat-mini').toggleClass('tf-0')
        })

        $(".card").fancybox({
            'titlePosition':'over',
            'transitionIn' : 'none',
            'transitionOut': 'none',
            'padding' : '0px',
            'scrolling' : 'hidden'
        });
    });
})(jQuery);