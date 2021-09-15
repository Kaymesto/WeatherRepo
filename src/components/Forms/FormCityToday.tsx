import { useState } from "react";
import { weatherData } from '../../models/weatherData';
import { useHistory } from "react-router-dom";
import { city } from '../../models/city';
import { weatherService } from './../../services/weatherService';
import { ComponentForm } from './ComponentForm';

export const FormCityToday = () => {

    const [weather, setWeather] = useState<weatherData | undefined | any>(undefined);
    const [town, setTown] = useState(String);
    const history = useHistory();


    const submit = (values: React.FormEvent) => {
        let citytoCheck: city;
        citytoCheck = {
            name: town
        };
        values.preventDefault();
        console.log(town);
        weatherService.findCityWeatherToday(citytoCheck).then(res => {
            setWeather(res);
            history.push('/displayWeatherToday', { data: res })
        });

    }

    return (
        <ComponentForm submit={submit} weather={weather} setTown={setTown} />

    )
}