const navigation = document.querySelector(".scroll");
const menu_expanded = document.querySelector(".menu-expanded");

navigation.classList.remove("scroll");
menu_expanded.classList.remove("menu-expanded")

function onScroll(){
    if (scrollY <= 0){
        navigation.classList.remove("scroll");
    }else{
        navigation.classList.add("scroll");
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
#info, #info h4, #info h2, #info p, #info img`);

ScrollReveal(revealOptions).reveal(revealOrdem); // Scroll Reveal Library