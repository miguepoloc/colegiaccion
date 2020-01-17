$(document).ready(function () {
    console.log("LA prueba");
    // Para saber la fecha de hoy
    var fecha_hoy = new Date();
    fecha_hoy = fecha_hoy.getDate() + "/" + (fecha_hoy.getMonth() + 1) + "/" + fecha_hoy.getFullYear();
    document.getElementById("fecha_hoy").innerHTML = "Fecha: " + fecha_hoy;

    // Variable de control de las materias
    vector_areas = ["Matemáticas", "Ciencias naturales", "Educación física", "Emprendimiento", "Artística", "Castellano", "Inglés", "Ciencias sociales", "Informática", "Ética", "Religión"];
    var objeto_materias = new Object();
    objeto_materias["Matemáticas"] = ["Aritmética", "Estadística", "Geometría"];
    objeto_materias["Ciencias naturales"] = ["Naturales", "Salud y nutrición"];
    objeto_materias["Educación física"] = ["Educación física"];
    objeto_materias["Emprendimiento"] = ["Emprendimiento"];
    objeto_materias["Artística"] = ["Artística"];
    objeto_materias["Castellano"] = ["Castellano"];
    objeto_materias["Inglés"] = ["Inglés"];
    objeto_materias["Ciencias sociales"] = ["Sociales", "Paz y ciudadanía"];
    objeto_materias["Informática"] = ["Informática"];
    objeto_materias["Ética"] = ["Ética"];
    objeto_materias["Religión"] = ["Religión"];
    // ----------- Select de área -------------------
    // Se recorren todas las posiciones del vector que contiene a las variables
    for (i = 0; i < vector_areas.length; i++) {
        // Se crea un elemento tipo option
        let z = document.createElement("option");
        // Al cual se le asigna el valor de la variable
        z.setAttribute("value", vector_areas[i]);
        // Y se le asigna al valor a mostrar el valor de variable_des
        let t = document.createTextNode(vector_areas[i]);
        z.appendChild(t);
        // Luego se añade al html
        document.getElementById("select_area").appendChild(z);
    }

    // ----------- Select de asignatura -------------------
    var select_area = document.getElementById('select_area');
    var selectedOption;
    // Cuando el select cambie
    select_area.addEventListener('change',
        function () {
            document.getElementById("select_asignatura").innerHTML = "<option value=''>Seleecione la Asignatura</option>";
            selectedOption = this.options[select_area.selectedIndex];
            // En este caso imprime el valor y el texto del select seleccionado
            console.log(selectedOption.value + ': ' + selectedOption.text);
            // Usar value
            // Se recorren todas las posiciones del vector que contiene a las variables
            for (i = 0; i < vector_areas.length; i++) {
                if (vector_areas[i] == selectedOption.value) {
                    console.log(objeto_materias[vector_areas[i]]);
                    for (j = 0; j < objeto_materias[vector_areas[i]].length; j++) {
                        // Se crea un elemento tipo option
                        let z = document.createElement("option");
                        // Al cual se le asigna el valor de la variable
                        z.setAttribute("value", objeto_materias[vector_areas[i]][j]);
                        // Y se le asigna al valor a mostrar el valor de variable_des
                        let t = document.createTextNode(objeto_materias[vector_areas[i]][j]);
                        z.appendChild(t);
                        // Luego se añade al html
                        document.getElementById("select_asignatura").appendChild(z);
                    }
                }

            }
        }
    );
});