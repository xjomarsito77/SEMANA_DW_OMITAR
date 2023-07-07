const testimonios = document.querySelectorAll(".testimonio")

var current = 0
function update(transitions) {
    testimonios.forEach((element, index) => {
        element.style.transform = "translate("+ ( (index - current) * 150) +"vw ,"+ (index * -400) +"px)"
        if (transitions == true) element.style.transition = "transform 6s"
    })
    current += 1
    if (current >= testimonios.length) current = 0
}
update(false)

setInterval(() => {
    update(true);
}, 6000)