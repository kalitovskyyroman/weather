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
    handleSearchStateChange: (state: string) => void;
}

const InfoPanel = ({
    temp,
    location,
    condition,
    windSpeed,
    humidity,
    forecastday,
    handleSearchStateChange,
}: IInfoPanel) => (
    <div>
        <CurrentInfo temp={temp} location={location} condition={condition} windSpeed={windSpeed} humidity={humidity} />
        <Search handleSearchStateChange={handleSearchStateChange} />
        <Days days={forecastday} />
    </div>
);

export default InfoPanel;
