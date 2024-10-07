// EJERCICIO 01
function getAllBreeds () {
    let breeds = fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => Object.keys(data.message));
    return breeds;
}
getAllBreeds();


// EJERCICIO 02
function getRandomDog () {
    let randoms = fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => JSON.stringify(Object.values(data)));
    return randoms;
}

getRandomDog();

// EJERCICIO 03

function getAllImagesByBreed () {
    let imagesByBreed = fetch ('https://dog.ceo/api/breed/komondor/images')
    .then(res => res.json())
    .then(data => JSON.stringify(Object.values(data.message))); 
    return imagesByBreed;
}

getAllImagesByBreed();

//EJERCICIO 04

function getAllImagesByBreed2(breed) {
    let imagesByBreed2 = fetch (`https://dog.ceo/api/breed/${breed}/images`)  //Template string para realizar busqueda del parámetro ${}
    .then(res => res.json())
    .then(data => JSON.stringify(Object.values(data.message))); 
    return imagesByBreed2;
}

getAllImagesByBreed2();

//EJERCICIO 05

function getGitHubUserProfile(username) {
    let busqueda = fetch (`/datos.json/${username}`)  //Template string para realizar la busqueda dentro del parámetro ${}
    .then(res => res.json())
    .then(data => data.name)
    .catch(err => console.log(err)); 
    return busqueda;
}

console.log(getGitHubUserProfile("Alberto Enríquez"));

//EJERCICIO 06............................................................................................................................................

function printGithubUserProfile(username) {
    let busquedaTres = fetch (`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(data => data.JSON.stringify(Object.values(data.username)))
    .then(data => data.JSON.parseInt)
    .catch(err => console.log(err)); 
    return busquedaTres;
}

printGithubUserProfile("alenriquez96");

// EJERCICIO 07

