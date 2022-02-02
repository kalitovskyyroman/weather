import screenConditionsEnum from "../enums/screenConditionsEnum";

interface ICodesStructure {
    [screenConditionsEnum.Sun]: number[];
    [screenConditionsEnum.Cloud]: number[];
    [screenConditionsEnum.Rain]: number[];
    [screenConditionsEnum.Thunderstorm]: number[];
    [screenConditionsEnum.Show]: number[];
    [screenConditionsEnum.SnowWithRain]: number[];
}

export default ICodesStructure;
