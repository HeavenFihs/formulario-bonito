const numberInput = document.getElementById('codigo');

numberInput.addEventListener('input', function () {
    // Reemplaza cualquier carácter que no sea un número por una cadena vacía
    this.value = this.value.replace(/\D/g, '');
});

document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('¡Formulario enviado exitosamente!');
  // Aquí puedes añadir la lógica para enviar los datos a un servidor
});
