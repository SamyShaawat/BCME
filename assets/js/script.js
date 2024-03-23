$(document).ready(function () {
    // Smooth scrolling for navbar links
    $('.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;
            const navbarHeight = $('.navbar').outerHeight(); // Get the height of the navbar

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top - navbarHeight // Adjust the scroll position
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Highlighting the active section in navbar based on scroll position
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop();

        $('.section').each(function () {
            const top = $(this).offset().top - $('.navbar').outerHeight(); // Adjusted to subtract navbar height
            const bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos <= bottom) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${$(this).attr('id')}"]`).addClass('active');
            }
        });
    });
});


// JavaScript to scroll to the "Home" section on page refresh
$(document).ready(function () {
    const navbarHeight = $('.navbar').outerHeight();
    // Scroll to the "Home" section
    $('html, body').animate({
        scrollTop: $('#home').offset().top - navbarHeight
    }, 800);
});