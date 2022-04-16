import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export const busca = async (url, setData) => {
    const res = await api.get(url)
    // setData(res.data)
    return res.data
}

const token = '385dccad8c1cd60cd37ead7e406dd043';

export const TopMovie = async (page) => {
    const res = await apiMovie.get(`discover/movie?with_keywords=180547&api_key=${token}&language=pt-BR&page=${page}`)
    return res.data
}

export const TopTv = async (page) => {
    const res = await apiMovie.get(`discover/tv?with_keywords=180547&api_key=${token}&language=pt-BR&page=${page}`)
    return res.data
}