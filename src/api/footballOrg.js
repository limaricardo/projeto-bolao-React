import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.football-data.org/v2/',
    headers: {
        'X-Auth-Token': '9178f6e7fe724579a82ae94682d4cff3'
    }
})