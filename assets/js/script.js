
$("a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
}); 

$(document).ready(function() {
    $('.img-card').dblclick(function() {
        $('.card-custom').toggle();
    });
});