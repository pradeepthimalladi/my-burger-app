import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-app-react-ed4c2.firebaseio.com/'
});

export default instance;