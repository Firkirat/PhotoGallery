let images = [
	{
		'src' : 'images/flowers-pink-small.jpg',
		'title' : 'Market in Münster',
		'description' : 'Market in Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=62071586'
	},
	{
		'src' : 'images/flowers-purple-small.jpg',
		'title' : 'Sentmaring Park',
		'description' : 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48576226'
	},
	{
		'src' : 'images/flowers-red-small.jpg',
		'title' : 'Poppies in cornfield',
		'description' : 'Poppies in cornfield, Dülmen,  North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=40957238'
	},
	{
		'src' : 'images/flowers-white-small.jpg',
		'title' : 'Daffodils in Sentmaring park',
		'description' : 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=48211466'
	},
	{
		'src' : 'images/flowers-yellow-small.jpg',
		'title' : 'Sunflowers in the hamlet Dernekamp',
		'description' : 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
		'url' : 'https://commons.wikimedia.org/w/index.php?curid=61514522'
	}
];

let listItems = document.getElementsByClassName('thumb-item');
let list = document.querySelector('ul');
let leftButton = document.querySelector('.arrow-left');
let rightButton = document.querySelector('.arrow-right');
let upButton = document.querySelector('.arrow-up');
let image = document.querySelector('figure img');
let caption = document.querySelector('figcaption');
let button = document.querySelector('.btn');

images.forEach(i => {
  let li = document.createElement('li');
	let img = document.createElement('img');
	img.setAttribute('src', i.src);
	img.setAttribute('url', i.url);
	img.setAttribute('alt', i.description);
	img.setAttribute('title', i.title);
	img.className = 'thumb-item';
	li.appendChild(img);
	list.appendChild(li);
});

upButton.onclick = () => {
  for (let listItem of listItems) {
    listItem.classList.toggle('hide');
  }
}

let index = 0;
showSlides(index);

function slideoperations(n) {
  index += n;
  showSlides(index);
}

function showSlides(n) {
  if (n >= images.length) { 
    n = 0; 
    index = 0
  }

  if (n < 0) { 
    n = images.length - 1; 
    index = images.length - 1;
  }

  let target = images[n];
  image.setAttribute('src', target.src.replace('small', 'large'));
  caption.textContent = target.title;
  button.setAttribute('href', target.url);
  
  active(n);
}

function active(n) {
  if (n >= images.length) { 
    n = 0; 
    slideIndex = 0
  }

  if (n < 0) { 
    currentSlide = images.length - 1; 
  }

  for (let item of listItems) {
    item.setAttribute('id', '');
  }

  listItems[n].setAttribute('id', 'checked');
} 


leftButton.onclick = () => {
  slideoperations(-1);
}

rightButton.onclick = () => {
  slideoperations(1);
}

setInterval(function() {
  slideoperations(1);
}, 5000);

for (let index in listItems) {
  listItems[index].onclick = () => {
    showSlides(index);
  }
}