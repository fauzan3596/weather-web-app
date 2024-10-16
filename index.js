const date = new Date();

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

let todayDate = `${dayWeek}, ${day} ${month} ${year} | ${hour}:${minute < 10 ? '0' + minute : minute} `

document.querySelector("#date").innerHTML = todayDate