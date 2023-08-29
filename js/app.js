const toggle = document.querySelector('.toggle')
const mobile = document.querySelector('.mobile')
const navBar = document.querySelector('.nav-bar')
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
    navBar.style.background='#000221';
    toggle.style.color='#f9f9f9'
  } else {
    navBar.classList.remove('active-nav')
    navBar.style.background='';
    toggle.style.color=''
  }
}