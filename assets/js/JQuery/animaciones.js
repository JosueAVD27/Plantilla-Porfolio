/**
 * - Slidebar
 */

//Avatar
function mostrarImagen(src) {
    // Crear elemento <img> para la imagen ampliada
    var modalImg = document.createElement("img");
    modalImg.src = src;

    // Crear elemento <div> para la ventana modal
    var modalDiv = document.createElement("div");
    modalDiv.className = "modal_avatar";
    modalDiv.onclick = function () {
        ocultarImagen(modalDiv);
    };

    // Agregar elemento <img> al elemento <div>
    modalDiv.appendChild(modalImg);

    // Agregar elemento <div> al cuerpo del documento
    document.body.appendChild(modalDiv);

    // Agregar la clase 'mostrar' a la ventana modal
    modalDiv.classList.add("mostrar_avatar");
}

function ocultarImagen(modalDiv) {
    // Agregar la clase 'ocultar' a la ventana modal
    modalDiv.classList.add("ocultar_avatar");

    // Esperar 0.3 segundos antes de remover la ventana modal del documento
    setTimeout(function () {
        document.body.removeChild(modalDiv);
    }, 300);
}


//Texto cambiante
$(document).ready(function () {
    var dataText = {
        ingles: ["Digital Marketer", "Web developer", "Graphic Designer"],
        espanol: ["Marketing digital", "Desarrollador web", "Diseñador gráfico"]
    };
    var idiomaActual = "ingles";
    var $subTitulo = $('#subTitulo');

    // type one text in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            $subTitulo.html(text.substring(0, i + 1) + '<span class="cursor_slidebar_subTitle" aria-hidden="true"></span>');

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 50);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // set the cursor to empty
            $subTitulo.html($subTitulo.html().replace('<span class="cursor_slidebar_subTitle" aria-hidden="true"></span>', ''));
            // stop the current opacity animation and set opacity to 1
            $subTitulo.stop().css({ opacity: 1 });
            // fade out the text
            $subTitulo.animate({ opacity: 0 }, 1000, function () {
                // wait for a second and then fade in the text
                setTimeout(function () {
                    $subTitulo.animate({ opacity: 1 }, 0);
                    // call the callback function
                    fnCallback();
                }, 100);
            });
        }
    }

    // start a typewriter animation for a text in the dataText array
    function startTextAnimation(i) {
        if (typeof dataText[idiomaActual][i] == 'undefined') {
            setTimeout(function () {
                startTextAnimation(0);
            }, 0);
        }
        // check if dataText[i] exists
        if (i < dataText[idiomaActual].length) {
            // stop the current animation and immediately show the full text
            $subTitulo.stop().text(dataText[idiomaActual][i]).css({ opacity: 1 });
            // text exists! start typewriter animation
            typeWriter(dataText[idiomaActual][i], 0, function () {
                // after callback (and whole text has been animated), start next text
                startTextAnimation(i + 1);
            });
        }
    }

    // start the text animation
    startTextAnimation(0);

    // listener for change event on checkbox
    $("#switch-idioma").on("change", function () {
        if ($(this).is(":checked")) {
            idiomaActual = "espanol";
            dataText.espanol = ["Marketing digital", "Desarrollador web", "Diseñador gráfico"];
        } else {
            idiomaActual = "ingles";
            dataText.ingles = ["Digital Marketer", "Web developer", "Graphic Designer"];
        }

        // restart the animation with the updated dataText
        startTextAnimation(0);
    });
});

/**
 * - Titulos
 */

//About
$('#acercaDe').on('click', function () {
    //TITULO
    setTimeout(function () {
        var textWrapper = $('.titulos_principales');
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter'>$&</span>"));

        anime.timeline()
            .add({
                targets: '.titulos_principales .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 50 * (i + 1),
                begin: function (anim) {
                    $(anim.animatables[0].target).css('display', 'inline-block');
                    textWrapper.addClass('no-transform');
                },
                complete: function (anim) {
                    textWrapper.removeClass('no-transform');
                }
            });
    }, 0);

    //TEXTOS
    // Cree una instancia de ScrollReveal
    const srText1About = ScrollReveal();

    // Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
    srText1About.reveal('#acercaTexto1', {
        duration: 1000,
        delay: 0,
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
        delay: 500,
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
        delay: 1000,
        origin: 'bottom',
        distance: '50px',
        opacity: 0,
        easing: 'ease-out'
    });

});



//Resume
$('#resume').on('click', function () {
    setTimeout(function () {
        var textWrapper = $('.titulos_principales1');
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter1'>$&</span>"));

        anime.timeline()
            .add({
                targets: '.titulos_principales1 .letter1',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 50 * (i + 1),
                begin: function (anim) {
                    $(anim.animatables[0].target).css('display', 'inline-block');
                    textWrapper.addClass('no-transform1');
                },
                complete: function (anim) {
                    textWrapper.removeClass('no-transform1');
                }
            });
    }, 0);


    //TEXTOS - ABOUT
    //Elimina el efecto
    // Cree una instancia de ScrollReveal
    const srText1About = ScrollReveal();
    const srText2About = ScrollReveal();
    const srText3About = ScrollReveal();
    // Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
    srText1About.reveal('#acercaTexto1',
        srText2About.reveal('#acercaTexto2',
            srText3About.reveal('#acercaTexto3', {
                duration: 0,
                delay: 0,
                origin: 'bottom',
                distance: '50px',
                opacity: 0,
                easing: 'ease-out'
            })));
});

//Portfolio
$('#portfolio').on('click', function () {
    setTimeout(function () {
        var textWrapper = $('.titulos_principales2');
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter2'>$&</span>"));

        anime.timeline()
            .add({
                targets: '.titulos_principales2 .letter2',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 50 * (i + 1),
                begin: function (anim) {
                    $(anim.animatables[0].target).css('display', 'inline-block');
                    textWrapper.addClass('no-transform2');
                },
                complete: function (anim) {
                    textWrapper.removeClass('no-transform2');
                }
            });
    }, 0);

    //TEXTOS - ABOUT
    //Elimina el efecto
    // Cree una instancia de ScrollReveal
    const srText1About = ScrollReveal();
    const srText2About = ScrollReveal();
    const srText3About = ScrollReveal();
    // Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
    srText1About.reveal('#acercaTexto1',
        srText2About.reveal('#acercaTexto2',
            srText3About.reveal('#acercaTexto3', {
                duration: 0,
                delay: 0,
                origin: 'bottom',
                distance: '50px',
                opacity: 0,
                easing: 'ease-out'
            })));
});

//Blog
$('#blog').on('click', function () {
    setTimeout(function () {
        var textWrapper = $('.titulos_principales3');
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter3'>$&</span>"));

        anime.timeline()
            .add({
                targets: '.titulos_principales3 .letter3',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 50 * (i + 1),
                begin: function (anim) {
                    $(anim.animatables[0].target).css('display', 'inline-block');
                    textWrapper.addClass('no-transform3');
                },
                complete: function (anim) {
                    textWrapper.removeClass('no-transform3');
                }
            });
    }, 0);

    //TEXTOS - ABOUT
    //Elimina el efecto
    // Cree una instancia de ScrollReveal
    const srText1About = ScrollReveal();
    const srText2About = ScrollReveal();
    const srText3About = ScrollReveal();
    // Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
    srText1About.reveal('#acercaTexto1',
        srText2About.reveal('#acercaTexto2',
            srText3About.reveal('#acercaTexto3', {
                duration: 0,
                delay: 0,
                origin: 'bottom',
                distance: '50px',
                opacity: 0,
                easing: 'ease-out'
            })));
});


//Contact
$('#contact').on('click', function () {
    setTimeout(function () {
        var textWrapper = $('.titulos_principales4');
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter4'>$&</span>"));

        anime.timeline()
            .add({
                targets: '.titulos_principales4 .letter4',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 50 * (i + 1),
                begin: function (anim) {
                    $(anim.animatables[0].target).css('display', 'inline-block');
                    textWrapper.addClass('no-transform4');
                },
                complete: function (anim) {
                    textWrapper.removeClass('no-transform4');
                }
            });
    }, 0);

    //TEXTOS - ABOUT
    //Elimina el efecto
    // Cree una instancia de ScrollReveal
    const srText1About = ScrollReveal();
    const srText2About = ScrollReveal();
    const srText3About = ScrollReveal();
    // Configure el efecto de desvanecimiento para el elemento con el ID "miElemento"
    srText1About.reveal('#acercaTexto1',
        srText2About.reveal('#acercaTexto2',
            srText3About.reveal('#acercaTexto3', {
                duration: 0,
                delay: 0,
                origin: 'bottom',
                distance: '50px',
                opacity: 0,
                easing: 'ease-out'
            })));
});

/**
 * - ABOUT
 */
