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