import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-b3ab9.firebaseio.com/'
});

export default instance;