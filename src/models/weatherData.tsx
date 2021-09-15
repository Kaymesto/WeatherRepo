export interface weatherData {
    "coord": coord,
    "weather": [
        {
            "id": number,
            "main": String,
            "description": String,
            "icon": String
        }
    ],
    "base": String,
    "main": main,
    "visibility": number,
    "wind": wind,
    "clouds": clouds,
    "dt": number,
    "sys": sys,
    "timezone": number,
    "id": number,
    "name": String,
    "cod": number
}


interface coord {
    lon: number,
    lat: number
}

interface weather {
}

interface main {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
}

interface wind {
    speed: number,
    deg: number
}

interface clouds {
    all: number
}

interface sys {
    "type": number,
    "id": number,
    "country": String,
    "sunrise": number,
    "sunset": number
}