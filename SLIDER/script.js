const slider = document.querySelectorAll('.slider')
console.log(slider);

let sliderTemp = 0


slider.forEach((mov ,i)=>{
    mov.style.transform = `translateX(${100*i}%)`;

  



})

const btnRight = document.querySelector('.slider__btn--right')
if(sliderTemp<= slider.length) (
btnRight.addEventListener('click', function(){
  if(sliderTemp === slider.length-1){
    sliderTemp = 0;
  }
  else{
    
    sliderTemp++;
  }
   slider.forEach((mov,i)=>{
    mov.style.transform = `translateX(${100*(i-sliderTemp)}%)`;
    
   })
    

})
)
const btnLeft = document.querySelector('.slider__btn--left')
btnLeft.addEventListener('click', function(){
    if(sliderTemp === 0){
        sliderTemp = slider.length-1;
      }
      else{
        
        sliderTemp--;
      }
   slider.forEach((mov,i)=>{
    mov.style.transform = `translateX(${100*(i-sliderTemp)}%)`;
    
   })

})