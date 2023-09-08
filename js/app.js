const toggle = document.querySelector('.toggle')
const mobile = document.querySelector('.mobile')
const navBar = document.querySelector('.nav-bar')
const logo = document.querySelector('.logo')
const myFirstname = document.querySelector('.name1')
toggle.addEventListener('click', () => {
  tg()
})

function tg() {
  mobile.classList.toggle('active')
}


window.addEventListener('scroll', AddNavFunctionality)
function AddNavFunctionality() {
  if (window.scrollY > 65) {
    navBar.classList.add('active-nav');
    myFirstname.classList.add('my-name-active');
    myFirstname.style.color = 'darkblue';
    toggle.style.color='black'
  } else {
    navBar.classList.remove('active-nav');
    myFirstname.classList.remove('my-name-active');
    navBar.style.background = '';
    toggle.style.color = '';
    myFirstname.style.color = '';
  }
}
