import {makeGetRequest} from '../ApiService';

const UserService = (authContext) => {

    const getBikes = async () => {
        const user = authContext.user;

        const response = await makeGetRequest(`/bike/${user._id}`);
        if (response.bikes) {
            return response.bikes;
        }

        return [];
    }

    const getInventory = () => {
        return [];
    }

    const getTracks = () => {
        return [];
    }

    return {
        getBikes,
        getInventory,
        getTracks
    }
}

export default UserService;
