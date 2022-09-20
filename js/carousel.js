//Carousel Productos
let swiper1 = new Swiper('.swiper-container1', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination1',
		clickable: true,
	},


	breakpoints: {
		620: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1240: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	}
});

//Carousel Nuestros Clientes 
let swiper2 = new Swiper('.swiper-container2', {
	navigation: {
		nextEl: '#button-next',
		prevEl: '#button-prev',
	},
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination2',
		clickable: true,
	},


	breakpoints: {
		620: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		680: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		1240: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	}
});

