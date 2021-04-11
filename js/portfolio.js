const url_string = window.location.href;
const url = new URL(url_string);
const cat = url.searchParams.get("cat");

let category;
if (cat && cat.length) {
    category = "."+cat;
} else {
    category = '*';
}

let gallery = $(".gallery").isotope({});
gallery.isotope({ filter: category });

$('.filtering span[data-filter="'+category+'"]').addClass("active").siblings().removeClass("active");

$(function(){
    if ($(".filtering").length) {
        $(".filtering").on("click", "span", function () {
            let gallery = $(".gallery").isotope({});
            let category = $(this).attr("data-filter");
            gallery.isotope({ filter: category });
        });
        $(".filtering").on("click", "span", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    }
})

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function resetAnimation(element) {
    const newone = element.cloneNode(true);
    element.parentNode.replaceChild(newone, element);
}

const portfolioChoice = document.querySelectorAll('.portfolio-wrapper');

document.addEventListener('scroll', function () {
    for (const element of portfolioChoice) {

        const portfolioChoiceImg = element.querySelector('img');
        const portfolioChoiceOverlay = element.querySelector('.portfolio-overlay');

        if (isInViewport(element)) {

            if (portfolioChoiceOverlay.classList.contains('overlayMobileNone')) {

                resetAnimation(portfolioChoiceOverlay);
                resetAnimation(portfolioChoiceImg);


                element.querySelector('.portfolio-overlay').classList.replace('overlayMobileNone', 'overlayMobile');
                element.querySelector('img').classList.replace('imgPMobileNone', 'imgPMobile');
                element.querySelector('.portfolio-content').classList.replace('contentMobileNone', 'contentMobile');
            }

        } else {

            if (portfolioChoiceOverlay.classList.contains('overlayMobile')) { 

                resetAnimation(portfolioChoiceOverlay);
                resetAnimation(portfolioChoiceImg);

                element.querySelector('.portfolio-overlay').classList.replace('overlayMobile', 'overlayMobileNone');
                element.querySelector('img').classList.replace('imgPMobile', 'imgPMobileNone');
                element.querySelector('.portfolio-content').classList.replace('contentMobile', 'contentMobileNone');
            }      
        }
    }
}, {
    passive: true
});