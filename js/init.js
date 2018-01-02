(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {

var nice = $("body").niceScroll({
  cursorcolor:"rgba(66, 66, 66, 0.82)",
  cursorwidth:"10px"
});  // The document page (body)

});

$(document).ready(function(){
  $('.scrollspy').scrollSpy('scrollOffset', 'activeClass');
});
