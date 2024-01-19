let btn = document.getElementById('btn');
let error =document.getElementById('error');
let input = document.getElementById("input");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click',()=>{

if(!emailRegex.test(input.value))

input.style.border=' 1px solid red';
error.classList.replace('d-none','d-block')

setTimeout(() => {
    input.style.border='';
    error.classList.replace('d-block','d-none')
}, 1000);
})




