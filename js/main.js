jQuery(function($) {

  //functions
  var position = $('h1').offset();
  console.log(position);



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




// ANIMATION HORIZONTALE DU PARALLAX

  // function animateBG() {
  //     $('.parallax').animate({
  //         'background-position': '-=50'
  //     }, 120);
  //     animateBG();
  // }
  //
  // // $(window).scroll(function(){
  //   animateBG();
  // // })




  // Autoplay video on click
  // $('#play-video, .video figure .fas').on('click', function(ev) {
  //   $(this).parent().fadeOut();
  //   thevid = $('#video');
  //   $("#video")[0].src += "?autoplay=1";
  // });






  // END JQUERY
});
