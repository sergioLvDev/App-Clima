const apiKey = "22ed69a92aa27e2b86aaef1e6efc72db";
let ciudad = "rosario";
const urlBase = "https://api.openweathermap.org/data/2.5/weather";
let queryParams = `?q=${ciudad}&appid=${apiKey}&lang=es&units=metric`;

fetch(`${urlBase}${queryParams}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
