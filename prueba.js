//alert ("Hola mundo");

let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI = async () => {
  try {
    const response = await axios.get("https://ipinfo.io/json");
    console.log(response.data);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.country;
    continente.innerHTML = response.data.region;
    zona_horaria.innerHTML = response.data.timezone;
  } catch (error) {
    console.log(error);
  }
};

//llama al evento LOAD cada vez que se actualiza la pagina 
//y llama a la version solicitudAPI que tiene la rutina
//de llamar a API desde Axios
window.addEventListener('load',solicitudAPI );