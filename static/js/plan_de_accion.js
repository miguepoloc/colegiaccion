$(document).ready(function () {
    // Para saber la fecha de hoy
    var fecha_hoy = new Date();
    fecha_hoy = fecha_hoy.getDate() + "/" + (fecha_hoy.getMonth() + 1) + "/" + fecha_hoy.getFullYear();
    document.getElementById("fecha_hoy").innerHTML = "Fecha: " + fecha_hoy;

    // Variable de control de las materias
    var vector_areas = ["Matemáticas", "Ciencias Naturales", "Educación física", "Emprendimiento", "Artística", "Castellano", "Inglés", "Ciencias Sociales", "Informática", "Ética", "Religión"];
    var objeto_materias = new Object();
    objeto_materias["Matemáticas"] = ["Aritmética", "Estadística", "Geometría"];
    objeto_materias["Ciencias Naturales"] = ["Naturales", "Salud y nutrición"];
    objeto_materias["Educación física"] = ["Educación física"];
    objeto_materias["Emprendimiento"] = ["Emprendimiento"];
    objeto_materias["Artística"] = ["Artística"];
    objeto_materias["Castellano"] = ["Castellano"];
    objeto_materias["Inglés"] = ["Inglés"];
    objeto_materias["Ciencias Sociales"] = ["Sociales", "Paz y ciudadanía"];
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
    var area_selecta = "";
    // Cuando el select cambie
    select_area.addEventListener('change',
        function () {
            document.getElementById("select_asignatura").innerHTML = "<option value=''>Seleecione la Asignatura</option>";
            selectedOption = this.options[select_area.selectedIndex];
            area_selecta = selectedOption.value;
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
            estandar_f();
            dba_f();
        }
    );

    // ----------- Select de grado -------------------
    var select_grado = document.getElementById('select_grado');
    var selectedOption_grado;
    var grado_selecto = "";
    // Cuando el select cambie
    select_grado.addEventListener('change',
        function () {
            selectedOption_grado = this.options[select_grado.selectedIndex];
            grado_selecto = selectedOption_grado.value;
            // En este caso imprime el valor y el texto del select seleccionado
            // Usar value
            estandar_f();
            dba_f();
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

    // Estandares
    var objeto_mayor = new Object();
    var objeto_grado_estandar = new Object();
    var vector_grado_estandar = [];
    var vector_materia = [];
    var lista_estandares;
    $.get('/api/estandar/', function (result) {
        lista_estandares = result.results;
        // ----------- Select de estándares -------------------
        // Se recorren todas las posiciones del vector de datos
        for (i = 0; i < lista_estandares.length; i++) {
            // Guarda el id de la muestra de la posicón i del vector
            materia_estandar = String(lista_estandares[i]["materia"]);
            grado_estandar = String(lista_estandares[i]["rango_grado"]);
            // En esta parte se va a llenar el vector con los identificadores de muestra
            // Para saber cuántos muestras se tomaron y relacionar los datos
            // A partir de este identificador
            // Si aún no se ha añadido el código de muestra de la posición i
            // En el vector de muestra
            if (vector_materia.includes(materia_estandar) == false) {
                // Se añade el id de muestra
                vector_materia.push(materia_estandar);
                objeto_mayor[materia_estandar] = [];
            }
            if (vector_grado_estandar.includes(grado_estandar) == false) {
                // Se añade el id de muestra
                vector_grado_estandar.push(grado_estandar);
                objeto_grado_estandar[grado_estandar] = [];
            }
        }

        for (i = 0; i < lista_estandares.length; i++) {
            xestandar_mayor = String(lista_estandares[i]["estandar_mayor"]);
            if (objeto_mayor[lista_estandares[i].materia].includes(xestandar_mayor) == false) {
                objeto_mayor[lista_estandares[i].materia].push(xestandar_mayor);
            }
            if (objeto_grado_estandar[lista_estandares[i].rango_grado].includes(xestandar_mayor) == false) {
                objeto_grado_estandar[lista_estandares[i].rango_grado].push(xestandar_mayor);
            }
        }
    });

    var html;
    var materia1 = ["1", "2", "3"];
    var materia2 = ["4", "5"];
    var gradox = "";

    function estandar_f() {
        html = " ";
        $("#testeando").html(html);
        if (materia1.includes(String(grado_selecto))) {
            gradox = "1-3";
        }
        if (materia2.includes(String(grado_selecto))) {
            gradox = "4-5";
        }
        for (let index = 0; index < vector_materia.length; index++) {
            if (vector_materia[index] == area_selecta) {
                for (let j = 0; j < objeto_mayor[area_selecta].length; j++) {
                    if (gradox !== "") {
                        if (objeto_grado_estandar[gradox].includes(objeto_mayor[area_selecta][j])) {
                            html += '<legend class="col-form-label col-sm-3 pt-0">'
                            html += objeto_mayor[area_selecta][j];
                            html += '</legend>';
                            html += '<div class="col-sm-9">';
                            for (let q = 0; q < lista_estandares.length; q++) {
                                if (lista_estandares[q]["estandar_mayor"] == objeto_mayor[area_selecta][j]) {
                                    if (lista_estandares[q]["rango_grado"] == gradox) {
                                        if (lista_estandares[q]["materia"] == area_selecta) {
                                            html += '<div class="form-check"><input class="form-check-input" type="checkbox" id="gridCheck1">';
                                            html += '<label class="form-check-label" for="gridCheck1" align="justify">';
                                            html += lista_estandares[q]["estandar_menor"];
                                            html += '</label></div>';
                                            $("#testeando").html(html);
                                        }
                                    }
                                }
                            }
                            html += '</div>';
                            html += '<hr align="center" noshade="noshade" size="2" width="90%" />';
                        }
                    }
                }
            }
        }
    }

    //DBA
    var objeto_mayor_dba = new Object();
    var objeto_grado_dba = new Object();
    var vector_materia_dba = [];
    var vector_grado_dba = [];
    var lista_dba;
    $.get('/api/dba/', function (result) {
        lista_dba = result.results;
        // ----------- Select de estándares -------------------
        // Se recorren todas las posiciones del vector de datos
        for (i = 0; i < lista_dba.length; i++) {
            // Guarda el id de la muestra de la posicón i del vector
            materia_dba = String(lista_dba[i]["materia"]);
            grado_dba = String(lista_dba[i]["grado"]);
            // En esta parte se va a llenar el vector con los identificadores de muestra
            // Para saber cuántos muestras se tomaron y relacionar los datos
            // A partir de este identificador
            // Si aún no se ha añadido el código de muestra de la posición i
            // En el vector de muestra
            if (vector_materia_dba.includes(materia_dba) == false) {
                // Se añade el id de muestra
                vector_materia_dba.push(materia_dba);
                objeto_mayor_dba[materia_dba] = [];
            }
            if (vector_grado_dba.includes(grado_dba) == false) {
                // Se añade el id de muestra
                vector_grado_dba.push(grado_dba);
                objeto_grado_dba[grado_dba] = [];
            }
        }

        for (i = 0; i < lista_dba.length; i++) {
            xdba_mayor = String(lista_dba[i]["dba_mayor"]);
            if (objeto_mayor_dba[lista_dba[i].materia].includes(xdba_mayor) == false) {
                objeto_mayor_dba[lista_dba[i].materia].push(xdba_mayor);
            }
            if (objeto_grado_dba[lista_dba[i].grado].includes(xdba_mayor) == false) {
                objeto_grado_dba[lista_dba[i].grado].push(xdba_mayor);
            }
        }
    });

    var html_dba;

    function dba_f() {
        html_dba = ' ';
        $("#dba_div").html(html_dba);
        for (let index = 0; index < vector_materia_dba.length; index++) {
            if (vector_materia_dba[index] == area_selecta) {
                for (let j = 0; j < objeto_mayor_dba[area_selecta].length; j++) {
                    if (grado_selecto !== "") {
                        if (objeto_grado_dba[String(grado_selecto)].includes(objeto_mayor_dba[area_selecta][j])) {
                            html_dba += '<legend class="col-form-label col-sm-3 pt-0" align="justify">'
                            html_dba += objeto_mayor_dba[area_selecta][j];
                            html_dba += '</legend>';
                            html_dba += '<div class="col-sm-9">';
                            for (let q = 0; q < lista_dba.length; q++) {
                                if (lista_dba[q]["dba_mayor"] == objeto_mayor_dba[area_selecta][j]) {
                                    if (lista_dba[q]["grado"] == String(grado_selecto)) {
                                        if (lista_dba[q]["materia"] == area_selecta) {
                                            html_dba += '<div class="form-check"><input class="form-check-input" type="checkbox" id="gridCheck1">';
                                            html_dba += '<label class="form-check-label" for="gridCheck1" align="justify">';
                                            html_dba += lista_dba[q]["dba_menor"];
                                            html_dba += '</label></div>';
                                            $("#dba_div").html(html_dba);
                                        }
                                    }
                                }
                            }
                            html_dba += '</div>';
                            html_dba += '<hr align="center" noshade="noshade" size="2" width="90%" />';
                        }
                    }
                }
            }
        }
    }
});