import get from "../api/http";
import ISearchLocation from "../interfaces/ISearchLocation";

const ENDPOINT = "search";

async function getSearchLocation(location: string) {
    if (location?.length) {
        return get<ISearchLocation[]>(ENDPOINT, {
            q: location,
        });
    }
    return [];
}

export default getSearchLocation;
