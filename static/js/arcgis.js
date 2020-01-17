//var homeUrl = 'http://192.168.3.173:8080/thredds/';
var homeUrl = 'http://triton.invemar.org.co/thredds/';
var variables = [{
        // Almacena las imágenes que van a ser graficadas
        wms: null,
        // Almacena el estado de visibilidad de la capa, si se muestra o no
        v: true,
        // Dirección de las URL donde se ubican los archivos .nc que son consumidos por el WMS
        l: [],
        // id del elemento de checkeo
        b: 'bSLAh',
        // Nombre de la variable de la capa
        variable: 'SLA-H',
        // Nombre usado para visualizar la capa
        nombre: 'Nivel del mar',
        sp: "spSLAh",
        legendiv: "lSLAh",
        // Valor máximo
        max: '0.5',
        // Valor mínimo
        min: '-0.5',
        // Valor central
        center: '0',
        // Unidades de la variable
        unidades: 'm',
        // Parámetros para la petición
        p: {
            layers: 'sla',
            format: 'image/png',
            COLORSCALERANGE: '-0.5,0.5',
            TRANSPARENT: true,
            STYLES: 'boxfill/redblue',
            NUMCOLORBANDS: 50,
            palete: "redblue"
        },
        // id de la capa
        l_id: null,
        // Nombre de la capa
        name: "sla",
        // Texto que se visibiliza
        texto: "Anomal&iacute;a del nivel del mar (m) del producto combinado las mediciones satelitales de altimetr&iacute;a de todas misiones actualmente en orbita (Jason-3, Sentinel-3A, HY-2A, Saral/AltiKa, Cryosat-2, Jason-2, Jason-1, T/P, ENVISAT, GFO, ERS1/2), calculada respecto al promedio del 20 a&ntilde;os del nivel del mar."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bSLAuv',
        variable: 'SLA-UV',
        nombre: 'Corrientes',
        sp: "spSLAuv",
        legendiv: "lSLAuv",
        max: 1,
        min: 0,
        center: 0.5,
        unidades: 'm/s',
        p: {
            layers: 'surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid',
            COLORSCALERANGE: '0,1',
            STYLES: 'linevec/ferret',
            NUMCOLORBANDS: 50,
            format: 'image/png',
            TRANSPARENT: true,
            palete: "ferret"
        },
        l_id: null,
        name: "ugos",
        texto: "Campo de corrientes geostr&oacute;ficas derivadas (m) del producto combinado las mediciones satelitales de altimetr&iacute;a de todas misiones actualmente en orbita (Jason-3, Sentinel-3A, HY-2A, Saral/AltiKa, Cryosat-2, Jason-2, Jason-1, T/P, ENVISAT, GFO, ERS1/2)"
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bSLA',
        variable: 'SLA-UV',
        nombre: 'Corrientes',
        sp: "spSLA",
        legendiv: "lSLA",
        max: 1,
        min: 0,
        center: 0.5,
        unidades: 'm/s',
        p: {
            layers: 'surface_geostrophic_sea_water_velocity_assuming_sea_level_for_geoid',
            COLORSCALERANGE: '0,1',
            STYLES: 'vector/ferret',
            NUMCOLORBANDS: 50,
            format: 'image/png',
            TRANSPARENT: true,
            palete: "ferret"
        },
        l_id: null,
        name: "ugos",
        texto: "Campo de corrientes geostr&oacute;ficas derivadas (m) del producto combinado las mediciones satelitales de altimetr&iacute;a de todas misiones actualmente en orbita (Jason-3, Sentinel-3A, HY-2A, Saral/AltiKa, Cryosat-2, Jason-2, Jason-1, T/P, ENVISAT, GFO, ERS1/2)"
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bCHL',
        variable: 'CHL_I',
        nombre: 'Clorofila',
        sp: "spCHL",
        legendiv: "lCHL",
        max: 10,
        min: 0.01,
        center: '.',
        unidades: 'mg m-3',
        p: {
            layers: 'chl',
            format: 'image/png',
            TRANSPARENT: true,
            COLORSCALERANGE: '0.01,10',
            LOGSCALE: true,
            NUMCOLORBANDS: '50',
            palete: "rainbow"
        },
        l_id: null,
        name: "chl",
        texto: "Promedio-compuesto de los &uacute;ltimos tres d&iacute;as de registros satelitales de la Concentraci&oacute;n de Clorofila del sensor Modis-Aqua. Resoluci&oacute;n espacial 1km."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bSST',
        variable: 'SST_I',
        nombre: 'Temperatura superficial',
        sp: "spSST",
        legendiv: "lSST",
        max: 31,
        min: 23,
        center: 27,
        unidades: '°c',
        p: {
            layers: 'sst',
            format: 'image/png',
            TRANSPARENT: true,
            COLORSCALERANGE: '23,31',
            NUMCOLORBANDS: '50',
            palete: "rainbow"
        },
        l_id: null,
        name: "sst",
        texto: "Promedio-compuesto de los &uacute;ltimos tres d&iacute;as de registros satelitales de la Temperatura Superficial del Mar del sensor Modis-Aqua. Resoluci&oacute;n espacial 1km."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWIND',
        variable: 'WIND',
        nombre: 'Vientos',
        sp: "spWIND",
        legendiv: "lWIND",
        max: 15,
        min: 0,
        center: 7.5,
        unidades: 'm/s',
        p: {
            layers: 'wind',
            STYLES: 'barb/occam_pastel-30',
            format: 'image/png',
            TRANSPARENT: true,
            NUMCOLORBANDS: '50',
            COLORSCALERANGE: '0,15',
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "uwnd",
        texto: "Campo de vientos a 10 metros sobre el nivel del mar, proveniente del producto combinado de mas de 6 mediciones satelitales (Microwave Imager-SSMI, Tropical Rainfall Measuring Mission Microwave Imager-TMI, Advanced Microwave Scanning Radiometer-AMSR-E, mas mediciones de dispers&oacute;metros satelitales activos de largo plazo), con una resoluci&oacute;n espacial remuestreada a 1/10&deg;."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWINDv',
        variable: 'WIND',
        nombre: 'Vientos',
        sp: "spWINDv",
        legendiv: "lWINDv",
        max: 15,
        min: 0,
        center: 7.5,
        unidades: 'm/s',
        p: {
            layers: 'wind',
            STYLES: 'vector/occam_pastel-30',
            format: 'image/png',
            TRANSPARENT: true,
            NUMCOLORBANDS: '50',
            COLORSCALERANGE: '0,15',
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "uwnd",
        texto: "Campo de vientos a 10 metros sobre el nivel del mar, proveniente del producto combinado de mas de 6 mediciones satelitales (Microwave Imager-SSMI, Tropical Rainfall Measuring Mission Microwave Imager-TMI, Advanced Microwave Scanning Radiometer-AMSR-E, mas mediciones de dispers&oacute;metros satelitales activos de largo plazo), con una resoluci&oacute;n espacial remuestreada a 1/10&deg;."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWAVES',
        variable: 'WAVES',
        nombre: 'Olas',
        sp: "spWAVES",
        legendiv: "lWAVES",
        max: 5,
        min: 0,
        center: 2.5,
        unidades: 'm',
        p: {
            layers: 'dir',
            COLORSCALERANGE: '0,5',
            STYLES: 'vector/occam_pastel-30',
            NUMCOLORBANDS: '50',
            format: 'image/png',
            TRANSPARENT: true,
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "vwnd",
        texto: "Predicciones de la altura, direcci&oacute;n y periodo de ola, generadas cada 6 horas (0, 6, 12 y 18H) por el modelo WAVEWATCH III y remuestreadas a una resoluci&oacute;n espacial de 1/10&deg;."
    },
    {
        wms: null,
        v: false,
        l: [],
        b: 'bWAVESv',
        variable: 'WAVES',
        nombre: 'Olas',
        sp: "spWAVESv",
        legendiv: "lWAVESv",
        max: 5,
        min: 0,
        center: 2.5,
        unidades: 'm',
        p: {
            layers: 'dir',
            COLORSCALERANGE: '0,5',
            STYLES: 'linevec/occam_pastel-30',
            NUMCOLORBANDS: '50',
            format: 'image/png',
            TRANSPARENT: true,
            palete: "occam_pastel-30"
        },
        l_id: null,
        name: "vwnd",
        texto: "Predicciones de la altura, direcci&oacute;n y periodo de ola, generadas cada 6 horas (0, 6, 12 y 18H) por el modelo WAVEWATCH III y remuestreadas a una resoluci&oacute;n espacial de 1/10&deg;."
    },
];

// Cuando el documento esté listo
$(document).ready(function () {
    $('#table').bootstrapTable();
    $('#tableTrace').bootstrapTable();
    $("#slider").show();
    $("#picker").show();
    $("#tracer").show();
    $("#slider_graph").show();
    // Control de la barra lateral derecha
    $("#slider").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
    $("#picker").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
    $("#tracer").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
    $("#slider_graph").slideReveal({
        position: "right",
        width: 317,
        speed: 400
    });
});

// Variables de control de vista de los paneles laterales derechos
// Cuando están en falso se encuentran ocultos
var tlegend = false;
var tpicker = false;
var trace = false;
var t_graph = false;

// Inicialización de las variables
var punto = {};
var trazado = [];
var puntos = [];

// var trazadoLine = L.polyline(trazado, {
//     color: 'blue'
// });
// map.on('click', getFeatureInfo);
// var markerIcon = L.icon({
//     iconUrl: 'static/images/marker.png',
//     iconSize: [20, 20]
// });

// Objeto que almacena las variables
var objeto_variable = new Object();

// Variables de ctd
var id_muestreo_ctd;
var id_estacion_ctd;
var id_proyecto_ctd;
var id_metodologia_ctd;
var id_tematica_ctd;
var fecha_ctd;
var notas_ctd;
var latitud_ctd;
var longitud_ctd;
var profundidad_max_ctd;
var prefijo_ctd;
var codigo_ctd;
var lugar_ctd;
var titulo_ctd;
var respuesta_ctd;

// Cuando se da click en el botón de información
$("#trigger").on("click", function () {
    // Si la variable de control es verdadero
    if (tlegend) {
        // Oculta el panel
        $("#slider").slideReveal("hide");
        // Coloca la variable en falso
        tlegend = false;
        // Coloca el control de visualización de las CTD en none y borra la gráfica
        document.getElementById("select_grafica").style.display = "none";
        document.getElementById("descarga_boton").style.display = "none";
        document.getElementById("ctd_grafica").innerHTML = "";
    }
    // Si la variable de control es falsa
    else {
        // Oculta los otros páneles
        $("#picker").slideReveal("hide");
        $("#tracer").slideReveal("hide");
        $("#slider_graph").slideReveal("hide");
        // Deja ver el panel seleccionado
        $("#slider").slideReveal("show");
        // Coloca la variable de control en verdadero
        tlegend = true;
        // El resto de variables en falso
        tpicker = false;
        trace = false;
        t_graph = false;
        // Elimina el punto y borra todo en el punto de análisis puntual
        map.removeLayer(punto);
        $('#table').bootstrapTable('removeAll');
        $('#coor').html('');
    }
});

// Cuando se da click en el botón de la gráfica
$("#graph").on("click", function () {
    // Si la variable de control es verdadero
    if (t_graph) {
        // Oculta el panel
        $("#slider_graph").slideReveal("hide");
        // Coloca la variable en falso
        t_graph = false;
        // Coloca el control de visualización de las CTD en none y borra la gráfica
        document.getElementById("select_grafica").style.display = "none";
        document.getElementById("descarga_boton").style.display = "none";
        document.getElementById("ctd_grafica").innerHTML = "";
    }
    // Si la variable de control es falsa 
    else {
        // Oculta los otros páneles
        $("#picker").slideReveal("hide");
        $("#tracer").slideReveal("hide");
        $("#slider").slideReveal("hide");
        // Deja ver el panel seleccionado
        $("#slider_graph").slideReveal("show");
        // El resto de variables en falso
        tlegend = false;
        tpicker = false;
        trace = false;
        // Coloca la variable de control en verdadero
        t_graph = true;
        // Elimina el punto y borra todo en el punto de análisis puntual
        map.removeLayer(punto);
        $('#table').bootstrapTable('removeAll');
        $('#coor').html('');
    }
});


/******************************PROCESO DE ARCGIS*******************************/

require([
    'esri/map',
    'esri/layers/WMSLayer',
    'esri/layers/WMSLayerInfo',
    'esri/geometry/Extent',
    'esri/layers/FeatureLayer',
    "esri/InfoTemplate",
    "dojo/dom",
    "dojo/parser",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/symbols/CartographicLineSymbol",
    "esri/Color",
    "esri/toolbars/draw",
    "dojo/on",
    "esri/graphic",
    "esri/tasks/GeometryService",
    "esri/geometry/webMercatorUtils",
    "esri/geometry/Point",
    "esri/SpatialReference",
    "dojo/_base/array",
    "esri/geometry/screenUtils",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/request",
    "esri/dijit/PopupTemplate",
    "dojo/dom-construct",
], function (
    Map,
    WMSLayer,
    WMSLayerInfo,
    Extent,
    FeatureLayer,
    InfoTemplate,
    dom,
    parser,
    SimpleMarkerSymbol,
    CartographicLineSymbol,
    Color,
    Draw,
    on,
    Graphic,
    GeometryService,
    webMercatorUtils,
    Point,
    SpatialReference,
    array,
    screenUtils,
    Query,
    QueryTask,
    esriRequest,
    PopupTemplate,
    domConstruct,
) {

    // No sé
    parser.parse();
    esriConfig.defaults.geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
    esriConfig.defaults.io.proxyUrl = "/proxy/";

    // Se definen los criterios del mapa
    map = new Map(
        // id del div donde se va a mostar el mapa
        'map', {
            // Tipo de mapa que se va a mostrar
            basemap: 'gray-vector',
            // Centro del mapa
            center: [-75, 16],
            // Cantidad de zoom que se va a realizar
            zoom: 5,
            // Se desactiva el slider
            slider: false
        });

    // Añandiendo una cpa de tierra para evitar la superposición de las variables en la tierra
    var url = "http://gis.invemar.org.co/arcgis/rest/services/Conectividad/ConectividadBase/MapServer/0/";
    // Se guarda en la variable tierra la Feature Layer de la tierra de los paises
    var tierra = new FeatureLayer(url);
    // Se añade al mapa la capa de tierra
    map.addLayer(tierra);


    /******************************PROCESO PARA AÑADIR LAS CAPAS AL MAPA*******************************/

    // Recorre todas las posiciones del objeto variables
    for (var i = 0; i < variables.length; i++) {
        // LLama a la función iniciar control para cada vector de variables
        iniciarControl(variables[i]);
    }

    // Función que se encarga de controlar el mostrar o eliminar las capas
    // de las variables cada vez que se active o desactive un botón
    function iniciarControl(capa) {
        // Inicialmente llama a la función llenar lista para rellenar los campos
        // de la capa, como el link de consulta
        llenarlista(capa);
        // Si el elemento con id "#c capa.b" (cbSLAh) cambia
        $("#c" + capa.b).on("change", function () {
            // Si NO está checkeado
            if (!$(this).is(":checked")) {
                // Obtiene la capa que tiene el id (capa.l_id)
                let idx = map.getLayer(capa.l_id)
                // Elimina la capa obtenida anteriormente
                map.removeLayer(idx);
                // Asigna null el valor de capa.l_id
                capa.l_id = null;
                // Cambia el estado de visibilidad de la capa a falso
                capa.v = false;
                // Oculta el elemento "#capa.legendiv"
                $("#" + capa.legendiv).hide();
            }
            // En caso de estar chequeado el elemento
            else {
                // Llama a la función graficar
                wmsLayer = graficar(capa);
                // Se añade al mapa la capa chekeada
                map.addLayer(wmsLayer);
                // Obtiene los ids de todas las capas presentes en el mapa
                let idx = map.layerIds;
                // Le asigna a capa.l_id el nombre del id de la última capa añadida
                capa.l_id = idx[idx.length - 1];
                // Cambia el estado de visibilidad a true
                capa.v = true;
                // Deja visible el elemento "#capa.legendiv"
                $("#" + capa.legendiv).show();
            }
        });
    };

    // Llena la lista de URLS correspondientes a la ubicación del servicio WMS
    function llenarlista(capa) {
        // Obtiene los datos de la siguiente URL
        $.get(homeUrl + "catalog/" + capa.variable + "/latest.xml", function (data) {
            // Trata de obtener los elementos que tengan el nombre "Latest capa.variable"
            // Por ejemplo "SLA-H"
            // Selecciona sólo el último dato y de él obtiene el atributo urlPath
            // Esta es la ubicación donde se encuentran las imágenes WMS
            // Guardas las URL en capa.l
            try {
                capa.l.push(data.getElementsByName("Latest " + capa.variable)[0].attributes.urlPath
                    .nodeValue);
            } catch (err) {
                // En caso de que se presente un error, obtiene los elementos con nombre "dataset"
                // Y luego se hace lo mismo de arriba
                capa.l.push(data.getElementsByTagName("dataset")[0].attributes.urlPath.nodeValue);
            }
            // Guarda la dirección dónde se consultarán los datos de las capas
            capa.wms = homeUrl + 'wms/' + capa.l[0];
            // Al momento de llenar la lista de variables, Si es verdadero el valor de "capa.v" (La variable que controla la visibilidad)
            if (capa.v) {
                // Cambia el botón de esa capa a ON
                $('#c' + capa.b).bootstrapToggle('on');
                // Pone visible esa capa
                $("#" + capa.legendiv).show();
            }

            // Obtiene los datos de la siguiente URL
            $.get(homeUrl + "catalog/" + capa.variable + "/catalog.xml", function (data2) {
                // Crea la variable historico, donde se van a almacenar la lista de todos los datos descargados 
                var historico = [];
                // Trata de obtener los elementos que tienen por nombre (capa.variable)
                try {
                    historico = data2.getElementsByName(capa.variable)[0].children;
                    // Recorre todas las posiciones de histórico desde la posición 5
                    for (let i = 5; i < historico.length; i++) {
                        // Guarda en capa.l la dirección donde se va a consultar cada capa histórica
                        capa.l.push(historico[i].attributes.urlPath.nodeValue);
                    }
                } catch (err) {
                    historico = data2.getElementsByTagName("dataset")
                    for (let i = 3; i < historico.length; i++) {
                        capa.l.push(historico[i].attributes.urlPath.nodeValue);
                    }
                }
                // Llama a la función iniciarHistorico
                iniciarHistorico(capa);
            });
        });
    };

    // Función que crea en el panel lateral derecho una tarjeta con el rango de las variables y el histórico
    // Para que se  pueda elegir cuál día graficar
    function iniciarHistorico(capa) {
        // Se crea el panel del html donde se verá la información de las capas
        var html = '<div class="panel panel-info" style="margin-top:1em"><div class="panel-heading">';
        html += capa.nombre;
        html += '</div><div class="panel-body">';
        html += '<p>' + capa.texto + '</p>'
        html += '<div class="img-scale" style="height: 10px;"><img class="rotate90" src="';
        // Paleta de colores y rangos
        html += homeUrl + 'wms/' + capa.l[0] + '?REQUEST=GetLegendGraphic&COLORBARONLY=true&WIDTH=15&HEIGHT=280&PALETTE=' + capa.p.palete + '&NUMCOLORBANDS=' + capa.p.NUMCOLORBANDS;
        html += '" alt=""></div><ul class="nav nav-pills ter"><li class="text-left">';
        html += capa.min;
        html += '</li><li class="text-center">';
        html += capa.center;
        html += '</li><li class="text-right">';
        html += capa.max;
        html += '</li></ul><div class="input-group"><div class="input-group-addon">Historico</div><select class="form-control" name="historial" id="';
        html += capa.sp;
        html += '">';
        // Recorre todas las posiciones de los históricos 
        for (var i = 0; i < capa.l.length; i++) {
            // Agrega opciones de las listas desplegables con cada uno de los links del histórico
            html += "<option>" + capa.l[i] + "</option>";
        }
        html += '</select></div></div></div></div>';
        // Al elemento de id (capa.legendiv) se agrega el html anterior
        $("#" + capa.legendiv).html(html);
        // Cuando el elemento de la lista cambia
        $("#" + capa.legendiv).on('change', "#" + capa.sp, function () {
            // Obtiene la capa que tiene el id (capa.l_id)
            let idx = map.getLayer(capa.l_id)
            // Elimina la capa obtenida anteriormente
            map.removeLayer(idx);
            // Asigna null el valor de capa.l_id
            capa.l_id = null;
            // Añade a capa.wms el link donde consultará los datos del histórico del día seleccionado
            capa.wms = homeUrl + 'wms/' + $(this).val() + '?';
            // Llama a la función graficar para pintar en el mapa la capa del día seleccionado
            wmsLayer = graficar(capa);
            // Añade la capa
            map.addLayer(wmsLayer);
            // Obtiene los ids de todas las capas presentes en el mapa
            idx = map.layerIds;
            // Le asigna a capa.l_id el nombre del id de la última capa añadida
            capa.l_id = idx[idx.length - 1];
        });
    }

    // Función encargada de configurar la capa WMS a mostrar
    function graficar(capa) {
        // Crea la variable WMSLayer
        var wmsLayer = new WMSLayer(
            // Usa el link proveniente de capa.wms
            capa.wms, {
                resourceInfo: {
                    // Se define la extensión donde se mostrará
                    extent: new Extent(-124.71430969199997, -33.741115570999966, 179.77593994100005,
                        53.01194000300006, {
                            wkid: 4269
                        }),
                    // Se definen los parámetros usados para la consulta
                    customLayerParameters: capa.p,
                    getFeatureInfoURL: capa.wms,
                    layerInfos: new WMSLayerInfo({ //No sé esto por qué toca ponerlo
                    })
                },
                visibleLayers: ['Todas'] //No sé esto por qué toca ponerlo
            }
        );
        return wmsLayer;
    }


    /******************************PROCESO PARA AÑADIR LAS ESTACIONES*******************************/

    // Se guarda en la variable url el link para consumir el servicio de las estaciones meteoceanográficas
    var url = "http://gis.invemar.org.co/arcgis/rest/services/CLIMARES/Estaciones_Meteoceanograficas/MapServer/0";
    // Se añade el template que se mostrará en el popup
    var template = new InfoTemplate("Estación", "${Name} <br> <a href='/estacion/${id}' target='_blank'> Ver más </a>");
    // Se crea un nuevo feature layer donde se guardarán las estaciones meteoceanográficas
    fl_estaciones = new FeatureLayer(url, {
        id: "Estaciones",
        infoTemplate: template,
        outFields: ["*"]
    });
    // Cuando el botón xbEstaciones cambia
    $("#xbEstaciones").on("change", function () {
        // Si NO está seleccionado
        if (!$(this).is(":checked")) {
            // Elimina las estaciones del mapa
            map.removeLayer(fl_estaciones);
        }
        // En caso de estar chequeado el elemento
        else {
            // Añade las estaciones al mapa
            map.addLayer(fl_estaciones);
        }
    });


    /******************************PROCESO PARA AÑADIR LAS CTD*******************************/

    // Variable que almacena las características de la CTD
    var CTD_featureCollection = {
        "layerDefinition": null,
        "featureSet": {
            "features": [],
            "geometryType": "esriGeometryPoint"
        }
    };
    // Luego se definen las caracteristicas de la CTD
    CTD_featureCollection.layerDefinition = {
        // Geometría de tipo punto
        "geometryType": "esriGeometryPoint",
        "objectIdField": "ObjectID",
        // Tipo de forma del punto
        "drawingInfo": {
            // "renderer": {
            //     "type": "simple",
            //     "symbol": {
            //         "type": "esriPMS",
            //         "url": "{% static 'images/flickr.png' %}",
            //         "contentType": "image/png",
            //         "width": 15,
            //         "height": 15
            //     }
            // }
        },
    };
    // Variable de control del popup (Lo que sale cuando le das click en la estación)
    var CTD_popupTemplate = new PopupTemplate({
        // Se le asigna a title la variable titulo que se describe más abajo
        title: "{titulo}",
        // Se le asigna a description la variable descripcion
        description: "{descripcion}"
    });
    // Se crea un nuevo feature layer donde se guardarán las CTD
    CTD_Layer = new FeatureLayer(CTD_featureCollection, {
        // Se declara que se mostrará en el infoTemplate al dar click
        infoTemplate: CTD_popupTemplate
    });
    // Variable que controla cuántas veces ha sido llamado anteriormente el botón de CTD
    var contar = 0;
    // Si el botón de id xbCTD ha sido seleccionado y cambia
    $("#xbCTD").on("change", function () {
        // Si NO está checkeado
        if (!$(this).is(":checked")) {
            // Elimina la feature layer de la CTD
            map.removeLayer(CTD_Layer);
            // Si checkea el botón
        } else {
            // Se realiza un llamado a la api
            var ctd_request = esriRequest({
                url: "/api/ctd_lances/",
                callbackParamName: "jsoncallback"
            });
            // Si el contador está en 0, es decir, que nunca había sido llamado antes
            if (contar == 0) {
                // Se llama a la función que configura los resultados de la CTD
                ctd_request.then(ctd_conf);
            }
            // Añade las CTD al mapa
            map.addLayers([CTD_Layer]);

        }
    });
    // Función que configura la feature layer de la CTD
    function ctd_conf(response) {
        // Se coloca la variable contar en 1 para asegurar de que ya ingresó y no volver a confirgurar la ctd
        contar = 1;
        var ctd_features = [];
        respuesta_ctd = response.results;
        // Recorre los elementos y los agrega a la feature layer
        array.forEach(response.results, function (item) {
            var attr = {};
            // En el título se agrega el título que viene de la api rest
            attr["titulo"] = "<p id='id_titulo_ctd'>" + item.titulo + "</p>";
            // Se configura lo que se mostrará en la descripción a partir de lo traido del api rest para cada CTD
            attr["descripcion"] = "<b>Fecha: </b>" + item.fecha + "<br>" + "<b>Código de la estación: </b>" + item.prefijo_cdg_est_loc + item.codigo_estacion_loc +
                "<br>" + "<b>id de la estación: </b>" + item.id_estacion + "<div id='id_ctd_gra' style='display: none;'>" + item.id_estacion + "</div>" +
                "<br>" + "<b>Lugar: </b>" + item.lugar + "<br>" + "<b>Profundidad máxima del lance: </b>" +
                item.prof_max_loc + "<br>"
            //  + '<button id="boton_grafica">Graficar</button>'
            // Crear el punto a partir de la longitud y la latitud extraida del api rest
            var punto_ctd = new Point(item.longitudinicio_loc, item.latitudinicio_loc);
            // Grafica los puntos
            var graphic_ctd = new Graphic(punto_ctd);
            // Le coloca los atributos definidos anteriormente
            graphic_ctd.setAttributes(attr);
            // Añade la gráfica a la feature layer
            ctd_features.push(graphic_ctd);
            // Aplica lo realizado anteriormente
            CTD_Layer.applyEdits(ctd_features, null, null);
        });
    }

    var datos_CTD;
    map.on("click", function () {
        popup_visible = document.getElementsByClassName("esriPopupVisible");
        if (popup_visible.length > 0) {
            id_estacion_ctd = document.getElementById("id_ctd_gra").textContent;
            for (let index = 0; index < respuesta_ctd.length; index++) {
                if (id_estacion_ctd == String(respuesta_ctd[index].id_estacion)) {
                    id_muestreo_ctd = respuesta_ctd[index].id_muestreotex;
                    id_estacion_ctd = respuesta_ctd[index].id_estacion;
                    id_proyecto_ctd = respuesta_ctd[index].id_proyecto;
                    id_metodologia_ctd = respuesta_ctd[index].id_metodologia;
                    id_tematica_ctd = respuesta_ctd[index].id_tematicas;
                    fecha_ctd = respuesta_ctd[index].fecha;
                    notas_ctd = respuesta_ctd[index].notas;
                    latitud_ctd = respuesta_ctd[index].latitudinicio_loc;
                    longitud_ctd = respuesta_ctd[index].longitudinicio_loc;
                    profundidad_max_ctd = respuesta_ctd[index].prof_max_loc;
                    prefijo_ctd = respuesta_ctd[index].prefijo_cdg_est_loc;
                    codigo_ctd = respuesta_ctd[index].codigo_estacion_loc;
                    lugar_ctd = respuesta_ctd[index].lugar;
                    titulo_ctd = respuesta_ctd[index].titulo;
                }
            }
            $("#boton_grafica").on("click", function popup_v() {
                document.getElementById("ctd_grafica").innerHTML = "";
                $("#picker").slideReveal("hide");
                $("#tracer").slideReveal("hide");
                $("#slider").slideReveal("hide");
                $("#slider_graph").slideReveal("show");
                tlegend = false;
                tpicker = false;
                trace = false;
                t_graph = true;
                map.removeLayer(punto);
                $('#table').bootstrapTable('removeAll');
                $('#coor').html('');
                document.getElementById("select_grafica").style.display = "none";
                document.getElementById("text_grafica").style.display = "block";
                document.getElementById("text_grafica").innerHTML = "Cargando...";
                // Función de inicio
                $(document).ready(function () {
                    //Obtiene los datos de la CTD de la API
                    $.get('/api/ctd/', function (result) {
                        // Guarda en la variable ctd los resultados de la API
                        ctd = result.results;
                        document.getElementById("text_grafica").style.display = "none";
                        document.getElementById("select_grafica").style.display = "block";
                        // Llama a la función gráfica
                        control();
                    });
                });

                // Variable donde se almacenan los datos de la base de datos
                // var ctd;
                var ctd = new Object();
                // Sección del selector de las variables a graficar
                // Seleccionamos el elemento que contiene el select
                var select = document.getElementById('select_grafica');
                var selectedOption;
                // Cuando el select cambie
                select.addEventListener('change',
                    function () {
                        selectedOption = this.options[select.selectedIndex];
                        // En este caso imprime el valor y el texto del select seleccionado
                        if (selectedOption.value !== "nada") {
                            document.getElementById("descarga_boton").style.display = "block";
                            grafica(selectedOption)
                        }
                    }
                );

                // Objeto que almacena las unidades
                var objeto_unidades = new Object();

                // Función encargada de graficar los datos de la CTD
                function control() {
                    // Se crean los vectores de control
                    vector_muestra = [];
                    vector_variable = [];
                    vector_variable_des = [];
                    vector_unidad_des = [];
                    // Se recorren todas las posiciones del vector de datos de la CTD
                    for (i = 0; i < ctd.length; i++) {
                        // Guarda el id de la muestra de la posicón i del vector
                        muestra = String(ctd[i]["muestra"]);
                        // Se elimina la primera posición del id de la muestra, debido a que este número
                        // Es variante según la variable a la que corresponda
                        // var cod_muestra = muestra.slice(1, muestra.length);
                        // En esta parte se va a llenar el vector con los identificadores de muestra
                        // Para saber cuántos muestras se tomaron y relacionar los datos
                        // A partir de este identificador
                        // Si aún no se ha añadido el código de muestra de la posición i
                        // En el vector de muestra
                        if (vector_muestra.includes(muestra) == false) {
                            // Se añade el id de muestra
                            vector_muestra.push(muestra);
                        }
                        // Se realiza el mismo proceso anterior pero con el nombre de la variable
                        variable = String(ctd[i]["variable"]);
                        if (vector_variable.includes(variable) == false) {
                            vector_variable.push(variable);
                        }
                        // Se realiza el mismo proceso anterior pero con la descripción de la variable
                        variable_des = String(ctd[i]["variable_des"]);
                        if (vector_variable_des.includes(variable_des) == false) {
                            vector_variable_des.push(variable_des);
                        }
                        // Se realiza el mismo proceso anterior pero con la unidad de la variable
                        unidad_des = String(ctd[i]["unidades_medida_des"]);
                        if (vector_unidad_des.includes(unidad_des) == false) {
                            vector_unidad_des.push(unidad_des);
                        }
                    }

                    // Para borrar la lista
                    var list = document.getElementById("select_grafica");

                    // As long as <ul> has a child node, remove it
                    while (list.hasChildNodes()) {
                        list.removeChild(list.firstChild);
                    }

                    g = document.getElementById("ctd_grafica");

                    // Para añadir el elemento de seleccione una gráfica    
                    z = document.createElement("option");
                    t = document.createTextNode("Seleccione una Gráfica");
                    z.appendChild(t);
                    z.setAttribute("value", "nada");
                    list.appendChild(z);

                    // Se recorren todas las posiciones del vector que contiene a las variables
                    for (i = 0; i < vector_variable_des.length; i++) {
                        // Si la variable leida NO es profundidad
                        if (vector_variable_des[i] != "Profundidad") {
                            // Se crea un elemento tipo option
                            // m = document.createElement("div");
                            // document.getElementById("select_grafica").appendChild(m);
                            let z = document.createElement("option");
                            // Al cual se le asigna el valor de la variable
                            z.setAttribute("value", vector_variable[i]);
                            // Y se le asigna al valor a mostrar el valor de variable_des
                            let t = document.createTextNode(vector_variable_des[i]);
                            z.appendChild(t);
                            // Luego se añade al html
                            document.getElementById("select_grafica").appendChild(z);
                        }
                        // Se añade un atributo al objeto de las variables que será una lista vacía
                        // que tendrá como nombre la variable de la posición i
                        objeto_variable[vector_variable[i]] = [];
                        // Se añade un atributo al objeto de las unidades que será la unidad
                        // de la misma posición i que tendrá como nombre la variable de la posición i
                        objeto_unidades[vector_variable[i]] = vector_unidad_des[i];
                    }

                    // Se recorren todas las posiciones del vector de datos de la lista CTD
                    for (i = 0; i < ctd.length; i++) {
                        // Se recorren todas las posiciones del vector de datos de la lista de variables
                        for (j = 0; j < vector_variable.length; j++) {
                            // Si el la variable de la lista CTD en la posición i es la misma que
                            // La variable del vector variable en la posición j
                            if (ctd[i].variable == vector_variable[j]) {
                                // Si es profundidad
                                if (ctd[i].variable == "PROF") {
                                    // Se multiplica por -1 para darle el efecto de bajada y se añade
                                    // el valor de la ctd en la posición i al objeto variable en su 
                                    // posición correspondiente a vector variable j
                                    objeto_variable[vector_variable[j]].push(-1 * ctd[i].valor);
                                } else {
                                    // Sino, se añade
                                    // el valor de la ctd en la posición i al objeto variable en su 
                                    // posición correspondiente a vector variable j
                                    objeto_variable[vector_variable[j]].push(ctd[i].valor);
                                }
                            }
                        }
                    }
                }

                function grafica(sx) {
                    var d = new Date();
                    vector_grafica = [];
                    objeto_variable["grafica"] = [];
                    objeto_variable["csv"] = "";
                    objeto_variable["csv"] += "Nombre del proyecto:;" + titulo_ctd + "\r\n";
                    objeto_variable["csv"] += "Lugar:;" + lugar_ctd + "\r\n";
                    objeto_variable["csv"] += "Código:;" + prefijo_ctd + codigo_ctd + "\r\n";
                    objeto_variable["csv"] += "Id de la estación:;" + id_estacion_ctd + "\r\n";
                    objeto_variable["csv"] += "Fecha:;" + fecha_ctd + "\r\n";
                    objeto_variable["csv"] += "Notas:;" + notas_ctd + "\r\n";
                    objeto_variable["csv"] += "Latitud:;" + latitud_ctd + "\r\n";
                    objeto_variable["csv"] += "Longitud:;" + longitud_ctd + "\r\n";
                    objeto_variable["csv"] += "Profundidad máxima:;" + profundidad_max_ctd + "\r\n";
                    objeto_variable["csv"] += "Sistema de Información Ambiental Marina de Colombia, componente Triton (http://triton.invemar.org.co/). Conjunto de datos " +
                        "correspondiente a perfil oceanográfico, tomado con CTD, descargado el " + d + ". El conjunto de datos se entrega bajo Licencia " +
                        "CC BY 4.0, por INVEMAR como administrador del sistema. Es responsabilidad del usuario revisar los datos y utilizar los " +
                        "criterios y herramientas pertinentes para interpretar y eliminar los datos que pudiesen estar errados." + "\r\n";
                    objeto_variable["csv"] += "" + "\r\n";
                    objeto_variable["csv"] += "" + "\r\n";

                    for (let ix = 0; ix < vector_variable_des.length; ix++) {
                        objeto_variable["csv"] += vector_variable_des[ix] + "(" + vector_unidad_des[ix] + ")" + ";";
                    }
                    objeto_variable["csv"] += "" + "\r\n";
                    for (i = 0; i < objeto_variable[vector_variable[0]].length; i++) {
                        objeto_variable["grafica"].push([objeto_variable["PROF"][i], objeto_variable[sx.value][i]]);
                        for (let ix = 0; ix < vector_variable.length; ix++) {
                            objeto_variable["csv"] += String(objeto_variable[vector_variable[ix]][i]).replace(".", ",") + ";";
                        }
                        objeto_variable["csv"] += "" + "\r\n";
                    }
                    Highcharts.chart('ctd_grafica', {
                        chart: {
                            type: 'spline',
                            inverted: true,
                            zoomType: 'x',
                            // resetZoomButton: {
                            //     position: {
                            //         // align: 'right', // by default
                            //         verticalAlign: 'bottom', // by default
                            //         x: 0,
                            //         y: -30
                            //     }
                            // }
                        },
                        title: {
                            text: 'Estacion ' + ctd[0].id_estacion
                        },
                        subtitle: {
                            text: sx.text + ' vs Profundidad'
                        },
                        xAxis: {
                            reversed: false,
                            title: {
                                enabled: true,
                                text: 'Produndidad'
                            },
                            labels: {
                                format: '{value} m'
                            },
                            maxPadding: 0.05,
                            showLastLabel: true
                        },
                        yAxis: {
                            title: {
                                text: sx.text
                            },
                            labels: {
                                format: '{value} ' + objeto_unidades[sx.value]
                            },
                            lineWidth: 2
                        },
                        legend: {
                            enabled: false
                        },
                        tooltip: {
                            headerFormat: '<b>{series.name}</b><br/>',
                            pointFormat: '{point.x} m: {point.y} ' + objeto_unidades[sx.value]
                        },
                        plotOptions: {
                            spline: {
                                marker: {
                                    enable: false
                                }
                            }
                        },
                        series: [{
                            name: sx.text,
                            data: objeto_variable["grafica"]
                        }]
                    });

                }
            });

        }
    });


    /******************************PROCESO PARA AÑADIR PUNTOS Y SABER EL VALOR DE LA VARIABLE EN ESE PUNTO*******************************/

    // Cuando se da click en el botón derecho del botón del punto
    $("#tpicker").on("click", function () {
        // Si la variable de control es verdadero
        if (tpicker) {
            // Oculta el panel
            $("#picker").slideReveal("hide");
            // Coloca la variable en falso
            tpicker = false;
            // Elimina el punto y borra todo en el punto de análisis puntual
            map.graphics.clear();
            $('#table').bootstrapTable('removeAll');
            $('#coor').html('');
            // Coloca el control de visualización de las CTD en none y borra la gráfica
            document.getElementById("select_grafica").style.display = "none";
            document.getElementById("descarga_boton").style.display = "none";
            document.getElementById("ctd_grafica").innerHTML = "";
        } else {
            $("#slider").slideReveal("hide");
            $("#tracer").slideReveal("hide");
            $("#slider_graph").slideReveal("hide");
            $("#picker").slideReveal("show");
            tpicker = true;
            tlegend = false;
            trace = false;
            t_graph = false;
        }
    });

    // Cuando se da click en el mapa se va a la función getFeatureInfo
    map.on('click', getFeatureInfo);
    // Variables usadas
    var graficar_punto;
    var punto_seleccion;

    function getFeatureInfo(evt) {
        // Si se ha seleccionado el punto
        if (tpicker) {
            // Guarda en mp el punto en el mapa que ha sido seleccionado
            var mp = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
            // y = Latitud
            // x = Longitud
            // Se guarda en el objeto coordenada la latitud y la longitud
            coordenada = {
                // Convierte a número el resultado con 15 decimales
                lat: Number(mp.y.toFixed(15)),
                lng: Number(mp.x.toFixed(15))
            }
            // Borra el punto anteriormente creado
            map.graphics.clear();
            // Crea un punto en el lugar seleccionado
            punto_seleccion = new Point(Number(mp.x.toFixed(4)), Number(mp.y.toFixed(4)));
            // Se crea el símbolo que se mostrará en el punto
            var simpleMarkerSymbol = new SimpleMarkerSymbol();
            // simpleMarkerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
            // simpleMarkerSymbol.setColor(new Color("#00FFFF"));
            // Se crea la gráfica del punto
            graficar_punto = new Graphic(punto_seleccion, simpleMarkerSymbol);
            // Se añade al mapa
            map.graphics.add(graficar_punto);
            // Se crea el html donde se van a observar las coordenadas seleccionadas
            $('#coor').html('<span class="glyphicon glyphicon-map-marker"></span>(Lat,Lng):' + mp.y.toFixed(4) + ',' + mp.x.toFixed(4) + '')
            // Borra todo lo que haya en la tabla de datos
            $('#table').bootstrapTable('removeAll');
            // Luego se recorre todas las posiciones de las variables para rellenar la tabla
            for (var i = 0; i < variables.length; i++) {
                // Se llama a la función getInfo
                getInfo('#table', variables[i], coordenada);
            }
        }

        function getInfo(tabla, capa, latlng, p) {
            var v = {};
            // Si existe un id para la capa, es decir, si la capa está visible
            if (capa.l_id) {
                // Se llama a la función getFeatureInfoUrl para obtener la información a partir del lugar seleccionado
                var url = getFeatureInfoUrl(latlng, capa);
                //     //var capa=variables[i];
                //     $.get(url, function (data) {
                //         v = {
                //             variable: capa.nombre,
                //             valor: parseFloat(data.getElementsByTagName("value")[0].childNodes[0].data, 2).toFixed(2),
                //             unidades: capa.unidades
                //         };
                //         if (p) {
                //             p[capa.nombre] = v.valor;
                //             p[capa.nombre] = v.valor;
                //         }
                //         $(tabla).bootstrapTable('append', v);
                //     });
            }
            return v;
        }

        // Función para obtener la información de una capa a partir de la coordenada seleccionada
        function getFeatureInfoUrl(latlng, capa) {
            // Se obtiene el equivalente del punto en coordenadas a pixeles
            var punto_pixel = screenUtils.toScreenPoint(map.extent, map.width, map.height, punto_seleccion);
            // La extensión (cuadro delimitador) donde se analizará el punto
            bbox_string = String(map.geographicExtent.toJson().xmin) + "," + String(map.geographicExtent.toJson().ymin) +
                "," + String(map.geographicExtent.toJson().xmax) + "," + String(map.geographicExtent.toJson().ymax)

            // Los parámetros usados para obtener la inforamción de las capas
            params = {
                // Tipo de respuesta
                request: 'GetFeatureInfo',
                // Tipo de servicio
                service: 'WMS',
                // Tipo de espacialización
                srs: 'EPSG:4326',
                // Estilo de la capa
                styles: capa.p.STYLES,
                // Transparencia de la capa
                transparent: capa.p.TRANSPARENT,
                // Formato de la capa
                format: capa.p.format,
                // La extensión (cuadro delimitador)
                bbox: bbox_string,
                // Alto del mapa
                height: map.height,
                // Ancho del mapa
                width: map.width,
                // La capa a usar
                layers: capa.p.layers,
                // El query de la capa
                query_layers: capa.p.layers,
                // El tipo de formato de la información
                info_format: 'text/xml'
            };
            // Se guarda el valor en pixeles en x y en y
            params[params.version === '1.3.0' ? 'i' : 'x'] = punto_pixel.x;
            params[params.version === '1.3.0' ? 'j' : 'y'] = punto_pixel.y;
            // Se crea una solicitud query
            var query_point = new Query();
            query_point.returnGeometry = true;
            // query_point.outFields = ["CITY_NAME"];
            var queryTask = new QueryTask(capa.wms);
            query_point.text = params;
            query_point.outSpatialReference = {
                wkid: 102100
            };
            prueba = queryTask.execute(query_point, respuesta);
            // console.log("LA prueba");
            function respuesta(R) {
                // Nada
            }
            // return wms._url + L.Util.getParamString(params, wms._url, true);
        }



        // if (trace) {
        //     map.removeLayer(trazadoLine);
        //     for (var i = 0; i < trazado.length; i++) {
        //         map.removeLayer(trazado[i]);
        //     }
        //     $('#tableTrace').bootstrapTable('removeAll');
        //     //console.log(evt.latlng);
        //     trazado.push(L.marker(evt.latlng, {
        //         icon: markerIcon
        //     }));
        //     trazadoLine.addLatLng(evt.latlng);
        //     var t = 0;
        //     puntos = []
        //     $('#traceVar').empty();;
        //     for (var i = 0; i < trazado.length; i++) {
        //         trazado[i].addTo(map);
        //         var p = {
        //             punto: i + 1,
        //             lon: trazado[i].getLatLng().lat.toFixed(3),
        //             lat: trazado[i].getLatLng().lng.toFixed(3),
        //         }
        //         if (i > 0) {
        //             p.dist = map.distance(trazado[i - 1].getLatLng(), trazado[i].getLatLng());
        //             t += p.dist;
        //             p.total = t;
        //             p.dist = (p.dist / 1000).toFixed(1);
        //             p.total = (p.total / 1000).toFixed(1);
        //         }

        //         var ht = '<table class="table" data-toggle="table" id="tv' + i + '"> ';
        //         ht += '<caption><span class="glyphicon glyphicon-map-marker"></span>Punto ' + (i + 1) + ',lat:' + p.lat + ',lon:' + p.lon + '</caption>';
        //         ht += '<thead><tr>';
        //         ht += '<th data-field="variable">Variable</th>';
        //         ht += '<th data-field="valor">Valor</th>';
        //         ht += '<th data-field="unidades">Unidades</th>';
        //         ht += '</tr></thead></table>';

        //         $('#traceVar').append(ht);
        //         $('#tv' + i).bootstrapTable();
        //         $('#tableTrace').bootstrapTable('append', p);
        //         $('#table').bootstrapTable('removeAll');
        //         for (var j = 0; j < variables.length; j++) {
        //             getInfo('#tv' + i, variables[j], trazado[i].getLatLng(), p);
        //         }
        //         puntos.push(p)
        //     }
        //     trazadoLine.addTo(map);
        // }
    }


    /*
    // LA PARTE DERECHA
    // markerSymbol is used for point and multipoint, see http://raphaeljs.com/icons/#talkq for more examples
    var markerSymbol = new SimpleMarkerSymbol();
    markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
    markerSymbol.setColor(new Color("#FFFFFF"));

    // lineSymbol used for freehand polyline, polyline and line. 
    var lineSymbol = new CartographicLineSymbol();
    lineSymbol.setCap(CartographicLineSymbol.CAP_ROUND);
    lineSymbol.setWidth(3);
    lineSymbol.setColor(new Color([0, 112, 255, 1]));


    map.on("load", initToolbar);

    function initToolbar() {
        tb = new Draw(map);
        tb.on("draw-end", addGraphic);

        // event delegation so a click handler is not
        // needed for each individual button
        on(dom.byId("trace"), "click", function (evt) {
            // if (evt.target.id === "info") {
            //     return;
            // }
            var tool = evt.target.id.toLowerCase();
            map.disableMapNavigation();
            tb.activate("polyline");
        });
    }

    function addGraphic(evt) {
        //deactivate the toolbar and clear existing graphics 
        tb.deactivate();
        map.enableMapNavigation();

        // figure out which symbol to use
        var symbol;
        if (evt.geometry.type === "point" || evt.geometry.type === "multipoint") {
            symbol = markerSymbol;
        } else if (evt.geometry.type === "line" || evt.geometry.type === "polyline") {
            symbol = lineSymbol;
        }

        map.graphics.add(new Graphic(evt.geometry, symbol));
    }

    $("#trace").on("click", function () {
        if (trace) {
            $("#tracer").slideReveal("hide");
            tpicker = false;
            tlegend = false;
            trace = false;
            t_graph = false;
            map.graphics.clear();
            // Coloca el control de visualización de las CTD en none y borra la gráfica
            document.getElementById("select_grafica").style.display = "none";
            document.getElementById("ctd_grafica").innerHTML = "";

        } else {
            $("#slider").slideReveal("hide");
            $("#picker").slideReveal("hide");
            $("#slider_graph").slideReveal("hide");
            $("#tracer").slideReveal("show");
            tpicker = false;
            tlegend = false;
            trace = true;
            t_graph = false;
        }
        //console.log("select tracer");
    });

    on(dom.byId("clearGraphics"), "click", function () {
        if (map) {
            map.graphics.clear();
        }
    });
    */

});

// No sé por qué pero debe ir
sidebar: $('#sidebar').sidebar();

function descargarTrace(evt) {
    let csvContent = "";
    for (v in puntos[puntos.length - 1]) {
        csvContent += v + ";"
    }
    csvContent += "\r\n";
    puntos.forEach(function (r) {
        let row = "";
        for (v in puntos[puntos.length - 1]) {
            row += r[v] + ";"
        }
        csvContent += row + "\r\n";
    });
    // console.log(csvContent);

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    element.setAttribute('download', "export.csv");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

/******************************PROCESO PARA DESCARGAR CSV DE DATOS DE CTD   *******************************/

function descargarCTD(evt) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(objeto_variable["csv"]));
    element.setAttribute('download', "export.csv");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}