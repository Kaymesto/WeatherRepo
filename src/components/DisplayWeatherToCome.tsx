import { DisplayWeatherForDays } from "./DisplayWeatherForDays";
import { useEffect, useState } from 'react';

export const DisplayWeatherToCome = (props: any) => {

    const [listWeather, setListWeather] = useState([{}]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setListWeather(props.location.state.data.list);
        setIsLoading(false)
    }, [])
    console.log("DANS COMPOSANT", props.location.state.data);

    return (
        isLoading ? null :
            <>  OKI <br />
                {listWeather.map((item, key) => {
                    console.log("object", item);

                    return (
                        <div>
                            <DisplayWeatherForDays data={item} key={key} />

                        </div>)
                }

                )
                }
            </>
    )
}