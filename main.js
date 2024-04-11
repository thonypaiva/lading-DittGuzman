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

const btnTraficoAvanzado = document.getElementById('btn--detalles--avanzado--trafico');
const showDetallesAvanzado = document.getElementById('detalles--avanzado--trafico');
const showDetallesTraficoAvanzado = document.getElementById('precio--avanzado--trafico');

const btnTraficoStandar = document.getElementById('btn--detalles--standar--trafico');
const detallesTraficoStandar = document.getElementById('estandar--trafico');
const showDetallesTraficoStandar = document.getElementById('precio--estandar--trafico');

const btnTraficoPremiun = document.getElementById('btn--detalles--premiun--trafico');
const detallesTraficoPremiun = document.getElementById('premiun--trafico');
const showDetallesTraficoPremiun = document.getElementById('precio--premiun--trafico');


menuHambur.addEventListener('click', () => {
    if(showMenu.style.display === 'none' || showMenu.style.display === '' ){
        showMenu.style.display = 'block';
        menuHambur.src= './src/assets/icon-close.jfif';
        showMenu.style.transition="ease-in-out"
        
    } else{
        showMenu.style.display = 'none';
        menuHambur.src= './src/assets/icon-open.jfif';
    }
})

document.addEventListener('click',  (event) => {
    if(!showMenu.contains(event.target) && event.target !== menuHambur){
        showMenu.style.display = "none";
        menuHambur.src= './src/assets/icon-open.jfif';
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


btnTraficoAvanzado.addEventListener('click', () => {
    showDetallesAvanzado.style.display='flex';
})

showDetallesTraficoAvanzado.addEventListener('click', () => {
    showDetallesAvanzado.style.display='none';
})


btnTraficoStandar.addEventListener('click', () => {
    detallesTraficoStandar.style.display='flex';
})

showDetallesTraficoStandar.addEventListener('click', () => {
    detallesTraficoStandar.style.display='none';
})

btnTraficoPremiun.addEventListener('click', () => {
    detallesTraficoPremiun.style.display='flex';
})

showDetallesTraficoPremiun.addEventListener('click', () => {
    detallesTraficoPremiun.style.display='none';
})