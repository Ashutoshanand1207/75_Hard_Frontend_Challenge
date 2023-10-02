// api key 
const apiKey = "ab2d984fd1c36edcc879b63619c12e92";
// api url 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        // to convert json data 
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // to make changes in icon and background according to the weather 
        console.log(data.weather[0].main)
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
            document.querySelector("body").style.background = "linear-gradient(135deg, rgba(0,0,0,1) 11%, rgba(90,140,214,1) 46%, rgba(81,240,246,1) 68%, rgba(221,249,22,1) 90%)";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png"
            document.querySelector("body").style.background = "linear-gradient(135deg, rgba(227,187,25,1) 37%, rgba(23,224,218,1) 98%, rgba(221,249,22,1) 100%)";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/Drizzle.png"
            document.querySelector("body").style.background = "linear-gradient(135deg, rgba(61,83,218,1) 51%, rgba(255,255,255,1) 100%)";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png"
            document.querySelector("body").style.background = "linear-gradient(135deg, rgba(174,195,212,1) 41%, rgba(255,255,255,1) 100%)";
        }
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "./images/haze.png"
            document.querySelector("body").style.background = "linear-gradient(140deg, rgba(6,34,98,1) 11%, rgba(23,224,218,1) 71%)";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./images/snow.png"
            document.querySelector("body").style.background = "linear-gradient(135deg, rgba(164,245,255,1) 0%, rgba(255,255,255,1) 44%, rgba(255,255,255,1) 72%)";
            document.querySelector(".city").style.color = "#5c86c4";
            document.querySelector(".temp").style.color = "#5c86c4";
            document.querySelector(".details").style.color = "#5c86c4";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png"
            document.querySelector("body").style.background = "linear-gradient(140deg, rgba(2,9,25,1) 17%, rgba(6,34,98,1) 49%, rgba(0,117,114,1) 79%)";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
    
}

// to get data from input box 
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

// calling the weather function 

checkWeather();