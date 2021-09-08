
var searchFormEl = document.querySelector("#search-form");
var cityName = document.querySelector("#search-city");


var userSubmitBtn = document.querySelector("#search-btn");
var searchedCityName = document.querySelector("#searched-city-name");

var cityTemp = document.querySelector("#city-temp");
var cityWind = document.querySelector("city-wind");

var pWind = document.createElement("p");
var pHumidity = document.createElement("p");
var pUv = document.createElement("p");





var clickSubmitEl = function(event) {
    event.preventDefault();

    var inputEl = cityName.value.trim();

    if (inputEl) {
        getWeatherForecast(inputEl);
        console.log(inputEl);
        
    } else {
        alert("please enter a valid city.");
    }
};




var getWeatherForecast = function(search) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&units=imperial&appid=d3f5af43f561d831f34569cf6fef321f";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displaySearch(data, search)
                    getWeatherUvi(data.coord);
                })
            } 
        });
};


var getWeatherUvi = function(data) {
    var {lat} = data;
    var {lon} = data;
    console.log({lat});
    var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=d3f5af43f561d831f34569cf6fef321f";
    console.log(data);
    fetch(apiUrl2)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displaySearch2(data);
                    
                })
            }
        })
    
}


var displaySearch = function(weatherData, searchedCity) {
    searchedCityName.textContent = searchedCity;

    cityTemp.textContent = "Temp: " + weatherData.main.temp;

    
    pWind.textContent = "Wind speed: " + weatherData.wind.speed + " MPH";
    cityTemp.appendChild(pWind);

   
    pHumidity.textContent = weatherData.main.humidity;
    pWind.appendChild(pHumidity);
    
};


var displaySearch2 = function(data) {

    pUv.textContent = data.current.uvi;
    pWind.appendChild(pUv);
    console.log(data.current.uvi);

}






searchFormEl.addEventListener("submit", clickSubmitEl);