/// Créer un bouton afin de choisir une image aléatoire. Utiliser la fonction en bas de page
/// Afficher le numéro de l'image (ex : 2/6) et vérifier que cela fonctionne lorsqu'on clique sur suivant, précédent et aléatoire
/// Ajouter un alt et une légende aux images
/// Lorsqu'on clique sur l'image, faire apparaître la légende
/// Ajouter un bouton pour aller à la dernière image
/// Ajouter un bouton pour aller à la première image
// Ajouter un bouton play et stop afin de lancer le défilement des images automatiquement ou de stop le défilement. Utiliser la fonction setInterval() et clearInterval()
// Ajouter la possibilité de faire défiler les images avec les flèches directionnelles
// Créer un champ permettant d'ajouter une image au slider provenant d'internet (copier coller le lien d'une image dans ce champ ex : http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg)


// function getRandomInteger(iMin, iMax) {

//     return Math.round(Math.random() * (iMax - iMin)) + iMin;

// }

var currentImg = 0
var tabImg = [
{alter : "img/1.jpg", legend : "Melbourne"},
{alter : "img/2.jpg", legend : "New-York"},
{alter : "img/3.jpg", legend : "Macao"},
{alter : "img/4.jpg", legend : "Hong-Kong"},
{alter : "img/5.jpg", legend : "Zion"},
{alter : "img/6.jpg", legend : "Paris"}
];



var img = document.getElementById("img");
img.setAttribute("src", tabImg[0].alter);

var next = document.getElementById("next");
var prev = document.getElementById("prev");
var first = document.getElementById("first");
var last = document.getElementById("last");
var random = document.getElementById("random");
var numero = document.getElementById('number');
var legend = document.getElementById('legend');
var play = document.getElementById("play");
var stop = document.getElementById("stop");

numero.innerHTML = (currentImg+1) + "/" + tabImg.length;

// SUIVANT

next.addEventListener("click", function()     	
{ 
	if(currentImg == tabImg.length -1) 
	{
		img.setAttribute("src", tabImg[0].alter);
		currentImg = 0;
		numero.innerHTML = (currentImg+1) + "/" + tabImg.length;
		legend.innerHTML = tabImg[currentImg].legend;
	}
	else
	{
		currentImg++
		img.setAttribute("src", tabImg[currentImg].alter);
		numero.innerHTML = (currentImg+1) + "/" + tabImg.length;
		legend.innerHTML = tabImg[currentImg].legend;
	}
});

// PRECEDENT


prev.addEventListener("click", function()     	
{ 
	if(currentImg == 0) 
	{
		img.setAttribute("src", tabImg[tabImg.length-1].alter);
		currentImg = 5;
		numero.innerHTML = (currentImg+1) + "/" + tabImg.length;
		legend.innerHTML = tabImg[currentImg].legend;
	}
	else
	{
		currentImg--
		img.setAttribute("src", tabImg[currentImg].alter);
		numero.innerHTML = (currentImg+1) + "/" + tabImg.length;
		legend.innerHTML = tabImg[currentImg].legend;
	}
});

// RANDOM

function getRandomInteger(iMin, iMax) {

	return Math.round(Math.random() * (iMax - iMin)) + iMin;

}

random.addEventListener("click", function()     	
{ 
	var rdmNb = getRandomInteger(0, tabImg.length-1);
	img.setAttribute("src", tabImg[rdmNb].alter);
	var numero = document.getElementById('number');
	numero.innerHTML = (rdmNb+1) + "/" + tabImg.length;
	legend.innerHTML = tabImg[rdmNb].legend;
});

// PREMIERE IMAGE 

first.addEventListener("click", function()     	
{ 
	img.setAttribute("src", tabImg[0].alter);
	var numero = document.getElementById('number');
	numero.innerHTML = 1 + "/" + tabImg.length;
	legend.innerHTML = tabImg[0].legend;
});

// DERNIERE IMAGE

last.addEventListener("click", function()     	
{ 
	img.setAttribute("src", tabImg[tabImg.length-1].alter);
	var numero = document.getElementById('number');
	numero.innerHTML = tabImg.length + "/" + tabImg.length;
	legend.innerHTML = tabImg[tabImg.length-1].legend;
});

// FLECHES DIRECTIONNELLES

// document.querySelector("body")("keydown", function()     	
// { 
// 	currentImg++
// 	img.setAttribute("src", tabImg[currentImg].alter);
// 	numero.innerHTML = (currentImg+1) + "/" + tabImg.length;
// 	legend.innerHTML = tabImg[currentImg].legend;
// });

// SET INTERVAL

play.addEventListener("click", function()     	
{ 
	currentImg++
	img.setAttribute("src", tabImg[currentImg].alter);
	numero.innerHTML = (currentImg+1) + "/" + tabImg.length;
	legend.innerHTML = tabImg[currentImg].legend;
	setInterval("function",2000);
});