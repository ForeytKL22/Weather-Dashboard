// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
var searchFormEl = document.querySelector("#search-form");
var cityName = document.querySelector("#search-city");
var userSubmitBtn = document.querySelector("#search-btn");
var searchedCityName = document.querySelector("#searched-city-name");

//when you click submit button to search city



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
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=d3f5af43f561d831f34569cf6fef321f";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displaySearch(data, search)
                })
            } 
        });

};



var displaySearch = function(weatherData, searchedCity) {
    searchedCityName.textContent = searchedCity;
}


// searchedCityName.textContent = searchedCity;


// api.openweathermap.org/data/2.5/weather?q={city name}&appid=d3f5af43f561d831f34569cf6fef321f

// THEN I am presented with current and future conditions for that city and that city is added to the search history





// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index





// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe





// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity





// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city


searchFormEl.addEventListener("submit", clickSubmitEl);