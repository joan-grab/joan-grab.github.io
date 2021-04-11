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
    if (element.nodeName === 'H2') {
        const newone = element.cloneNode(true);
        element.parentNode.replaceChild(newone, element);

    } else {        
        element.style.animation = 'none';
        element.offsetHeight; /* trigger reflow */
        element.style.animation = null; 
    }
}

const portfolioChoice = document.querySelectorAll('.hovereffect');

document.addEventListener('scroll', function () {
    for (const element of portfolioChoice) {

        const portfolioChoiceImg = element.querySelector('img');
        const portfolioChoiceP = element.querySelector('p');

        if (isInViewport(element)) {

            if (portfolioChoiceImg.classList.contains('imgMobileNone')) {

                resetAnimation(portfolioChoiceImg);
                portfolioChoiceImg.classList.replace('imgMobileNone', 'imgMobile');
               
                resetAnimation(element.querySelector('h2'));
                element.querySelector('h2').classList.replace('h2MobileNone', 'h2Mobile');
               
                resetAnimation(portfolioChoiceP);
                portfolioChoiceP.classList.replace('pMobileNone', 'pMobile');
            }

        } else {

            if (portfolioChoiceImg.classList.contains('imgMobile')) { 

                resetAnimation(portfolioChoiceImg);
                portfolioChoiceImg.classList.replace('imgMobile', 'imgMobileNone');

                resetAnimation(element.querySelector('h2'));
                element.querySelector('h2').classList.replace('h2Mobile', 'h2MobileNone');
    
                resetAnimation(portfolioChoiceP);
                portfolioChoiceP.classList.replace('pMobile', 'pMobileNone');
            }      
        }
    }
}, {
    passive: true
});

$(function(){
    if ($(".pictures-container").length) {
        $(".pictures-container").on("click", ".overlay", function () {
            let category = $(this).attr("data-filter");
            console.log(category);
            window.location.href = "./portfolio.html?cat="+category;
        });
    }
})
