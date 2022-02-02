import IAstro from "./IAstro";
import IDay from "./IDay";
import IHour from "./IHour";

interface IForecastday {
    astro: IAstro;
    date: string;
    date_epoch: number;
    day: IDay;
    hour: IHour[];
}

export default IForecastday;
