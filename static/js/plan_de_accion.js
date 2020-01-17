var fecha_hoy = new Date();
fecha_hoy = fecha_hoy.getDate() + "/" + (fecha_hoy.getMonth() + 1) + "/" + fecha_hoy.getFullYear();
document.getElementById("fecha_hoy").innerHTML = "Fecha: " + fecha_hoy;