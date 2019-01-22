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


  // Autoplay video on click
  $('#play-video, .video figure .fas').on('click', function(ev) {
    $(this).parent().fadeOut();
    thevid = $('#video');
    $("#video")[0].src += "?autoplay=1";
  });






  // END JQUERY
});
