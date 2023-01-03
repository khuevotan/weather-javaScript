const APP_ID = 'fcb60e4488b97551d4c420aa5cdd5f16'

// api
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric&lang=vi`
    const res = await fetch(url);
    const weather = await res.json();
    // console.log(weather);
    changeWeather(weather);
}


const locations = document.querySelectorAll('.location');
const temps = document.querySelectorAll('.temp');
const descs = document.querySelectorAll('.desc');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');
const wind = document.querySelector('.wind'); 
const sea = document.querySelector('.sea');


function changeWeather(weather) {
    locations.forEach(location => {
        location.textContent = weather.name + ' ' + weather.sys.country;
    });
 
    temps.forEach(temp => {
        temp.textContent = Math.round( weather.main.temp);
    });

    descs.forEach(desc => {
        desc.textContent = weather.weather[0].description;
    });

    humidity.textContent = weather.main.humidity + '%';

    visibility.textContent = weather.visibility + 'm';

    wind.textContent = weather.wind.speed + 'm/s';

    sea.textContent = weather.main.pressure + 'm';
}

const inputCity = document.querySelector('.main__search input');
window.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        let city = inputCity.value;
        getWeather(city);  
    }
})

getWeather('ha noi');