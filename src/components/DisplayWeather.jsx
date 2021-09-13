export const DisplayWeather = (props) => {

    console.log("DATA", props.location.state?.data);

    return (
        <>
            <p>
                {props.location.state?.data.weather[0].icon} : {props.location.state?.data.weather[0].description}</p>
            <ul>Températures :
                <li>  minimale : {props.location.state?.data.main.temp_min}</li>
                <li>  maximale : {props.location.state?.data.main.temp_max}</li>
                <li> ressentie : {props.location.state?.data.main.feels_like}</li>
            </ul>
            <ul>Vent :
                <li>sens du vent : {props.location.state?.data.wind.deg}</li>
                <li>vitesse du vent : {props.location.state?.data.wind.speed}</li>
            </ul>
        </>
    )
}