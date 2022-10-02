export default class Tooltip {
    constructor(element) {
        this._element = document.querySelector(element)
        console.log(this._element)
        this.showTooltip = this.showTooltip.bind(this);
        this.click()
    }

    click() {
        const btn = document.querySelector(".btn")
        console.log(btn)
        btn.addEventListener("click", () => {
            let display = this._element.style.display
            if (display === "none") {
                 this.showTooltip()
            } else {
                this.hideTooltip()
            }          
        })
    }

    showTooltip() {
        this._element.style.display = "flex"
        this.position()
        this.textContent()
    }

    position() {
        const btn = document.querySelector(".btn")
        const widthBtn = btn.offsetWidth
        const widthTitle = this._element.offsetWidth
        const { bottom, left } = btn.getBoundingClientRect()
        console.log(top)
        this._element.style.bottom = bottom + 10 + 'px'
        this._element.style.left = left + widthBtn / 2 - widthTitle / 2 + 'px'
    }

    textContent() {
        const popverTitle = document.querySelector(".popver_title")
        const conentTitle = document.querySelector(".conent_title")
        popverTitle.textContent = 'Popover title'
        conentTitle.textContent = "And here's some amazing content. It's very engaging. Right?"
    }

    hideTooltip() {
        this._element.style.display = "none"
    }

}

const tooltip = new Tooltip(".tooltip")
