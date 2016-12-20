var i = 0;

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);

  if (a == txt[i])
    {
    console.log('Es correcto');
    i++;
    }
  else
    {
    console.log("Error");
    }
})
var txt = "lo siento Jim, hice un pacto, ella muere, yo quedo libre";
document.write(txt);
document.write(" ");
