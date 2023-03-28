const inputText = document.querySelector('.input__Text');
const showText = document.querySelector('.showText')

let text;
inputText.addEventListener('change', function(e){
   text = e.target.value
//   console.log(text);
  showText.innerHTML = text;
})




