

//Storage org-dest y fechas
let inporigen = localStorage.getItem('origen');
let inpdestino = localStorage.getItem('destino');
let inpfechaI = localStorage.getItem('fechaIda');
let inpfechaV = localStorage.getItem('fechaVuelta');

//Radio btn ida y vuelta
const rbtIdayVuelta = document.getElementById("select_ida_vuelta");
const rbtSoloIda = document.getElementById("select_ida");



//Boton buscar
const btnBuscar = document.getElementById("boton");

const mostrarContenido = document.getElementById("mostrarContenido");
//Form
const formulario = document.querySelector('#frmVuelos');

//inputs origen destin
const origen = document.querySelector('#buscar_origen');
const destino = document.querySelector('#buscar_destino');
const contenidoDestino = document.querySelector('#destinoGuardado');
const contenidoOrigen = document.querySelector('#origenGuardado');
//Form
const contFormulario = document.querySelector('#div-form');
//Inputs fechas 
const fechaIda = document.querySelector('#fecha_ida');
const fechaVuelta = document.querySelector('#fecha_vuelta');
const fecha_Ida = document.querySelector('#fecha__ida');
const fecha_Vuelta = document.querySelector('#fecha__vuelta');
//Ticket 
const modal = document.querySelector('#contTicket');
//Login
const contBienvenida = document.querySelector(".loginContainer");
const datosActUsuario = localStorage.getItem("userData");


//====================================================================


//Login
if(datosActUsuario){
  const datosActualesUsuario = JSON.parse(datosActUsuario)
  console.log(datosActualesUsuario)
  const contMsjBienvenida = document.createElement("div")
  const mensajeBienvenida = document.createElement("h3")
  mensajeBienvenida.textContent = `Bienvenido ${datosActualesUsuario.nombre} ${datosActualesUsuario.apellido}`
  //Borramos el contenido de contBienvenida e insertarmos en container el msj bienvenida
  contBienvenida.innerHTML=""
  contBienvenida.classList.remove("loginContainer")
  contBienvenida.classList.add("welcomeMsj")
  contMsjBienvenida.appendChild(mensajeBienvenida)
  contBienvenida.append(contMsjBienvenida)
}
else{
  const loginForm = document.querySelector(".login")
  loginForm.addEventListener("submit", (e)=>{
    const userData = {}
    e.preventDefault()
    for(i=0; i<e.target.children.length; i++){
      //Si el child del formulario es un input(no es un label), coloca la key de ese input y su valor dentro del objeto userData. Despues mete ese objeto en localStorage
      if(e.target.children[i].localName==="input")
      userData[e.target.children[i].name]=e.target.children[i].value
    }
    localStorage.setItem("userData", JSON.stringify(userData))
    //Recargamos el sitio una vez que se setio en localstorage la userData
    location.reload()
  })
}
//Constructor con todos los datos del vuelo 
class vuelos {
  constructor(todosLosVuelos) 
  {this.vuelo.toLowerCase()  = todosLosVuelos.vuelo;
   this.origen.toLowerCase() = todosLosVuelos.origen;
   this.destino.toLowerCase()  = todosLosVuelos.destino;
   this.clase.toLowerCase()  = todosLosVuelos.clase;
   this.viajeros = todosLosVuelos.viajeros;
   this.precio = todosLosVuelos.precio;
  }
}

//Array con todos los datos y vuelos disponibles
const todosLosVuelos = [
  { vuelo: 'Argentina -> Brasil',origen:'Argentina', destino:'Brasil', clase: 'Turista', viajeros: 1, precio:60000},
  { vuelo: 'Argentina -> Uruguay',origen:'Argentina', destino:'Uruguay', clase: 'Turista', viajeros: 1, precio:50000},
  { vuelo: 'Argentina -> Peru',origen:'Argentina',destino:'Peru',clase: 'Turista', viajeros: 1, precio:30000},
  { vuelo: 'Argentina -> Chile',origen:'Argentina',destino:'Chile',clase: 'Turista', viajeros: 1, precio:45000},
  { vuelo: 'Argentina -> Estados Unidos',origen:'Argentina',destino:'Estados Unidos',clase: 'Turista', viajeros: 1, precio:130000},
  { vuelo: 'Argentina -> España',origen:'Argentina',destino:'España',clase: 'Turista', viajeros: 1, precio:230000},
  { vuelo: 'Argentina -> Marruecos',origen:'Argentina',destino:'Marruecos',clase: 'Turista', viajeros: 1, precio: 320000},
  { vuelo: 'Argentina -> Francia',origen:'Argentina',destino:'Francia',clase: 'Turista', viajeros: 1, precio: 180000},
  { vuelo: 'Argentina -> Canada',origen:'Argentina',destino:'Canada',clase: 'Turista', viajeros: 1, precio:160000},
  { vuelo: 'Argentina -> Mexico',origen:'Argentina',destino:'Mexico',clase: 'Turista', viajeros: 1, precio:130000},
  { vuelo: 'Argentina -> Italia',origen:'Argentina',destino:'Italia',clase: 'Turista', viajeros: 1, precio:200000},
  //Brasil
  { vuelo: 'Brasil -> Argentina',origen:'Brasil',destino:'Argentina', clase: 'Executive', viajeros: 1, precio:80000},
  { vuelo: 'Brasil -> Uruguay',origen:'Brasil', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:60000},
  { vuelo: 'Brasil -> Chile',origen:'Brasil', destino:'Chile', clase: 'Executive', viajeros: 1, precio:100000},
  { vuelo: 'Brasil -> Marruecos',origen:'Brasil', destino:'Marruecos', clase: 'Turista', viajeros: 1, precio:240000},
  { vuelo: 'Brasil -> Mexico',origen:'Brasil', destino:'Mexico', clase: 'Turista', viajeros: 1, precio:100000},
  { vuelo: 'Brasil -> Italia',origen:'Brasil', destino:'Italia', clase: 'Turista', viajeros: 1, precio:200000},
  { vuelo: 'Brasil -> Estados Unidos',origen:'Brasil', destino:'Estados Unidos', clase: 'Turista', viajeros: 1, precio:140000},
  { vuelo: 'Brasil -> Peru',origen:'Brasil', destino:'Peru', clase: 'Turista', viajeros: 1, precio:70000},
  { vuelo: 'Brasil -> Francia',origen:'Brasil', destino:'Francia', clase: 'Turista', viajeros: 1, precio:170000},
  { vuelo: 'Brasil -> España',origen:'Brasil', destino:'España', clase: 'Turista', viajeros: 1, precio:210000},
  { vuelo: 'Brasil -> Canada',origen:'Brasil', destino:'Canada', clase: 'Turista', viajeros: 1, precio:180000},
  //Uruguay
  { vuelo: 'Uruguay -> Argentina',origen:'Uruguay',destino:'Argentina',clase: 'Turista', viajeros: 1, precio:30000},
  { vuelo: 'Uruguay -> Brasil',origen:'Uruguay', destino:'Brasil', clase: 'Business', viajeros: 1,precio:37000},
  { vuelo: 'Uruguay -> Chile',origen:'Uruguay', destino:'Chile', clase: 'Business', viajeros: 1,precio:45000},
  { vuelo: 'Uruguay -> Marruecos',origen:'Uruguay', destino:'Marruecos', clase: 'Business', viajeros: 1,precio:170000},
  { vuelo: 'Uruguay -> Mexico',origen:'Uruguay', destino:'Mexico', clase: 'Business', viajeros: 1,precio:100000},
  { vuelo: 'Uruguay -> Italia',origen:'Uruguay', destino:'Italia', clase: 'Business', viajeros: 1,precio:150000},
  { vuelo: 'Uruguay -> Estados Unidos',origen:'Uruguay', destino:'Estados Unidos', clase: 'Business', viajeros: 1,precio:125000},
  { vuelo: 'Uruguay -> Peru',origen:'Uruguay', destino:'Peru', clase: 'Business', viajeros: 1,precio:34000},
  { vuelo: 'Uruguay -> Francia',origen:'Uruguay', destino:'Francia', clase: 'Business', viajeros: 1,precio:160000},
  { vuelo: 'Uruguay -> España',origen:'Uruguay', destino:'España', clase: 'Business', viajeros: 1,precio:130000},
  { vuelo: 'Uruguay -> Canada',origen:'Uruguay', destino:'Canada', clase: 'Business', viajeros: 1,precio:112000},
  //Peru
  { vuelo: 'Peru -> Argentina',origen:'Peru', destino:'Argentina', clase: 'Business', viajeros: 1,precio:40000},
  { vuelo: 'Peru -> Brasil',origen:'Peru', destino:'Brasil', clase: 'Business', viajeros: 1,precio:40000},
  { vuelo: 'Peru -> Uruguay',origen:'Brasil', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:50000},
  { vuelo: 'Peru -> Chile',origen:'Peru', destino:'Chile', clase: 'Business', viajeros: 1,precio:40000},
  { vuelo: 'Peru -> Marruecos',origen:'Peru', destino:'Marruecos', clase: 'Business', viajeros: 1,precio:210000},
  { vuelo: 'Peru -> Mexico',origen:'Peru', destino:'Mexico', clase: 'Business', viajeros: 1,precio:90000},
  { vuelo: 'Peru -> Italia',origen:'Peru', destino:'Italia', clase: 'Business', viajeros: 1,precio:165000},
  { vuelo: 'Peru -> Estados Unidos',origen:'Peru', destino:'Estados Unidos', clase: 'Business', viajeros: 1,precio:170000},
  { vuelo: 'Peru -> Francia',origen:'Peru', destino:'Francia', clase: 'Business', viajeros: 1,precio:200000},
  { vuelo: 'Peru -> España',origen:'Peru', destino:'España', clase: 'Business', viajeros: 1,precio:160000},
  { vuelo: 'Peru -> Canada',origen:'Peru', destino:'Canada', clase: 'Business', viajeros: 1,precio:140000},
  //Chile
  { vuelo: 'Chile -> Brasil',origen:'Chile', destino:'Brasil', clase: 'Executive', viajeros: 1, precio:40000},
  { vuelo: 'Chile -> Estados Unidos',origen:'Chile', destino:'Estados Unidos', clase: 'Executive', viajeros: 1, precio:180000},
  { vuelo: 'Chile -> Marruecos',origen:'Chile', destino:'Marruecos', clase: 'Executive', viajeros: 1, precio:180000},
  { vuelo: 'Chile -> Mexico',origen:'Chile', destino:'Mexico', clase: 'Executive', viajeros: 1, precio:160000},
  { vuelo: 'Chile -> Italia',origen:'Chile', destino:'Italia', clase: 'Executive', viajeros: 1, precio:170000},
  { vuelo: 'Chile -> Francia',origen:'Chile', destino:'Francia', clase: 'Executive', viajeros: 1, precio:154000},
  { vuelo: 'Chile -> España',origen:'Chile', destino:'España', clase: 'Executive', viajeros: 1, precio:132000},
  { vuelo: 'Chile -> Canada',origen:'Chile', destino:'Canada', clase: 'Executive', viajeros: 1, precio:180000},
  { vuelo: 'Chile -> Argentina',origen:'Chile', destino:'Argentina', clase: 'Executive', viajeros: 1, precio:180000},
  { vuelo: 'Chile -> Peru',origen:'Chile', destino:'Peru', clase: 'Executive', viajeros: 1, precio:180000},
  { vuelo: 'Chile -> Uruguay',origen:'Chile', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:50000},
  //espania
  { vuelo: 'España -> Argentina',origen:'España',destino:'Argentina', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'España -> Estados Unidos',origen:'España',destino:'Estados Unidos', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Chile',origen:'España',destino:'Chile', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Marruecos',origen:'España',destino:'Marruecos', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Mexico',origen:'España',destino:'Mexico', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Italia',origen:'España',destino:'Italia', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Francia',origen:'España',destino:'Francia', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Peru',origen:'España',destino:'Peru', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Canada',origen:'España',destino:'Canada', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Brasil',origen:'España',destino:'Brasil', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'España -> Uruguay',origen:'España', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:50000},
  //Estados Unidos
  { vuelo: 'Estados Unidos -> Chile',origen:'Estados Unidos', destino:'Chile', clase: 'Business', viajeros: 1, precio:140000},
  { vuelo: 'Estados Unidos -> Argentina',origen:'Estados Unidos',destino:'Argentina',clase:'Business',viajeros: 1,precio:200000},
  { vuelo: 'Estados Unidos -> España',origen:'Estados Unidos',destino:'España', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Estados Unidos -> Marruecos',origen:'Estados Unidos',destino:'Marruecos',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Mexico',origen:'Estados Unidos',destino:'Mexico',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Italia',origen:'Estados Unidos',destino:'Italia',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Francia',origen:'Estados Unidos',destino:'Francia',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Canada',origen:'Estados Unidos',destino:'Canada',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Brasil',origen:'Estados Unidos',destino:'Brasil',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Peru',origen:'Estados Unidos',destino:'Peru',clase:'Business',viajeros: 1,precio:250000},
  { vuelo: 'Estados Unidos -> Uruguay',origen:'Estados Unidos', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:50000},
  //marrruecos
  { vuelo: 'Marruecos-> Argentina',origen:'Marruecos', destino:'Argentina', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Chile',origen:'Marruecos', destino:'Chile', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> España',origen:'Marruecos', destino:'España', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Mexico',origen:'Marruecos', destino:'Mexico', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Italia',origen:'Marruecos', destino:'Italia', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Francia',origen:'Marruecos', destino:'Francia', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Canada',origen:'Marruecos', destino:'Canada', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Brasil',origen:'Marruecos', destino:'Brasil', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Peru',origen:'Marruecos', destino:'Peru', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos-> Estados Unidos',origen:'Marruecos', destino:'Estados Unidos', clase: 'Turista', viajeros: 1,precio:120000},
  { vuelo: 'Marruecos -> Uruguay',origen:'Marruecos', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:50000},
  //Canada
  { vuelo: 'Canada -> Brasil',origen:'Canada', destino:'Brasil', clase: 'Executive', viajeros: 1, precio:160000},
  { vuelo: 'Canada -> Argentina',origen:'Canada',destino:'Argentina', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Chile',origen:'Canada',destino:'Chile', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> España',origen:'Canada',destino:'España', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Mexico',origen:'Canada',destino:'Mexico', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Italia',origen:'Canada',destino:'Italia', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Francia',origen:'Canada',destino:'Francia', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Peru',origen:'Canada',destino:'Peru', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Estados Unidos',origen:'Canada',destino:'Estados Unidos', clase: 'Executive', viajeros: 1, precio:300000},
  { vuelo: 'Canada -> Uruguay',origen:'Canada', destino:'Uruguay', clase: 'Business', viajeros: 1,precio:50000},
  { vuelo: 'Canada -> Marruecos',origen:'Canada', destino:'Marruecos', clase: 'Business', viajeros: 1,precio:50000},
  //Mexico
  { vuelo: 'Mexico -> Argentina',origen:'Mexico',destino:'Argentina', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Brasil',origen:'Mexico',destino:'Brasil', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Chile',origen:'Mexico',destino:'Chile', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> España',origen:'Mexico',destino:'España', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Italia',origen:'Mexico',destino:'Italia', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Francia',origen:'Mexico',destino:'Peru', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Peru',origen:'Mexico',destino:'', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Estados Unidos',origen:'Mexico',destino:'Estados Unidos', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Uruguay',origen:'Mexico',destino:'Uruguay', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Canada',origen:'Mexico',destino:'Canada', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Mexico -> Marruecos',origen:'Mexico', destino:'Marruecos', clase: 'Business', viajeros: 1,precio:50000},
  //Italia
  { vuelo: 'Italia -> Mexico',origen:'Italia',destino:'Mexico', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Argentina',origen:'Italia',destino:'Argentina', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Brasil',origen:'Italia',destino:'Brasil', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> España',origen:'Italia',destino:'España', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Francia',origen:'Italia',destino:'Francia', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Peru',origen:'Italia',destino:'Peru', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Estados Unidos',origen:'Italia',destino:'Estados Unidos', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Uruguay',origen:'Italia',destino:'Uruguay', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Canada',origen:'Italia',destino:'Canada', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Marruecos',origen:'Italia',destino:'Marruecos', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Italia -> Chile',origen:'Italia',destino:'Chile', clase: 'Turista', viajeros: 1, precio:150000},
  //Francia
  { vuelo: 'Francia -> Mexico',origen:'Francia',destino:'Mexico', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Argentina',origen:'Francia',destino:'Argentina', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Brasil',origen:'Francia',destino:'Brasil', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> España',origen:'Francia',destino:'España', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Peru',origen:'Francia',destino:'Peru', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Estados Unidos',origen:'Francia',destino:'Estados Unidos', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Uruguay',origen:'Francia',destino:'Uruguay', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Canada',origen:'Francia',destino:'Canada', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Marruecos',origen:'Francia',destino:'Marruecos', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Italia',origen:'Francia',destino:'Italia', clase: 'Turista', viajeros: 1, precio:150000},
  { vuelo: 'Francia -> Chile',origen:'Francia',destino:'Chile', clase: 'Turista', viajeros: 1, precio:150000}
];

let origenIngresado;
let destinoIngresado;
let tipoViaje1;
let tipoViaje2;



const ocultarFormulario = () => {
  modal.style.display= 'none';
  contenidoOrigen.innerHTML = `${inporigen}`;
  contenidoDestino.innerHTML = `${inpdestino}`;
}
  
  
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  inporigen = origen.value;
  inpdestino = destino.value;
  inpfechaI = fechaIda.value;
  inpfechaV = fechaVuelta.value;
  localStorage.setItem('origen', origen.value);
  localStorage.setItem('destino', destino.value);
  localStorage.setItem('fechaIda', fechaIda.value);
  localStorage.setItem('fechaVuelta', fechaVuelta.value);
  modal.style.display = '';     
})

if (!!inpdestino && !!inpdestino && !!inpfechaI && !!inpfechaV) {
    ocultarFormulario();
}
//Guarda y actualiza el form de busqueda      
origen.addEventListener('input', (e) => {
  sessionStorage.setItem('inporigen', e.target.value);
  })
  
  destino.addEventListener('input', (e) => {
    sessionStorage.setItem('inpdestino', e.target.value);
  })

  fechaIda.addEventListener('input', (e) => {
    sessionStorage.setItem('inpfechaI', e.target.value);
  })

  fechaVuelta.addEventListener('input', (e) => {
    sessionStorage.setItem('inpfechaV', e.target.value);
  }
)

formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
  //Datos local storage
  while (origen.value === destino.value){
    if(origen.value=== destino.value === true ){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se puede agregar dos paises iguales!',
      })
    modal.style.display= 'none';
    break
  }
  } 
  
  tipoViaje1 = rbtIdayVuelta.checked;
  tipoViaje2 = rbtSoloIda.checked;

  localStorage.setItem('tipoViaje1', rbtIdayVuelta.checked);
  localStorage.setItem('tipoViaje2', rbtSoloIda.checked);

  //Captura datos formulario
  const origenIngresado = (e.target[0].value)
  const destinoIngresado = (e.target[1].value)
  const idaYvuelta = e.target[2].checked
  const soloIda = e.target[3].checked


  //Filtra stock vuelos por origen y destino
  const vuelosFiltradosPorOrigenDestino = todosLosVuelos.filter((vuelo) => {
    return vuelo.origen === origenIngresado && vuelo.destino === destinoIngresado
  })
    
  //Ingresa los resultados en el div "mostrarContenido"
  vuelosFiltradosPorOrigenDestino.forEach((vuelo)=>{
    const contenedor = document.getElementById('contenido');
    const detalleOrg = document.getElementById('origenTicket')
    const detalleDest = document.getElementById('destinoTicket')
    const precioVuelo = document.getElementById('precioTicket')
    const Detalleclase = document.getElementById('claseTicket')
    const viajerosIngrsados = document.getElementById('cantViajeros')
    const detalleIda = document.getElementById('fechaIda')
    const detalleVuelta = document.getElementById('fechaVuelta')

    detalleOrg.textContent= `${vuelo.origen}`;
    detalleDest.textContent= `${vuelo.destino}`;
    precioVuelo.textContent = `${vuelo.precio}`;
    Detalleclase.textContent=`${vuelo.clase}`;
    fechaIda.textContent = `${vuelo.precio}`;
    fechaVuelta.textContent=`${vuelo.clase}`;
    fecha_Ida.innerHTML = `${inpfechaI}`;
    fecha_Vuelta.innerHTML = `${inpfechaV}`;
    viajerosIngrsados.innerHTML = `${vuelo.viajeros}`;
  })
})

