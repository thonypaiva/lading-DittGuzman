const menuHambur = document.getElementById('menu');
const showMenu = document.getElementById('show-menu');

const btnDetalleStandar = document.getElementById('btn--detalles--standar');
const showDetallesStandar = document.getElementById('estandar');
const showPriceStandar = document.getElementById('precio--estandar');

const btnDetallesFull = document.getElementById('btn--detalles--full');
const showDetallesFull = document.getElementById('full');
const showPriceFull = document.getElementById('precio--full');

const btnDetallesPremium = document.getElementById('btn--detalles--premium');
const showDetallesPremium= document.getElementById('premium');
const showPricePremium = document.getElementById('precio--premium');



menuHambur.addEventListener('click', () => {
    if(showMenu.style.display === 'none' || showMenu.style.display === '' ){
        showMenu.style.display = 'block';
        menuHambur.src= './assets/icon-close.svg';
        
    } else{
        showMenu.style.display = 'none';
        menuHambur.src= './assets/icon-hamburger.svg';
    }
})

document.addEventListener('click',  (event) => {
    if(!showMenu.contains(event.target) && event.target !== menuHambur){
        showMenu.style.display = "none";
        menuHambur.src= './assets/icon-hamburger.svg';
    }
})

btnDetalleStandar.addEventListener('click', () => {
    showDetallesStandar.style.display='flex';
})

showPriceStandar.addEventListener('click', () => {
    showDetallesStandar.style.display='none';
})


btnDetallesFull.addEventListener('click', () => {
    showDetallesFull.style.display='flex';
})

showPriceFull.addEventListener('click', () => {
    showDetallesFull.style.display='none';
})


btnDetallesPremium.addEventListener('click', () => {
    showDetallesPremium.style.display='flex';
})

showPricePremium.addEventListener('click', () => {
    showDetallesPremium.style.display='none';
})