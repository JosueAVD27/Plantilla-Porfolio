<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Portafolio Web Developer.">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title id="titulo">Josue Velasquez</title>
  <!-- Requerimientos generales -->
  <?php
    include 'views/.head.php';
  ?>
</head>

<body>
  <!-- #CARGA -->
  <div id="contenedor_carga">
    <div id="contenedor_carga">
      <video id="video_carga" src="assets/video/VideoLogoJosue.mkv" autoplay loop muted></video>
    </div>
  </div>

  <!-- #MAIN -->
  <main>
    <!-- #SIDEBAR -->
    <?php
      include 'views/.sidebar.php';
    ?>

    <!-- #main-content -->
    <div class="main-content">

      <!-- #NAVBAR -->
      <?php
        include 'views/.navbar.php';
      ?>

      <!-- #ABOUT -->
      <?php
        include 'views/about.php';
      ?>

      <!-- #RESUME -->
      <?php
        include 'views/resume.php';
      ?>

      <!-- #PORTFOLIO -->
      <?php
        include 'views/portfolio.php';
      ?>
    
      <!-- #BLOG -->
      <?php
        include 'views/blog.php';
      ?>
      
      <!-- #CONTACT -->
      <?php
        include 'views/contact.php';
      ?>
    </div>
  </main>

  <!-- JQuery -->
  <script src="./assets/js/JQuery/jquery-3.6.1.js"></script>

  <!-- AJAX -->
  <script src="./assets/js/AJAX/formulario.js"></script>

  <!-- custom js link -->
  <script src="./assets/js/script.js"></script>
  <script src="./assets/js/carga.js"></script>
  <script src="./assets/js/JQuery/timeLine.js"></script>
  <script src="./assets/js/JQuery/animaciones.js"></script>
  <script src="./assets/js/JQuery/scrollEffects.js"></script>

  <!-- ionicon link -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

  <!-- Traduccion de idioma -->
  <script src="./assets/js/JQuery/Idioma/script.js"></script>
</body>
</html>