$(document).ready(function () {
    // Para saber la fecha de hoy
    var fecha_hoy = new Date();
    fecha_hoy = fecha_hoy.getDate() + "/" + (fecha_hoy.getMonth() + 1) + "/" + fecha_hoy.getFullYear();
    document.getElementById("fecha_hoy").innerHTML = "Fecha: " + fecha_hoy;

    // Variable de control de las materias
    var vector_areas = ["Matemáticas", "Ciencias naturales", "Educación física", "Emprendimiento", "Artística", "Castellano", "Inglés", "Ciencias sociales", "Informática", "Ética", "Religión"];
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
            // Usar value
            // Se recorren todas las posiciones del vector que contiene a las variables
            for (i = 0; i < vector_areas.length; i++) {
                if (vector_areas[i] == selectedOption.value) {
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

    // ----------- Select de periodos ------------------
    // Las semanas
    var vector_periodo = ["Primer periodo", "Segundo periodo", "Tercer periodo", "Cuarto periodo"];
    // Se recorren todas las posiciones del vector que contiene a las variables
    for (i = 0; i < vector_periodo.length; i++) {
        // Se crea un elemento tipo option
        let z = document.createElement("option");
        // Al cual se le asigna el valor de la variable
        z.setAttribute("value", vector_periodo[i]);
        // Y se le asigna al valor a mostrar el valor de variable_des
        let t = document.createTextNode(vector_periodo[i]);
        z.appendChild(t);
        // Luego se añade al html
        document.getElementById("select_periodo").appendChild(z);
    }
    $.get('/api/semana/', function (result) {
        lista_semanas = result.results;
        // ----------- Select de semanas -------------------
        var select_periodo = document.getElementById('select_periodo');
        var selectedOption_periodo;
        // Cuando el select cambie
        select_periodo.addEventListener('change',
            function () {
                document.getElementById("select_semana").innerHTML = "<option value=''>Seleecione la Semana</option>";
                selectedOption_periodo = this.options[select_periodo.selectedIndex];
                // En este caso imprime el valor y el texto del select seleccionado
                // Usar value
                // Se recorren todas las posiciones del vector que contiene a las variables
                for (i = 0; i < lista_semanas.length; i++) {
                    if (lista_semanas[i].periodo == selectedOption_periodo.value) {
                        // Se crea un elemento tipo option
                        let z = document.createElement("option");
                        // Al cual se le asigna el valor de la variable
                        z.setAttribute("value", lista_semanas[i].rango_fecha);
                        // Y se le asigna al valor a mostrar el valor de variable_des
                        let t = document.createTextNode(lista_semanas[i].rango_fecha);
                        z.appendChild(t);
                        // Luego se añade al html
                        document.getElementById("select_semana").appendChild(z);
                    }
                }
            }
        );
    });
});