var nombreColores = ['White','LightYellow',
'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin','PeachPuff', 'PaleGoldenrod',  'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
'Pink', 'LightPink','HotPink', 'DeepPink', 'MediumVioletRed','Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
'Brown','Sienna','SaddleBrown', 'IndianRed', 'RosyBrown',
'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
'Chocolate',  'DarkKhaki','DarkSeaGreen', 'MediumAquaMarine',
'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green','DarkGreen','OliveDrab','Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
'LightGreen', 'PaleGreen', 'PaleTurquoise',
'AquaMarine',  'Cyan','Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew','LightCyan',
'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
'Plum', 'Violet', 'Orchid','DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
'BlueViolet', 'DarkViolet', 'DarkOrchid',
'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'];

// para tener seguimiento del mouse.
var mouseApretado = false;

// elementos  de las variables de jQuery

var $grillaDePixeles = $('#grilla-pixeles');
var $indicadorDeColor = $('#indicador-de-color');
var $colorPersonalizado = $('#color-personalizado');
var valorColorPersonalizado = $colorPersonalizado.val();
var $paleta = $('#paleta');
var $indicadorDeColorMensaje = $('#indicador-de-color-mensaje');

// grilla en una funcion para  reutilisarla.

function cambiarIndicadorDePincel(color){
  $indicadorDeColor.css("background-color", color);
  $indicadorDeColorMensaje.text(`Pincel: ${color}`);
}

// la grilla la armo recorriendo directamente la lista de colores.

function armarPaleta(){
  for (var nombreColor of nombreColores) {
    var $swatch = $('<div>', {"class": 'color-paleta'});

    $paleta.append($swatch);
    $swatch.css('background-color', nombreColor);
  }
};

// grilla para los pixeles 1749.

function armarGrilla(){
  for (var i = 0; i < 1749; i++) {
    var $pixel = $('<div />');
    $grillaDePixeles.append($pixel);
  }
};

// funcion para clic en la paleta segun color elegido.

function elegirColor(event) {
  colorActual = $(event.target).css('background-color');
  cambiarIndicadorDePincel(colorActual);
}

// funcion para cuando quitamos la grilla.

function pintarPixel(event){
  colorActual = $indicadorDeColor.css("background-color");
  $(event.target).css('background-color', colorActual);
}

//modifica la variable mouseApretado.
//cuando apreto el mouse y suelta.
function apretarMouse(){
  mouseApretado = true;
}
function soltarMouse(){
  mouseApretado = false;
}

// si el mouse esta apretaso se ejecuta la funcion. pintarEnMovimiento.

function pintarEnMovimiento(event){
  if (mouseApretado) {
    pintarPixel(event);
  }
}

// para borrar la pantalla utiliza la funcion animate recorriendo cada pixel.

function borrarPantalla(){
  $pixeles = $( "#grilla-pixeles div" )
  $pixeles.each(function() {
    $( this ).animate({
      backgroundColor: "#FFF",
    }, 1500 );
  });
}

// al elegir color en la paleta.

$colorPersonalizado.change(function(){
  colorActual = $colorPersonalizado.val();
  cambiarIndicadorDePincel(colorActual);
});


$paleta.click(elegirColor);
$grillaDePixeles.click(pintarPixel);
$grillaDePixeles.mousedown(apretarMouse);

// uso de window para saltar la grilla en varias direcciones.

$(window).mouseup(soltarMouse);
$grillaDePixeles.mousemove(pintarEnMovimiento);

//par aborrar la pantalla de pixeles.

$("#borrar").click(borrarPantalla);

// Cargamos los superErues luego de hacer click sobre sus imagenes.

$("#batman").click(function(){
  cargarSuperheroe(batman)
});
$("#flash").click(function(){
  cargarSuperheroe(flash)
});
$("#wonder").click(function(){
  cargarSuperheroe(mujerMaravilla)
});
$("#invisible").click(function(){
  cargarSuperheroe(invisible)
});

// para guardar al imagen creada
$("#guardar").click(guardarPixelArt);

//para llamar a las de mas funciones.
armarPaleta();
armarGrilla();
