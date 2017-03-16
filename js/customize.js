$(document).ready(function(){
	if ($(window).width() > 767) {

                var $sidebar   = $(".sidebar"), 
                    $window    = $(window),
                    offset     = $sidebar.offset(),
                    topPadding = 20;
                    
                $window.scroll(function() {
                     if ($window.scrollTop() > offset.top) {
                        $sidebar.stop().animate({
                            marginTop: $window.scrollTop() - offset.top + topPadding
                        }, 0, function() {});
                    } else {
                        $sidebar.stop().animate({
                            marginTop: 0
                        });
                    }
                });

            };

});