$(document).ready(function () {
    // dynamic check window width
    enquire.register('screen and (max-width: 576px)', {
        match: function() {
            $('#startDatepicker, #endDatepicker').attr('placeholder', '選擇日期');
        },
        unmatch: function() {
            $('#startDatepicker, #endDatepicker').attr('placeholder', 'YYYY-MM-DD');
        }
    });

    $('#startDatepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
    });

    $('#endDatepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
    });

    $('#news').slick({
        slidesToShow: 1,
        prevArrow: '<div class="swiper-controls prev"></div>',
        nextHtml: '<div class="swiper-controls next"></div>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });

    $('#about-images').slick({
        arrows: false,
        draggable: false
    });

    $('#aboutPrev').click(function() {
        $('#about-images').slick('slickPrev');
        var current =  $('#about-images').slick('slickCurrentSlide');
        $('#aboutPage span').text(current + 1);
    });
    $('#aboutNext').click(function() {
        $('#about-images').slick('slickNext');
        var current =  $('#about-images').slick('slickCurrentSlide');
        $('#aboutPage span').text(current + 1);
    });

    $('#rooms').slick({
        centerMode: true,
        slidesToShow: 1,
        arrows: true,
        centerPadding: '185px',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    $('#roomPrev').click(function() {
        var currentIdx = $('#roomSelectorTab .active').attr('rel');
        var currentId = Number(currentIdx) === 0 ? 'rooms' : 'rooms' + currentIdx;
        $('#' + currentId).slick('slickPrev');
        var current =  $('#' + currentId).slick('slickCurrentSlide');
        $('#roomPage span').text(current + 1);
    });

    $('#roomNext').click(function() {
        var currentIdx = $('#roomSelectorTab .active').attr('rel');
        var currentId = Number(currentIdx) === 0 ? 'rooms' : 'rooms' + currentIdx;
        $('#' + currentId).slick('slickNext');
        var current =  $('#' + currentId).slick('slickCurrentSlide');
        $('#roomPage span').text(current + 1);
    });
});