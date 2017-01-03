var i = 0;

document.addEventListener('keypress', (event) =>{
  var a = event.key;
  console.log(a);

  if (a == txt[i])
    {
    document.write("Es correcto");
    i++;
    }
  else
    {
    document.write("Error");
    }
})
var txt = "lo siento Jim, hice un pacto, ella muere, yo quedo libre";
document.write(txt);
document.write(" ");
$(document).ready(function(){
  $('.letras-en-curso').click(function(){
    $(this).fadeOut();
  });
});
