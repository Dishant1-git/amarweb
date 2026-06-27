/* -----------------------------------------------------------
   Portfolio & Work Sections JavaScript
   Unique Glazing - Premium Glass & Glazing Services
----------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ==========================================
    // 1. FEATURED PROJECTS SLIDER INITIALIZATION
    // ==========================================
    var featuredSwiper = null;
    
    function initFeaturedSwiper() {
        var swiperElement = document.querySelector('.featured-swiper-active');
        if (swiperElement) {
            featuredSwiper = new Swiper('.featured-swiper-active', {
                loop: true,
                speed: 800,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                },
                pagination: {
                    el: '.featured-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.featured-next',
                    prevEl: '.featured-prev'
                }
            });
        }
    }

    initFeaturedSwiper();


    // ==========================================
    // 2. GALLERY FILTERING LOGIC
    // ==========================================
    var filterBtns = document.querySelectorAll('.gallery-filter-btn');
    var galleryCards = document.querySelectorAll('.gallery-card');

    filterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            // Add active class to clicked button
            this.classList.add('active');

            var filterValue = this.getAttribute('data-filter');

            galleryCards.forEach(function(card) {
                var cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    // Show item with transition
                    card.classList.remove('hide-item');
                    card.classList.add('show-item');
                } else {
                    // Hide item with transition
                    card.classList.remove('show-item');
                    card.classList.add('hide-item');
                }
            });
        });
    });

    // Initialize all gallery cards to show-item state
    galleryCards.forEach(function(card) {
        card.classList.add('show-item');
    });


    // ==========================================
    // 3. DYNAMIC SWIPEABLE LIGHTBOX
    // ==========================================
    var lightbox = document.getElementById('portfolio-lightbox');
    var lightboxWrapper = document.querySelector('.lightbox-swiper-wrapper');
    var lightboxClose = document.querySelector('.lightbox-close-btn');
    var lightboxSwiperInstance = null;
    
    // Check if Swiper and Lightbox elements exist
    if (lightbox && lightboxWrapper) {
        
        // Open Lightbox on Gallery Card Click
        galleryCards.forEach(function(card) {
            card.addEventListener('click', function(e) {
                // Ignore click if it's on a button inside (though there shouldn't be any)
                e.preventDefault();

                // 1. Gather all currently visible cards in their exact order
                var visibleCards = Array.from(galleryCards).filter(function(c) {
                    return !c.classList.contains('hide-item');
                });

                // Find index of clicked card in visible subset
                var clickedIndex = visibleCards.indexOf(card);
                if (clickedIndex === -1) clickedIndex = 0;

                // 2. Build the HTML slides for Swiper dynamically
                var slidesHtml = '';
                visibleCards.forEach(function(visibleCard) {
                    var imgSrc = visibleCard.querySelector('img').getAttribute('src');
                    var title = visibleCard.querySelector('.item-title').textContent;
                    var category = visibleCard.querySelector('.item-category').textContent;

                    slidesHtml += `
                        <div class="swiper-slide">
                            <div class="lightbox-slide-wrapper">
                                <div class="lightbox-image-box">
                                    <img src="${imgSrc}" alt="${title}">
                                    <div class="lightbox-caption-bar">
                                        <h5 class="caption-title">${title}</h5>
                                        <span class="caption-category">${category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                });

                // Inject slides into wrapper
                lightboxWrapper.innerHTML = slidesHtml;

                // 3. Open Lightbox Container
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scrolling

                // 4. Destroy existing Swiper instance if any
                if (lightboxSwiperInstance) {
                    lightboxSwiperInstance.destroy(true, true);
                    lightboxSwiperInstance = null;
                }

                // 5. Initialize Swiper for Lightbox
                lightboxSwiperInstance = new Swiper('.lightbox-swiper', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    speed: 400,
                    grabCursor: true,
                    keyboard: {
                        enabled: true,
                        onlyInViewport: true
                    },
                    navigation: {
                        nextEl: '.lightbox-next',
                        prevEl: '.lightbox-prev'
                    },
                    // Set active slide index
                    initialSlide: clickedIndex
                });
            });
        });

        // Close Lightbox function
        var closeLightbox = function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Unlock scrolling
            if (lightboxSwiperInstance) {
                lightboxSwiperInstance.destroy(true, true);
                lightboxSwiperInstance = null;
            }
        };

        // Close on Click close btn
        lightboxClose.addEventListener('click', closeLightbox);

        // Close on Clicking Backdrop (overlay background, but not the image or captions)
        lightbox.addEventListener('click', function(e) {
            // Close if clicking wrapper background outside the main slide content
            if (e.target.classList.contains('lightbox-slide-wrapper') || e.target.classList.contains('lightbox-swiper-container') || e.target.id === 'portfolio-lightbox') {
                closeLightbox();
            }
        });

        // Close on Escape key press
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // ==========================================
    // 4. FAQ ACCORDION LOGIC
    // ==========================================
    var accordionItems = document.querySelectorAll('.faq-accordion-item');

    accordionItems.forEach(function(item) {
        var header = item.querySelector('.faq-accordion-header');
        var body = item.querySelector('.faq-accordion-body');
        var icon = item.querySelector('.accordion-icon i');

        // Set initial heights on page load for active item
        if (item.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + 'px';
            if (icon) {
                icon.className = 'ri-subtract-line';
            }
        } else {
            body.style.maxHeight = '0px';
            if (icon) {
                icon.className = 'ri-add-line';
            }
        }

        header.addEventListener('click', function() {
            var isActive = item.classList.contains('active');

            // Close all items
            accordionItems.forEach(function(otherItem) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-accordion-body').style.maxHeight = '0px';
                var otherIcon = otherItem.querySelector('.accordion-icon i');
                if (otherIcon) {
                    otherIcon.className = 'ri-add-line';
                }
            });

            // If the clicked item was not active, open it
            if (!isActive) {
                item.classList.add('active');
                body.style.maxHeight = body.scrollHeight + 'px';
                if (icon) {
                    icon.className = 'ri-subtract-line';
                }
            }
        });
    });
});
