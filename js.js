function slowScroll(target) {
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
}

$("#scrollToTop").on("click", function() {
    slowScroll("html, body");
});

$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    var threshold = 50;

    if (scrollTop <= threshold) {
        $("header").removeClass("fixed");
    } else {
        $("header").addClass("fixed");
    }
});

$('.b1').click(function() {
    $('nav .nt_show').toggleClass("show");
});
$('.b2').click(function() {
    $('nav .w_show').toggleClass("show");
});
$('.b3').click(function() {
    $('nav .m_show').toggleClass("show");
});
$('.b4').click(function() {
    $('nav .k_show').toggleClass("show");
});

$('.right .burger').click(function()
{
$(".side-bar").toggleClass("show");
});

document.addEventListener('DOMContentLoaded', function () {
    var accountElement = document.querySelector('.account');
    accountElement.addEventListener('click', function () {
        window.location.href = 'account.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.querySelector('.up_but');
    var windowHeight = window.innerHeight;

    window.addEventListener('resize', function() {
        windowHeight = window.innerHeight;
        updateOverlayVisibility();
    });

    window.addEventListener('scroll', updateOverlayVisibility);

    function updateOverlayVisibility() {
        var scrollY = window.scrollY || window.pageYOffset;
        var documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        var isAtBottom = scrollY + windowHeight >= documentHeight;

        overlay.style.display = isAtBottom ? 'block' : 'none';
    }

    updateOverlayVisibility();
});

document.addEventListener('DOMContentLoaded', function () {
    var scrollingText = document.getElementById('scrolling-text');
    scrollingText.innerHTML = '<b>Update</b> your <b>wardrobe</b> with <b>the</b> latest <b>trends</b> of <b>the week!</b> <b>Update</b> your <b>wardrobe</b> with <b>the</b> latest <b>trends</b> of <b>the week!</b> <b>Update</b> your <b>wardrobe</b> with <b>the</b> latest <b>trends</b> of <b>the week!</b>';
});

$(document).ready(function () {
    $('.open-popup').click(function (e) {
        e.preventDefault();

        if (validateForm()) {
            $('.popup-bg').fadeIn(600);
            $('.navbar').fadeOut(600);
        }
    });

    $('.close-popup').click(function () {
        window.location.href = 'new.html';
    });

    function validateForm() {
        var isValid = true;

        $('form input[required], form select[required]').each(function () {
            if (!$(this).val().trim()) {
                isValid = false;
            }
        });
        if (!$('#agreement').prop('checked')) {
            isValid = false;
        }

        if (!isValid) {
            $('.open-popup').prop('disabled', false);
        }

        return isValid;
    }

    $('form input[required], form select[required]').on('input', function () {
        validateForm();
    });
});

function showNotification(category) {
    alert(`You clicked on ${category}
Is not available now`);
}