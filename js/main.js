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

  // Adaptation de la hauteur en cas de variation de la taille de la fenêtre
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
  $('.videos .video').hover(function(){
    var $figcaption = $(this).find('figcaption');
    $figcaption.data('initialText', $figcaption.html());
    $figcaption.html('Regarder le film');
    $(this).toggleClass('active');

    // Paramétrage de l'overlay sur la vidéo non survolée
    var $class = $(this).hasClass('video_left');
    if ($class) {
      $('.videos .video_right img').css('opacity', '0.5');

    } else {
      $('.videos .video_left img').css('opacity', '0.5');

    }


  },
  function() {
    $(this).find('figcaption').html($(this).find('figcaption').data('initialText'));
    $('.video img').css('opacity', '1');
  });

  // Overlay sur l'élement non selectionné






  // SLIDER PRODUCT


  var $slider = $('.slider_product'), // on cible le bloc du slider
  $slide = $('.slider_product .product_slide'), // on cible les slides contenues dans le slider
  indexSlide = $slide.length - 1, // on définit l'index du dernier élément
  i = 0, // on initialise un compteur
  $currentSlide = $slide.eq(i); // enfin, on cible la slide courante, qui possède l'index i (0 pour l'instant)
  $currentSlide.fadeIn(500)

  function changeSlide(){
    $currentSlide = $slide.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $slide.animate({opacity: 0, left: '+300px'}, 900).animate({left:'-300px'}, 0); // on cache les images
    $currentSlide.animate({opacity: 1.0, left :"0px", right :"0px"}, 900); // on affiche seulement l'image courante

    switch (i) {
      case 0:
      $slider.addClass('pink');
      $slider.removeClass('yellow green')
      break;
      case 1:
      $slider.addClass('green');
      $slider.removeClass('pink yellow')
      break;
      case 2:
      $slider.addClass('yellow');
      $slider.removeClass('green pink')
      break;


      default:

    }
  }

  changeSlide();

  // AJOUT DES BOUTONS DE NAVIGATION
  $('.slider_product .container').append('<div class="controls"> <div class="prev nav"><figure><img src="img/left-arrow.png"></figure><span>Nos autres<br>longboards</span></div> <div class="next nav"><span>Nos autres<br>longboards</span><figure><img src="img/right-arrow.png"></figure></div></div>');

  // GESTION DE LA NAVIGATION
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


  // LANCEMENT DU DEFILEMENT AUTOMATIQUE DU SLIDER_PRODUCT
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


  function setSliderHeight() {
    var $slideHeight = $('.product_slide').height();
    $('.slider_product .container').height($slideHeight);

  }


    setSliderHeight();



  $(window).resize(function() {

    setSliderHeight();
  });





  // VIDEO POP UP


  $('.video_left').click(function(event) {
    $('.pop-up_left').fadeIn(400)
  });

  $('.video_right').click(function(event) {
    $('.pop-up_right').fadeIn(400)
  });

  $('.pop-up_close').click(function(event) {

    $('.pop-up').fadeOut();
    var video = $(this).siblings(".pop-up_video").attr("src");
    $(this).siblings(".pop-up_video").attr("src","");
    $(this).siblings(".pop-up_video").attr("src",video);
  });





  // Autoplay video on click
  // $('#play-video, .video figure .fas').on('click', function(ev) {
  //   $(this).parent().fadeOut();
  //   thevid = $('#video');
  //   $("#video")[0].src += "?autoplay=1";
  // });






  // END JQUERY
});
