jQuery(function($) {

  ////////////////////
  ////////// SET HEIGHT
  /////////////////////

  // CARVE540

  function setMainHeight() {
    var $logoHeight = $('.logo').height();
    var $sliderHeight = $('.carve540_slide').height();
    var $totalHeight =  $sliderHeight + 90;
    $('.carve540_slider').height($totalHeight);

  }

  // CARVE540 - POP UP
  function setPopupHeight() {
    var $slideCarve540Height = $('.carve540_slide').height();
    $('.pop-up_features').height($slideCarve540Height);
  }

  // BOUTIQUE PRODUIT
  function setSliderHeight() {
    var $slideHeight = $('.product_slide').height();
    $('.slider_product .container').height($slideHeight);

  }

  setMainHeight();
  setSliderHeight();
  setPopupHeight();

  $(window).resize(function() {
    setMainHeight() ;
    setSliderHeight();
    setPopupHeight();
  });


  //////////////////////
  /////////// JUMBOTRON
  /////////////////////



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







  ///////////////////
  ////// CARVE 540
  ///////////////////





  ///////////// SLIDER CARVE 540

  var $sliderCarve540 = $('.dp_carve540'), // on cible le bloc du slider
  $slideCarve540 = $('.carve540_slide'), // on cible les slides contenues dans le slider
  indexSlideCarve540 = $slideCarve540.length - 1, // on définit l'index du dernier élément
  i540 = 0, // on initialise un compteur
  $currentSlideCarve540 = $slideCarve540.eq(i540); // enfin, on cible la slide courante, qui possède l'index i (0 pour l'instant)
  $currentSlideCarve540.fadeIn(500)

  function changeSlideCarve540(direction){
    $currentSlideCarve540 = $slideCarve540.eq(i540); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    if (direction == "left" ) {
      $slideCarve540.animate({opacity: 0, left: '-300px'}, 900).animate({left:'300px'}, 0).hide(0); // on cache les images
    } else if (direction == "right" || !direction) {
      $slideCarve540.animate({opacity: 0, left: '300px'}, 900).animate({left:'-300px'}, 0).hide(0); // on cache les images
    }

    $currentSlideCarve540.fadeIn(0).animate({opacity: 1.0, left :"0px", right :"0px"}, 900); // on affiche seulement l'image courante
  }


  changeSlideCarve540()


  // AJOUT DES BOUTONS DE NAVIGATION
  $('.dp_carve540 .controls_wrapper').append('<div class="controls"> <div class="prev_carve540 nav_carve540"><figure><img src="img/left-arrow.png"></figure></div> <div class="next_carve540 nav_carve540"><figure><img src="img/right-arrow.png"></figure></div></div>');

  // GESTION DE LA NAVIGATION
  $('.next_carve540').click(function(event) {
    i540++;
    if (i540 > indexSlide) {
      i540 = 0;
    }
    changeSlideCarve540('right');

  });

  $('.prev_carve540').click(function(event) {
    i540--;
    if (i540 < 0) {
      i540 = indexSlide;
    }
    changeSlideCarve540('left');

  });


  // LANCEMENT DU DEFILEMENT AUTOMATIQUE DU SLIDER_PRODUCT
  var loopCarve540;
  var popup_open = false;

  function sliderCarve540(){

    loopCarve540 = setTimeout(function(){

      i540++;
      if (i540 > indexSlideCarve540) {
        i540 = 0;
      }
      if (popup_open == false) {
        changeSlideCarve540();
        sliderCarve540();
      }
    }, 5000);

  }

  sliderCarve540();

  // On s'assure qu'en cas de nav manuelle, le chrono avant defilement revienne à 0;

  $('.nav_carve540').click(function(event) {
    clearTimeout(loopCarve540); // On sort de la boucle timeOut créée ans la function carrousel_1
    sliderCarve540(); // Puis on la relance
  });


  ///////////// POP UP CARVE 540 FEATURES

  /////////////////// FRONT

  $('.board-front .trigger').click(function(event) {
    $('.board-front .pop-up_features').fadeIn(700).css("display", "flex");
    popup_open = true;
  });

  /////////////////// BACK

  $('.board-back .trigger').click(function(event) {
    $('.board-back .pop-up_features').fadeIn(700).css("display", "flex");
    popup_open = true;

  });

  ////////////////// CLOSE BOTH

  $('.carve540_pop-up_close').click(function(event) {
    $('.pop-up_features').fadeOut(700);
    clearTimeout(loopCarve540); // On sort de la boucle timeOut créée ans la function carrousel_1
    popup_open = false;
    sliderCarve540(); // Puis on la relance

  });



  ////////////////////////
  //////////////// MOVIES
  ///////////////////////

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


  ////////////////////////
  // VIDEO POP UP YOUTUBE
  ////////////////////////


  $('.video').click(function(event) {
    $('.pop-up_background').fadeIn(400);
  });

  $('.video_left').click(function(event) {
    $('.pop-up_left').fadeIn({
      duration:400,
      queue: false
    });
  });

  $('.video_right').click(function(event) {
    $('.pop-up_right').fadeIn({
      duration:400,
      queue: false
    })
  });

  $('.pop-up_close').click(function(event) {
    $('.pop-up_background').fadeOut(400);
    $('.pop-up').fadeOut();
    var video = $(this).siblings(".pop-up_video").attr("src");
    $(this).siblings(".pop-up_video").attr("src","");
    $(this).siblings(".pop-up_video").attr("src",video);
  });







  ////////////////////////
  // LAUNCH PARALLAX
  ////////////////////////



  function runParallax() {
    $('.parallax_bg').addClass('active');
  }


  var $window = $(window);
  var $parallax_trigger = $('.parallax');

  $window.on('scroll resize', check_if_in_view);


  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height - 500);

    $.each($parallax_trigger, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
        runParallax();


      }
    });
  }


  ////////////////////////
  // SLIDER PRODUCT - BOUTIQUE
  ////////////////////////

  var $slider = $('.slider_product'), // on cible le bloc du slider
  $slide = $('.slider_product .product_slide'), // on cible les slides contenues dans le slider
  indexSlide = $slide.length - 1, // on définit l'index du dernier élément
  i = 0, // on initialise un compteur
  $currentSlide = $slide.eq(i); // enfin, on cible la slide courante, qui possède l'index i (0 pour l'instant)
  $currentSlide.fadeIn(500)

  function changeSlide(direction){
    $currentSlide = $slide.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    if (direction == "left") {
      $slide.animate({opacity: 0, left: '-300px'}, 900).animate({left:'300px'}, 0); // on cache les images
    } else if (direction == "right" || !direction) {
      $slide.animate({opacity: 0, left: '300px'}, 900).animate({left:'-300px'}, 0); // on cache les images
    }

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
    changeSlide('right');

  });

  $('.prev').click(function(event) {
    i--;
    if (i < 0) {
      i = indexSlide;
    }
    changeSlide('left');

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












  // Autoplay video on click
  // $('#play-video, .video figure .fas').on('click', function(ev) {
  //   $(this).parent().fadeOut();
  //   thevid = $('#video');
  //   $("#video")[0].src += "?autoplay=1";
  // });






  // END JQUERY
});
