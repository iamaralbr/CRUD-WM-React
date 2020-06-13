import axios from "axios";

let config = {
  baseURL: 'http://localhost:3001/users'
}

const _axios = axios.create(config)

export default _axios