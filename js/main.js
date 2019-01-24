jQuery(function($) {




  // Jumbotro full Height
  function setHeight() {
    windowHeight = $(window).innerHeight() * 1.1;
    if ($(window).width() < 720) {
      windowHeight = $(window).innerHeight() * 1.2;
    }
    $('.dp_jumbotron').css('min-height', windowHeight);
  };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });

  function backgroundHeight() {
    var bH = $(document).height();
    $('#dp_background').css('min-height', bH);;
  }
  $(window).on('scroll resize', backgroundHeight);
  backgroundHeight();



  // Display "Voir le film" au survol
  $('.videos figure').hover(function(){
    var $figcaption = $(this).children('figcaption');
    $figcaption.data('initialText', $figcaption.html());
    $figcaption.html('Regarder le film');
  },
  function() {
    $(this).children('figcaption').html($(this).children('figcaption').data('initialText'));
  });


  // SLIDER PRODUCT

  var $slider = $('.slider_product'), // on cible le bloc du carrousel
  $slide = $('.slider_product .product_slide'), // on cible les images contenues dans le carrousel
  indexSlide = $slide.length - 1, // on définit l'index du dernier élément
  i = 0, // on initialise un compteur
  $currentSlide = $slide.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
  $currentSlide.fadeIn(500)

  function changeSlide(){
    $currentSlide = $slide.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $slide.fadeOut(500).delay(490); // on cache les images
    $currentSlide.fadeIn(500); // on affiche seulement l'image courante
  }




  changeSlide();


  $slider.append('<div class="controls"> <div class="prev nav"><figure><img src="img/left-arrow.png"></figure><span>Nos autres longboards</span></div> <div class="next nav"><figure><img src="img/right-arrow.png"></figure><span>Nos autres longboards</span></div></div>');

  $('.next').click(function(event) {
    i++;
    if (i > indexSlide) {
      i = 0;
    }
    changeSlide();

  });

  $('.prev').click(function(event) {
    i--;
    if (i < 0) {
      i = indexSlide;
    }
    changeSlide();

  });


  var loop;

  function slider(){

    loop = setTimeout(function(){

      i++;
      if (i > indexSlide) {
        i = 0;
      }
      changeSlide();
      slider();
    }, 5000);

  }

  slider();

  // On s'assure qu'en cas de nav manuelle, le chrono avant defilement revienne à 0;

  $('.nav').click(function(event) {

    clearTimeout(loop); // On sort de la boucle timeOut créée ans la function carrousel_1
    slider(); // Puis on la relance
  });



  // Autoplay video on click
  // $('#play-video, .video figure .fas').on('click', function(ev) {
  //   $(this).parent().fadeOut();
  //   thevid = $('#video');
  //   $("#video")[0].src += "?autoplay=1";
  // });






  // END JQUERY
});
