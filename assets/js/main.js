$(document).ready(function () {

    $('#startDatepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
    });

    $('#endDatepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd',
    });

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('.about .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})