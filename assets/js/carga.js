/**
 * Animacion de Entrada (Logo)
 */

//Duracion del video
setTimeout(function () {
    var video = document.getElementById("video_carga");
    video.pause();
}, 3800);

//Relentizacion del video
window.onload = function () {
    var video = document.getElementById("video_carga");
    video.playbackRate = 1.2;
};

//Transicion de carga
setTimeout(() => {
    var contenedor = document.getElementById("contenedor_carga");

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}, 4000); // espera 3 segundos antes de ejecutar el código

/**
 * Configuracion de animaciones de entrada
 */
/**
 * SLIDEBAR
 */
//Informacion General - slidebar
$(document).ready(function () {
    setTimeout(function () {
        $("#informacion_general").addClass("animate__animated animate__slideInLeft");
    }, 3400);
});

//texto de about
$(document).ready(function () {
    setTimeout(function () {
        var textWrapper = $('.titulos_principales');
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter'>$&</span>"));

        anime.timeline()
            .add({
                targets: '.titulos_principales .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 150 * (i + 1),
                begin: function (anim) {
                    $(anim.animatables[0].target).css('display', 'inline-block');
                    textWrapper.addClass('no-transform');
                },
                complete: function (anim) {
                    textWrapper.removeClass('no-transform');
                }
            });
    }, 3400);
});

/*Donuts Percente*/
$(document).ready(function () {
    setTimeout(function () {
        function animateDonutChart(element, percent) {
            // Obtener los elementos del gráfico
            const donutChart = $(element).find('.donut-chart');
            const donutSegment = $(element).find('.donut-segment');
            const donutText = $(element).find('.donut-text');
            const donutRing = $(element).find('.donut-ring');

            // Calcular el valor de dashoffset y actualizar el gráfico
            const circumference = 2 * Math.PI * 15.91549430918954;
            const offset = circumference - (percent / 100) * circumference;
            donutSegment.css('stroke-dashoffset', offset);

            // Animar la entrada del porcentaje
            const initialOffset = circumference - ((percent - 10) / 100) * circumference;
            donutSegment.css({
                'stroke-dashoffset': initialOffset,
                'transition': 'stroke-dashoffset 0.5s ease-out'
            });
            let i = 0;
            const interval = setInterval(() => {
                i++;
                if (i <= percent) {
                    donutText.text(`${i}%`);
                    donutRing.css('stroke-dasharray', `${(circumference / 100) * i} ${circumference}`);
                } else {
                    clearInterval(interval);
                }
            }, 20);
            setTimeout(() => {
                donutSegment.css('stroke-dashoffset', offset);
                donutText.text(`${percent}%`);
                donutText.css('transform', 'rotate(0deg)');
                if (percent < 100) {
                    donutRing.addClass('incomplete');
                }
            }, 500);

            // Agregar clase animate para iniciar la animación
            donutChart.addClass('animate');
        }

        // Obtener el elemento del gráfico y el porcentaje deseado
        const donutChart = $('.donut-chart-container');
        const percentage = 85;

        const donutChart2 = $('.donut-chart-container2');
        const percentage2 = 75;

        // Animar el gráfico
        animateDonutChart(donutChart, percentage);
        animateDonutChart(donutChart2, percentage2);
    }, 3500);
});


/**
 * ABOUT
 */
//texto de about
// Cree una instancia de ScrollReveal
const srText1About = ScrollReveal();

// Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
srText1About.reveal('#acercaTexto1', {
    duration: 1000,
    delay: 4000,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    easing: 'ease-out'
});

// Cree una instancia de ScrollReveal
const srText2About = ScrollReveal();

// Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
srText2About.reveal('#acercaTexto2', {
    duration: 1000,
    delay: 4500,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    easing: 'ease-out'
});

// Cree una instancia de ScrollReveal
const srText3About = ScrollReveal();

// Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
srText3About.reveal('#acercaTexto3', {
    duration: 1000,
    delay: 5000,
    origin: 'bottom',
    distance: '50px',
    opacity: 0,
    easing: 'ease-out'
});