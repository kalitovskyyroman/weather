import IForecastday from "../../interfaces/IForecastday";
import CurrentInfo from "./CurrentInfo/CurrentInfo";
import Days from "./Days/Days";
import Search from "./Search/Search";

interface IInfoPanel {
    temp: number;
    location: string;
    condition: string;
    windSpeed: number;
    humidity: number;
    forecastday: IForecastday[];
}

const InfoPanel = ({ temp, location, condition, windSpeed, humidity, forecastday }: IInfoPanel) => (
    <div>
        <CurrentInfo temp={temp} location={location} condition={condition} windSpeed={windSpeed} humidity={humidity} />
        <Search />
        <Days days={forecastday} />
    </div>
);

export default InfoPanel;
