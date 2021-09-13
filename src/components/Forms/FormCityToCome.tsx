import { useState } from "react";
import { useHistory } from "react-router-dom";
import { weatherData } from './../../models/weatherData';
import { weatherService } from './../../services/weatherService';
import { city } from './../../models/city';

export const FormCityToCome = () => {

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
        weatherService.findCityWeatherToCome(citytoCheck).then(res => {
            setWeather(res);
            history.push('/displayWeatherToCome', { data: res })
        });

    }

    return (
        <form onSubmit={submit}>
            <label>
                Nom de la ville :
                <input type="text" name="town" value={town} onChange={(e) => setTown(e.target.value)} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    )
}