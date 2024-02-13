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

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dots span");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

let currentSlide = 0;

arrowLeft.addEventListener("click", () => {
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
    updateSlide();
});

arrowRight.addEventListener("click", () => {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlide();
});


//* création fonction updateSlide  *//

function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
    updateBulletPoint();
}

//* création fonction updateBulletPoint  *//
function updateBulletPoint() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}



