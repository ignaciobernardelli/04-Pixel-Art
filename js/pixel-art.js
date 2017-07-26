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
var $paleta = $("#paleta");
var $grillapixeles = $("#grilla-pixeles");

//Crea una función para generar la paleta de colores
function creaPaletaColores(){
  for (i=0;i < nombreColores.length;i++){
    $($paleta).append($('<div>', {"class": "color-paleta"}).css({"background-color": nombreColores[i]}));
    }
};

//Crea una función para generar la grilla de píxeles donde el usuario va a dibujar
function creaGrillaPixeles(){
  for (i=0;i < 1749;i++){
    $($grillapixeles).append('<div>');
    }
};

//Crea una función para que, al hacer clic en algún color, el indicador-de-color cambie y refleje la selección.
$paleta.click(function(event){
    $("#indicador-de-color").css("background-color", $(event.target).css("background-color"));
});

//Crea una funcion para que el usuario pueda pintar un píxel al hacer clic en un cuadrado de la grilla.
$grillapixeles.click(function(event){
    $(event.target).css("background-color", $("#indicador-de-color").css("background-color"));
});


//Variable que nos diga si el botón del mouse está o no apretado
var botonApretado = false

$grillapixeles.mousedown(function(){
  botonApretado = true
});
$grillapixeles.mouseup(function(){
  botonApretado = false
});

// Funcion para poder pintar con el mouse muchos pixeles a la vez con sólo mantenerlo apretado y moviéndolo por la grilla.
$grillapixeles.mousemove(function(event){
  if (botonApretado == true){
    $(event.target).css("background-color", $("#indicador-de-color").css("background-color"));
  }
});

// Borra la pantalla apretando un botón
$("button#borrar").click(function(){
  var divGrilla = $("#grilla-pixeles div")
  divGrilla.each(function(){
    $(this).animate({"background-color" : "white"},1000);
  });
});

//Carga a los superhéroes en forma de píxeles
$(".imgs img").click(function(){
  var nombreSuperHeroe = $(this).attr("id");
  if (nombreSuperHeroe == "batman") {
      cargarSuperheroe(batman)
  } else if (nombreSuperHeroe == "flash") {
      cargarSuperheroe(flash)
  } else if (nombreSuperHeroe == "wonder") {
      cargarSuperheroe(wonder)
  } else {
      cargarSuperheroe(invisible)
  }
});

//Funcion de exportar la imagen del Pixel Art y descargarla en la computadora del usuario
$("#guardar").click(function(){
  guardarPixelArt();
});

creaPaletaColores();
creaGrillaPixeles();
