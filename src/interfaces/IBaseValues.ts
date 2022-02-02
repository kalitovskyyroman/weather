import IGust from "./IGust";
import IPrecip from "./IPrecip";
import IPressure from "./IPressure";
import ITemp from "./ITemp";
import IVis from "./IVis";
import IWind from "./IWind";

interface IBaseValues extends IWind, ITemp, IGust, IVis, IPressure, IPrecip {
    is_day: number;
}

export default IBaseValues;
