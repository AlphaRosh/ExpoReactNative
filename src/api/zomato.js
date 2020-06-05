import axios from 'axios'

export default axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key':'feff7f98bbed547c0115764b763b5abf'
    }
})