import get from "../api/http";

const ENDPOINT = "forecast";

async function getForecast(location: string, days = 3) {
    return get<any>(ENDPOINT, {
        q: location,
        days,
        aqi: "no",
        alerts: "no",
    });
}

export default getForecast;
