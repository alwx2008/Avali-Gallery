let div = document.querySelector('div');

const images = ["../images/download.jpeg", "../images/download (1).jpeg", "../images/download (2).jpeg", "../images/download (3).jpeg", "../images/download (4).jpeg", "../images/images.jpeg", "../images/images (1).jpeg", "../images/images (2).jpeg", "../images/images (3).jpeg", "../images/images (4).jpeg", "../images/images (5).jpeg", "../images/images (6).jpeg", "../images/images (7).jpeg", "../images/images (8).jpeg", "../images/images (9).jpeg", "../images/images (10).jpeg", "../images/images (11).jpeg", "../images/images (12).jpeg", "../images/images (13).jpeg", "../images/images (14).jpeg"];

function add(item) {
	let image = document.createElement('img');
	image.src = item.value;
	div.appendChild(image);
}

images.foreach(add);