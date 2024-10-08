// EJERCICIO 01
function getAllBreeds () {
    let breeds = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => Object.keys(data.message));
    return breeds;
}


// EJERCICIO 02
function getRandomDog () {
    let randoms = fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => data.message);
    return randoms;
}   

getRandomDog();

// EJERCICIO 03

function getAllImagesByBreed () {
    let imagesByBreed = fetch ('https://dog.ceo/api/breed/komondor/images')
    .then(res => res.json())
    .then(data => data.message); 
    return imagesByBreed;
}

getAllImagesByBreed();

//EJERCICIO 04

function getAllImagesByBreed2(breed) {
    let imagesByBreed2 = fetch (`https://dog.ceo/api/breed/${breed}/images`)  //Template string para realizar busqueda del parámetro ${}
    .then(res => res.json())
    .then(data => data.message); 
    return imagesByBreed2;
}

getAllImagesByBreed2();

//EJERCICIO 05
// Declarara una función getGitHubUserProfile(username) que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

function getGitHubUserProfile(username) {
    const url = `https://api.github.com/users/${username}`
    let busqueda = fetch (url)
    .then(res => res.json())
    .then(data => {
        let nombreUsuario = data;
        return nombreUsuario;
    })
    .catch(err => console.log(err)); 
    return busqueda;
}

console.log(getGitHubUserProfile("Alenriquez96")).then(data => {
    console.log(data.username)})


// EJERCICIO 06
// Declara una función printGithubUserProfile(username) que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

function printGithubUserProfile(username) {
    let response = {};
    fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => {
        response.img = data.avatar_url;
        response.name = data.name;
        const dataList = document.querySelector("body");
        data.forEach(dat => {
            const lista = document.createElement('li');
            lista.textContent = `${dat.img}: ${dat.name}`;
            dataList.appendChild(lista);
        });
    return response;
});
}
printGithubUserProfile("alenriquez96");

let response = fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
             response = {
                img: data.avatar_url,
                name: data.name
            };
           
            
            const pintarDom = document.querySelector("body");
            const img = document.createElement("img");
            img.src = response.img;
            const lista = document.createElement('li');
            lista.textContent = `${response.name}`; //${response.img}: 
            pintarDom.appendChild(lista);
            pintarDom.appendChild(img);
            
        });
        return response;


// EJERCICIO 07

