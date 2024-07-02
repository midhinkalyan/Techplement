const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "989b11dcca66a31d04f2ca26d038d410";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://cdn-icons-png.flaticon.com/512/252/252035.pngs";
            break;
        case 'Clear':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEFh3A7-bzypPNuuFtuT9Xy_72OrQr892wTaqmCQhcaXteJNkdPo0LayWI8u2VL45IKo&usqp=CAU";
            break;
        case 'Rain':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNotlTbSCD77GmhyVy3-Zzeq87jFp8ZNFXQ&s";
            break;
        case 'Mist':
            weather_img.src = "https://png.pngtree.com/png-clipart/20230823/original/pngtree-daytime-foggy-weather-clouds-illustration-picture-image_8201381.png";
            break;
        case 'Snow':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRirBGnFWnL48LJj2E7-p9Q-LQe4eDWiDuLpw&s";
            break;
        case 'Broken Clouds':
            weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y1L7alF1nXTEUjBZhrixLYb8KmagtCWTlw&s";
            break;
        default :
        weather_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y1L7alF1nXTEUjBZhrixLYb8KmagtCWTlw&s";
        break;


    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});