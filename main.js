var i = 0;
var status = 'true'



function pinta_letra(){

  $('document').ready(function(){
    // /obtener y pintar letraActual
    console.log($('#palabras p'));
    var cadena = $('#palabras p');
    console.log(cadena);
    var cadena = cadena.html().trim();
    var arreglo = cadena.split('');
    var letraActual = arreglo[i]
    var nuevaCadena = ''
    var errorClass = ''
    for(var c = 0; c <= arreglo.length -1; c++){
      if (c == i ){
        if(status == 'false'){
          errorClass = 'error'
        }
        nuevaCadena += '<span class="letra-actual '+errorClass+'">' + arreglo[c] + '</span>'

      } else {
        nuevaCadena += arreglo[c]

      }
      // console.log(nuevaCadena);
    }

    $('#actual').html(nuevaCadena)
  })
}
pinta_letra()

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);

  if (a == txt[i])
    {
      console.log("Es correcto");
      status = 'true'
      document.getElementById('resultado').innerHTML = 'Correcto';

    i++;
    }
  else
    {
      status = 'false'
      console.log("Error");
      document.getElementById('resultado').innerHTML = 'Incorrecto';
      document.getElementById('palabras').style.color = "#ff0036";
    }
    pinta_letra()
    console.log(arreglo);

    console.log("cadena "+cadena);
    console.log('indice '+cadena[i]);

})
var txt = "lo siento Jim, hice un pacto, ella muere, yo quedo libre";
