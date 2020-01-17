function tooltipFormatter(tooltip) {
    // tooltip trae los puntos y sus valores y otros parámetros
    var index = tooltip.points[0].point.index,
        ret = '<small>' + Highcharts.dateFormat('%A, %b %e, %H:%M', tooltip.x) + '</small><br>';
    ret += '<table>';
    var v = this.v;
    // Add all series
    Highcharts.each(tooltip.points, function (point) {
        var series = point.series;
        ret += '<tr><td><span style="color:' + series.color + '">\u25CF</span> ' + series.name +
            ':  </td><td style="white-space:nowrap">' + Highcharts.pick(point.point.value, point.y)
            .toFixed(2) +
            series.userOptions.valueSuffix + '</td></tr>';
    });
    ret += '</table>';
    return ret;
}


//Función que convierte la fecha a un vector
function convertidor_fecha(dato, parametro) {
    vector = [];
    for (i = (dato.length - 1); i > -1; i--) {
        vector.push(dato[i][parametro]);
    }
    return vector;
}

//Función que convierte los datos obtenidos en vectores individuales
function convertidor(dato, parametro) {
    vector = [];
    for (i = (dato.length - 1); i > -1; i--) {
        entero = dato[i][parametro].split(",")[0];
        flotante = dato[i][parametro].split(",")[1];
        vector.push(parseFloat(entero + "." + flotante));
    }
    return vector;
}

// Función que convierte las unidades a un vector
function convertidor_u(dato, parametro) {
    vector = [];
    for (i = (dato.length - 1); i > -1; i--) {
        vector.push(dato[i][parametro]);
    }
    for (i = 0; i < vector.length; i++) {
        unidad = vector[i];
        if (unidad != "") {
            break;
        }
    }
    return unidad;
}

function graficar(dato, selecto) {
    //Variables
    fecha_unix = [];
    fecha = [];
    direccion = [];
    temperatura_agua = [];
    od = [];
    presion_atmosferica = [];
    radiacion = [];
    nivel = [];
    precipitacion = [];
    temperatura_aire = [];
    velocidad = [];
    conductividad = [];
    ph = [];
    humedad = [];
    salinidad = [];

    tiempo_direccion = [];
    tiempo_temperatura_agua = [];
    tiempo_od = [];
    tiempo_presion_atmosferica = [];
    tiempo_radiacion = [];
    tiempo_nivel = [];
    tiempo_precipitacion = [];
    tiempo_temperatura_aire = [];
    tiempo_velocidad = [];
    tiempo_conductividad = [];
    tiempo_ph = [];
    tiempo_humedad = [];
    tiempo_salinidad = [];
    dato = dato.results;
    //Vector de fecha
    fecha = convertidor_fecha(dato, "fecha_hora");
    for (i = 0; i < fecha.length; i++) {
        anio = fecha[i].slice(0, 4);
        mes = fecha[i].slice(5, 7);
        mes = mes - 1;
        dia = fecha[i].slice(8, 10);
        hora = fecha[i].slice(11, 13);
        minuto = fecha[i].slice(14, 16);
        fecha_unix.push(Date.UTC(anio, mes, dia, hora, minuto));
    }

    //Vectores de datos
    direccion = convertidor(dato, "dir_v");
    temperatura_agua = convertidor(dato, "tem_ag");
    od = convertidor(dato, "od");
    presion_atmosferica = convertidor(dato, "pr_at");
    radiacion = convertidor(dato, "rg");
    nivel = convertidor(dato, "nm");
    precipitacion = convertidor(dato, "pr");
    temperatura_aire = convertidor(dato, "t_ai");
    velocidad = convertidor(dato, "vel_v");
    conductividad = convertidor(dato, "con");
    ph = convertidor(dato, "ph");
    humedad = convertidor(dato, "hr");
    salinidad = convertidor(dato, "sal");

    // Correcciones de valores en 0 de temperatura
    for (i = 0; i < temperatura_aire.length; i++) {
        if (temperatura_aire[i] == 0) {
            temperatura_aire[i] = NaN;
        }
    }

    // Correcciones de valores en 0 de humedad
    for (i = 0; i < humedad.length; i++) {
        if (humedad[i] == 0) {
            humedad[i] = NaN;
        }
    }

    // Unidades de las variables
    u_direccion = convertidor_u(dato, "um_dir_v");
    u_temperatura_agua = convertidor_u(dato, "um_tem_ag");
    u_od = convertidor_u(dato, "um_od");
    u_presion_atmosferica = convertidor_u(dato, "um_pr_at");
    u_radiacion = convertidor_u(dato, "um_rg");
    u_nivel = convertidor_u(dato, "um_nm");
    u_precipitacion = convertidor_u(dato, "um_pr");
    u_temperatura_aire = convertidor_u(dato, "um_t_ai");
    u_velocidad = convertidor_u(dato, "um_vel_v");
    u_conductividad = convertidor_u(dato, "um_con");
    u_ph = convertidor_u(dato, "um_ph");
    u_humedad = convertidor_u(dato, "um_hr");
    u_salinidad = convertidor_u(dato, "um_sal");

    // Último dato de temperatura
    for (i = (temperatura_aire.length - 1); i > -1; i--) {
        temp_mostrar = temperatura_aire[i];
        if (isNaN(temp_mostrar) == false) {
            break;
        }
    }
    // Último dato de velocidad del viento
    for (i = (velocidad.length - 1); i > -1; i--) {
        velocidad_mostrar = velocidad[i];
        if (isNaN(velocidad_mostrar) == false) {
            break;
        }
    }

    // Datos instantánenos a mostrar
    document.getElementById("nom_estacion").innerHTML = dato[0].des_estacion;
    document.getElementById("time").innerHTML = "<b>Fecha del último dato ingresado: </b>" + dato[0].fecha_hora;
    document.getElementById("temp").innerHTML = temp_mostrar + " " + u_temperatura_aire;
    document.getElementById("wind").innerHTML = "<b>Velocidad del viento: </b>" + velocidad_mostrar + " " +
        u_velocidad;


    // Combinación de velocidad y dirección del viento en un solo vector
    data_vientos = [];
    for (i = 0; i < velocidad.length; i++) {
        data_vientos.push([velocidad[i], direccion[i]])
    }

    // Vectores de datos y tiempo
    for (i = 0; i < fecha_unix.length; i++) {
        tiempo_temperatura_aire.push([fecha_unix[i], temperatura_aire[i]]);
        tiempo_humedad.push([fecha_unix[i], humedad[i]]);
        tiempo_direccion.push([fecha_unix[i], direccion[i]]);
        tiempo_temperatura_agua.push([fecha_unix[i], temperatura_agua[i]]);
        tiempo_od.push([fecha_unix[i], od[i]]);
        tiempo_presion_atmosferica.push([fecha_unix[i], presion_atmosferica[i]]);
        tiempo_radiacion.push([fecha_unix[i], radiacion[i]]);
        tiempo_nivel.push([fecha_unix[i], nivel[i]]);
        tiempo_precipitacion.push([fecha_unix[i], precipitacion[i]]);
        tiempo_velocidad.push([fecha_unix[i], velocidad[i]]);
        tiempo_conductividad.push([fecha_unix[i], conductividad[i]]);
        tiempo_ph.push([fecha_unix[i], ph[i]]);
        tiempo_salinidad.push([fecha_unix[i], salinidad[i]]);
    }

    var seleccion = {
        tai_h: [tiempo_temperatura_aire, tiempo_humedad, null, "Temperatura del aire", "Humedad", null, u_temperatura_aire, u_humedad, null],
        v_p: [tiempo_velocidad, tiempo_presion_atmosferica, null, "Velocidad del viento", "Presión atmosférica", null, u_velocidad, u_presion_atmosferica, null],
        r_l: [tiempo_radiacion, tiempo_precipitacion, null, "Radiación", "Precipitación", null, u_radiacion, u_precipitacion, null],
        s_tag: [tiempo_salinidad, tiempo_temperatura_agua, null, "Salinidad", "Temperatura del agua", null, u_salinidad, u_temperatura_agua, null],
        od_ph: [tiempo_od, tiempo_ph, null, "Oxígeno disuelto", "pH", null, u_od, u_ph, null],
        vv_od: [tiempo_velocidad, tiempo_od, tiempo_ph, "Velocidad del viento", "Oxígeno disuelto", "pH", u_velocidad, u_od, u_ph],
        tai_tag_p: [tiempo_temperatura_aire, tiempo_temperatura_agua, tiempo_presion_atmosferica, "Temperatura del aire", "Temperatura del agua", "Presión atmosférica", u_temperatura_aire, u_temperatura_agua, u_presion_atmosferica],
    }

    if (selecto == "viento") {
        var primera_fecha = new Date(fecha[0]);
        console.log(fecha);
        Highcharts.chart('container', {
            chart: {
                zoomType: 'x',
                alignTicks: false,
            },
            title: {
                text: 'Histórico'
            },

            xAxis: [{ //Axis principal
                    type: 'datetime',
                    categories: fecha_unix,
                    minorTickInterval: 'auto',
                    gridLineWidth: 1,
                    offset: 40,
                    gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
                    labels: {
                        format: '{value:%H:%M}'
                    },
                    minTickInterval: 20
                },
                { //Axis suplementario (Arriba)
                    linkedTo: 0,
                    type: 'datetime',
                    categories: fecha_unix,
                    labels: {
                        format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
                        align: 'left',
                        x: 3,
                        y: -5
                    },
                    opposite: true,
                    tickLength: 20,
                    gridLineWidth: 1,
                    tickPixelInterval: 24 * 3600 * 1000,
                    minTickInterval: 24 * 6
                }
            ],
            yAxis: {
                title: {
                    text: 'Velocidad del viento',
                }
            },

            plotOptions: {
                series: {
                    cursor: 'zoom-in',
                    // pointStart: Date.UTC(primera_fecha.getFullYear(), primera_fecha.getMonth(), primera_fecha.getDate(), primera_fecha.getHours(), primera_fecha.getMinutes()),
                    // pointInterval: 10 * 60 * 1000
                }
            },

            series: [{
                type: 'windbarb',
                data: data_vientos,
                name: 'Velocidad del viento',
                color: Highcharts.getOptions().colors[1],
                showInLegend: false,
                tooltip: {
                    valueSuffix: u_velocidad

                },
                dataGrouping: {
                    enabled: true,
                    groupPixelWidth: 24, // vector length plus some padding
                    approximation: function (values, directions, c) {
                        var vectorX = 0,
                            vectorY = 0,
                            i,
                            len = values.length;

                        for (i = 0; i < len; i++) {
                            vectorX += values[i] * Math.cos(directions[i] * Highcharts.deg2rad);
                            vectorY += values[i] * Math.sin(directions[i] * Highcharts.deg2rad);
                        }

                        return [
                            Math.round(10 * Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2)) / len) / 10,
                            Math.atan2(vectorY, vectorX) / Highcharts.deg2rad
                        ]
                    },
                }
            }, {
                type: 'area',
                keys: ['y', 'rotation'], // rotation is not used here
                data: data_vientos,
                valueSuffix: u_velocidad,
                color: Highcharts.getOptions().colors[0],
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [
                            1,
                            Highcharts.color(Highcharts.getOptions().colors[0])
                            .setOpacity(0.25).get()
                        ]
                    ]
                },
                name: 'Velocidad del viento',
                tooltip: {
                    shared: true,
                    useHTML: true,
                    valueSuffix: u_velocidad,
                    formatter: function () {
                        return tooltipFormatter(this);
                    }
                },
            }]

        });

    } else {
        chart = new Highcharts.StockChart({
            chart: {
                renderTo: 'container',
                alignTicks: false,
                zoomType: 'x',
                plotBorderWidth: 1,
            },

            legend: {
                enabled: false
            },

            rangeSelector: {
                // Alinear la barra de selección de fecha
                //   x: -80,
                verticalAlign: 'top',
                buttonPosition: {
                    align: 'right',
                    x: -35
                },
                inputPosition: {
                    align: 'left',
                    //       x: 80
                },

                // Configruación de botones de selección de fecha
                allButtonsEnabled: true,
                buttons: [{
                        type: 'day',
                        count: 1,
                        text: '1 día'
                    },
                    {
                        type: 'day',
                        count: 3,
                        text: '3 días'
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: '1 semana'
                    },
                    {
                        type: 'all',
                        text: 'Todos'
                    }
                ],
                buttonTheme: {
                    width: 60
                },
                selected: 3
            },

            title: {
                text: 'Historico'
            },

            yAxis: [{
                title: {
                    text: seleccion[selecto][4],
                },

            }, {
                title: {
                    text: seleccion[selecto][3]
                },
                opposite: false,
            }, {
                title: {
                    text: seleccion[selecto][5]
                },
                opposite: true,
            }],

            xAxis: { //Axis principal
                minorTickInterval: 'auto',
                gridLineWidth: 1,
                gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#F0F0F0',
            },

            navigator: {
                enabled: false
            },
            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    return tooltipFormatter(this);
                }
            },

            series: [{
                    type: 'spline',
                    name: seleccion[selecto][3],
                    data: seleccion[selecto][0],
                    yAxis: 1,
                    connectNulls: true,
                    valueSuffix: seleccion[selecto][6],
                    color: '#3ad0ff'
                }, {
                    type: 'spline',
                    name: seleccion[selecto][4],
                    data: seleccion[selecto][1],
                    yAxis: 0,
                    connectNulls: true,
                    valueSuffix: seleccion[selecto][7],
                    color: '#ff3e1f'
                },
                {
                    type: 'spline',
                    name: seleccion[selecto][5],
                    data: seleccion[selecto][2],
                    yAxis: 2,
                    connectNulls: true,
                    valueSuffix: seleccion[selecto][8],
                    color: '#32ff00'
                },
            ]
        });
    }
}

function myFunction(variables) {
    console.log(variables.id);
    $.get('/api/estaciones/?id_estacion=' + document.getElementById("id_estacion").innerHTML, function (result) {
        graficar(result, variables.id)
    });
}
var variables = document.getElementById('tai_h');
$(document).ready(function () {
    $.get('/api/estaciones/?id_estacion=' + document.getElementById("id_estacion").innerHTML, function (result) {
        graficar(result, variables.id)
    });
});

$(document).ready(function () {
    $.get('/api/fecha_estaciones/?id_estacion=' + document.getElementById("id_estacion").innerHTML, function (result) {
        console.log(result.results[0]);
        fecha_inicial = result.results[0]["fecha_hora"];
        document.getElementById("time_inicio").innerHTML = "<b>Serie de datos registrados desde:</b> " + fecha_inicial;
    });
});