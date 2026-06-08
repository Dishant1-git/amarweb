/*----------------------------------------------
    Index Of Script
------------------------------------------------

    @version         : 1.0.0
    @Template Name   : Wodmart
    @Template author : PointTheme
    
    :: Preloader                    :: Nice Scroll js             
    :: Data-background              :: Hover Tilt Effect        
    :: Search box                   :: Select 2                                  
    :: Mobile Menu                  :: Slick Nav       
    :: Animation                    :: Wow Animation      
    :: Sticky And Scroll Up         :: slider - Hero Area-active
    :: Custom click expand icon :: Fancy box
    
------------------------------------------------
    End-of Script
------------------------------------------------*/

(function ($) {
    "use strict";

    /*----------------------------------------------
        Preloader
    ----------------------------------------------*/
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
        var counter = 0;
        var c = 0;
        var i = setInterval(function () {
            $(".loading-page .counter .number").html(c + "%");
            $(".loading-page .counter .line").css("width", c + "%");

            counter++; c++;
            if (counter == 101) {
                clearInterval(i);
            }
        }, 10);
    });

    /*-----------------------------------
        Sticky And Scroll Up
    -----------------------------------*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $("#back-top").fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $("#back-top").fadeIn(500);
        }
    });

    /*-----------------------------------
        Data-background
    -----------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
    });

    /*----------------------------------------------
        Slider area-active
    ----------------------------------------------*/
    var swiper = new Swiper(".heroSwiperOne-active", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        spaceBetween: 0,

        // Autoplay settings
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".brandSwiper-active", {
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 8,
            },
            992: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 4,
            },
            420: {
                slidesPerView: 3,
            },
        },
    });
    var swiper = new Swiper(".featureSwiper-active", {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 3,
            },
            420: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".testimonialSwiper-active", {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            420: {
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".newsSwiper-active", {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 24,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1400: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            576: {
                slidesPerView: 2,
            },
        },
    });
    var swiper = new Swiper(".heroSwiperTwo-active", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        spaceBetween: 0,

        // Autoplay settings
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper = new Swiper(".dealSwiper-active", {
        loop: true,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        slidesPerView: 1,
        spaceBetween: 0,

        // Autoplay settings
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".blogSwiper-active", {
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------
        :: Select 2
    ----------------------------------------------*/
    $(".select2").select2({
        placeholder: "Choose one",
        width: "100%",
    });

    /*----------------------------------------------
        :: Lettering Js
    ----------------------------------------------*/
    $(function () {
        $(".curve-text").lettering();
    });
    
    /*-----------------------------------
        :: Fancy box
    -----------------------------------*/
    if ($(window).width() < 992) {
        Fancybox.bind("[data-fancybox]", {});
    }

    /*----------------------------------------------
        :: Custom click expand icon
    ----------------------------------------------*/
    document.addEventListener("DOMContentLoaded", function () {
        const hoverIcons = document.querySelectorAll(".hover-icon");
        hoverIcons.forEach((hoverIcon) => {
            hoverIcon.addEventListener("click", function () {
                const socialIcons = this.nextElementSibling;
                socialIcons.classList.toggle("active");
            });
        });
    });

    /*------------------------------------------------
        :: Filter side nav
    ------------------------------------------------*/
    $(document).ready(function () {
        $(document).on("click", "#hamburger", function (e) {
            e.stopPropagation();
            $(".search-filter-section").toggleClass("sidenav-active");
            $(".cover").addClass("cover-active");
        });
        $(document).on("click", function (e) {
            if (!$(e.target).closest(".search-filter-section").length && !$(e.target).is("#hamburger")) {
                $(".search-filter-section").removeClass("sidenav-active");
                $(".cover").removeClass("cover-active");
            }
        });
        $(document).on("click", ".close-btn", function (e) {
            $(".search-filter-section").removeClass("sidenav-active");
            $(".cover").removeClass("cover-active");
        });
    });

    /*----------------------------------------------
        :: JS for Price Range slider
    ----------------------------------------------*/

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 130,
            max: 500,
            values: [130, 250],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    });

    /*----------------------------------------------
        :: Image zoom
    ----------------------------------------------*/
    if ($(window).width() > 991) {
        $(".xzoom, .xzoom-gallery").xzoom({
            position: "right",
            fadeIn: true,
            fadeTrans: true,
            fadeOut: false,
            smooth: true,
            smoothZoomMove: 3,
            smoothLensMove: 1,
            smoothScale: 2,
            defaultScale: -1,
            scroll: true,
            tint: false,
            tintOpacity: 0.5,
            lens: true,
            lensOpacity: 0.1,
            lensShape: "box",
            zoomWidth: "auto",
            zoomHeight: "auto",
            sourceClass: "xzoom-source",
            loadingClass: "xzoom-loading",
            lensClass: "xzoom-lens",
            zoomClass: "xzoom-preview",
            activeClass: "xactive",
            hover: false,
            adaptive: true,
            lensReverse: false,
            adaptiveReverse: false,
            lensCollision: true,
            title: false,
            titleClass: "xzoom-caption",
            bg: false,
        });
    }

    /*----------------------------------------------
        :: Custom Dropdown
    ----------------------------------------------*/
    $(document).ready(function () {
        function updateTotalQuantity() {
            var totalQuantity = 0;
            $(".input-qty").each(function () {
                totalQuantity += parseInt($(this).val());
            });
            if (totalQuantity > 0) {
                $(".user-result").text(totalQuantity);
            } else {
                $(".user-result").text("");
            }
        }
        function updateTotalQuantityTwo() {
            var totalQuantity = 0;
            $(".input-qty-two").each(function () {
                totalQuantity += parseInt($(this).val()) || 0; // Ensure parseInt doesn't return NaN
            });
            if (totalQuantity > 0) {
                $(".calc-user").text(totalQuantity);
            } else {
                $(".calc-user").text("");
            }
        }
        $(".qty-btn-plus, .qty-btn-minus").click(function () {
            var $input = $(this).siblings(".input-qty");
            var value = parseInt($input.val());

            if ($(this).hasClass("qty-btn-plus")) {
                value++;
            } else {
                if (value > 0) {
                    value--;
                }
            }
            $input.val(value);
        });
        $(".qty-btn-plus-two, .qty-btn-minus-two").click(function () {
            var $input = $(this).siblings(".input-qty-two");
            var value = parseInt($input.val());

            if ($(this).hasClass("qty-btn-plus-two")) {
                value++;
            } else {
                if (value > 0) {
                    value--;
                }
            }
            $input.val(value);
            updateTotalQuantityTwo();
        });
        $(".done-btn").click(function () {
            updateTotalQuantity();
        });
        // Click event for increasing the count
        $(".increase-num").click(function () {
            var $input = $(this).siblings(".num-count"); // Find the associated input field
            var currentValue = parseInt($input.val());
            var newValue = currentValue + 1;
            $input.val(newValue.toString().padStart(2, "0")); // Update the value and pad with leading zeros
        });

        // Click event for decreasing the count
        $(".decrease-num").click(function () {
            var $input = $(this).siblings(".num-count"); // Find the associated input field
            var currentValue = parseInt($input.val());
            if (currentValue > 0) {
                var newValue = currentValue - 1;
                $input.val(newValue.toString().padStart(2, "0")); // Update the value and pad with leading zeros
            }
        });
        $(".increase-num2").click(function () {
            event.preventDefault();
            // Extract numeric value from input field
            var currentValue = parseFloat(
                $(".num-count2")
                    .val()
                    .replace(/[^\d.-]/g, "")
            );

            if (!isNaN(currentValue) && currentValue < 5.0) {
                var newValue = currentValue + 1.0;
                $(".num-count2").val(`(${newValue.toFixed(1)})`);
            }
        });

        $(".decrease-num2").click(function () {
            event.preventDefault();
            // Extract numeric value from input field
            var currentValue = parseFloat(
                $(".num-count2")
                    .val()
                    .replace(/[^\d.-]/g, "")
            );

            if (!isNaN(currentValue) && currentValue > 0.0) {
                var newValue = currentValue - 1.0;
                $(".num-count2").val(`(${newValue.toFixed(1)})`);
            }
        });
    });

    /*----------------------------------------------
        :: Input Float
    ----------------------------------------------*/
    $('.floating-control').on('change', function (e) {
        if ($(this).is('select')) {
            if ($(this).val() === $("option:first", $(this)).val()) {
                $(this).parents('.floating-group').removeClass('focused');
            }
            else {
                $(this).parents('.floating-group').addClass('focused');
            }
        }
    })
    /*----------------------------------------------
        :: Custom select2 Data
    ----------------------------------------------*/
    $(document).ready(function () {
        (function ($) {
            $(function () {
                var isoCountries = [
                    {
                        id: "BD",
                        text: "Bangladesh",
                    },

                    {
                        id: "CA",
                        text: "Canada",
                    },
                    {
                        id: "AE",
                        text: "United Arab Emirates",
                    },
                    {
                        id: "GB",
                        text: "United Kingdom",
                    },
                    {
                        id: "US",
                        text: "United State",
                    },
                ];

                function formatCountry(country) {
                    if (!country.id) {
                        return country.text;
                    }
                    var $country = $('<div class="d-flex align-items-center gap-2">' + '<img class="flag-icon" src="assets/images/icon/' + country.id.toLowerCase() + '.svg">' + '<span class="flag-text">' + country.text + "</span>" + "</div>");
                    return $country;
                }

                $(".country-select").select2({
                    placeholder: "Select a country",
                    templateResult: formatCountry,
                    data: isoCountries,
                    containerCssClass: "custom-select2-dropdown",
                    dropdownCssClass: "custom-select2-dropdown-container",
                });
            });
        })(jQuery);
    });

    /*-----------------------------------
        :: Slick Nav [ Mobile Menu ]
    -----------------------------------*/
    var slickNavInitialized = false;
    $(document).ready(function () {
        if (!slickNavInitialized) {
            var menu = $("#navigation");
            var filterMenu = $("#filterMenu");
            if (menu.length) {
                menu.slicknav({
                    prependTo: ".mobile_menu",
                    closedSymbol: "+",
                    openedSymbol: "-",
                });
                slickNavInitialized = true;
            }
            if (filterMenu.length) {
                filterMenu.slicknav({
                    label: "Filter",
                    duplicate: true,
                    duration: 200,
                    easingOpen: "swing",
                    easingClose: "swing",
                    closedSymbol: "&#9658;",
                    openedSymbol: "&#9660;",
                    prependTo: ".filter_menu",
                });
                slickNavInitialized = true;
            }
        }
    });

    /*-----------------------------------
        :: Search box
    -----------------------------------*/
    var $hamburgerIcon = $(".hamburger-icon");
    var $searchIcon = $(".search-bar");
    var $searchContainer = $(".search-container");
    var $overlay = $(".overlay");
    var $closeSearchBtn = $("#closeSearch");
    function closeSearch() {
        $searchContainer.hide();
        $overlay.hide();
    }
    $hamburgerIcon.click(function () {
        closeSearch();
    });
    $searchIcon.click(function () {
        $searchContainer.toggle();
        $overlay.toggle();
        $("body").addClass("no-scroll");
    });
    $closeSearchBtn.click(function () {
        closeSearch();
        $("body").removeClass("no-scroll");
    });
    $(document).click(function (event) {
        if (!$(event.target).closest($searchIcon).length && !$(event.target).closest($searchContainer).length) {
            closeSearch();
            $("body").removeClass("no-scroll");
        }
    });
    $(document).keydown(function (event) {
        if (event.key === "Escape") {
            closeSearch();
            $("body").removeClass("no-scroll");
        }
        if ((event.ctrlKey || event.metaKey) && event.key === "k") {
            $searchContainer.show();
            $overlay.show();
            $("body").addClass("no-scroll");
        }
    });

    /*-----------------------------------
        :: Filter side nav
    -----------------------------------*/
    $(document).ready(function () {
        $("#hamburger").click(function (e) {
            e.stopPropagation();
            $(".search-filter-section").toggleClass("sidenav-active");
            $(".cover").addClass("cover-active");
        });
    });
    $(window).click(function (e) {
        if (!$(e.target).closest(".search-filter-section").length) {
            $(".search-filter-section").removeClass("sidenav-active");
            $(".cover").removeClass("cover-active");
        }
    });
    $(".close-btn").click(function (e) {
        $(".search-filter-section").removeClass("sidenav-active");
        $(".cover").removeClass("cover-active");
    });

    /*-----------------------------------
        :: WOW active
    -----------------------------------*/
    new WOW().init();

    /*-----------------------------------
        :: Password Show Hide
    -----------------------------------*/
    $(document).ready(function () {
        $(".toggle-password").click(function () {
            var passwordInput = $($(this).siblings(".password-input"));
            var icon = $(this);
            if (passwordInput.attr("type") == "password") {
                passwordInput.attr("type", "text");
                icon.removeClass("ri-eye-line").addClass("ri-eye-off-line");
            } else {
                passwordInput.attr("type", "password");
                icon.removeClass("ri-eye-off-line").addClass("ri-eye-line");
            }
        });
    });

    /*-----------------------------------
        :: Back To Top
    -----------------------------------*/
    (function () {
        var progressPath = document.querySelector(".progressParent path");
        var pathLength = progressPath?.getTotalLength();
        if (pathLength) {
            progressPath.style.transition = progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
            var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
            };
            updateProgress();
            $(window).scroll(updateProgress);
            var offset = 50;
            var duration = 550;
            jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery(".progressParent").addClass("rn-backto-top-active");
                } else {
                    jQuery(".progressParent").removeClass("rn-backto-top-active");
                }
            });
            jQuery(".progressParent").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
            });
        }
    })();


})(jQuery);
