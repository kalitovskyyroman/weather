import baseUrl from "../global";

const getFullPath = (endpoint: string) => `${baseUrl}/${endpoint}.json?key=${process.env.REACT_APP_API_KEY}`;

export default getFullPath;
