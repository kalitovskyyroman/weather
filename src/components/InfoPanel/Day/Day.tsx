import { Typography } from "@mui/material";
import styles from "./Day.module.scss";

interface IDay {
    title: string;
}

const Day = ({ title }: IDay) => (
    <div className={styles.container}>
        <Typography variant="body1">{title}</Typography>
    </div>
);

export default Day;
