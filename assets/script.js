//About us
function mostrarAbout(){ 
    document.getElementById('aboutUs').style.display = "block"; 
} 
function ocultarAbout(){ 
    document.getElementById('aboutUs').style.display = "none"; 
} 
//Carrusel
function mostrarMensaje(){ 
    document.getElementById('carouselExample').style.display = "block"; 
} 
function ocultarMensaje(){ 
    document.getElementById('carouselExample').style.display = "none"; 
} 
//Buscar por nombre
var formulario = document.getElementById('form')

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    var nameDigimon = document.getElementById("nombre").value;
    console.log(nameDigimon)
    getDigimon(nameDigimon)

})

function getDigimon(name) {
    var promesa = fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)

    promesa
        .then(function (result) {
            return result.json()
        })
        .then(function (json) {
            console.log(json)
            injectionHtml(json[0]);
        })
        .catch(function (error) {

            console.log(error);
        })

}

function injectionHtml(digimon) {
    var cardContainer = document.getElementById("modal")
    var card = ` 
            <div class="card text-center mb-3 text-bg-dark";">
                <img src="${digimon.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${digimon.name}</h5>
                    <p class="card-text">${digimon.level}</p>
                </div>
            </div>
    `
    cardContainer.innerHTML = card
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
    myModal.show()
}
//Tabla
var contenido = document.querySelector("#contenido");
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(datos => {
        tabla(datos)
    });

function tabla(datos) {
    contenido.innerHTML = ""
    for (let temp of datos) {
        contenido.innerHTML +=
            ` 
            <tr>
            <th scope="row">${temp.name}</th>
            <td> <img src="${temp.img}" alt="" height="50"></td>
            <td>${temp.level}</td>
            </tr>
            `
    }
}


