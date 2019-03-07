$(document).ready(function() {
  $(".case-item a").fancybox({
    arrows : false,
    infobar : false, 
    toolbar : false,
    afterLoad: function(instance, current) {
        if ( instance.group.length > 1 && current.$content ) {
          current.$content.append('<button class="fancybox-button fancybox-button--arrow_right next" data-fancybox-next><i class="fa fa-angle-right" aria-hidden="true"></i></button><button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>');
        }

        if ( instance.group.length > 1 && current.$content ) {
          current.$content.append('<button data-fancybox-close="" class="fancybox-button fancybox-button--close" title="Close"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30"></path></svg></button>');
        }
    }
  });

  $('.open-menu').click(function(){
    $('.main-menu').slideToggle('slow');
  });

  $(window).scroll(function () {
        
        if ($(this).scrollTop() > 550) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
    
    
    $('.scroll-top button').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

var overlay = document.getElementById('overlay');
var vid = document.getElementById('video');
if (overlay.addEventListener) {
    overlay.addEventListener("click", play, false)
} else if (overlay.attachEvent) {
    overlay.attachEvent("onclick", play)
}

function play() {
    if (vid.paused) {
        vid.play();
        overlay.className = "o";
    } else {
        vid.pause();
        overlay.className = "";
    }
}
