import screenConditionsEnum from "../enums/screenConditionsEnum";
import ICodesStructure from "../interfaces/ICodesStructure";

const codesStructure: ICodesStructure = {
    [screenConditionsEnum.Sun]: [1000, 1072, 1147, 1168, 1171],
    [screenConditionsEnum.Cloud]: [1003, 1006, 1009, 1030, 1135],
    [screenConditionsEnum.Rain]: [1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243],
    [screenConditionsEnum.Thunderstorm]: [1087, 1246, 1273, 1276],
    [screenConditionsEnum.Show]: [1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1255, 1258],
    [screenConditionsEnum.SnowWithRain]: [1069, 1204, 1207, 1249, 1252, 1261, 1264, 1279, 1282],
};

export default codesStructure;
