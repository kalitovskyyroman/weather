import { Typography } from "@mui/material";
import classNames from "classnames";
import Chips from "./Chips/Chips";
import styles from "./InfoPanel.module.scss";

interface IInfoPanel {
    location: string;
    condition: string;
    windSpeed: number;
    humidity: number;
}

/* eslint-disable arrow-body-style */
const InfoPanel = ({ location, condition, windSpeed, humidity }: IInfoPanel) => {
    return (
        <div className={styles.container}>
            <Typography className={classNames(styles.location, "bold")} variant="h1">
                {location}
            </Typography>
            <Typography className={styles.condition} variant="body1">
                {condition}
            </Typography>
            <Chips windSpeed={windSpeed} humidity={humidity} />
        </div>
    );
};

export default InfoPanel;
