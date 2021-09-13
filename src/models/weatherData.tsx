export interface weatherData {
    id: number,
    name: String,
    cod: number,
    timezone: number,
    dt: number,
    visibility: number,
    base: String,
    coord: coord,
    main: main,
    wind: wind,
    clouds: clouds,
    sys: sys,
    weather: weather
}


interface coord {
    lon: number,
    lat: number

}

interface weather {
    0: [
        {
            "id": number,
            "main": String,
            "description": String,
            "icon": String,
        }
    ]
}

interface main {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
}

interface wind {
    speed: number,
    deg: number
}

interface clouds {
    all: number
}

interface sys {
    type: number,
    id: number,
    country: String,
    sunrise: number,
    sunset: number
}