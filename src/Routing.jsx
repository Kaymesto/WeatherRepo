import { Route, Switch, useHistory } from "react-router-dom"
import { FormCityToday } from './components/Forms/FormCityToday';
import { Home } from './components/Home';
import { DisplayWeatherToday } from './components/DisplayWeatherToday';
import { FormCityToCome } from './components/Forms/FormCityToCome';
import { DisplayWeatherToCome } from './components/DisplayWeatherToCome';


export const Routing = () => {

    const URLHOME = "/"
    const URL_FORM_WEATHER_TODAY = "/weatherToday"
    const URL_FORM_WEATHER_TO_COME = "/weatherToCome"
    const URL_DISPLAY_WEATHER_TODAY = "/displayWeatherToday"
    const URL_DISPLAY_WEATHER_TO_COME = "/displayWeatherToCome"
    const history = useHistory();

    return (

        <Switch>
            <Route exact path={URLHOME} component={Home} />
            <Route exact path={URL_FORM_WEATHER_TODAY} component={FormCityToday} />
            <Route path={URL_FORM_WEATHER_TO_COME} component={FormCityToCome} ></Route>
            <Route path={URL_DISPLAY_WEATHER_TODAY} component={DisplayWeatherToday} ></Route>
            <Route path={URL_DISPLAY_WEATHER_TO_COME} component={DisplayWeatherToCome} ></Route>
        </Switch>

    )
}