$("#burger-button").click(function(){
    $("#burger-menu").toggleClass("burger-menu--show");
  });

$("#burger-close").click(function(){
    $("#burger-menu").toggleClass("burger-menu--show");
  });

  $(document).ready(function() {
    $('.btn-red__global-styling').click(function() {
      $('.btn-red__global-styling').toggleClass('btn-red__global-styling--gold')
      $('.unfold__global').toggleClass('unfold__global--show')
      $('.btn-red__text').toggleClass('btn-red__text--gold')
      $('.btn-red__arrow-container').toggleClass('btn-red__arrow-container--gold')
      $('.btn-red__arrow').toggleClass('btn-red__arrow--gold')
    });
});


$(document).ready(function() {
    $('.faq-button').click(function() {
      $('.faq-button').toggleClass('less-faqs')
      $('.faq-hide').toggleClass('faq-show')
    });
});
