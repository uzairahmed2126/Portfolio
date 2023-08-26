const responsive = window.addEventListener('resize',()=>{
    fn()
})
const headerLink = document.querySelector('.header-link')
function fn(){
    if(screen==='760px'){
        headerLink.style.visibility='hidden'
    }else{
        console.log('a')
    }
}