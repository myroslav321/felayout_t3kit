(function($) {
    'use strict';

    // document load event
    $(document).ready(function() {
        var $frame = $('.js__frame-animated');
        var $slider = $('.slider-container');
        $frame.each(function(i){
            var self = $(this);
                if(self.context.offsetParent.nodeName == 'BODY'){
                self.addClass('_animated');
            }
        });
        $slider.each(function(i){
            if($(this).find($frame).length){
                $(this).addClass('_full-width');
            }
        });
    });

})(jQuery);
