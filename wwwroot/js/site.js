// wwwroot/js/site.js

$(document).ready(function() {
    // Smooth scroll for anchor links (if you add them later)
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // Add a simple hover effect for article cards (CSS handles most of it, but JS can add more)
    $('.article-card').hover(
        function() {
            $(this).addClass('hover-effect');
        },
        function() {
            $(this).removeClass('hover-effect');
        }
    );

    // Dynamic title for new article form (optional)
    $('#Title').on('input', function() {
        var titleText = $(this).val();
        if (titleText.length > 0) {
            $('h1.page-title').text('Створити статтю: ' + titleText);
        } else {
            $('h1.page-title').text('Створити нову статтю');
        }
    });
});