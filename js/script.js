let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

function slide1(){
    document.getElementById('slimg').src="https://source.unsplash.com/1000x250/?technology";
}
function slide2(){
    document.getElementById('slimg').src="https://source.unsplash.com/1000x250/?computer";
}
function slide3(){
    document.getElementById('slimg').src="https://source.unsplash.com/1000x250/?coding";
}
setInterval(slide2, 2000);
setInterval(slide3, 4000);
setInterval(slide1, 6000);