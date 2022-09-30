$(document).ready(function () {

    $('.burger').click(function () {
        $('.menusection').addClass('show');
    });

    $('.closemenu').click(function () {
        $('.menusection').removeClass('show');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.menuwrapper').length && !$target.closest('.burger').length) {
            $('.menusection').removeClass('show');
        }
    });

    if ($('.recomendedbox__slider').length) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 20,
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10
                },
                // when window width is >= 480px
                767: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                
            }
        });
    }


    $(".singleselect").select2({
        minimumResultsForSearch: Infinity
    });

    $(".multiselect").select2({
        placeholder: "Select",
        // allowClear: true,

    });


   $('#household').change(function(){
        $(this).parents('.liverowinpfield').next('.liverowinpfield').removeClass('hideinput');
   });

});