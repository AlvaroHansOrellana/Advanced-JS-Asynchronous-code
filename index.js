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

    let response = fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            let img = data.avatar_url;
            let name = data.name;
            return { img, name }
        })
        return response
}
//aqui se llama a la funcion
printGithubUserProfile('alenriquez96').then(response => {
    
    const imagen = document.createElement("img");
    imagen.src = response.img;
    imagen.alt = `Avatar de ${response.name}`
    const lista = document.createElement('li');
    lista.textContent = `${response.name}`;
    document.body.appendChild(lista);
    document.body.appendChild(imagen);

});


// 9.- Dada una lista de usuarios de github guardada en una array,crea una funcion fetchGithubUsers(userNames) que utilice 'https://api.github.com/users/${name}' para obtener el nombre de cada usuario.
// Objetivo: Usar Promise.all()
// Recordatorio: Una llamada a fetch() devuelve un objeto promesa.
// Pregunta. ¿cuántas promesas tendremos?

function fetchGithubUsers(userNames) {
    Promise.all(
        userNames.map(nombre => fetch(`./jason ${nombre}`).then(res => res.json()))
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                return data[i].name;
            }
        })
    )}