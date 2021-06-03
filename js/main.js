// Funktionen til burger menu
// Denne toggler classes på henholdsvis "menu" og "luk" knap
// Der viser og skjuler menuen
$("#burger-button").click(function(){
    $("#burger-menu").toggleClass("burger-menu--show");
  });

$("#burger-close").click(function(){
    $("#burger-menu").toggleClass("burger-menu--show");
  });
// Burger menu funktioner slut

// Funktioner til menukortene
// Denne toggler class på den man trykker på, for at vise det pågældende menukort
// Og fjerne classes på alle de andre
// Der viser og skjuler menuen
$(document).ready(function() {
  $('.btn-red__lunch').click(function() {
    $('.btn-red__lunch').toggleClass('btn-red__global-styling--gold')
    $('.unfold__lunch').toggleClass('unfold__global--show')
    $('.btn-red__lunch-text').toggleClass('btn-red__text--gold')
    $('.btn-red__lunch-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__lunch-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow').removeClass('btn-red__lunch-arrow--desktop-first')

    $('.btn-red__dinner').removeClass('btn-red__global-styling--gold')
    $('.unfold__dinner').removeClass('unfold__global--show')
    $('.btn-red__dinner-text').removeClass('btn-red__text--gold')
    $('.btn-red__dinner-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__dinner-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__children').removeClass('btn-red__global-styling--gold')
    $('.unfold__children').removeClass('unfold__global--show')
    $('.btn-red__children-text').removeClass('btn-red__text--gold')
    $('.btn-red__children-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__children-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__drinks').removeClass('btn-red__global-styling--gold')
    $('.unfold__drinks').removeClass('unfold__global--show')
    $('.btn-red__drinks-text').removeClass('btn-red__text--gold')
    $('.btn-red__drinks-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__drinks-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__dinner').click(function() {
    $('.btn-red__dinner').toggleClass('btn-red__global-styling--gold')
    $('.unfold__dinner').toggleClass('unfold__global--show')
    $('.btn-red__dinner-text').toggleClass('btn-red__text--gold')
    $('.btn-red__dinner-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__dinner-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow').removeClass('btn-red__lunch-arrow--desktop-first')
    
    $('.btn-red__lunch').removeClass('btn-red__global-styling--gold')
    $('.unfold__lunch').removeClass('unfold__global--show')
    $('.btn-red__lunch-text').removeClass('btn-red__text--gold')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__lunch-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__children').removeClass('btn-red__global-styling--gold')
    $('.unfold__children').removeClass('unfold__global--show')
    $('.btn-red__children-text').removeClass('btn-red__text--gold')
    $('.btn-red__children-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__children-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__drinks').removeClass('btn-red__global-styling--gold')
    $('.unfold__drinks').removeClass('unfold__global--show')
    $('.btn-red__drinks-text').removeClass('btn-red__text--gold')
    $('.btn-red__drinks-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__drinks-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__children').click(function() {
    $('.btn-red__children').toggleClass('btn-red__global-styling--gold')
    $('.unfold__children').toggleClass('unfold__global--show')
    $('.btn-red__children-text').toggleClass('btn-red__text--gold')
    $('.btn-red__children-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__children-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow').removeClass('btn-red__lunch-arrow--desktop-first')
    
    $('.btn-red__lunch').removeClass('btn-red__global-styling--gold')
    $('.unfold__lunch').removeClass('unfold__global--show')
    $('.btn-red__lunch-text').removeClass('btn-red__text--gold')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__lunch-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__dinner').removeClass('btn-red__global-styling--gold')
    $('.unfold__dinner').removeClass('unfold__global--show')
    $('.btn-red__dinner-text').removeClass('btn-red__text--gold')
    $('.btn-red__dinner-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__dinner-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__drinks').removeClass('btn-red__global-styling--gold')
    $('.unfold__drinks').removeClass('unfold__global--show')
    $('.btn-red__drinks-text').removeClass('btn-red__text--gold')
    $('.btn-red__drinks-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__drinks-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__drinks').click(function() {
    $('.btn-red__drinks').toggleClass('btn-red__global-styling--gold')
    $('.unfold__drinks').toggleClass('unfold__global--show')
    $('.btn-red__drinks-text').toggleClass('btn-red__text--gold')
    $('.btn-red__drinks-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__drinks-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow').removeClass('btn-red__lunch-arrow--desktop-first')
    
    $('.btn-red__lunch').removeClass('btn-red__global-styling--gold')
    $('.unfold__lunch').removeClass('unfold__global--show')
    $('.btn-red__lunch-text').removeClass('btn-red__text--gold')
    $('.btn-red__lunch-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__lunch-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__dinner').removeClass('btn-red__global-styling--gold')
    $('.unfold__dinner').removeClass('unfold__global--show')
    $('.btn-red__dinner-text').removeClass('btn-red__text--gold')
    $('.btn-red__dinner-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__dinner-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__children').removeClass('btn-red__global-styling--gold')
    $('.unfold__children').removeClass('unfold__global--show')
    $('.btn-red__children-text').removeClass('btn-red__text--gold')
    $('.btn-red__children-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__children-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__skovhus').click(function() {
    $('.btn-red__skovhus').toggleClass('btn-red__global-styling--gold')
    $('.unfold__skovhus').toggleClass('unfold__global--show')
    $('.btn-red__skovhus-text').toggleClass('btn-red__text--gold')
    $('.btn-red__skovhus-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__skovhus-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__ice').removeClass('btn-red__global-styling--gold')
    $('.unfold__ice').removeClass('unfold__global--show')
    $('.btn-red__ice-text').removeClass('btn-red__text--gold')
    $('.btn-red__ice-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__ice-arrow').removeClass('btn-red__arrow--gold')
    

  });
});

$(document).ready(function() {
  $('.btn-red__ice').click(function() {
    $('.btn-red__ice').toggleClass('btn-red__global-styling--gold')
    $('.unfold__ice').toggleClass('unfold__global--show')
    $('.btn-red__ice-text').toggleClass('btn-red__text--gold')
    $('.btn-red__ice-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__ice-arrow').toggleClass('btn-red__arrow--gold')
    
    $('.btn-red__skovhus').removeClass('btn-red__global-styling--gold')
    $('.unfold__skovhus').removeClass('unfold__global--show')
    $('.btn-red__skovhus-text').removeClass('btn-red__text--gold')
    $('.btn-red__skovhus-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__skovhus-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__first').click(function() {
    $('.btn-red__first').toggleClass('btn-red__global-styling--gold')
    $('.unfold__first').toggleClass('unfold__global--show')
    $('.btn-red__first-text').toggleClass('btn-red__text--gold')
    $('.btn-red__first-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__first-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch--desktop-first').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch--desktop-first').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text--desktop-first').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container--desktop-first').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow--desktop-first').removeClass('btn-red__lunch-arrow--desktop-first')

    $('.btn-red__second').removeClass('btn-red__global-styling--gold')
    $('.unfold__second').removeClass('unfold__global--show')
    $('.btn-red__second-text').removeClass('btn-red__text--gold')
    $('.btn-red__second-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__second-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__third').removeClass('btn-red__global-styling--gold')
    $('.unfold__third').removeClass('unfold__global--show')
    $('.btn-red__third-text').removeClass('btn-red__text--gold')
    $('.btn-red__third-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__third-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fourth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fourth').removeClass('unfold__global--show')
    $('.btn-red__fourth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fourth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fourth-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fifth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fifth').removeClass('unfold__global--show')
    $('.btn-red__fifth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fifth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fifth-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__second').click(function() {
    $('.btn-red__second').toggleClass('btn-red__global-styling--gold')
    $('.unfold__second').toggleClass('unfold__global--show')
    $('.btn-red__second-text').toggleClass('btn-red__text--gold')
    $('.btn-red__second-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__second-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch--desktop-first').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch--desktop-first').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text--desktop-first').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container--desktop-first').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow--desktop-first').removeClass('btn-red__lunch-arrow--desktop-first')

    $('.btn-red__first').removeClass('btn-red__global-styling--gold')
    $('.unfold__first').removeClass('unfold__global--show')
    $('.btn-red__first-text').removeClass('btn-red__text--gold')
    $('.btn-red__first-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__first-arrow').removeClass('btn-red__arrow--gold')
    
    $('.btn-red__third').removeClass('btn-red__global-styling--gold')
    $('.unfold__third').removeClass('unfold__global--show')
    $('.btn-red__third-text').removeClass('btn-red__text--gold')
    $('.btn-red__third-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__third-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fourth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fourth').removeClass('unfold__global--show')
    $('.btn-red__fourth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fourth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fourth-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fifth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fifth').removeClass('unfold__global--show')
    $('.btn-red__fifth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fifth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fifth-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__third').click(function() {
    $('.btn-red__third').toggleClass('btn-red__global-styling--gold')
    $('.unfold__third').toggleClass('unfold__global--show')
    $('.btn-red__third-text').toggleClass('btn-red__text--gold')
    $('.btn-red__third-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__third-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch--desktop-first').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch--desktop-first').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text--desktop-first').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container--desktop-first').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow--desktop-first').removeClass('btn-red__lunch-arrow--desktop-first')

    $('.btn-red__second').removeClass('btn-red__global-styling--gold')
    $('.unfold__second').removeClass('unfold__global--show')
    $('.btn-red__second-text').removeClass('btn-red__text--gold')
    $('.btn-red__second-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__second-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__first').removeClass('btn-red__global-styling--gold')
    $('.unfold__first').removeClass('unfold__global--show')
    $('.btn-red__first-text').removeClass('btn-red__text--gold')
    $('.btn-red__first-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__first-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fourth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fourth').removeClass('unfold__global--show')
    $('.btn-red__fourth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fourth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fourth-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fifth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fifth').removeClass('unfold__global--show')
    $('.btn-red__fifth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fifth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fifth-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__fourth').click(function() {
    $('.btn-red__fourth').toggleClass('btn-red__global-styling--gold')
    $('.unfold__fourth').toggleClass('unfold__global--show')
    $('.btn-red__fourth-text').toggleClass('btn-red__text--gold')
    $('.btn-red__fourth-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__fourth-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch--desktop-first').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch--desktop-first').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text--desktop-first').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container--desktop-first').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow--desktop-first').removeClass('btn-red__lunch-arrow--desktop-first')

    $('.btn-red__third').removeClass('btn-red__global-styling--gold')
    $('.unfold__third').removeClass('unfold__global--show')
    $('.btn-red__third-text').removeClass('btn-red__text--gold')
    $('.btn-red__third-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__third-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__second').removeClass('btn-red__global-styling--gold')
    $('.unfold__second').removeClass('unfold__global--show')
    $('.btn-red__second-text').removeClass('btn-red__text--gold')
    $('.btn-red__second-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__second-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__first').removeClass('btn-red__global-styling--gold')
    $('.unfold__first').removeClass('unfold__global--show')
    $('.btn-red__first-text').removeClass('btn-red__text--gold')
    $('.btn-red__first-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__first-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fifth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fifth').removeClass('unfold__global--show')
    $('.btn-red__fifth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fifth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fifth-arrow').removeClass('btn-red__arrow--gold')
  });
});

$(document).ready(function() {
  $('.btn-red__fifth').click(function() {
    $('.btn-red__fifth').toggleClass('btn-red__global-styling--gold')
    $('.unfold__fifth').toggleClass('unfold__global--show')
    $('.btn-red__fifth-text').toggleClass('btn-red__text--gold')
    $('.btn-red__fifth-arrow-container').toggleClass('btn-red__arrow-container--gold')
    $('.btn-red__fifth-arrow').toggleClass('btn-red__arrow--gold')

    $('.btn-red__lunch--desktop-first').removeClass('btn-red__lunch--desktop-first')
    $('.unfold__lunch--desktop-first').removeClass('unfold__lunch--desktop-first')
    $('.btn-red__lunch-text--desktop-first').removeClass('btn-red__lunch-text--desktop-first')
    $('.btn-red__lunch-arrow-container--desktop-first').removeClass('btn-red__lunch-arrow-container--desktop-first')
    $('.btn-red__lunch-arrow--desktop-first').removeClass('btn-red__lunch-arrow--desktop-first')

    $('.btn-red__third').removeClass('btn-red__global-styling--gold')
    $('.unfold__third').removeClass('unfold__global--show')
    $('.btn-red__third-text').removeClass('btn-red__text--gold')
    $('.btn-red__third-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__third-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__second').removeClass('btn-red__global-styling--gold')
    $('.unfold__second').removeClass('unfold__global--show')
    $('.btn-red__second-text').removeClass('btn-red__text--gold')
    $('.btn-red__second-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__second-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__first').removeClass('btn-red__global-styling--gold')
    $('.unfold__first').removeClass('unfold__global--show')
    $('.btn-red__first-text').removeClass('btn-red__text--gold')
    $('.btn-red__first-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__first-arrow').removeClass('btn-red__arrow--gold')

    $('.btn-red__fourth').removeClass('btn-red__global-styling--gold')
    $('.unfold__fourth').removeClass('unfold__global--show')
    $('.btn-red__fourth-text').removeClass('btn-red__text--gold')
    $('.btn-red__fourth-arrow-container').removeClass('btn-red__arrow-container--gold')
    $('.btn-red__fourth-arrow').removeClass('btn-red__arrow--gold')
  });
});

// Menukort funktioner slut

// Funktion til at vise og skjule FAQ
$(document).ready(function() {
    $('.faq-button').click(function() {
      $('.faq-button').toggleClass('less-faqs')
      $('.faq-hide').toggleClass('faq-show')
      $('.faq-mobile-hide').toggleClass('faq-show')
    });
});
// FAQ Funktion slut
