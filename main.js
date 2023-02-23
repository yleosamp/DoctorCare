const navigation = document.querySelector(".scroll"); // Procura todos "scroll" do documento
const menu_expanded = document.querySelector(".menu-expanded"); // Procura todos "menu-expanded" do documento

menu_expanded.classList.remove("menu-expanded") // Deleta a classe "menu-expanded" do body HTML
navigation.classList.remove('scroll'); // Deleta a classe "scroll" do Body HTML
up.classList.remove('show');

function onScroll(){
    showNavOnScroll()
    upButton()
}

function showNavOnScroll(){
    if (scrollY <= 0){
        navigation.classList.remove('scroll');
    }else{
        navigation.classList.add('scroll');
    }
}

function upButton(){
    if (scrollY > 500){
        up.classList.add('show');
    }else{
        up.classList.remove('show');
    }
}

function onMenuClick(){
    menu_expanded.classList.add("menu-expanded");
}

function onCloseClick(){
    menu_expanded.classList.remove("menu-expanded");
}

var revealOptions = {
    origin: 'top',
    distance: '30px',
    duration: 700,
}

var revealOrdem = (`#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#info, #info h4, #info h2, #info p, #info img,
#contact, #contact h2, #contact p, #contact a, #contact .boy`);

ScrollReveal(revealOptions).reveal(revealOrdem); // Scroll Reveal Library
