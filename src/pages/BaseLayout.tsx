/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import ICurrentWeather from "../interfaces/ICurrentWeather";
import ILocation from "../interfaces/ILocation";
import getForecast from "../services/forecastService";
import { defaultCurrentWeatherState, defaultLocationState } from "./defaultState";
import IForecastday from "../interfaces/IForecastday";
import InfoPanel from "../components/InfoPanel/InfoPanel";

import styles from "./BaseLayout.module.scss";
import cloud from "../assets/images/conditions/cloud.svg";

const BaseLayout = () => {
    const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>(defaultCurrentWeatherState);
    const [location, setLocation] = useState<ILocation>(defaultLocationState);
    const [forecastday, setForecastday] = useState<IForecastday[]>([]);
    const [searchState, setSearchState] = useState(localStorage.getItem("lastLocation")!);

    const handleSearchStateChange = (state: string) => setSearchState(state);

    useEffect(() => {
        (async () => {
            const response = await getForecast(searchState);
            setCurrentWeather(response.current);
            setLocation(response.location);
            setForecastday(response.forecast.forecastday);
        })();
    }, [searchState]);

    return (
        <div className={styles.container}>
            <img className={styles.image} src={cloud} alt="Cloud" />
            <InfoPanel
                temp={currentWeather.temp_c}
                location={location.name}
                condition={currentWeather.condition.text}
                windSpeed={currentWeather.wind_kph}
                humidity={currentWeather.humidity}
                forecastday={forecastday}
                handleSearchStateChange={handleSearchStateChange}
            />
        </div>
    );
};

export default BaseLayout;
