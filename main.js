var i = 0;

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);

  if (a == txt[i])
    {
      console.log("Es correcto");
      $(document).ready(function(){
        $('.resultado .incorrecto').hide(0,function(){
          $('.resultado .correcto').show(0);
      });
    });
    i++;
    }
  else
    {
    console.log("Error");
      $(document).ready(function(){
        $('.resultado .correcto').hide(0, function(){
          $('.resultado .incorrecto').show(0);
        });
      });
    }
})
var txt = "lo siento Jim, hice un pacto, ella muere, yo quedo libre";
document.write(txt);
document.write(" ");
