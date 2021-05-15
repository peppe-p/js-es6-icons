// Milestone 1
//Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.
const elementList = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];


//Milestone 2
//Coloriamo le icone per tipo
elementList.forEach(function (element) {
    console.log(element.name);
    const { name, prefix, type, family } = element;
    const markup = `
        <div class="${type} icon_div d_flex justify_center align_center f_col">
            <i class="${family} ${prefix}${name}"></i>
            <h4>${name.toUpperCase()}</h4>
        </div>
    `;
    const domEl = document.querySelector(".icons_list");
    domEl.insertAdjacentHTML("beforeend", markup);
});


//Milestone 3
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const type = document.getElementById("type");
type.addEventListener("change", function () {
    let tipo = this.value;
    let icons_all = document.querySelectorAll(".icon_div");
    let icons_user = document.querySelectorAll(".user");
    let icons_animal = document.querySelectorAll(".animal");
    let icons_vegetable = document.querySelectorAll(".vegetable");
    // SE SELEZIONI TUTTO ////////////////
    if (type.value == "all") {
        icons_all.forEach((div) => {
            div.classList.add("showed");
            div.classList.remove("none");
        });
        // SE SELEZIONI UTENTE ////////////////
    } else if (type.value == "user") {
        icons_user.forEach((div) => {
            div.classList.add("showed");
            div.classList.remove("none");
        });
        icons_animal.forEach((div) => {
            div.classList.add("none");
            div.classList.remove("showed");
        });
        icons_vegetable.forEach((div) => {
            div.classList.add("none");
            div.classList.remove("showed");
        });
        // SE SELEZIONI ANIMALI ////////////////
    } else if (type.value == "animal") {
        icons_user.forEach((div) => {
            div.classList.add("none");
            div.classList.remove("showed");
        });
        icons_animal.forEach((div) => {
            div.classList.add("showed");
            div.classList.remove("none");
        });
        icons_vegetable.forEach((div) => {
            div.classList.add("none");
            div.classList.remove("showed");
        });
        // SE SELEZIONI VERDURE ////////////////
    } else if (type.value == "vegetables") {
        icons_user.forEach((div) => {
            div.classList.add("none");
            div.classList.remove("showed");
        });
        icons_animal.forEach((div) => {
            div.classList.add("none");
            div.classList.remove("showed");
        });
        icons_vegetable.forEach((div) => {
            div.classList.add("showed");
            div.classList.remove("none");
        });
    }
});