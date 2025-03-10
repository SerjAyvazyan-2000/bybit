


const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuBg = document.querySelector('.menu-bg');
const headerBody = document.querySelector('.header-body');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    document.querySelectorAll('.menu-list a').forEach(link => {
        link.addEventListener("click", closeMenu);
    });
    menuBg.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');
        menuBg.classList.add('active');
        headerBody.classList.add('active');


    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');
        menuBg.classList.remove('active');
        headerBody.classList.remove('active');

    }


});

window.addEventListener('scroll', function () {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 1500) {
        const container = document.querySelector(".hero-clues");
        const marquee = document.querySelector(".marquee");

        const wrapper = document.createElement("div");
        wrapper.classList.add("marquee-container");
        wrapper.appendChild(marquee);

        const clone = marquee.cloneNode(true);
        wrapper.appendChild(clone);

        container.appendChild(wrapper);

        let speed = 0.5;

        function animate() {
            let position = 0;
            function step() {
                position -= speed;
                if (Math.abs(position) >= marquee.clientWidth) {
                    position = 0; // Плавное повторение
                }
                wrapper.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(step);
            }
            step();
        }

        animate();
    }
});



document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 1500) {
        const container = document.querySelector(".trust-clues");
        const marquee = document.querySelector(".trust-marquee");

        const wrapper = document.createElement("div");
        wrapper.classList.add("marquee-container");
        wrapper.appendChild(marquee);

        const clone = marquee.cloneNode(true);
        wrapper.appendChild(clone);

        container.appendChild(wrapper);

        let speed = 0.5;

        function animate() {
            let position = 0;
            function step() {
                position -= speed;
                if (Math.abs(position) >= marquee.clientWidth) {
                    position = 0; // Плавное повторение
                }
                wrapper.style.transform = `translateX(${position}px)`;
                requestAnimationFrame(step);
            }
            step();
        }

        animate();
    }
});
