

function showCity(event) {
    event.preventDefault();
    let input = document.querySelector("#search");
    document.getElementById("city").innerHTML = `${input.value}`;
    let city = `${input.value}`;
  }


  let form = document.querySelector("form");
  form.addEventListener("submit", showCity);  
 