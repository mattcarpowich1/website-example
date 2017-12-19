$(document).ready(function(){

  // $("#wrapper").hide();

  setTimeout(function() {
    $(".loader").addClass("shrink");
  }, 1000);

  setTimeout(function() {
    $("#first").addClass("fader");
  }, 1700);

  // setTimeout(function() {
  //   $("#wrapper").fadeIn(500).show();
  // }, 2000);

  var nav = document.getElementById("nav_row");
  var logoText = document.getElementById("fixed_logo");
  var navLinks = document.getElementById("navbar"); 
  var black = document.getElementById("black");
  var logo = document.getElementById("nav_logo");
  var burger = document.getElementById("bars");
  var lizPic = document.getElementById("picp");
  var frog = document.getElementById("picp2")

  $("#header_row").hide().fadeIn(1500).show();

  var header = $("header");

  var y = 0; 

  // // Put together our final background position
  var coord = '50% '+ y + 'px';

  // // Move the background
  header.css({ backgroundPosition: coord });

  // Cache the Window object
  $window = $(window);

  var once = false;

  $('div').each(function(){
   var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {

      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!                              
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });

    }); // window scroll Ends

  });

  $('header').each(function(){
    var $bgobj = $(this); // assigning the object

    $(window).scroll(function() {

      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!                              
      var yPos = -($window.scrollTop() / $bgobj.data('speed')); 

      // Put together our final background position
      var coords = '50% '+ yPos + 'px';

      // Move the background
      $bgobj.css({ backgroundPosition: coords });

    });

  }); 

  $(window).scroll(function() {

      // Scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP! 

      var blackValue = $(this).scrollTop() / 700 + .3;
      black.setAttribute("style", "opacity: " + blackValue + ";");

      if ($window.scrollTop() > 0) {
        logoText.classList.add("black");
        nav.classList.add("scrolled");
        navLinks.classList.add("black");
        logo.setAttribute("src", "frog2.svg");
        logo.classList.add("logo-fade");
        burger.classList.add("black");
      } else {
        nav.classList.remove("scrolled");
        logoText.classList.remove("black");
        navLinks.classList.remove("black");
        logo.setAttribute("src", "frog.svg");
        logo.classList.remove("logo-fade");
        burger.classList.remove("black");
      }

      // console.log("SDFSDF" + mainLeft.scrollTop());
      // console.log(mainLeft.getBoundingClientRect());

      if (lizPic.getBoundingClientRect().bottom < 750) {
        // console.log($window.scrollTop());
        $('#picp img').addClass('scrolled');
        once = true;
      } 

      var dude = document.getElementById("dude");

      console.log(frog.getBoundingClientRect().bottom);

      if (frog.getBoundingClientRect().bottom < 750) {
        // console.log("HEY");
        $('#picp2 img').addClass('scrolled');
        once = true;
      } 

      // if ($window.scrollTop() > 326) {
      //   $('#nav_row').addClass('fixed-header');
      //   $('#fixed_logo').addClass('scrolly');
      // } else {
      //   $('#nav_row').removeClass('fixed-header');
      //   $('#fixed_logo').removeClass('scrolly');
      // }

      if (dude.getBoundingClientRect().bottom < 1000) {
        // console.log($window.scrollTop());
        // console.log("HEY");
        $('#fun img').addClass('scrolled');
        once = true;
      } 

    });


});