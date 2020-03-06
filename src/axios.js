import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-0001.firebaseio.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;