


function openImg(evt, name) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    const content = document.getElementById(name);
    content.style.display = "block";
    evt.currentTarget.className += " active";

    const swiperContainer = content.querySelector('.swiper-container');


    const swiper = new Swiper(swiperContainer, {

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });


}

const tabs = document.querySelectorAll('.tablinks');
if (tabs && tabs.length) {
    openImg({currentTarget: tabs[0]}, 'infantil');
}

const burger = document.querySelector("header .burger-menu");
const menu = document.querySelector(".menu-movil");
const close = document.querySelector(".menu-movil .icon-close");
const enlaces = document.querySelectorAll(".menu-movil .navigate-movil a");

enlaces.forEach(function (a) {
    a.onclick = function () {
        menu.classList.toggle("hide-menu");
    }
})

burger.onclick = function () {
    menu.classList.toggle("hide-menu");
}

close.onclick = function () {
    menu.classList.toggle("hide-menu");
}





// Modal

// Si se encuentra la modal, al pinchar en cualquier imagen se abrira dentro de la modal en grande
const modal = document.querySelector('.modal');
if (modal) {
    const modalContent = modal.querySelector('.modal-content');
    const modalClose = modal.querySelector('i');
    if (modalContent && modalClose) {
        const images = document.querySelectorAll('img');
        images.forEach(function (image) {
            image.onclick = function (event) {
                modalContent.innerHTML = '<img src="' + event.target.src + '"/>';
                modal.classList.add('show');
            }
        });
        modalClose.onclick = function () {
            modal.classList.remove('show');
        }
    }
}
