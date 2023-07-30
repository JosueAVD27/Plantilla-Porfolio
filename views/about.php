<?php
    include './controllers/interface/about.php';
?>

<article id="acercaDeDireccion" class="about  active" data-page="about">
    <header>
        <h2 id="sobreMi" class="h2 article-title titulos_principales">Profile</h2>
    </header>

    <section class="about-text">
        <p id="acercaTexto1">
            I'm Armando Josue Velasquez Delgado, an Information and Communication Technologies Engineering student with
            experience in web development, graphic design and digital marketing. I am passionate about turning complex
            problems into simple, beautiful and intuitive designs.
        </p>
        <p id="acercaTexto2">
            My goal is to build websites that are functional and easy to use, but also attractive and customized to
            convey the identity and message of each client in a creative way. I have worked with several programming
            languages and have experience in creating and vectorizing images, including logos.
        </p>

        <p id="acercaTexto3">
            I enjoy the opportunity to work with a variety of local and international companies and brands. Thank you
            for visiting my website!
        </p>
    </section>

    <!-- service -->
    <section class="service">
        <h3 id="desempeños" class="h3 service-title about_shine_section2">Current Performance</h3>
        <ul class="service-list">
            <?php foreach ($desempenios as $desempenio) { ?>
                <li class="service-item">
                    <div class="service-icon-box">
                        <img src="<?php echo $desempenio['icon']; ?>" alt="icon" width="40">
                    </div>
                    <div class="service-content-box">
                        <h4 id="<?php echo $desempenio['id_title']; ?>" class="h4 service-item-title"><?php echo $desempenio['title']; ?></h4>
                        <p id="<?php echo $desempenio['id_text']; ?>" class="service-item-text"><?php echo $desempenio['text']; ?></p>
                    </div>
                </li>
            <?php } ?>
        </ul>
    </section>

    <!-- testimonials modal -->
    <div class="modal-container" data-modal-container>
        <div class="overlay" data-overlay></div>
        <section class="testimonials-modal">
            <button class="modal-close-btn" data-modal-close-btn>
                <ion-icon name="close-outline"></ion-icon>
            </button>

            <div class="modal-img-wrapper">
                <figure class="modal-avatar-box">
                    <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img>
                </figure>
                <img src="./assets/img/icons/icon-quote.svg" alt="quote icon">
            </div>

            <div class="modal-content">
                <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>
                <time datetime="2021-06-14">14 June, 2021</time>
                <div data-modal-text>
                    <p>
                        Richard was hired to create a corporate identity. We were very pleased with the work done. She
                        has a
                        lot of experience
                        and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                        consectetur adipiscing
                        elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                    </p>
                </div>
            </div>
        </section>
    </div>

    <!-- clients -->
    <section class="clients">
        <h3 id="clientes" class="h3 clients-title about_shine_section4">Clients</h3>
        <ul class="clients-list has-scrollbar">
            <?php foreach ($clientes as $cliente) { ?>
                <li class="clients-item">
                    <a href="<?php echo $cliente['url']; ?>" target="_blank">
                        <img src="<?php echo $cliente['img']; ?>" alt="client logo">
                    </a>
                </li>
            <?php } ?>
        </ul>
    </section>
</article>