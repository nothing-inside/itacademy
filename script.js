document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.list-menu');

    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })

    let listMenu = document.querySelectorAll('.list-menu .menu-item')
    listMenu.forEach((element)=>{
        element.addEventListener('click',function(){
            menuBtn.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
})