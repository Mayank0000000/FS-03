//--------------------QUESTION 1-------------------------------------------------//
const alertMessage = document.querySelector('#myButton');

alertMessage.addEventListener('click', function(){
    alert('Button with id myButton is clicked')
})


//------------------QUESTION 2-------------------------------------------------//

const colorBtn = document.querySelector('.btn')
const div = document.querySelector('.myDiv')
let count = 0

colorBtn.addEventListener('click', function(){
    
})
div.addEventListener('click', function(e){
    count++;
    if(count%2 === 0){
        this.style.backgroundColor = 'blue'
    }
    else{
        this.style.backgroundColor = 'red'
    }
   

})

