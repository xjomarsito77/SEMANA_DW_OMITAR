const items = document.querySelector("nav").querySelectorAll("div.item")

items.forEach(item => {
    var button = item.querySelector("a")
    var context = item.querySelector(".context")

    button.addEventListener("mouseover", event => {
        event.preventDefault()
        context.classList.add("show")
    })

    item.addEventListener("mouseout", event => {
        event.preventDefault()
        var parent = event.toElement.parentElement
        if (parent != context && parent != item) {
            context.classList.remove("show")
        }
    })
})