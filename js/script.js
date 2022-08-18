let navbar = document.querySelector('.header .navbar');
let navbarHeader = document.querySelector('.header');

let contactInfo = document.querySelector('.contact-info ');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	// navbarHeader.classList.toggle('active');
}


document.querySelector('#info-btn').onclick = () => {
	console.log("hello here")
	contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
	contactInfo.classList.remove('active');
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

var swiper = new Swiper(".blogs-slider", {
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

var swiper = new Swiper(".logo-slider", {
	loop: true,
	grabCursor: true,
	spaceBetween: 20,
	breakpoints: {
		450: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 5,
		},
	},
});
