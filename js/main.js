//alert('JavaScript file is linked')
// change NAVBAR stlying on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

//to make the answer to FAQ visible or hide it 
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq-icon i');
        if(icon.className === 'fa-solid fa-question'){
            icon.className = "fa-solid fa-check-double"
        } else {
            icon.className = "fa-solid fa-question"
        }
    })
})

// NAV MENU TOGGLE 

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open_menu_icon");
const closeBtn = document.querySelector("#close_menu_icon");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display = "none";
})

// CREATE A NEW FUNCTION CLOSE NAV MENU

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display ="none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

