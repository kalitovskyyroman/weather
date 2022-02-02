import { Chip } from "@mui/material";
import styles from "./Chips.module.scss";

interface IChips {
    windSpeed: number;
    humidity: number;
}

const Chips = ({ windSpeed, humidity }: IChips) => (
    <div className={styles.chips}>
        <Chip label={`${humidity} %`} />
        <Chip label={`${windSpeed} km/h`} />
    </div>
);

export default Chips;
