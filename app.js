let form = document.querySelector("form");
let cityName = document.querySelector(".cityname");
let country = document.querySelector(".country");
let date = document.querySelector(".date");
let view = document.querySelector(".sunny");
let temp = document.querySelector(".temprature");
let windSpeed = document.querySelector(".wind");
let weatherIcon = document.getElementById("icon-image");
let humidity = document.querySelector(".humidity");
let textInput = document.getElementById("searchBox");
let API_key = "a5f2a01ef76540c788a140130241703";

const getReport = async () => {
    event.preventDefault();
    let searchText = textInput.value;
    let URL = `https://api.weatherapi.com/v1/current.json?key=a5f2a01ef76540c788a140130241703&q=${searchText}&aqi=no`;

    let response = await fetch(URL);
    let data = await response.json();
    let weatherImg = data.current.condition.icon;

    cityName.innerHTML = data.location.name + ",";
    country.innerHTML = data.location.country;
    temp.innerHTML = Math.round(data.current.temp_c) + "&deg;C";
    view.innerHTML = data.current.condition.text;
    windSpeed.innerHTML = data.current.wind_kph + " Km/h";
    date.innerHTML = data.location.localtime;
    weatherIcon.setAttribute("src", weatherImg);
    humidity.innerHTML = data.current.humidity + " %";

    form.reset();
}

form.addEventListener("submit", getReport);
