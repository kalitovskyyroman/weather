import axios from "axios";
import getFullPath from "./utils";

const get = async <T>(endpoint: string, params: any = {}): Promise<T | null> => {
    const response = await axios.get(getFullPath(endpoint), { params });
    return (response.data as T) || null;
};

export default get;
