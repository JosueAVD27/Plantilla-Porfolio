<article id="contactDireccion" class="contact" data-page="contact">
    <header>
        <h2 id="contacto" class="h2 article-title titulos_principales4">Contact</h2>
    </header>

    <section class="mapbox" data-mapbox>
        <figure>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127673.05670829919!2d-79.24679419688019!3d-0.241011476991959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d546535730a17d%3A0xcef17541041b9f63!2sSanto%20Domingo!5e0!3m2!1ses!2sec!4v1681343352883!5m2!1ses!2sec"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </figure>
    </section>

    <section class="contact-form">
        <h3 id="formContact" class="h3 form-title contact_shine_section2">Contact Form</h3>
        <form id="contact-form" action="#" class="form" data-form>
            <div class="input-wrapper">
                <input id="formName" type="text" name="fullname" class="form-input" placeholder="Full name" required
                    data-form-input>
                <input id="formMail" type="email" name="email" class="form-input" placeholder="Email address" required
                    data-form-input>
            </div>

            <textarea id="formMessage" name="message" class="form-input" placeholder="Your Message..." required
                data-form-input></textarea>

            <button class="form-btn" type="submit" disabled data-form-btn>
                <ion-icon name="paper-plane"></ion-icon>
                <span id="formBtn">Send Message</span>
            </button>
        </form>
    </section>

    <!-- Modal -->
    <div class="modal" id="myModal">
        <div class="modal_content">
            <span class="close">&times;</span>
            <h1 class="contenido_modal title_modal">Mensaje enviado correctamente</h1>
            <p class="contenido_modal">¡Gracias por contactarme!</p>
            <p class="contenido_modal">Le responderemos lo antes posible.</p>
        </div>
    </div>
</article>