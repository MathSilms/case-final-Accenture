import axios from 'axios'

export const Api = axios.create({
    baseURL:'http://javatravelers-backend.azurewebsites.net/'
})
