import ApodService from "../Services/ApodService.js";
import store from "../store.js";

//Private
function _draw() {
    let apod = store.State.apod;
    document.getElementById('apod').innerHTML = apod.Template
}

//Public
export default class ApodController {
    constructor() {
        store.subscribe("apod", _draw);
    }
}
