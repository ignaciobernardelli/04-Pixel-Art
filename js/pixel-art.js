var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $("#indicador-de-color").css("background-color", colorActual);
});

// Mi codigo
// Guarda a los elementos paleta y grilla-pixeles en dos variables, para después poder referinos a ellas
var $paleta = $("#paleta").html();
var $grillapixeles = $("#grilla-pixeles").html();

//Crea una función para generar la paleta de colores
function creaPaletaColores(){
  for (i=0;i < nombreColores.length;i++){
    $("#paleta").append($('<div>', {"class": "color-paleta"}).css({"background-color": nombreColores[i]}));
    }
};

//Crea una función para generar la grilla de píxeles donde el usuario va a dibujar
function creaGrillaPixeles(){
  for (i=0;i < 1750;i++){
    $("#grilla-pixeles").append('<div>');
    }
};

//Crea una función para que, al hacer clic en algún color, el indicador-de-color cambie y refleje la selección.
$("#paleta").click(function(event){
    $("#indicador-de-color").css("background-color", $(event.target).css("background-color"));
});

//Crea una funcion para que el usuario pueda pintar un píxel al hacer clic en un cuadrado de la grilla.
$("#grilla-pixeles").click(function(event){
    $(event.target).css("background-color", $("#indicador-de-color").css("background-color"));
});


//Variable que nos diga si el botón del mouse está o no apretado
var botonApretado = false

$("#grilla-pixeles").mousedown(function(){
  botonApretado = true
});
$("#grilla-pixeles").mouseup(function(){
  botonApretado = false
});

// Funcion para poder pintar con el mouse muchos pixeles a la vez con sólo mantenerlo apretado y moviéndolo por la grilla.
$("#grilla-pixeles").mousemove(function(event){
  if (botonApretado == true){
    $(event.target).css("background-color", $("#indicador-de-color").css("background-color"));
  }
});

/*Funciones
$(elemento).click(function(){}) - captura el click en el elemento y ejecuta una Funciones
$(elemento).mousedown(function) - captura cuando se presiona sobre el elemento y no se suelta
$(elemento).mouseup(function) - captura cuando se suelta sobre el elemento
$(elemento).mousemove(function) - captura cuando se mueve presionando sobre el elemento
$(elemento).hover(function(){}, function(){}) - dos paramentros, primero que hace cuando ingresa
al campo del elemento y el segundo parametro es para decirle que hacer cuando sale del
campo del elemento.
event.target()devuelve que elemento inicio el evento

*/
creaPaletaColores();
creaGrillaPixeles();
