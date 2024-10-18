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
