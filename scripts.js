const schemeSvg = document.querySelector('.scheme-svg');
const tatalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active');
        let totalSeats = schemeSvg.querySelectorAll('.active').length;
        totalPrice = totalSeats * cost;
        tatalPriceTag.textContent = totalPrice;
    }
});
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
menuButton.addEventListener('click', ()=> {
    console.log('Клик по меню');
    menu.classList.toggle('is-open')
});

var button = document.querySelector('.film-trailer');
var footer = document.querySelector('#footer');

button.addEventListener('click', () => {
    scrollTo(footer);
});