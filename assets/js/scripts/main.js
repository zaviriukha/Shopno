$("#showModal").click(function () {
    $(".modal").addClass("is-active");
});

$(".modal-close").click(function () {
    $(".modal").removeClass("is-active");
});

$(document).ready(function () {
    var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances
});