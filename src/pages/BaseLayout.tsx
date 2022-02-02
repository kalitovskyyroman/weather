/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import Search from "../components/Search/Search";
import ICurrentWeather from "../interfaces/ICurrentWeather";
import ILocation from "../interfaces/ILocation";
import getForecast from "../services/forecastService";

import styles from "./BaseLayout.module.scss";

const defaultCurrentWeatherState: ICurrentWeather = {
    cloud: 0,
    condition: {
        code: 0,
        icon: "",
        text: "",
    },
    feelslike_c: 0,
    feelslike_f: 0,
    gust_kph: 0,
    gust_mph: 0,
    humidity: 0,
    is_day: 0,
    last_updated: "",
    last_updated_epoch: 0,
    precip_in: 0,
    precip_mm: 0,
    pressure_in: 0,
    pressure_mb: 0,
    temp_c: 0,
    temp_f: 0,
    uv: 0,
    vis_km: 0,
    vis_miles: 0,
    wind_degree: 0,
    wind_dir: "",
    wind_kph: 0,
    wind_mph: 0,
};
const defaultLocationState: ILocation = {
    country: "",
    lat: 0,
    localtime: "",
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
};

/* eslint-disable arrow-body-style */
const BaseLayout = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>(defaultCurrentWeatherState);
    const [location, setLocation] = useState<ILocation>(defaultLocationState);

    useEffect(() => {
        (async () => {
            const resultResp = await getForecast();
            setCurrentWeather(resultResp?.current);
            setLocation(resultResp?.location);
        })();
    }, []);

    return (
        <div className={styles.container}>
            <InfoPanel
                location={location?.name}
                condition={currentWeather?.condition.text}
                windSpeed={currentWeather?.wind_kph}
                humidity={currentWeather?.humidity}
            />
            <Search />
        </div>
    );
};

export default BaseLayout;
