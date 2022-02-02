import get from "../api/http";

const ENDPOINT = "forecast";

async function getForecast(days = 3) {
    return get<any>(ENDPOINT, {
        q: "London",
        days,
        aqi: "no",
        alerts: "no",
    });
}

export default getForecast;
