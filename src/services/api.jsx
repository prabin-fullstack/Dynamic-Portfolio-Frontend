import axios from 'axios'

const api = axios.create({
    baseURL:"https://dynamic-portfolio-wjuv.onrender.com/api/",
})

export default api