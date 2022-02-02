import { Typography } from "@mui/material";
import IForecastday from "../../../interfaces/IForecastday";
import Day from "./Day/Day";

import styles from "./Days.module.scss";

interface IDays {
    days: IForecastday[];
}

const Days = ({ days }: IDays) => (
    <div className={styles.container}>
        <Typography variant="h2">Next {days.length} days</Typography>
        {days.map(day => (
            <Day key={day.date_epoch} date={day.date} maxTemp={day.day.maxtemp_c} minTemp={day.day.mintemp_c} />
        ))}
    </div>
);

export default Days;
