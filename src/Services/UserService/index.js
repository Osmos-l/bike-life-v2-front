import {makeGetRequest} from '../ApiService';
import {getUser} from "../../Libs/Store";

export const getBikes = async () => {
    const user = getUser();
    if (!user) {
        // tryGetUser();
        return [];
    }

    const response = await makeGetRequest(`/bike/${user.id}`);
    if (response.bikes) {
        return response.bikes
    }

    return [];
}

export const getInventory = () => {
    return [];
}

export const getTracks = () => {
    return [];
}
