const wmo = {
    0: {
        day: {
            description: "Sunny",
            image: "assets/clear-day.svg",
        },
        night: {
            description: "Clear",
            image: "assets/clear-night.svg",
        },
    },
    1: {
        day: {
            description: "Mainly Sunny",
            image: "assets/clear-day.svg",
        },
        night: {
            description: "Mainly Clear",
            image: "assets/clear-night.svg",
        },
    },
    2: {
        day: {
            description: "Partly Cloudy",
            image: "assets/partly-cloudy-day.svg",
        },
        night: {
            description: "Partly Cloudy",
            image: "assets/partly-cloudy-night.svg",
        },
    },
    3: {
        day: {
            description: "Cloudy",
            image: "assets/overcast-day.svg",
        },
        night: {
            description: "Cloudy",
            image: "assets/overcast-night.svg",
        },
    },
    45: {
        day: {
            description: "Foggy",
            image: "assets/fog-day.svg",
        },
        night: {
            description: "Foggy",
            image: "assets/fog-night.svg",
        },
    },
    48: {
        day: {
            description: "Rime Fog",
            image: "assets/fog-day.svg",
        },
        night: {
            description: "Rime Fog",
            image: "assets/fog-night.svg",
        },
    },
    51: {
        day: {
            description: "Light Drizzle",
            image: "assets/partly-cloudy-day-drizzle.svg",
        },
        night: {
            description: "Light Drizzle",
            image: "assets/partly-cloudy-night-drizzle.svg",
        },
    },
    53: {
        day: {
            description: "Drizzle",
            image: "assets/overcast-day-drizzle.svg",
        },
        night: {
            description: "Drizzle",
            image: "assets/overcast-night-drizzle.svg",
        },
    },
    55: {
        day: {
            description: "Heavy Drizzle",
            image: "assets/extreme-day-drizzle.svg",
        },
        night: {
            description: "Heavy Drizzle",
            image: "assets/extreme-night-drizzle.svg",
        },
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
            image: "assets/partly-cloudy-day-hail.svg",
        },
        night: {
            description: "Light Freezing Drizzle",
            image: "assets/partly-cloudy-night-hail.svg",
        },
    },
    57: {
        day: {
            description: "Freezing Drizzle",
            image: "assets/extreme-day-hail.svg",
        },
        night: {
            description: "Freezing Drizzle",
            image: "assets/extreme-night-hail.svg",
        },
    },
    61: {
        day: {
            description: "Light Rain",
            image: "assets/partly-cloudy-day-rain.svg",
        },
        night: {
            description: "Light Rain",
            image: "assets/partly-cloudy-night-rain.svg",
        },
    },
    63: {
        day: {
            description: "Rain",
            image: "assets/overcast-day-rain.svg",
        },
        night: {
            description: "Rain",
            image: "assets/overcast-night-rain.svg",
        },
    },
    65: {
        day: {
            description: "Heavy Rain",
            image: "assets/extreme-day-rain.svg",
        },
        night: {
            description: "Heavy Rain",
            image: "assets/extreme-night-rain.svg",
        },
    },
    66: {
        day: {
            description: "Light Freezing Rain",
            image: "assets/partly-cloudy-day-sleet.svg",
        },
        night: {
            description: "Light Freezing Rain",
            image: "assets/partly-cloudy-night-sleet.svg",
        },
    },
    67: {
        day: {
            description: "Freezing Rain",
            image: "assets/extreme-day-sleet.svg",
        },
        night: {
            description: "Freezing Rain",
            image: "assets/extreme-night-sleet.svg",
        },
    },
    71: {
        day: {
            description: "Light Snow",
            image: "assets/partly-cloudy-day-snow.svg",
        },
        night: {
            description: "Light Snow",
            image: "assets/partly-cloudy-night-snow.svg",
        },
    },
    73: {
        day: {
            description: "Snow",
            image: "assets/overcast-day-snow.svg",
        },
        night: {
            description: "Snow",
            image: "assets/overcast-night-snow.svg",
        },
    },
    75: {
        day: {
            description: "Heavy Snow",
            image: "assets/extreme-day-snow.svg",
        },
        night: {
            description: "Heavy Snow",
            image: "assets/extreme-night-snow.svg",
        },
    },
    77: {
        day: {
            description: "Snow Grains",
            image: "assets/partly-cloudy-day-hail.svg",
        },
        night: {
            description: "Snow Grains",
            image: "assets/partly-cloudy-night-hail.svg",
        },
    },
    80: {
        day: {
            description: "Light Showers",
            image: "assets/partly-cloudy-day-rain.svg",
        },
        night: {
            description: "Light Showers",
            image: "assets/partly-cloudy-night-rain.svg",
        },
    },
    81: {
        day: {
            description: "Showers",
            image: "assets/overcast-day-rain.svg",
        },
        night: {
            description: "Showers",
            image: "assets/overcast-night-rain.svg",
        },
    },
    82: {
        day: {
            description: "Heavy Showers",
            image: "assets/extreme-day-rain.svg",
        },
        night: {
            description: "Heavy Showers",
            image: "assets/extreme-night-rain.svg",
        },
    },
    85: {
        day: {
            description: "Light Snow Showers",
            image: "assets/partly-cloudy-day-snow.svg",
        },
        night: {
            description: "Light Snow Showers",
            image: "assets/partly-cloudy-night-snow.svg",
        },
    },
    86: {
        day: {
            description: "Snow Showers",
            image: "assets/extreme-day-snow.svg",
        },
        night: {
            description: "Snow Showers",
            image: "assets/extreme-night-snow.svg",
        },
    },
    95: {
        day: {
            description: "Thunderstorm",
            image: "assets/thunderstorms-day-overcast-rain.svg",
        },
        night: {
            description: "Thunderstorm",
            image: "assets/thunderstorms-night-overcast-rain.svg",
        },
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
            image: "assets/thunderstorms-day-overcast-snow.svg",
        },
        night: {
            description: "Light Thunderstorms With Hail",
            image: "assets/thunderstorms-night-overcast-snow.svg",
        },
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
            image: "assets/thunderstorms-day-extreme-snow.svg",
        },
        night: {
            description: "Thunderstorm With Hail",
            image: "assets/thunderstorms-night-extreme-snow.svg",
        },
    },
};

const weekly = {
    0: {
        description: "Clear Sky",
        image: "assets/clear-day.svg",
    },
    1: {
        description: "Mainly clear",
        image: "assets/clear-day.svg",
    },
    2: {
        description: "Partly cloudy",
        image: "assets/cloudy.svg",
    },
    3: {
        description: "Cloudy",
        image: "assets/overcast.svg",
    },
    45: {
        description: "Foggy",
        image: "assets/fog.svg",
    },
    48: {
        description: "Rime Fog",
        image: "assets/fog.svg",
    },
    51: {
        description: "Light Drizzle",
        image: "assets/drizzle.svg",
    },
    53: {
        description: "Drizzle",
        image: "assets/overcast-drizzle.svg",
    },
    55: {
        description: "Heavy Drizzle",
        image: "assets/extreme-drizzle.svg",
    },
    56: {
        description: "Light Freezing Drizzle",
        image: "assets/hail.svg",
    },
    57: {
        description: "Freezing Drizzle",
        image: "assets/extreme-hail.svg",
    },
    61: {
        description: "Light Rain",
        image: "assets/rain.svg",
    },
    63: {
        description: "Rain",
        image: "assets/overcast-rain.svg",
    },
    65: {
        description: "Heavy Rain",
        image: "assets/extreme-rain.svg",
    },
    66: {
        description: "Light Freezing Rain",
        image: "assets/sleet.svg",
    },
    67: {
        description: "Freezing Rain",
        image: "assets/extreme-sleet.svg",
    },
    71: {
        description: "Light Snow",
        image: "assets/snow.svg",
    },
    73: {
        description: "Snow",
        image: "assets/overcast-snow.svg",
    },
    75: {
        description: "Heavy Snow",
        image: "assets/extreme-snow.svg",
    },
    77: {
        description: "Snow Grains",
        image: "assets/hail.svg",
    },
    80: {
        description: "Light Showers",
        image: "assets/rain.svg",
    },
    81: {
        description: "Showers",
        image: "assets/overcast-rain.svg",
    },
    82: {
        description: "Heavy Showers",
        image: "assets/extreme-rain.svg",
    },
    85: {
        description: "Light Snow Showers",
        image: "assets/snow.svg",
    },
    86: {
        description: "Snow Showers",
        image: "assets/extreme-snow.svg",
    },
    95: {
        description: "Thunderstorm",
        image: "assets/thunderstorms-rain.svg",
    },
    96: {
        description: "Light Thunderstorms With Hail",
        image: "assets/thunderstorms-snow.svg",
    },
    99: {
        description: "Thunderstorm With Hail",
        image: "assets/thunderstorms-snow.svg",
    },
}

const background = {
    0: "assets/background-img/clear.jpg",
    1: "assets/background-img/clear.jpg",
    2: "assets/background-img/partly-cloudy.jpg",
    3: "assets/background-img/overcast.jpg",
    45: "assets/background-img/fog.jpg",
    48: "assets/background-img/rime-fog.jpg",
    51: "assets/background-img/drizzle.jpg",
    53: "assets/background-img/drizzle.jpg",
    55: "assets/background-img/drizzle.jpg",
    56: "assets/background-img/freezing-drizzle.jpg",
    57: "assets/background-img/freezing-drizzle.jpg",
    61: "assets/background-img/rain.jpg",
    63: "assets/background-img/rain.jpg",
    65: "assets/background-img/rain.jpg",
    66: "assets/background-img/freezing-rain.jpg",
    67: "assets/background-img/freezing-rain.jpg",
    71: "assets/background-img/snow-fall.jpg",
    73: "assets/background-img/snow-fall.jpg",
    75: "assets/background-img/snow-fall.jpg",
    77: "assets/background-img/snow-grains.jpg",
    80: "assets/background-img/rain-shower.jpg",
    81: "assets/background-img/rain-shower.jpg",
    82: "assets/background-img/rain-shower.jpg",
    85: "assets/background-img/snow-showers.jpg",
    86: "assets/background-img/snow-showers.jpg",
    95: "assets/background-img/thunderstorm.jpg",
    96: "assets/background-img/thunderstorm-hail.jpg",
    99: "assets/background-img/thunderstorm-hail.jpg",
}