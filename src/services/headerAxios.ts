import axios from "axios";



const {token} = JSON.parse (localStorage.getItem('USER') || '[]')

const headerAxios = axios.create({
     headers : {
          'x-token' : token
     }
})

export default headerAxios