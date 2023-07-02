
const sociosTabla = document.querySelector("table.socios");
const altaSocioForm = document.querySelector("form.altaSocio");
const membresias = {
    activa: "Activa",
    vencida: "Vencida"
}

const socios = [
    {
        id: 1,
        nombre: "Lucio Martinez",
        membresia: membresias.vencida,
        fechaVencimiento: new Date().toLocaleString(),
        porVencer: false
    },
    {
        id: 1,
        nombre: "Andrea Olivo",
        membresia: membresias.activa,
        fechaVencimiento: new Date().toLocaleString(),
        porVencer: false
    },
    {
        id: 1,
        nombre: "Evelyn Morales",
        membresia: membresias.activa,
        fechaVencimiento: new Date().toLocaleString(),
        porVencer: false
    },
    {
        id: 1,
        nombre: "Diego Reyez",
        membresia: membresias.activa,
        fechaVencimiento: new Date().toLocaleString(),
        porVencer: true
    },
    {
        id: 1,
        nombre: "Jesus Rocha",
        membresia: membresias.vencida,
        fechaVencimiento: new Date().toLocaleString(),
        porVencer: false
    }
];

if (!localStorage.getItem("socios")) {
    localStorage.setItem("socios", JSON.stringify(socios))
}

function agregarSocio(socio) {
    let socios = JSON.parse(localStorage.getItem("socios"));
    socios.push(socio)
    localStorage.setItem("socios", JSON.stringify(socios))
}

function mostrarSocios(){
    let socios = JSON.parse(localStorage.getItem("socios"));
    socios.forEach(socio => {
        let html = `
        <tr class="${ socio.membresia == "Vencida" ?  "table-danger": (socio.porVencer == true ? "table-warning":"") }" data-id="${socio.id}">
            <td>${socio.nombre}</td>
            <td>${socio.membresia}</td>
            <td>${socio.fechaVencimiento}</td>
        </tr>
        `;
        sociosTabla.innerHTML+= html;
    });
}

if(altaSocioForm){
    altaSocioForm.addEventListener("submit",function(e){
        e.preventDefault();
        let nombres = altaSocioForm.nombres.value.trim();
        let apellidos = altaSocioForm.apellidos.value.trim();
        let fechaVencimiento = "08/02/2023";
        let socio = {
            id:Math .floor(Math.random() * 10000),
            nombre: nombres + " " + apellidos,
            membresia:membresias.activa,
            fechaVencimiento,
            porVencer:false
        };
        agregarSocio(socio);
        Swal.fire(
            'Ok!',
            'Se dio de alta un nuevo socio!',
            'success'
          );
        setTimeout(function(){
            window.location.href = "index.html";
        },2000);
    });
}

mostrarSocios();

