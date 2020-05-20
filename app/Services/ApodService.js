import { nasaKey } from "../Keys.js";
import APOD from "../Models/APOD.js";
import store from "../store.js";

const _api = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=" + nasaKey,
    setTimeout: 3000
})

class ApodService {
    constructor() {
        this.getApod()
    }
    getApod() {
        _api.get("")
            .then(res => {
                let apodData = new APOD(res.data)
                store.commit('apod', apodData)
            })
            .catch(e => console.error(e))
    }
}

const APOD_SERVICE = new ApodService();
export default APOD_SERVICE