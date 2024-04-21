function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);


function displayTemperature (){
   

}

let apiKey="4ff060ct0o35c409303b648f04f0ab31";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query={query}&key=${apiKey}`;


axios.get(apiUrl).then(displayTemperature);
