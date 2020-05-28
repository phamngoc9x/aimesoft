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
      buttonPrev: ['<a class="carousel-control-prev btn-circle" role="button" data-slide="prev"> <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 447.243 447.243;" xml:space="preserve"> <g> <g> <path d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48 c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754 l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160 c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4 l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88 C449.654,211.494,437.806,195.059,420.361,192.229z"></path> </g> </g> </svg></a>'],
      buttonNext: ['<a class="carousel-control-next btn-circle" role="button" data-slide="next"> <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 447.243 447.243;" xml:space="preserve"> <g> <g> <path d="M437.883,201.174c-0.008-0.008-0.017-0.017-0.025-0.025l-160-160c-12.552-12.441-32.813-12.351-45.254,0.201 c-0.983,0.992-1.9,2.047-2.746,3.159c-8.971,13.381-7.013,31.276,4.64,42.4l88.32,88.64c4.695,4.7,10.093,8.641,16,11.68 l9.76,5.12h-314.4c-16.099-0.677-30.349,10.332-33.76,26.08c-2.829,17.445,9.019,33.881,26.465,36.71 c1.83,0.297,3.682,0.434,5.535,0.41h315.52l-6.88,3.2c-6.713,3.135-12.83,7.412-18.08,12.64l-88.48,88.48 c-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754l160-160 C450.361,233.939,450.372,213.678,437.883,201.174z"></path> </g> </g> </svg></a>'],
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
    var elem = $('.aime-blog-list .content-list');
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
      navText: ['<a class="carousel-control-prev btn-circle"  role="button" data-slide="prev"> <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 447.243 447.243;" xml:space="preserve"> <g> <g> <path d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48 c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754 l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160 c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4 l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88 C449.654,211.494,437.806,195.059,420.361,192.229z"></path> </g> </g> </svg></a>','<a class="carousel-control-next btn-circle"  role="button" data-slide="next"> <svg id="Capa_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 447.243 447.243" style="enable-background:new 0 0 447.243 447.243;" xml:space="preserve"> <g> <g> <path d="M437.883,201.174c-0.008-0.008-0.017-0.017-0.025-0.025l-160-160c-12.552-12.441-32.813-12.351-45.254,0.201 c-0.983,0.992-1.9,2.047-2.746,3.159c-8.971,13.381-7.013,31.276,4.64,42.4l88.32,88.64c4.695,4.7,10.093,8.641,16,11.68 l9.76,5.12h-314.4c-16.099-0.677-30.349,10.332-33.76,26.08c-2.829,17.445,9.019,33.881,26.465,36.71 c1.83,0.297,3.682,0.434,5.535,0.41h315.52l-6.88,3.2c-6.713,3.135-12.83,7.412-18.08,12.64l-88.48,88.48 c-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754l160-160 C450.361,233.939,450.372,213.678,437.883,201.174z"></path> </g> </g> </svg></a>'],
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
