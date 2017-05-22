var i = 0;
var status = 'true'
// const fs = require('fs');

var txt = "Hello world";
  $('#palabras p').append(txt);

function pinta_letra(){

  $('document').ready(function(){

    // /obtener y pintar letraActual
    var cadena = $('#palabras p');
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
        // <span class="letra-actual" >l</span>
        // <span class="letra-actual error">l</span>
      } else {
        nuevaCadena += arreglo[c]

      }
    }

    $('#actual').html(nuevaCadena)
  })
}
pinta_letra()

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);
  var hits = 0;
  var errors = 0;
  var totalHits = 0;
  var totalErrors = 0;

  if (a == txt[i])
    {
      console.log("Es correcto");
      status = 'true'
      i++
      totalHits = hits ++ ;
      console.log(totalHits);
    }
  else
    {
      status = 'false'
      console.log("Error");
      errors++
      console.log(errors);
    }
    pinta_letra()


    // console.log(totalHits);
    //
    // console.log(totalErrors);
})
  var txtInput = $('#txtInput').val();

  // function inputVal(){
  //     $('#palabras p').empty();
  //     $('#actual').empty();
  //     var txtInput = $('#txtInput').val();
  //     $('#palabras p').append(txtInput);
  //     txt = txtInput;
  //     pinta_letra()
  //     if (txtInput == '') {
  //       txt = "Hipatia Dev House";
  //       $('#palabras p').append(txt);
  //     }
  //     pinta_letra()
  //   }


// fs.readFile('./first_challenge.docx','utf-8', (err,data) => {
//   if (err) throw err;
//   console.log(data);
// });
