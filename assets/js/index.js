$(document).ready(function() {
    enquire.register('screen and (max-width: 768px)', {
        match: function () {
            $('#roomSelector').change(function () {
                var value = Number($(this).val());
                var text = $('#roomSelector :selected').text();
                $('#roomPage span').text(1);
                $('#selectedRoom').text(text);
                $('.room-kind').each(function (idx, item) {
                    if (idx === value) {
                        $(item).show();
                        $(item).not('.slick-initialized').slick({
                            centerMode: true,
                            slidesToShow: 1,
                            arrows: true,
                            centerPadding: '0px',
                            responsive: [
                                {
                                    breakpoint: 991,
                                    settings: {
                                        slidesToShow: 1,
                                        centerPadding: '0px',
                                        arrows: false,
                                        dots: false
                                    }
                                },
                            ]
                        });
                    } else {
                        $(item).hide();
                        if ($(item).hasClass('slick-initialized')) {
                            $(item).slick('unslick');
                        }
                    }
                });

                $('.room-summary').each(function (idx, item) {
                    if (idx === value) {
                        $(item).show();
                    } else {
                        $(item).hide();
                    }
                });
            });
        }
    });

    $('#roomSelectorTab li').on('click',function () {
        $(this).addClass('active').siblings('.active').removeClass('active');
        var value = Number($(this).attr('rel'));
        $('#roomPage span').text(1);
        $('.room-kind').each(function (idx, item) {
            if (idx === value) {
                $(item).show();
                $(item).not('.slick-initialized').slick({
                    centerMode: true,
                    slidesToShow: 1,
                    arrows: true,
                    centerPadding: '185px',
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 1,
                                centerPadding: '0px',
                                arrows: false,
                                dots: false
                            }
                        }
                    ]
                });
            } else {
                $(item).hide();
            }
        });

        $('.room-summary').each(function (idx, item) {
            if (idx === value) {
                $(item).show();
            } else {
                $(item).hide();
            }
        });
    });
});