import baseUrl from "../global";

const getFullPath = (endpoint: string) => `${baseUrl}/${endpoint}.json`;

export default getFullPath;
