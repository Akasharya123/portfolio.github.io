const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '85fc751ff4msh00c1de9a1be7bd5p1e2c38jsnfc739589f529',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

function toggleI() {
    var x = document.getElementById("tgl");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleAbout() {
    about = document.querySelector('.about')
    if (about.style.display == 'block') {
        about.style.display = 'none';
    } else { about.style.display = 'block' }
}

function toggleGuide() {
    guide = document.querySelector('.guide')
    if (guide.style.display == 'block') {
        guide.style.display = 'none';
    } else { guide.style.display = 'block' }
}