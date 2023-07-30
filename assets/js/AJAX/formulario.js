// seleccionar el formulario
const form1 = document.querySelector('#contact-form');

// agregar un evento submit al formulario
form1.addEventListener('submit', (event) => {

  // detener el comportamiento predeterminado del formulario
  event.preventDefault();

  // obtener los valores del formulario
  const formData = new FormData(form1);

  // enviar la solicitud AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', './controllers/formulario.php');
  xhr.onload = () => {
    // hacer algo después de que se envíe el correo electrónico
    console.log(xhr.responseText);
    // mostrar el modal
    document.getElementById("myModal").style.display = "flex";
    // limpiar los campos del formulario
    document.getElementById("contact-form").reset();
    // deshabilitar el botón del formulario
    formBtn.disabled = true;
  };
  xhr.send(formData);

});

// obtener el botón cerrar del modal
var span = document.getElementsByClassName("close")[0];

// cuando se hace clic en el botón cerrar, ocultar el modal
span.onclick = function() {
  document.getElementById("myModal").style.display = "none";
}