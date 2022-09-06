let navbar = document.querySelector('.header__navbar');
let navbarHeader = document.querySelector('.header');
let contactInfo = document.querySelector('.contact-info');
let menuClickCounter = 0;

document.querySelector('#menu-btn').onclick = () => {



	if (menuClickCounter % 2 == 0) {
		navbar.classList.add('active');
		navbar.classList.remove('in-active');
		menuClickCounter = menuClickCounter + 1;

	}
	else {
		navbar.classList.add('in-active');
		navbar.classList.remove('active');
		menuClickCounter = menuClickCounter + 1;

		menuClickCounter = 0;
	}
	// navbarHeader.classList.toggle('active');
}


document.querySelector('#info-btn').onclick = () => {
	console.log("hello here")
	contactInfo.classList.add('active');
	contactInfo.classList.remove('in-active');
	console.log(contactInfo)


}

document.querySelector('#close-contact-info').onclick = () => {
	contactInfo.classList.remove('active');
	console.log(contactInfo)
	contactInfo.classList.add('in-active');



}

function navEffect() {
	var navElement = document.getElementsByClassName("header");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		navElement[0].classList.add("active");

	} else {
		navElement[0].classList.remove("active")

	}
}
window.onscroll = () => {
	navbar.classList.remove('active');
	navEffect();
}

var swiper = new Swiper(".home-slider", {
	loop: true,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
});
var swiper = new Swiper(".reviews-slider", {
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		991: {
			slidesPerView: 3,
		},
	},
});
