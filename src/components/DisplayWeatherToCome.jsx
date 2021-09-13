import { DisplayWeather } from "./DisplayWeather";

export const DisplayWeatherToCome = (props) => {

    console.log("DATA TO COME", props.location.state.data);

    return (
        <>  OKI
            {props.location.state.data.list.map((weather, index) => {
                <DisplayWeather data={weather} key={index} />
            })
            }
        </>
    )
}