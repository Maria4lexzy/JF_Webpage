let navbar=document.querySelector(".header__navbar"),navLinks=document.querySelectorAll("nav a"),navbarHeader=document.querySelector(".header"),contactInfo=document.querySelector(".contact-menu");const section_x=document.getElementsByTagName("section");let menuClickCounter=0;function navEffect(){var e=document.getElementsByClassName("header");document.body.scrollTop>50||document.documentElement.scrollTop>50?(console.log(document.body.scrollTop),e[0].classList.add("active")):e[0].classList.remove("active")}function scrollSpy(){for(var e=0;e<section_x.length;e++){let o=window.scrollY,t=section_x[e].offsetTop-250,c=section_x[e].offsetHeight,n=section_x[e].getAttribute("id");o>=t&&o<t+c&&navLinks.forEach((e=>{e.classList.remove("activee"),document.querySelector("nav a[href*="+n+"]").classList.add("activee")}))}}document.querySelector("#menu-btn").onclick=()=>{menuClickCounter%2==0?(navbar.classList.add("active"),navbar.classList.remove("in-active"),menuClickCounter+=1):(navbar.classList.add("in-active"),navbar.classList.remove("active"),menuClickCounter+=1,menuClickCounter=0)},document.querySelector("#info-btn").onclick=()=>{console.log("hello here"),contactInfo.classList.add("active"),contactInfo.classList.remove("in-active"),console.log(contactInfo)},document.querySelector("#close-contact-info").onclick=()=>{contactInfo.classList.remove("active"),console.log(contactInfo),contactInfo.classList.add("in-active")},window.onscroll=()=>{navEffect(),scrollSpy()};var swiper=new Swiper(".home__swiper",{loop:!0,grabCursor:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});swiper=new Swiper(".reviews-slider",{loop:!0,grabCursor:!0,spaceBetween:20,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},991:{slidesPerView:3}}});
//# sourceMappingURL=script.js.map