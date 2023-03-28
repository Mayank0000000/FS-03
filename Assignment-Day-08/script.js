const submit = document.querySelector('.submitBtn')
const inputName = document.querySelector('.name')
const inputGender = document.querySelector('.gender')
const header = document.querySelector('.header')
const form = document.querySelector('.form')
submit.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(inputName.value);
    // console.log(inputGender.value);
    createEle(inputName.value, inputGender.value)
    inputName.value = ''
    inputGender.value = ''
})

const arr = []

function createEle(name, gender) {
const element = document.createElement('div');
element.className = 'temp'
element.innerHTML = `Name=>${name.toUpperCase()}, Gender=>${gender.toUpperCase()}`;
if(gender.toUpperCase() === 'MALE'){
    element.id = 'male'
}
else{
    element.id = 'female'
}

const deleteBttn = document.createElement('button')

deleteBttn.textContent = 'Delete'
deleteBttn.addEventListener('click', function(e){
    // e.preventDefault()/
    e.target.closest('.temp').remove();
    console.log( e.target.closest('.temp'));
})
element.appendChild(deleteBttn);
form.appendChild(element)
arr.push(element)
console.log(arr[0].id);

}
const maleFilter = document.querySelector('#male-filter')
const femaleFilter =  document.querySelector('#female-filter')

maleFilter.addEventListener('click', function(e){
   const radioEvent = e.target.value;
  
   if(radioEvent ){
    arr.forEach(mov=>{
        if(mov.id !== 'male'){
            mov.classList.add('hidden')
        }
        else{
                mov.classList.remove('hidden')
            }
    })
   }
  

    
})
femaleFilter.addEventListener('click', function(e){
    const radioEvent = e.target.value;
    if(radioEvent ){
        arr.forEach(mov=>{
            if(mov.id !== 'female'){
                mov.classList.add('hidden')
            }
            else{
                mov.classList.remove('hidden')
            }
        })
       }
  

})


