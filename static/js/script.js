const numberInput = document.getElementById('codigo');

numberInput.addEventListener('input', function(){this.value = this.value.replace(/\D/g, '');});

window.onload = function(){actualizarXhora();};

function getSelectedValue(groupId) {
  const selectedOption = document.querySelector('input[name='+groupId+']:checked');
  return selectedOption ? selectedOption.value : null;
}

function actualizarXhora(){
  var ahora = new Date();
  var hora = ahora.getHours();

  var hr1 = document.getElementById("horario1");
  var hr2 = document.getElementById("horario2");
  var hr3 = document.getElementById("horario3");
  var hr4 = document.getElementById("horario4");
  var hr5 = document.getElementById("horario5");

  // if (hora>=14) hr1.disabled = true;
  // if (hora>=15) hr2.disabled = true;
  // if (hora>=16) hr3.disabled = true;
  // if (hora>=17) hr4.disabled = true;
  // if (hora>=18) hr5.disabled = true;
}