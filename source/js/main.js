const AimesoftProject = {
  Init: function () {
    console.log("init project");
    this.stickyMenu();
    this.testimonialSlider();
  },

  onLoad: function () {
    console.log("onload project");
  },

  reSize: function () {
    console.log("resize project");
  },

  // Sticky menu
  stickyMenu: function () {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };
    // Get the navbar
    var navbar = document.getElementById("navbar");
    var headerDefault = $(".header--default");
    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (navbar != null && headerDefault.length != 0) {
        if (window.pageYOffset > sticky) {
          navbar.classList.add("header__sticky");
        } else {
          navbar.classList.remove("header__sticky");
        }
      }
    }
  },
  // Sticky menu
  testimonialSlider: function () {
    $('#carousel').flipster({
      style: 'flat',
      spacing: -0.25
    });
  },
};

$(document).ready(function () {
  AimesoftProject.Init();
  
  $('.testimonial-slider').flipster({
    style: 'flat',
    spacing: -0.78,
    itemContainer: 'ul',
    itemSelector: 'li',
    start: 'center',
    loop: false,
    scrollwheel: false,
    buttonPrev: 'Previous',
    buttonNext: 'Next',
    buttons: true
  });
});

$(window).on("load", function () {
  AimesoftProject.onLoad();
});

$(window).on("resize", function () {
  AimesoftProject.reSize();
});

