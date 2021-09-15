import { useState, useEffect } from 'react';
import { weatherData } from '../models/weatherData';


export const DisplayWeatherForDays = (props) => {

    const [weatherData, setWeatherData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setWeatherData(props.data);

        setIsLoading(false)
    }, [])


    return (
        isLoading ? null :
            <>
                <p>Date : {weatherData.dt_txt}</p>
                <p>{weatherData.weather[0].icon} : {weatherData.weather[0].description}</p>
                <ul>Températures :
                    <li>  minimale : {weatherData.main.temp_min}</li>
                    <li>  maximale : {weatherData.main.temp_max}</li>
                    <li> ressentie : {weatherData.main.feels_like}</li>
                </ul>
                <ul>Vent :
                    <li>sens du vent : {weatherData.wind.deg}</li>
                    <li>vitesse du vent : {weatherData.wind.speed}</li>
                </ul>
            </>
    )
};