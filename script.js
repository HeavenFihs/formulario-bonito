const numberInput = document.getElementById('codigo');

numberInput.addEventListener('input', function () {
    // Reemplaza cualquier carácter que no sea un número por una cadena vacía
    this.value = this.value.replace(/\D/g, '');
});

const form = document.getElementById('surveyForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const data = {
    fecha: ajustarHoraDesdeUTC(),
    nombre: document.getElementById('name').value,
    apellido: document.getElementById('apellido').value,
    email: document.getElementById("email").value,
    codigo: document.getElementById("codigo").value,
    profesor: document.getElementById("profesor").value,
    horario: getSelectedValue("horario"),
  };
  
  const url = 'https://script.google.com/macros/s/AKfycbw_Np_ZNon5-xdhGcxo2ezuRsiFVmte362-pBFhDEf9b2SurkegKQps41-7V-6yrzYj/exec';

  fetch(url,{
    redirect : "follow",
    method : "POST",
    body : JSON.stringify(data),
    headers : {
      "Content-Type": "application/json",
    },
  })
    .then(response => response.text())
    .then(dat => {
      console.log('Datos enviados:', data);
      // Puedes mostrar un mensaje de éxito al usuario aquí
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      // Puedes mostrar un mensaje de error al usuario aquí
    });
});

function getSelectedValue(groupId) {
  const selectedOption = document.querySelector('input[name='+groupId+']:checked');
  return selectedOption ? selectedOption.value : null;
}

function ajustarHoraDesdeUTC() {
  const fechaUTC = new Date();

  // Ejemplo de formateo: "YYYY-MM-DD HH:MM:SS"
  const year = fechaUTC.getFullYear();
  const month = ('0' + (fechaUTC.getMonth() + 1)).slice(-2);
  const day = ('0' + fechaUTC.getDate()).slice(-2);
  const hours = ('0' + fechaUTC.getHours()).slice(-2);
  const minutes = ('0' + fechaUTC.getMinutes()).slice(-2);
  const seconds = ('0' + fechaUTC.getSeconds()).slice(-2);

  const fechaFormateada = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  console.log('Fecha ajustada a la hora local:', fechaFormateada);

  return fechaFormateada;
}