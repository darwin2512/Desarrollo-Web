//variables globales

const btnBotonees = document.querySelector("#btnBotones");
const botones = document.querySelector("#botones");
const fondo = document.querySelector("#fondo");
//const textos = document.querySelector("#texto");


(() => {
    btnBotonees.addEventListener('click', agregarBotones);
    botones.addEventListener('click', delegacion);
})();

(() => {
    const color = localStorage.getItem('colorFondo');
    if (color == null) {
        fondo.className = 'bg-dark';
    } else {
        fondo.className = color;
    }
})();


//document.getElementById("ejemplo").style.font="italic bold 18px arial,serif";



function delegacion(e) {
    e.preventDefault();

    const colorBoton = e.target.classList[1];
    //console.log(e.target.classList[1]);

    switch (colorBoton) {
        case ('btn-primary'):
            // console.log("diste un click en btn-primary")
            fondo.className = "bg-primary";
            localStorage.setItem('colorFondo', "bg-primary");
            break;
        case ('btn-secondary'):
            fondo.className = 'bg-secondary';
            localStorage.setItem('colorFondo', "bg-secondary");
            break;
        case ('btn-danger'):
            fondo.className = 'bg-danger';
            localStorage.setItem('colorFondo', "bg-danger");
            break;
        case ('btn-success'):
            fondo.className = 'bg-success';
            localStorage.setItem('colorFondo', "bg-success");
            break;
        case ('btn-warning'):
            fondo.className = 'bg-warning';
            localStorage.setItem('colorFondo', "bg-warning");
            break;
    }
}

function agregarBotones(e) {
    e.preventDefault();
    botones.innerHTML = `<button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button> 
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-warning">warning</button>`;

    //agregarTexto(e);
    //formato();
   


}


//localStorage: guarda cadenas de texto
//, clave => valor

// const nombre = 'Ed';
// localStorage.setItem('NombreUsuario',nombre);