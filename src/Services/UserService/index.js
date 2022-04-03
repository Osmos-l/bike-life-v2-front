import useAxiosPrivate from "../../Hooks/AxiosPrivate";
import axios from '../ApiService';

const UserService = (authContext) => {
    const axiosPrivate = useAxiosPrivate(authContext);

    const getBikes = () => {
        const user = authContext.user;

        return axiosPrivate.get(`/bike/${user._id}`)
            .then(response => {
                if (response.data) {
                    return response.data;
                }
            })
            .catch((error) => {
                console.log("UserService ->");
                console.log(error);
            });
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
