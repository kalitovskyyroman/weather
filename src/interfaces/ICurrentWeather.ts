import IBaseValues from "./IBaseValues";
import ICondition from "./ICondition";

interface ICurrentWeather extends IBaseValues {
    cloud: number;
    condition: ICondition;
    humidity: number;
    last_updated: string;
    last_updated_epoch: number;
    uv: number;
}

export default ICurrentWeather;
