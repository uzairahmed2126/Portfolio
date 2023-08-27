const toggle = document.querySelector('.toggle')
const mobile  = document.querySelector('.mobile')
const navBar = document.querySelector('.nav-bar')
toggle.addEventListener('click',()=>{
    tg()
})

function tg(){
    mobile.classList.toggle('active')
}

navBar.addEventListener('input',()=>{
    console.log('asd')
})



const BottomConatiner = document.querySelector('.paragraph')

window.addEventListener('scroll', (event) => {
  console.dir(window.scrollY)
  if (window.scrollY > 200) {
    navBar.classList.add('active')
  } else {
    navBar.classList.remove('active')
  }
})