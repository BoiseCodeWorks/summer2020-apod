export default class APOD {
    constructor(data) {
        this.creator = data.copyright
        this.explanation = data.explanation
        this.title = data.title
        this.imgUrl = data.hdurl
    }

    get Template() {
        return `<div class="card">
                    <img class="card-img-top" src="${this.imgUrl}" alt="">
                    <div class="card-body">
                        <h4 class="card-title">${this.title}</h4>
                        <p class="card-text">${this.explanation} - <em>${this.creator}</em></p>
                    </div>
                </div>`
    }
}