function rgbtohex(red,green,blue) { // Convierte un rgb (255, 255, 255) a un color hexadecimal (#FFFFFF)

    function limit(color) { // Limita el color dado a un rango de 0 a 255
        return Math.min(Math.max(color, 0), 255)
    }

    let rgb = [limit(red), limit(green), limit(blue)]
    let hex = [rgb[0].toString(16), rgb[1].toString(16), rgb[2].toString(16)]

    hex = hex.map(item => {
        if (item.length == 1) return "0" + item
        return item
    })

    return ("#" + hex.join('').toUpperCase())
}

function hextorgb(hex) { // Convierte un color hexadecimal (#FFFFFF) a rgb (255, 255, 255)
    let hexcolor = hex.replace("#","").split("")
    if (hexcolor.length < 6) return // verifica que el color hexadecimal sea valido

    let red = ""
    let green = ""
    let blue = ""
    
    hexcolor.forEach(element => {
        if (red.length == 0 || red.length < 2) return red += element
        if (green.length == 0 || green.length < 2) return green += element
        if (blue.length == 0 || blue.length < 2) return blue += element
    });

    let colors = [red, green, blue];
    
    colors = colors.map(item => { // Convierte los numeros de base 16 a base 10
        return parseInt(item, 16)
    })
    
    if (isNaN(colors[0]) || isNaN(colors[1]) || isNaN(colors[2])) return // Verifica que los numeros sean validos
    return colors
}

const input = document.querySelector('#color_input')
const outputs = document.querySelector("#output").querySelectorAll("div")

function generator() { // Genera la paleta de colores
    let rgb_base = hextorgb(input.value)
    input.value = ""
    if (rgb_base == undefined) return

    outputs.forEach(div => {
        
        let r = Math.floor(rgb_base[0] * Math.random())
        let g = Math.floor(rgb_base[1] * Math.random())
        let b = Math.floor(rgb_base[2] * Math.random())
        
        let result = rgbtohex(r, g, b)
        if (result != undefined) {
            div.innerHTML = `<div>${[r,g,b].join(", ")}<br>${result}</div>`
            div.style.backgroundColor = result
        }
    })
}