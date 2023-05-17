//Created Weather API
let url_pt1 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
let city = '';
let apiKey = '&appid=9f9b5e8632f575c738a54d29750eff35';
let units = '&units=imperial';
//////////////////////////////////////////////////////
let searchCity = document.getElementById('searchCity');
let searchBtn = document.getElementById('searchBtn');
let place = document.getElementById('place');
let temp = document.getElementById('temp');
let temp_high = document.getElementById('temp_high');
let temp_low= document.getElementById('temp_low');
let HomeBtn = document.getElementById('HomeBtn');


function fetchWeather(url){
    fetch(url)
    .then(
        response => response.json()
    )
    .then(
        data => {
            console.log(data);
            // console.log(data.name);
            getWeather(data);
        }

    )
    
};


//This is my Search button event listener. When clicked it will call my fetch weather function.
searchBtn.addEventListener('click', e => {
    //fetch weather function is being called and we are passing in our API in 4 pices
    fetchWeather(`${url_pt1}${searchCity.value}${apiKey}${units}`);
    // fetchWeather(`${url_pt1}${city}${apiKey}${units}`);
    searchCity = search.value;
})

function getWeather (weatherData){
    //set weather data to Id's where you want the info to appear.
    
}