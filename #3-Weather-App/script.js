const APIKey = "778e8f4a877c1e4a4bde7e48d541ee0e";
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
    const city = searchBox.value;

    if(!city) {
        document.querySelector(".error").style.display = "block";
    }

    try {
        const response = await fetch(APIUrl+ city + `&appid=${APIKey}`);

        if(response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } 
        else {
            
            const data = await response.json();
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            
            if(data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png";
            }
            else if(data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png";
            }
            else if(data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png";
            }
            
            document.querySelector(".weather").style.display= "block";
            document.querySelector(".error").style.display = "none";
        }
    }catch (error) {
        document.querySelector(".error").style.display = "block";
    }
};

function searchWeather() {
    searchBtn.classList.add("clicked");
    checkWeather();
}

searchBtn.addEventListener("click", searchWeather);

searchBtn.addEventListener("animationend", () => {
    searchBtn.classList.remove("clicked");
});

searchBox.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        searchWeather();
    }
});