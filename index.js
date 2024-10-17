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
    return `${dayWeek}, ${day} ${month} ${year} | ${hour}:${minute < 10 ? '0' + minute : minute} `;
}

document.querySelector("#date").innerHTML = formatDate(date);

const todayForecast = {
    hourly: [
        "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    temp: [10, 13, 16, 19, 22, 25, 28, 31, 34, 37],
};

todayForecast.hourly.forEach((hour, index) => {
    document.querySelector("#today-forecast").innerHTML += `
    <div class="today-card">
        <div class="today-card-info">
            <p>${todayForecast.hourly[index]}</p>
            <img src="assets/extreme-day-rain.svg" alt="Hourly Weather image" class="hour-img-weather">
            <p>${todayForecast.temp[index]}&deg;C</p>
        </div>
    </div>
    `
});

const weatherDetails = {
    tempMax: 19,
    tempMin: 14,
    humadity: 58,
    cloudy: 86,
    wind: 5
};

document.querySelector("#max-value").innerHTML += `${weatherDetails.tempMax}&deg`
document.querySelector("#min-value").innerHTML += `${weatherDetails.tempMin}&deg`
document.querySelector("#humadity-value").innerHTML += `${weatherDetails.humadity}%`
document.querySelector("#cloudy-value").innerHTML += `${weatherDetails.cloudy}%`
document.querySelector("#wind-value").innerHTML += `${weatherDetails.wind}km/h`

const weekForecast = {
    week: [],
    weather: ["Heavy Rain", "Rain", "Sunny", "Cloudy", "Foggy", "Overcast", "Hot"],
    maxTemp: [13, 18, 21, 23, 26, 39, 35],
    minTemp: [10, 15, 18, 20, 23, 26, 30],
}

function next7Day() {
    const options = {
        weekday: 'long',
        month: "long",
        day: "numeric",
    };
    for (let i = 1; i <= 7; i++) {
        let nextDay = new Date(date);
        nextDay.setDate(date.getDate() +i);
        weekForecast.week.push(nextDay.toLocaleDateString("en-US", options));
    }
}

next7Day()
weekForecast.week.forEach((el, index) => {
    document.querySelector("#week-forecast-scrolling").innerHTML += `
    <div class="week-card">
        <div class="week-card-info">
            <div class="week-date">
                <div class="week-image">
                    <img src="assets/extreme-day-rain.svg" alt="" class="week-img-weather">
                </div>
                <div class="week-date-info">
                    <p>${weekForecast.week[index]}</p>
                    <p class="week-weather">${weekForecast.weather[index]}</p>
                </div>
            </div>
            <div class="week-temp">
                <p>${weekForecast.maxTemp[index]}&deg;C</p>
                <p>${weekForecast.minTemp[index]}&deg;C</p>
            </div>
        </div>
    </div>
    `
})
