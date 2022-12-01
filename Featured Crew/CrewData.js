(function($) {
  
    var slide = function(ele,options) {
        var $ele = $(ele);
    
        var setting = {
            speed: 500, 
            interval: 2000,
        };
       
        $.extend(true, setting, options);
      
        var states = [
   
            { $zIndex: 2, width: 86, height: 86, top: 59, left: 25, $opacity: 0.4 },
            { $zIndex: 3, width: 86, height: 86, top: 35, left: 140, $opacity: 0.7 },
            { $zIndex: 4, width: 140, height: 144, top: -20, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 86, height: 86, top: 35, left: 440, $opacity: 0.7 },
            { $zIndex: 2, width: 86, height: 86, top: 62, left: 555, $opacity: 0.4 },
               ];

        var $lis = $ele.find('li');
        var timer = null;

       
        $ele.find('.hi-next').on('click', function() {
            next();
         
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
       
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('li').css('opacity', state.$opacity);
            });
        }

        
        function next() {
           
            states.unshift(states.pop());
            move();
        }

      
    }

    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        
        return this;
    }
})(jQuery);
