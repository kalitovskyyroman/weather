import IBaseValues from "./IBaseValues";
import ICondition from "./ICondition";

interface IHour extends IBaseValues {
    chance_of_rain: number;
    chance_of_snow: number;
    cloud: number;
    condition: ICondition;
    dewpoint_c: number;
    dewpoint_f: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    time: string;
    time_epoch: number;
    uv: number;
    will_it_rain: number;
    will_it_snow: number;
    windchill_c: number;
    windchill_f: number;
}

export default IHour;
