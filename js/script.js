

$(function(){
    if ($(".pictures-container").length) {
        $(".pictures-container").on("click", ".overlay", function () {
            let category = $(this).attr("data-filter");
            console.log(category);
            window.location.href = "./portfolio.html?cat="+category;
        });
    }
})