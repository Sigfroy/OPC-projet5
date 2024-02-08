const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//* Déclaration des variables  *//

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dots span");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let currentSlide = 0;

//* ajout des eventListener flèches gauche et droite  *//

arrow_left.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	updateSlide();
});

arrow_right.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
});

//* création fonction updateSlide  *//

function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
    updateBulletPoint();
}

//* création fonction updateBulletPoint  *//



