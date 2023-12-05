
const wrapper = document.querySelector('#wrapper')
const carousel = document.querySelector('#image-carousel')
const images = document.querySelectorAll('.painting img')
const btn = document.querySelectorAll('button')
const previous = document.querySelector('#prev')
const nxt = document.querySelector('#next')
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const span = document.querySelector('.close');


images.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`
})
let counter = 0;

const slideImage = () => {
	images.forEach(
		(e) => {
			e.style.transform = `translateX(-${counter * 100}%)`
		}
	)
}

const next = () => {
	if (counter < images.length - 1) {
		counter++;
	} else {
		counter = 0;
	}
	slideImage();
	console.log(counter);
};

const prev = () => {
	if (counter > 0) {
		counter--;
	} else {
		counter = images.length - 1;
	}
	slideImage();
	console.log(counter);
};


document.addEventListener('DOMContentLoaded', (event) => {

	images.forEach((img) => {
		img.addEventListener('click', () => {
			modal.style.display = 'block';
			modalImg.src = img.src;
			captionText.innerHTML = img.alt;
		});
	});

	span.addEventListener('click', () => {
		modal.style.display = 'none';
	});

});


