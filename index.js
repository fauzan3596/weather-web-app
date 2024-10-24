const date = new Date();

function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth();
    const day = date.getDate();
    let dayWeek = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();

    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    switch (dayWeek) {
        case 0:
            dayWeek = 'Sunday';
            break;
        case 1:
            dayWeek = 'Monday';
            break;
        case 2:
            dayWeek = 'Tuesday';
            break;
        case 3:
            dayWeek = 'Wednesday';
            break;
        case 4:
            dayWeek = 'Thursday';
            break;
        case 5:
            dayWeek = 'Friday';
            break;
        case 6:
            dayWeek = 'Saturday';
            break;
    }
    return `${dayWeek}, ${day} ${month} ${year} | ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute} `;
}

document.querySelector("#date").innerHTML = formatDate(date);

function dateFormatted(date) {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };
    const dateFormatted = new Date(date);
    return dateFormatted.toLocaleDateString("en-US", options);
}

function showSnackbar() {
    const snackbar = document.querySelector("#snackbar");
    const closeSnackbar = document.querySelector("#img-cross");
    snackbar.className = "show";
    setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
    closeSnackbar.addEventListener("click", () => {
        snackbar.className = snackbar.className.replace("", "show");
    })
}

async function getWeatherCity(city) {
    try {
        const urlCity = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`;
        const responseCity = await fetch(urlCity);
        if (!responseCity.ok) {
            throw new Error("Failed to fetch cities weather data");
        };

        const dataCity = await responseCity.json();

        // Cek apakah lokasi valid
        if (dataCity.results == undefined) {
            showSnackbar();
        };

        const latitude = dataCity.results[0].latitude;
        const longitude = dataCity.results[0].longitude;
        const cityName = dataCity.results[0].name;
        getWeather(latitude, longitude, cityName);
        document.querySelector("#search-bar").value = "";
    } catch (error) {
        console.log(error)
    }
}

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let city = document.querySelector("#search-bar");
    getWeatherCity(city.value)
})

const searchIcon = document.querySelector("#search-icon");
searchIcon.addEventListener("click", () => {
    let city = document.querySelector("#search-bar");
    getWeatherCity(city.value)
})

async function getWeather(latitude, longitude, city) {
    try {
        const urlWeek = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max`;
        const urlDay = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,weather_code,cloud_cover,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=1`;

        const responseWeek = await fetch(urlWeek);
        const responseDay = await fetch(urlDay);
        if (!responseWeek.ok || !responseDay.ok) {
            throw new Error("Failed to fetch weather data");
        }
        const dataWeek = await responseWeek.json();
        const dataDay = await responseDay.json();

        // Cek lokasi
        if (city == undefined) {
            document.querySelector("#city-name").innerHTML = "Jakarta";
        } else {
            document.querySelector("#city-name").innerHTML = city;
        }

        // Background weather
        backgroundImg = document.querySelector("#background");
        if (dataDay.current.is_day == 0) {
            if (dataDay.current.weather_code == 0 || dataDay.current.weather_code == 1 || dataDay.current.weather_code == 2) {
                backgroundImg.style = `background-image: url(${background[dataDay.current.weather_code].night})`;
            } else {
                backgroundImg.style = `background-image: url(${background[dataDay.current.weather_code]})`;
            }
        } else {
            if (dataDay.current.weather_code == 0 || dataDay.current.weather_code == 1 || dataDay.current.weather_code == 2) {
                backgroundImg.style = `background-image: url(${background[dataDay.current.weather_code].day})`;
            } else {
                backgroundImg.style = `background-image: url(${background[dataDay.current.weather_code]})`;
            }
        }

        // Weekly weather
        document.querySelector("#week-forecast-scrolling").innerHTML = "";
        dataWeek.daily.time.forEach((e, i) => {
            document.querySelector("#week-forecast-scrolling").innerHTML += `
                <div class="week-card">
                    <div class="week-card-info">
                        <div class="week-date">
                            <div class="week-image">
                                <img src="${weekly[dataWeek.daily.weather_code[i]].image}" alt="weekly weather image" class="week-img-weather">
                            </div>
                            <div class="week-date-info">
                                <p>${dateFormatted(e)}</p>
                                <p class="week-weather">${weekly[dataWeek.daily.weather_code[i]].description}</p>
                            </div>
                        </div>
                        <div class="week-temp">
                            <p>${dataWeek.daily.temperature_2m_max[i]}&deg;C</p>
                            <p>${dataWeek.daily.temperature_2m_min[i]}&deg;C</p>
                        </div>
                    </div>
                </div>
            `
        });

        // Current Weather
        if (dataDay.current.is_day == 0) {
            document.querySelector("#current-img-weather").innerHTML = `
                <img src="${wmo[dataDay.current.weather_code].night.image}" alt="current weather image" class="today-img-weather">
            `;
            document.querySelector("#today-code").innerHTML = `${wmo[dataDay.current.weather_code].night.description}`;
        } else if (dataDay.current.is_day == 1) {
            document.querySelector("#current-img-weather").innerHTML = `
                <img src="${wmo[dataDay.current.weather_code].day.image}" alt="current weather image" class="today-img-weather">
            `;
            document.querySelector("#today-code").innerHTML = `${wmo[dataDay.current.weather_code].day.description}`;
        };
        document.querySelector("#today-temp").innerHTML = `${dataDay.current.temperature_2m}&deg`;

        // Weather details
        document.querySelector("#max-value").innerHTML = `${dataDay.daily.temperature_2m_max}&deg`;
        document.querySelector("#min-value").innerHTML = `${dataDay.daily.temperature_2m_min}&deg`;
        document.querySelector("#humadity-value").innerHTML = `${dataDay.current.relative_humidity_2m}%`;
        document.querySelector("#cloudy-value").innerHTML = `${dataDay.current.cloud_cover}%`;
        document.querySelector("#wind-value").innerHTML = `${dataDay.current.wind_speed_10m}km/h`;

        // Hourly weather
        document.querySelector("#today-forecast").innerHTML = "";
        dataDay.hourly.time.map((e, i) => {
            dataDay.hourly.time[i] = new Date(dataDay.hourly.time[i]);
            return dataDay.hourly.time;
        });
        dataDay.hourly.time.forEach((e, i) => {
            let hour = e.getHours();
            const minute = '0' + e.getMinutes();
            hour = hour < 10 ? `0` + hour : hour;
            if (i >= 9 && i <= 18) {
                document.querySelector("#today-forecast").innerHTML += `
                    <div class="today-card">
                        <div class="today-card-info">
                            <p>${hour}:${minute}</p>
                            <img src="${wmo[dataDay.hourly.weather_code[i]].day.image}" alt="hourly weather image" class="hour-img-weather">
                            <p>${dataDay.hourly.temperature_2m[i]}&deg;C</p>
                        </div>
                    </div>
                `
            };
        });
        console.log(latitude, longitude)
        // Weekly Modals
        const weekCards = document.querySelectorAll(".week-card");
        weekCards.forEach((e, i) => {
            e.addEventListener("click", () => {
                showWeatherModel(i);
            })
        });

        function showWeatherModel(i) {
            const modal = document.getElementById("weather-modal");
            const closeModal = document.querySelector(".close");

            document.querySelector("#modal-date").innerHTML = dateFormatted(dataWeek.daily.time[i]);
            document.querySelector("#modal-img").innerHTML = `<img src="${weekly[dataWeek.daily.weather_code[i]].image}" alt="weather image" id="modal-img">`;
            document.querySelector("#modal-description").innerHTML = weekly[dataWeek.daily.weather_code[i]].description;
            document.querySelector("#modal-max-value").innerHTML = `${dataWeek.daily.temperature_2m_max[i]}&deg`
            document.querySelector("#modal-min-value").innerHTML = `${dataWeek.daily.temperature_2m_min[i]}&deg`
            document.querySelector("#modal-precipitation-value").innerHTML = `${dataWeek.daily.precipitation_sum[i]}mm`
            document.querySelector("#modal-probability-value").innerHTML = `${dataWeek.daily.precipitation_probability_max[i]}%`
            document.querySelector("#modal-wind-value").innerHTML = `${dataWeek.daily.wind_speed_10m_max[i]}km/h`

            modal.style.display = "block";

            closeModal.onclick = () => {
                modal.style.display = "none";
            }

            window.onclick = (event) => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }
    } catch (error) {
        console.log(error)
    }
}

function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}
getLocation();