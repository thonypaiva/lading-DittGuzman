const menuHambur = document.getElementById('menu');
const showMenu = document.getElementById('show-menu');

menuHambur.addEventListener('click', () => {
    if(showMenu.style.display === 'none' || showMenu.style.display === '' ){
        showMenu.style.display = 'block';
        menuHambur.src= './assets/icon-close.svg';
        
    } else{
        showMenu.style.display = 'none';
        menuHambur.src= './assets/icon-hamburger.svg';
    }
})

document.addEventListener('click', function (event){
    if(!showMenu.contains(event.target) && event.target !== menuHambur){
        showMenu.style.display = "none";
        menuHambur.src= './assets/icon-hamburger.svg';
    }
})

