<?php
    include './controllers/interface/.sidebar.php';
?>

<aside id="informacion_general" class="sidebar" data-sidebar>
    <div class="sidebar-info">
        <figure class="avatar-box my-avatar">
            <img src="./assets/img/favicon/logoJosue.ico" alt="Josue Velasquez" width="80"
                onclick="mostrarImagen(this.src)">
        </figure>

        <div class="info-content">
            <h1 class="name" title="Josue Velasquez">Josue Velasquez</h1>
            <div class="contenedor-subtitulo">
                <div class="title">
                    <p id="subTitulo">Web developer</p>
                </div>
            </div>
            <!--Boton de cambio de idioma-->
            <div class="contenedor_idioma">
                <span id="switch">EN</span>
                <label for="switch-idioma" class="switch">
                    <input type="checkbox" id="switch-idioma">
                    <span class="slider round"></span>
                    <p id="switch-text"></p>
                </label>
            </div>
        </div>

        <div class="separator separator-config"></div>

        <div class="container-habilidades">
            <h4 class="h4" id="habilidades">Web Skills</h4>
            <div class="contenedor-donuts">
                <?php foreach ($habilidades as $habilidad) { ?>
                    <div class="donut-chart-container<?php echo $habilidad['number']; ?>">
                        <svg class="donut-chart" viewBox="<?php echo $habilidad['viewBox']; ?>" aria-labelledby="donut-chart-title">
                            <circle class="donut-hole" cx="<?php echo $habilidad['hole_cx']; ?>" cy="<?php echo $habilidad['hole_cy']; ?>" r="<?php echo $habilidad['hole_r']; ?>"></circle>
                            <circle class="donut-ring" cx="<?php echo $habilidad['ring_cx']; ?>" cy="<?php echo $habilidad['ring_cy']; ?>" r="<?php echo $habilidad['ring_r']; ?>"></circle>
                            <circle class="donut-segment" cx="<?php echo $habilidad['segment_cx']; ?>" cy="<?php echo $habilidad['segment_cy']; ?>" r="<?php echo $habilidad['segment_r']; ?>"></circle>
                            <text class="donut-text" x="<?php echo $habilidad['text_x']; ?>" y="<?php echo $habilidad['text_y']; ?>" dominant-baseline="middle"
                                text-anchor="middle"><?php echo $habilidad['middle']; ?></text>
                            <text class="donut-text-interior" x="<?php echo $habilidad['interior_x']; ?>" y="<?php echo $habilidad['interior_y']; ?>" dominant-baseline="middle"
                                text-anchor="middle"><?php echo $habilidad['name']; ?></text>
                        </svg>
                    </div>
                <?php } ?>
            </div>
        </div>

        <button class="info_more-btn" data-sidebar-btn>
            <span id="btnVerContacto">Show Contacts</span>
            <ion-icon name="chevron-down"></ion-icon>
        </button>

    </div>
    <div class="sidebar-info_more">
        <div class="separator separator-config-movile"></div>
        <div class="container-habilidades-movile">
            <h4 class="h4" id="habilidades">Web Skills</h4>
            <div class="contenedor-donuts">
                <?php foreach ($habilidades as $habilidad) { ?>
                    <div class="donut-chart-container<?php echo $habilidad['number']; ?>">
                        <svg class="donut-chart" viewBox="<?php echo $habilidad['viewBox']; ?>" aria-labelledby="donut-chart-title">
                            <circle class="donut-hole" cx="<?php echo $habilidad['hole_cx']; ?>" cy="<?php echo $habilidad['hole_cy']; ?>" r="<?php echo $habilidad['hole_r']; ?>"></circle>
                            <circle class="donut-ring" cx="<?php echo $habilidad['ring_cx']; ?>" cy="<?php echo $habilidad['ring_cy']; ?>" r="<?php echo $habilidad['ring_r']; ?>"></circle>
                            <circle class="donut-segment" cx="<?php echo $habilidad['segment_cx']; ?>" cy="<?php echo $habilidad['segment_cy']; ?>" r="<?php echo $habilidad['segment_r']; ?>"></circle>
                            <text class="donut-text" x="<?php echo $habilidad['text_x']; ?>" y="<?php echo $habilidad['text_y']; ?>" dominant-baseline="middle"
                                text-anchor="middle"><?php echo $habilidad['middle']; ?></text>
                            <text class="donut-text-interior" x="<?php echo $habilidad['interior_x']; ?>" y="<?php echo $habilidad['interior_y']; ?>" dominant-baseline="middle"
                                text-anchor="middle"><?php echo $habilidad['name']; ?></text>
                        </svg>
                    </div>
                <?php } ?>
            </div>
        </div>

        <div class="separator"></div>

        <ul class="contacts-list">
            <li class="contact-item">
                <div class="icon-box">
                    <a href="#" class="colorDescarga" target="_blank"><ion-icon name="folder-open-outline"></ion-icon></a>
                </div>

                <div class="contact-info">
                    <p id="curriculum" class="contact-title">Curriculum</p>
                    <a id="descargar" href="#" class="contact-link" download target="_blank">Download</a>
                </div>
            </li>

            <li class="contact-item">
                <div class="icon-box">
                    <ion-icon name="mail-outline"></ion-icon>
                </div>

                <div class="contact-info">
                    <p id="correo" class="contact-title">Email</p>
                    <a href="#" class="contact-link"
                        title="example@gmail.com">example@gmail.com</a>
                </div>
            </li>

            <li class="contact-item">
                <div class="icon-box">
                    <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>

                <div class="contact-info">
                    <p id="telefono" class="contact-title">Phone</p>
                    <a href="tel:+593900000000" class="contact-link">+593 900 000 000</a>
                </div>
            </li>

            <li class="contact-item">
                <div class="icon-box">
                    <ion-icon name="calendar-outline"></ion-icon>
                </div>

                <div class="contact-info">
                    <p id="cumple" class="contact-title">Birthday</p>
                    <time id="cumpleFecha" datetime="2000-09-27">September 27, 2000</time>
                </div>
            </li>

            <li class="contact-item">
                <div class="icon-box">
                    <ion-icon name="location-outline"></ion-icon>
                </div>

                <div class="contact-info">
                    <p id="ubicacion" class="contact-title">Location</p>
                    <address>Santo Domingo, ECUADOR</address>
                </div>
            </li>
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
            <?php foreach ($socials as $social) { ?>
                <li class="social-item">
                    <a href="<?php echo $social['url']; ?>" class="social-link" target="_blank">
                        <ion-icon name="<?php echo $social['icon']; ?>"></ion-icon>
                    </a>
                </li>
            <?php } ?>
        </ul>
    </div>
</aside>