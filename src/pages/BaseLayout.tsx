/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import Search from "../components/Search/Search";
import ICurrentWeather from "../interfaces/ICurrentWeather";
import ILocation from "../interfaces/ILocation";
import getForecast from "../services/forecastService";
import { defaultCurrentWeatherState, defaultLocationState } from "./defaultState";

import styles from "./BaseLayout.module.scss";
import IForecastday from "../interfaces/IForecastday";
import Days from "../components/InfoPanel/Days/Days";

const BaseLayout = () => {
    const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>(defaultCurrentWeatherState);
    const [location, setLocation] = useState<ILocation>(defaultLocationState);
    const [forecastday, setForecastday] = useState<IForecastday[]>([]);

    useEffect(() => {
        (async () => {
            const response = await getForecast();
            setCurrentWeather(response.current);
            setLocation(response.location);
            setForecastday(response.forecast.forecastday);
            console.log(response);
        })();
    }, []);

    return (
        <div className={styles.container}>
            <InfoPanel
                temp={currentWeather.temp_c}
                location={location.name}
                condition={currentWeather.condition.text}
                windSpeed={currentWeather.wind_kph}
                humidity={currentWeather.humidity}
            />
            <Search />
            <Days days={forecastday} />
        </div>
    );
};

export default BaseLayout;
