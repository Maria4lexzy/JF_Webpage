let navbar = document.querySelector('.header__navbar');
let navLinks = document.querySelectorAll('nav a');
let navbarHeader = document.querySelector('.header');
let contactInfo = document.querySelector('.contact-menu');
const section_x = document.getElementsByTagName("section");

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

function scrollSpy() {
	console.log("SCROLL SPY " + section_x.length);
	for (var sec = 0; sec < section_x.length; sec++) {
		let top = window.scrollY;
		let offset = section_x[sec].offsetTop - 250;
		let height = section_x[sec].offsetHeight;
		let id = section_x[sec].getAttribute('id');
		console.log(navLinks + "kslfmslflkj");
		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('activee');
				document.querySelector('nav a[href*=' + id + ']').classList.add('activee');
			})
		}
	}


}
window.onscroll = () => {
	// navbar.classList.remove('active');
	navEffect();
	scrollSpy();
}

var swiper = new Swiper(".home__swiper", {
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 5000,
	},
	// navigation: {
	// 	nextEl: ".home__btn-next",
	// 	prevEl: ".home__btn-prev"
	// },
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




// window.onscroll = () => {
// 	var current = "";

// 	sections.forEach((section) => {
// 		const sectionTop = section.offsetTop;

// 		if (pageYOffset >= sectionTop) {
// 			current = section.getAttribute("id");
// 		}
// 	});

// 	navLi.forEach((li) => {
// 		li.classList.remove("activee");
// 		if (li.classList.contains(current)) {
// 			li.classList.add("activee");
// 		}
// 	});
// };


// const links = document.querySelectorAll('.nav-link');

// if (links.length) {
// 	links.forEach((link) => {
// 		link.addEventListener('click', (e) => {
// 			links.forEach((link) => {
// 				link.classList.remove('active');
// 			});
// 			e.preventDefault();
// 			link.classList.add('active');
// 		});
// 	});
// }


// spyScrolling();

