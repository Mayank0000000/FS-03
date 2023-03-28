const btn = document.querySelectorAll(".btn");
// console.log(btn);
const btnArr = [...btn]
// console.log(btnArr);
const lastElement = btnArr.length-1

btn.forEach((mov,i)=>{
    if(i%2 != 0){
        mov.style.background = 'lime';
        mov.style.color = 'white'
    }
    if(i === 0){
        mov.style.background = 'blue'

        mov.style.color = 'white'

    }
    if(i === 8){
        mov.style.background = 'green'
        mov.style.color = 'white'

    }
    if(i === lastElement){
        mov.style.background = 'palevioletred' 
        mov.style.color = 'white'
    }
})