import weekdaysEnum from "../../../../enums/weekdaysEnum";

const formatDayToString = (day: number): string => weekdaysEnum[day];

export default formatDayToString;
