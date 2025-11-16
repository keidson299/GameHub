import axios, {CanceledError} from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: '9e00adc2890447b2bfc67480f7ea1a11'
  }
})

export {CanceledError}