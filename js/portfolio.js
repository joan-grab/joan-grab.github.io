$(function(){
    if ($(".filtering").length) {
        $(".filtering").on("click", "span", function () {
            var a = $(".gallery").isotope({});
            var e = $(this).attr("data-filter");
            console.log(this);
            a.isotope({ filter: e });
        });
        $(".filtering").on("click", "span", function () {
            $(this).addClass("active").siblings().removeClass("active");
        });
    }
})