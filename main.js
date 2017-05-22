var i = 0;
var status = 'true'

//Counts fro hits and errors default in 0
var hits = 0;
var errors = 0;
var record = 0;
var acurate = 0;
//String to the Keyboard
var txt = "this is Hipatia Dev House";
$('#palabras p').append(txt);

//Counts Start in 0
$('#hits').text(0)
$('#errors').text(0);

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

    $('#actual p').html(nuevaCadena)
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
      i++
      hits++
      record++;
      $('#hits').text(hits - errors)
    }
  else
    {
      status = 'false'
      console.log("Error");
      errors++
      $('#errors').text(errors)
      $('#recors').text(record)
    }
    pinta_letra()
    var acerts = hits - errors;
    var percent = acerts * 100 / txt.length;
    console.log(percent,'%');
    if (percent <= 0) {
      $('#acurate').html( 0 + '%');
    }else{
      $('#acurate').html(percent + '%');
    }


})


$('.acurate p b').append(hits)

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
