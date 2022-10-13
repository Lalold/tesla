let order_btn = document.querySelectorAll('.ordering');
let order_window = document.querySelector('.model1')
let header = document.querySelector('.header');
let main = document.querySelector('.main');
let send_btn = document.querySelector('.send-data'); 
let header_menu = document.querySelector('.header__menu');
let header_unify = document.querySelector('.unify-block');

header_menu.addEventListener('click', function() {
    header_unify.classList.toggle('active');
    header_menu.classList.toggle('active');
    
})

if (header_menu.active == true) {
    console.log(2);
}

for(let i = 0; i < order_btn.length; i++) {
    order_btn[i].onclick = () => {
        header.style.display = "none";
        main.style.display = "none";
        order_window.style.display = "flex";    
    }
}

send_btn.onclick = () => {
    header.style.display = "block";
    main.style.display = "block";
    order_window.style.display = "none";    
}

