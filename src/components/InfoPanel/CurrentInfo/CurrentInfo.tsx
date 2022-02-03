import { Typography } from "@mui/material";
import classNames from "classnames";
import Chips from "./Chips/Chips";

import styles from "./CurrentInfo.module.scss";

interface ICurrentInfo {
    location: string;
    condition: string;
    windSpeed: number;
    humidity: number;
    temp: number;
}

const CurrentInfo = ({ location, condition, windSpeed, humidity, temp }: ICurrentInfo) => (
    <div className={styles.container}>
        <div className={styles.temp}>
            <Typography className="bold" variant="h1">
                {temp}
            </Typography>
            <div className={styles.circle} />
        </div>
        <Typography className={classNames(styles.location, "bold")} variant="h1">
            {location}
        </Typography>
        <Typography className={styles.condition} variant="body1">
            {condition}
        </Typography>
        <Chips windSpeed={windSpeed} humidity={humidity} />
    </div>
);

export default CurrentInfo;
