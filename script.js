const numberInput = document.getElementById('codigo');

numberInput.addEventListener('input', function () {
    // Reemplaza cualquier carácter que no sea un número por una cadena vacía
    this.value = this.value.replace(/\D/g, '');
});

function sendData() {
  const data = {
    name: document.getElementById('name').value,
    lnam: document.getElementById("apellido").value, 
    email: document.getElementById('email').value,
    code: document.getElementById("codigo").value,
    teach: document.getElementById("profesor").value,
    sche: document.querySelector('input[name="rating"]:checked')?.value
  };

  fetch('WEB_APP_URL', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    if (response.status === 'success') {
      alert('Formulario enviado exitosamente.');
    } else {
      alert('Ocurrió un error al enviar el formulario. Inténtalo nuevamente.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar el formulario.');
  });
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('¡Formulario enviado exitosamente!');
  sendData();
});
