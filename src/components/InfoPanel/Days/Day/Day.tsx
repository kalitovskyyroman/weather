import { Typography } from "@mui/material";
import moment from "moment";
import styles from "./Day.module.scss";
import formatDayToString from "./dayUtils";

interface IDay {
    date: string;
    maxTemp: number;
    minTemp: number;
}

const Day = ({ date, maxTemp, minTemp }: IDay) => {
    const convertedDate = moment(date);
    const day = convertedDate.day();

    return (
        <div className={styles.container}>
            <Typography variant="body1">{formatDayToString(day)}</Typography>
            <div className={styles.temp}>
                <Typography variant="body1">{maxTemp}</Typography>
                <Typography variant="body1">{minTemp}</Typography>
            </div>
        </div>
    );
};

export default Day;
