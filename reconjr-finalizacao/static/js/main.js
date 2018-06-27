$('.servicos-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect:true,
  accessibility:true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
      	slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows : false
      }
    }
  ]
});


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('.membros-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 550,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });