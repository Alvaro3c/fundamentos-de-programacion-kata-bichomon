const titleGeneration1 = document.querySelector('#gen-1');
const infoCardList = document.querySelector(".infocard-list");
const images = document.querySelectorAll("img");
const voladores = document.querySelectorAll(".infocard-lg-data text-muted, .itype flying")
const infocard = document.querySelectorAll(".infocard")

//1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
titleGeneration1.innerHTML = 'Generasión 1 Pokimon';

//2 Cambia el color de fondo de la primera generación de Pokimon.
infoCardList.style.backgroundColor = 'lightblue';

//3 Imprime por consola la URL de la página.    
console.log(window.location.href)

//4 Imprime por consola el dominio de la página.

//5 Imprime todos los nodos de imagen.
console.log(images);


//6 Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
for (let i = 0; i < images.length; i++) {
    images[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
}
//7 Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
console.log(infocard)
console.log(voladores)