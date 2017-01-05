var i = 0;

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);

  if (a == txt[i])
    {
      console.log("Es correcto");
      $(document).ready(function(){
        $('.resultado .incorrecto').hide(1,function(){
          $('.resultado .correcto').show(1);
      });
    });
    i++;
    }
  else
    {
    console.log("Error");
      $(document).ready(function(){
        $('.resultado .correcto').hide(1, function(){
          $('.resultado .incorrecto').show(1);
        });
      });
    }
})
var txt = "lo siento Jim, hice un pacto, ella muere, yo quedo libre";
document.write(txt);
document.write(" ");
