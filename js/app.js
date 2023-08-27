const toggle = document.querySelector('.toggle')
const mobile  = document.querySelector('.mobile')
toggle.addEventListener('click',()=>{
    tg()
})

function tg(){
    mobile.classList.toggle('active')
}