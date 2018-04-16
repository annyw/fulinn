$(document).ready(function() {
    // dynamic check window width
    enquire.register('screen and (max-width: 576px)', {
        match: function() {
            $('#service, #gift').lightSlider({
                item: 1,
                loop: true,
                slideMargin: 0,
                enableDrag: true,
                controls: false
            });
        }
    });
});