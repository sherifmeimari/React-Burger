import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f7f1d.firebaseio.com/'
});

export default instance;