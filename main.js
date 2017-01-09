var i = 0;

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);

  if (a == txt[i])
    {
      console.log("Es correcto");

    i++;
    }
  else
    {
      console.log("Error");
      document.getElementById('resultado').innerHTML = 'incorrecto';
      document.getElementById('palabras').style.color = "#ff0036";
    }
    var arreglo = $('#palabras p');
    var cadena = arreglo.html().trim();
    cadena = [i];
    console.log("cadena "+cadena);
    console.log('indice '+cadena[i]);

})
var txt = "lo siento Jim, hice un pacto, ella muere, yo quedo libre";
