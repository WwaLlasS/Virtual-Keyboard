var i = 0;
var status = 'true';
//Counters
var hits = 0;
var errors = 0;
var record = 0;
var acurate = 0;
//String to the Keyboard
var txt;
//default text helper for load a file text
$('#actual').append('<p class="helper-text">Hello developer, I am the keyboard, load a text file and start to master your typing skills</p>');
//function that read file when is on load and execurte al the system
var readFile = function(event) {
    $('#actual .helper-text').remove();
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
      txt = reader.result;
      console.log(txt);
      var maxTxt = txt.length;
      console.log(maxTxt);
      if (maxTxt > 300) {
        $('#actual').append('<p class="helper-text">Try uploading another file that contains 300 characters or less.</p>');
        $('.paragraph').empty();
      }
      else {
        $('#actual .helper-text').remove();
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

              $('#actual .paragraph').html(nuevaCadena)
          })
        }
        pinta_letra()
        //event for keypress
        document.addEventListener('keypress', (event) =>{
          var a = event.key;
          console.log(a);
        //if a keypress its equal to a actually letter in the string continue with the next letter and hits count plus 1
          if (a == txt[i])
            {
              console.log("Es correcto");
              status = 'true'
              i++
              hits++
              //Count the number of hits - errors
              $('#hits').text(hits - errors);
              if (errors == 0) {
                record++;
                //change the record in execution
                $('#record').text(record);
              }else {
                //when a user have 1 error stop record count and set equal for a personal record
                record = record;
              }
            }
          else
            {
              status = 'false'
              console.log("Error");
              errors++;
              //load total of errors and your best record
              $('#errors').text(errors)
              $('#record').text(record)
            }
            pinta_letra()

            //Percenten of typing
            var acerts = hits - errors;
            var percent = acerts * 100 / txt.length;
            console.log(percent,'%');
            if (percent <= 0) {
              $('#acurate').html( 0 + '%');
            }else{
              $('#acurate').html(parseInt(percent) + '%');
            }
        })
        //Load total of hits
        $('.acurate p b').append(hits)
      }
    };
      reader.readAsText(input.files[0]);
  };
//Counts Start in 0
$('#hits').text(0)
$('#errors').text(0);
//Split the string and color the actually letter for typing or in case the user fails is colored in red or green if is successful
