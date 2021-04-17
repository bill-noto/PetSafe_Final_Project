// Header color change on index page, testimonial quote fade in ...Index/all
$(document).on('scroll', function () {
    var h = $('#head');
    var title = $('#logo > h1');
    var navi = $('#head > nav');
    var sb = $('#innerb');
    var bm = $('#bmenu');

    if (!h.hasClass('z-50')) {
        function headerChange() {
            if ($(window).scrollTop() > 30) {
                title.removeClass('text-white');
                navi.removeClass('text-white');
                h.removeClass('bg-black');
                bm.removeClass(['bg-black', 'text-white']);
                sb.removeClass('bg-white');
                sb.addClass('bg-primary');
                bm.addClass(['bg-white', 'border-b', 'border-primary']);
                h.addClass(['bg-white', 'border-b', 'border-primary']);
            } else {
                title.addClass('text-white');
                navi.addClass('text-white');
                h.addClass('bg-black');
                bm.addClass(['bg-black', 'text-white']);
                sb.addClass('bg-white');
                sb.removeClass('bg-primary');
                bm.removeClass(['bg-white', 'border-b', 'border-primary']);
                h.removeClass(['bg-white', 'border-b', 'border-primary']);
            }
        }

        headerChange();
    }

    function testimonial() {
        if ($(window).scrollTop() > 750) {
            $('#testi').animate({
                opacity: '1'
            }, 2000)
        }
    }

    testimonial();
})

// Burger menu ...all
var bmenu = $('#bmenu')
$('#burger').on('click', function () {
    if (!$(this).hasClass('tham-active')) {
        $(this).addClass('tham-active');
        bmenu.removeClass('hidden');
    } else {
        $(this).removeClass('tham-active');
        bmenu.addClass('hidden');
    }
})

//Hero quote fade in ...Index
$(window).on('load', function () {
    $('#heroTxt').animate({
        opacity: '1',
    }, 2000);
})

//Gallery ...Index
var boom = $('.here > img');
$('.gallery').on('click', function (){
    modal('show');
    boom.addClass('transition-all transform hover:scale-110 hover:border-black');
    boom.attr('src', 'images/gallery.png');
})
$('.gallery1').on('click', function (){
    modal('show');
    boom.addClass('transition-all transform hover:scale-110 hover:border-black');
    boom.attr('src', 'images/gallery1.png')
})
$('.gallery2').on('click', function (){
    modal('show');
    boom.addClass('transition-all transform hover:scale-110 hover:border-black');
    boom.attr('src', 'images/gallery2.png')
})
$('.gallery3').on('click', function (){
    modal('show');
    boom.addClass('transition-all transform hover:scale-110 hover:border-black');
    boom.attr('src', 'images/gallery3.png')
})
$('.gallery4').on('click', function (){
    modal('show');
    boom.addClass('transition-all transform hover:scale-110 hover:border-black');
    boom.attr('src', 'images/gallery4.png')
})
$('.gallery5').on('click', function (){
    modal('show');
    boom.addClass('transition-all transform hover:scale-110 hover:border-black');
    boom.attr('src', 'images/gallery5.png')
})

//Accordion ...price
$('dt').on('click', function () {
    $('dd').slideUp();
    $(this).next().slideDown();
})

//Price calculator, modals & overlays ...index/price/about/contact
function modal(action) {
    if (action === 'show') {
        $('#modal').fadeIn(1000);
        $('#overlay').fadeIn(1000);
    } else if (action === 'hide') {
        $('#modal').fadeOut(1000);
        $('#overlay').fadeOut(1000);
    }
}

$('#modalClose').on('click', function () {
    modal('hide');
})

$('#overlay').on('click', function () {
    modal('hide');
})

$('#calculate').on('click', function () {
    modal('show');

    function calculator() {
        var w = $('#weight').val();
        var a = $('#age').val();
        var l = $('#less').val();
        w = Number(w);
        a = Number(a);
        if (w >= 2 && w < 5) {
            function smallDoggo(n) {
                if (n >= 1 && n <= 10) {
                    $('#dw').text('$8 per hour');
                    $('#gs').text('$15');
                    $('#gf').text('$40');
                    $('#gm').text('$30');
                    $('#db').text('$12 per day');
                } else if (n > 10) {
                    $('#dw').text('$7 per hour');
                    $('#gs').text('$14');
                    $('#gf').text('$38');
                    $('#gm').text('$28');
                    $('#db').text('$11 per day');
                }
            }

            smallDoggo(a);
        }
        if (w >= 5 && w < 24) {
            function mediumDoggo(n) {
                if (n >= 1 && n <= 10) {
                    $('#dw').text('$10 per hour');
                    $('#gs').text('$20');
                    $('#gf').text('$50');
                    $('#gm').text('$35');
                    $('#db').text('$14 per day');
                } else if (n > 10) {
                    $('#dw').text('$9 per hour');
                    $('#gs').text('$17');
                    $('#gf').text('$45');
                    $('#gm').text('$32');
                    $('#db').text('$13 per day');
                }
            }

            mediumDoggo(a);
        }
        if (w >= 24) {
            function bigDoggo(n) {
                if (n >= 1 && n <= 10) {
                    $('#dw').text('$12 per hour');
                    $('#gs').text('$30');
                    $('#gf').text('$60');
                    $('#gm').text('$40');
                    $('#db').text('$15 per day');
                } else if (n > 10) {
                    $('#dw').text('$11 per hour');
                    $('#gs').text('$28');
                    $('#gf').text('$55');
                    $('#gm').text('$37');
                    $('#db').text('$14 per day');
                }
            }

            bigDoggo(a);
        }
        if (w <= 1 || l === true) {
            $('#dw').text('$6 per hour');
            $('#gs').text('$10');
            $('#gf').text('$30');
            $('#gm').text('$20');
            $('#db').text('$10 per day');
        }
    }

    calculator();
})


$('#b1').on('click', function () {
    modal('show');
    $('.nm').text('John Doe');
})

$('#b2').on('click', function () {
    modal('show');
    $('.nm').text('Jane Doe');
})

$('#b3').on('click', function () {
    modal('show');
    $('.nm').text('Mike Doe');
})

// Weather api ...contact page
function fetchWeatherData(city) {
    $.ajax('https://api.openweathermap.org/data/2.5/weather', {
        data: {
            q: city,
            appid: '40b6854107104968c3e7076c7ac028fa',
            units: 'metric'
        }
    })
        .then(function (response) {
            var temp = Math.round(response.main.temp);
            $('#tgt').text(temp + ' ºC');
        })
}

fetchWeatherData('Belgrade');

// Form validation ...contact
function verify() {
    var n = $('#name').val();
    var e = $('#email').val();
    var h = $('#plc');
    var p = $('#plct');
    if (!n || !e) {
        h.addClass(['font-semibold', 'text-lg']);
        h.text('ERROR');
        p.text('Name and Email required.')
    } else {
        h.addClass(['font-semibold', 'text-lg']);
        h.text('SUCCESS');
        p.text('Your comment/booking has been submitted.' + '\r\n' + 'We will get back to you as soon as possible.')
    }
}

$('#submission').on('click', function () {
    modal('show');
    verify();
})