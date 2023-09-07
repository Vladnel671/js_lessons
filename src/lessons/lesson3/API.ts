import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com/',
};
const key = '38770e66';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const params = {
            apikey: key,
            t: title,
        };
        console.log(params)
        return axiosInstance.get('/', { params })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error('Error searching films by title:', error);
                throw new Error('Error occurred while searching films by title.');
            });
    },

    searchFilmsByType: (title: string, type: string) => {
        const params = {
            apikey: key,
            t: title,
            type: type,
        };
        return axiosInstance.get('/', { params })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.error('Error searching films by type:', error);
                throw new Error('Error occurred while searching films by type.');
            });
    }
};

export default API;
