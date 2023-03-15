

function searchCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search");
    let city = document.querySelector("#name-city");
    city.innerHTML = searchInput.value;
    let apiKey = "9dcd46a6b87986b6381369b6d8a8707c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemprature);
  }


  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity);
  
  function showTemprature(response) {
    let city = document.querySelector("#name-city");
    city.innerHTML = response.data.name;
  
    let degree = document.querySelector("#tempt");
    let temprature = Math.round(response.data.main.temp);
    degree.innerHTML = temprature;
  
    let tempratureDescription = document.querySelector("#tempt-description");
    tempratureDescription.innerHTML = response.data.weather[0].description;
  
    let humidity = document.querySelector("#humidity");
    let humidityRate = Math.round(response.data.main.humidity);
    humidity.innerHTML = `Humidity:${humidityRate}%`;
  
    let wind = document.querySelector("#wind");
    let windSpeed = Math.round(response.data.wind.speed);
    wind.innerHTML = `Wind: ${windSpeed} Km/h`;
  }
  

   function showposition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "9dcd46a6b87986b6381369b6d8a8707c";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemprature);
  }
  
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showposition);
  }
  
  let currentLocation = document.querySelector("#current-button");
  currentLocation.addEventListener("click", getCurrentPosition);


