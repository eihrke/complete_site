imgs = document.querySelectorAll("img")
box = document.querySelector("#filterbox")
original = document.querySelector("#original")
filtered = document.querySelector("#filtered")

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function() {
        box.style.display = "grid"
        original.setAttribute("src", this.src)
        filtered.setAttribute("src", this.src)
    })

    imgs[i].addEventListener("keyup", function(event) {
        event.preventDefault()
        if (event.keyCode === 13) {
            box.style.display = "grid"
        original.setAttribute("src", this.src)
        filtered.setAttribute("src", this.src)
        }
    })
}

document.querySelector("#exit").addEventListener("click", function() {
    box.style.display = "none"
    filtered.style.filter = "initial"
})

document.querySelector("#none").addEventListener("click", function() {
    filtered.style.filter = "initial"
})

document.querySelector("#gray").addEventListener("click", function() {
    filtered.style.filter = "grayscale(1)"
})

document.querySelector("#sepia").addEventListener("click", function() {
    filtered.style.filter = "sepia(1)"
})

document.querySelector("#sat").addEventListener("click", function() {
    filtered.style.filter = "saturate(1.5)"
})

document.querySelector("#hue").addEventListener("click", function() {
    filtered.style.filter = "hue-rotate(90deg)"
})
