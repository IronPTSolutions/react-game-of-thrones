import axios from 'axios';

const http = axios.create({
  baseURL: 'https://got-mock-api.herokuapp.com'
})

const listEpisodes = () => http.get('/episodes')
  .then(res => res.data)

export default {
  listEpisodes
}
