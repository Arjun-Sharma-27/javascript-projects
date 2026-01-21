const button=document.querySelector("button")
const popUpContainer=document.querySelector(".popup-container")
const popup=document.querySelector(".popup")
const closeIcon=document.querySelector('.close-icon')

button.addEventListener('click',()=>{
    popUpContainer.classList.add('popup-open')
})
closeIcon.addEventListener('click',()=>{
    popUpContainer.classList.remove('popup-open')
})
popup.addEventListener('click',(e)=>{
    e.stopPropagation()
})
popUpContainer.addEventListener('click',()=>{
    popUpContainer.classList.remove('popup-open')
})