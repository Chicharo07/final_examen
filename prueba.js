//alert ("Hola mundo");

let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");

const solicitudAPI_europa = () => {
  // Hacer una petición para un usuario con ID especifico
axios
.get("https://itp-europa.000webhostapp.com/php-geoip-api/index.php")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log (response.data);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.pais;
    continente.innerHTML = response.data.continente;
    zona_horaria.innerHTML = response.data.zona_horaria;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });

};

const solicitudAPI_africa = () => {
  // Hacer una petición para un usuario con ID especifico
axios
.get("https://itp-examen.000webhostapp.com/php-geoip-api/index.php")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log (response.data);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.pais;
    continente.innerHTML = response.data.continente;
    zona_horaria.innerHTML = response.data.zona_horaria;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


};

const solicitudAPI_sudamerica = () => {
  // Hacer una petición para un usuario con ID especifico
axios
.get("https://itp-scr-examen-1.000webhostapp.com/php-geoip-api/index.php")
  .then(function (response) {
    // manejar respuesta exitosa
    console.log (response.data);
    ip.innerHTML = response.data.ip;
    pais.innerHTML = response.data.pais;
    continente.innerHTML = response.data.continente;
    zona_horaria.innerHTML = response.data.zona_horaria;
  })
  .catch(function (error) {
    // manejar error
    console.log(error);
  })
  .finally(function () {
    // siempre sera executado
  });


};
//llama al evento LOAD cada vez que se actualiza la pagina 
//y llama a la version solicitudAPI que tiene la rutina
//de llamar a API desde Axios
window.addEventListener('load',solicitudAPI );