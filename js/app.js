const toggle = document.querySelector('.toggle')
const mobile = document.querySelector('.mobile')
const navBar = document.querySelector('.nav-bar')
const myname = document.querySelector('.my-name')
const myFirstname= document.querySelector('.name1')
toggle.addEventListener('click', () => {
  tg()
})

function tg() {
  mobile.classList.toggle('active')
}

navBar.addEventListener('input', () => {
  console.log('asd')
})
window.addEventListener('scroll',AddNavFunctionality)
function AddNavFunctionality() {
  if (window.scrollY > 65) {
    navBar.classList.add('active-nav')
    myFirstname.classList.add('my-name-active')
    // navBar.style.background='#000221';
    navBar.style.background='transparent';
    toggle.style.color='#f9f9f9'
    myFirstname.style.color='#ffffffe9'
  } else {
    navBar.classList.remove('active-nav')
    myFirstname.classList.remove('my-name-active')
    navBar.style.background='';
    toggle.style.color=''
    myFirstname.style.color=''
  }
}