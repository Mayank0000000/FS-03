const text = document.querySelector('.text')
const value = document.querySelector('.value')

document.addEventListener('keydown', function(e){
    console.log(e.key);
    console.log(e.keyCode);


text.innerHTML = `You pressed `
const label = document.createElement('label')
label.innerHTML = e.key
label.style.color = 'green'
text.append(label)
value.style.display = 'block'
value.innerHTML = `${e.keyCode}`
})


