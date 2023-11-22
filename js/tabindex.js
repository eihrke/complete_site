imgs = document.querySelectorAll("img")

for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("tabindex", "0")
}

links = document.querySelectorAll("a")

for (var j = 0; j < links.length; j++) {
    links[j].setAttribute("tabindex", "0")
}

buttons = document.querySelectorAll("button")

for (var idx = 0; idx < buttons.length; idx++) {
    buttons[idx].setAttribute("tabindex", "0")
}

figs = document.querySelectorAll("figure")
figimgs = document.querySelectorAll("figure img")

for (var k = 0; k < figs.length; k++) {
    figs[k].addEventListener("mouseover", function() {
        this.lastElementChild.style.display = "block"
    })

    figs[k].addEventListener("mouseout", function() {
        this.lastElementChild.style.display = "none"
    })
}

for (var l = 0; l < figimgs.length; l++) {
    figimgs[l].addEventListener("focus", function() {
        this.parentElement.lastElementChild.style.display = "block"
    })

    figimgs[l].addEventListener("blur", function() {
        this.parentElement.lastElementChild.style.display = "none"
    })
}
