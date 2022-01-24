import axios from 'axios'

export const http = axios.create({
    baseURL : 'http://apiteste.felixsapp.com/educacao.php?request=api'
})