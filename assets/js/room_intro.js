$(document).ready(function() {
    // dynamic check window width
    enquire.register('screen and (max-width: 768px)', {
        match: function() {
            $('#notice').change(function() {
                var value = Number($(this).val());
                var text = $('#notice :selected').text();
                $('#selectedNotice').text(text);
                $('.desc-wrapper div').each(function(idx, item) {
                    if (idx === value) {
                        $(item).show();
                    } else {
                        $(item).hide();
                    }
                });
            });
        }
    });

    $('#imageGallery').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        thumbItem: 5,
        slideMargin: 0,
        enableDrag: true,
        thumbMargin: 15,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    gallery: false,
                    controls: false,
                    dots: true
                }
            }
        ],
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide',
                download: false
            });
        }
    });
});