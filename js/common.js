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

    if ($('.singleselect').length) {
        $(".singleselect").select2({
            minimumResultsForSearch: Infinity
        });
    }
    if ($('.multiselect').length) {
        $(".multiselect").select2({
            placeholder: "Select",
            // allowClear: true,

        });
    }




    $('#household').change(function () {
        $(this).parents('.liverowinpfield').next('.liverowinpfield').removeClass('hideinput');
    });



    //    steps
    // next
    $('.btnsfield a').not('.step1 .back').click(function (e) {
        e.preventDefault();
        $('.completprofile__step').hide();
    });

    $('.step1 .next').click(function () {
        $('.step2').show();
        $('.completprofile__steppoints').removeClass('pointsstep1');
        $('.completprofile__steppoints').addClass('pointsstep2');
    });
    $('.step2 .next').click(function () {
        $('.step3').show();
        $('.completprofile__steppoints').removeClass('pointsstep2');
        $('.completprofile__steppoints').addClass('pointsstep3');
    });
    $('.step3 .next').click(function () {
        $('.step4').show();
        $('.completprofile__steppoints').removeClass('pointsstep3');
        $('.completprofile__steppoints').addClass('pointsstep4');
    });
    $('.step4 .next').click(function () {
        $('.step5').show();
        $('.completprofile__steppoints').removeClass('pointsstep4');
        $('.completprofile__steppoints').addClass('pointsstep5');
    });
    $('.step5 .next').click(function () {
        $('.step6').show();
        $('.completprofile__steppoints').removeClass('pointsstep5');
        $('.completprofile__steppoints').addClass('pointsstep6');
    });
    $('.step6 .next').click(function () {
        $('.step7').show();
        $('.completprofile__steppoints').removeClass('pointsstep6');
        $('.completprofile__steppoints').addClass('pointsstep7');
    });
    $('.step7 .next').click(function () {
        $('.step8').show();
        $('.completprofile__steppoints').removeClass('pointsstep7');
        $('.completprofile__steppoints').addClass('pointsstep8');
    });
    $('.step8 .finish').click(function () {
        $('.completprofile').hide();
        $('.loaderbox').removeClass('hide');
    });
    // back
    $('.step8 .back').click(function () {
        $('.step7').show();
        $('.completprofile__steppoints').removeClass('pointsstep8');
        $('.completprofile__steppoints').addClass('pointsstep7');
    });
    $('.step7 .back').click(function () {
        $('.step6').show();
        $('.completprofile__steppoints').removeClass('pointsstep7');
        $('.completprofile__steppoints').addClass('pointsstep6');
    });
    $('.step6 .back').click(function () {
        $('.step5').show();
        $('.completprofile__steppoints').removeClass('pointsstep6');
        $('.completprofile__steppoints').addClass('pointsstep5');
    });
    $('.step5 .back').click(function () {
        $('.step4').show();
        $('.completprofile__steppoints').removeClass('pointsstep5');
        $('.completprofile__steppoints').addClass('pointsstep4');
    });
    $('.step4 .back').click(function () {
        $('.step3').show();
        $('.completprofile__steppoints').removeClass('pointsstep4');
        $('.completprofile__steppoints').addClass('pointsstep3');
    });
    $('.step3 .back').click(function () {
        $('.step2').show();
        $('.completprofile__steppoints').removeClass('pointsstep3');
        $('.completprofile__steppoints').addClass('pointsstep2');
    });
    $('.step2 .back').click(function () {
        $('.step1').show();
        $('.completprofile__steppoints').removeClass('pointsstep2');
        $('.completprofile__steppoints').addClass('pointsstep1');
    });



















    $('.step8 .finish').click(function () {
        let counter = 0;
        const maxCounter = 100;
        const seconds = 5;
        const interval = (seconds * 1000) / maxCounter
        const loop = setInterval(function () {
            document.getElementById('display').innerHTML = counter
            if (counter === maxCounter) {
                stopLoop()
            }
            counter++
        }, interval);

        function stopLoop() {
            clearInterval(loop)
        }
    });





    if ($('#phone').length) {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            // any initialisation options go here
        });
    }



});