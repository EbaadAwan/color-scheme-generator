const selectTag = document.querySelector('select')
const inputTag = document.querySelector('input[type="color"]');
const btn = document.querySelector('button')

let color = inputTag.value
color = color.substring(1)
let colorType = selectTag.value

inputTag.addEventListener("input", () => {
    color = inputTag.value
    color = color.substring(1)
})

selectTag.addEventListener("change", () => {
    colorType = selectTag.value
})


btn.addEventListener('click', () => {
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorType}&count=5`)
        .then(response => response.json())
        .then((data) => {
            let colorArr = []
            data.colors.forEach(color => colorArr.push(color.hex.value))
            render(colorArr)
        })
})

function render(array) {
    let string = ""
    array.forEach((arr) => {
        string += `<div class="color-type" style="background-color: ${arr};"></div>`
    })
    document.querySelector('main').innerHTML = string
    
    string = ""
    array.forEach((arr) => {
        string += `<p>${arr}</p>`
    })
    document.querySelector('footer').innerHTML = string
}