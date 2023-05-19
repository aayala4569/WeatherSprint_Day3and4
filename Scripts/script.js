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
let HomeBtn = document.getElementById('HomeBtn');
let temp_high = document.getElementById('temp_high');
let temp_high1 = document.getElementById('temp_high1');
let temp_high2 = document.getElementById('temp_high2');
let temp_high3 = document.getElementById('temp_high3');
let temp_high4 = document.getElementById('temp_high4');
let temp_high5 = document.getElementById('temp_high5');
let temp_low = document.getElementById('temp_low');
let temp_low1 = document.getElementById('temp_low1');
let temp_low2 = document.getElementById('temp_low2');
let temp_low3 = document.getElementById('temp_low3');
let temp_low4 = document.getElementById('temp_low4');
let temp_low5 = document.getElementById('temp_low5');

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
    place.innerText = search.value;
})

function getWeather (weatherData){
    //set weather data to Id's where you want the info to appear.
    weatherArr = [];
    weatherArr.push(weatherData);
    console.log(weatherData);
    let main = weatherData.main;
    place.innerText = weatherData.city.name;
    temp.innerText = `${parseInt(weatherData.list[0].main.temp)}`;
    temp_low.innerText = parseInt(weatherData.list[0].main.temp_min);
    temp_high.innerText = parseInt(weatherData.list[0].main.temp_max);
   
    temp_low1.innerText = parseInt(weatherData.list[1].main.temp_min);
    temp_high1.innerText = parseInt(weatherData.list[1].main.temp_max);
    temp_low2.innerText = parseInt(weatherData.list[2].main.temp_min);
    temp_high2.innerText = parseInt(weatherData.list[2].main.temp_max);
    temp_low3.innerText = parseInt(weatherData.list[3].main.temp_min);
    temp_high3.innerText = parseInt(weatherData.list[3].main.temp_max);
    temp_low4.innerText = parseInt(weatherData.list[4].main.temp_min);
    temp_high4.innerText = parseInt(weatherData.list[4].main.temp_max);
    temp_low5.innerText = parseInt(weatherData.list[5].main.temp_min);
    temp_high5.innerText = parseInt(weatherData.list[5].main.temp_max);
    // speed.innerText = parseInt(weatherData.wind.speed);
    // deg.innerText = parseInt(weatherData.wind.deg);
    search.value;
    
}





favData = JSON.parse(localStorage.getItem('favWeather'));
console.log(favData)
if(favData && favData != null){
    favArr = favData;
    for(let i = 0; i< favData.length; i++){
        if(i === 0){
            fetchWeather(favData[i].url);
            let colDiv = document.createElement('div');
            colDiv.classList = 'col';
            let pTag = document.createElement('p');
            pTag.innerText = favData[i].name;
            pTag.addEventListener('click', e => {
            fetchWeather(favData[i].url);
        
});
colDiv.appendChild(pTag);
injectFav.appendChild(colDiv);
        }
    
        else {
            let colDiv = document.createElement('div');
            colDiv.classList = 'col';
            let pTag = document.createElement('p');
            pTag.innerText = favData[i].name;
             pTag.addEventListener('click', e => {
            fetchWeather(favData[i].url);

        });
        colDiv.appendChild(pTag);
        injectFav.appendChild(colDiv);
    }
}
}


favBtn.addEventListener('click', e => {
    let obj = {
        name: weatherArr[weatherArr.length -1].name,
        url: `${url_pt1}${searchCity}${apiKey}${units}` 
    }
    favArr.push(obj);
    let colDiv = document.createElement('div');
    colDiv.classList = 'col';
    let pTag = document.createElement('p');
    pTag.innerText = search.value;
    pTag.addEventListener('click', e => {
    fetchWeather(obj.url);
})
    colDiv.appendChild(pTag);
    injectFav.appendChild(colDiv);

localStorage.setItem('favWeather', JSON.stringify(favArr));


});
    //   favBTN window.location.href = '/favorites.html';

