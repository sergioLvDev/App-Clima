////////////// Obtengo los elementos del Dom ////////////////

let buscar = document.getElementById("botonBusqueda");
let datosClima = document.getElementById("datosClima");

/////////////// Obtengo la Info de la Api /////////////
const apiKey = "22ed69a92aa27e2b86aaef1e6efc72db";
const urlBase = "https://api.openweathermap.org/data/2.5/weather";

/////////////// Funcion para hacer click ///////////////

buscar.addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`)
      .then((response) => response.json())
      .then((data) => obtenerDatosClima(data))
      .catch((error) => console.error(error));
  }
});

////////////////Funcion para Mostrar los datos en la pantalla //////////////
function obtenerDatosClima(data) {
  let nombre = data.name;
  let pais = data.sys.country;
  let temperatura = data.main.temp;
  let humedad = data.main.humidity;
  let descripcion = data.weather[0].description;
  descripcion = descripcion.charAt(0).toUpperCase() + descripcion.slice(1);
  const icono = data.weather[0].icon;
  datosClima.innerHTML = `<h2>${nombre}, ${pais}</h2>
                          <p>La temperartura es: ${temperatura} °C</p>
                          <p>La humedad es:  ${humedad} %</p>
                          <img src="https://openweathermap.org/img/wn/${icono}@2x.png">
                          <p>Descripcionpcion Meteorologica: <br>  ${descripcion}</p>`;
}
