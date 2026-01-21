const button=document.querySelector("button")
const popUp=document.querySelector(".pop-up")
const closeIcon=document.querySelector('.close-icon')
button.addEventListener('click',()=>{
    popUp.classList.add('open')
})
closeIcon.addEventListener('click',()=>{
    popUp.classList.remove('open')
})