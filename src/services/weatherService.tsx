import { httpService, tokenAPI } from "./httpService";
import { city } from './../models/city';

class WeatherHttpService {
    async findCityWeatherToday(city: city) {
        return httpService.get(`data/2.5/weather?q=${city.name}&appid=${tokenAPI}&units=metric&lang=fr`);
    }

    async findCityWeatherToCome(city: city) {
        return httpService.get(`data/2.5/forecast?q=${city.name}&appid=${tokenAPI}&units=metric&lang=fr`);
    }
}

export const weatherService = Object.freeze(new WeatherHttpService());