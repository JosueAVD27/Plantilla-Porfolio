const timelineItems = $('.timeline-item');
const timelineLine = $('.timeline-list:before');

// Selecciona el artículo que quieres observar
const article = $('#resumeDireccion')[0];

// Crea una instancia del objeto MutationObserver
const observer = new MutationObserver((mutationsList) => {
    // Recorre las mutaciones en busca de la clase 'active'
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const articleClass = mutation.target.className;
            if (articleClass.includes('active')) {
                
                // Aquí puedes ejecutar el código que deseas cuando se agrega la clase 'active'

                let delay = 0;

                timelineLine.css('height', 'calc(100% + 50px)');

                timelineItems.each(function () {
                    const currentItem = $(this);

                    setTimeout(function () {
                        currentItem.addClass('animated');
                    }, delay);

                    delay += 250;
                });

                setTimeout(function () {
                    timelineLine.css('height', '');
                }, delay + 500);

            } else {
                // Si los elementos ya están animados, eliminamos la clase y salimos de la función
                if (timelineItems.hasClass('animated')) {
                    timelineItems.removeClass('animated');
                    return;
                }

                // Si no están animados, ejecutamos la función de animación
                animateTimeline();
            }
        }
    }
});

// Observa los cambios en el atributo 'class' del artículo
observer.observe(article, { attributes: true });