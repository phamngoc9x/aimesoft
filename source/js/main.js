const AimesoftProject = {
  Init: function () {
    console.log("init project");
    this.stickyMenu();
    this.testimonialSlider();
    this.relatedSlider();
    this.isoTop();
    this.dropdownLanguage();
    this.modalVideo();
  },

  modalVideo: function () {
    var $videoSrc;
    $(".js-video-btn").click(function () {
      $videoSrc = $(this).data("src");
    });

    $("#myModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#myModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  },

  dropdownLanguage: function () {
    $(".js-dropdown-language .dropdown-menu a").on("click", function (e) {
      e.preventDefault();
      const selectLanguage = $(this).html();

      $(".js-dropdown-language .dropdown-select .content").html(selectLanguage);
    });
  },

  onLoad: function () {
    console.log("onload project");
  },

  reSize: function () {
    console.log("resize project");
  },

  testimonialSlider: function () {
    $(".testimonial-slider").flipster({
      style: "flat",
      spacing: -0.78,
      itemContainer: "ul",
      itemSelector: "li",
      start: "center",
      loop: false,
      scrollwheel: false,
      buttonPrev: "Previous",
      buttonNext: "Next",
      buttons: true,
    });
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
  isoTop: function () {
<<<<<<< HEAD
    var elem = $('.aime-blog-list .content-list');
=======
    var elem = $(".aime-portfolio-list .content-list");
>>>>>>> 38e9575028dfbdfff62000521188671c907f8eaf
    var $iso = $(elem).isotope({
      itemSelector: ".content-list__item",
      layoutMode: "fitRows",
      category: "[data-category]",
    });

    // bind filter button click
    $(".filters-block li").on("click", function () {
      var filterValue = $(this).attr("data-filter");
      // use filterFn if matches value
      $iso.isotope({ filter: filterValue });
      console.log(filterValue);
    });
    // change is-checked class on buttons
    $(".filters-block").each(function (i, buttonGroup) {
      var $buttonGroup = $(".filters-block");
      $buttonGroup.on("click", ".filters-block__item", function () {
        $buttonGroup.find(".is-checked").removeClass("is-checked");
        $(this).addClass("is-checked");
      });
    });
  },
  relatedSlider: function () {
    $(".related-slider").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });
  },
};

$(document).ready(function () {
  AimesoftProject.Init();
});

$(window).on("load", function () {
  AimesoftProject.onLoad();
});

$(window).on("resize", function () {
  AimesoftProject.reSize();
});
