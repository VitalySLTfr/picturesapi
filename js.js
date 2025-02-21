let url = "https://dog.ceo/api/breeds/image/random/9"
const loadButton = document.querySelector("#load")
const clear = document.querySelector("#clear")
const clearAll = document.querySelector("#clearall")
const images = document.querySelector(".imagesblock")
const loadMore = document.querySelector("#loadmore")
const load = document.querySelector(".loader")
const displayWidth = window.innerWidth

images.style.display = "grid"
images.style.gridTemplateColumns = "repeat(3, 1fr)"
images.style.gap = "20px"
load.style.display = "none"
clear.style.display = "none"
loadMore.style.display = "none"
clearAll.style.display = "none"

if (displayWidth < 1024) {
    images.style.gridTemplateColumns = "repeat(2, 1fr)"
    url = "https://dog.ceo/api/breeds/image/random/6"
}
if (displayWidth < 630) {
    images.style.gridTemplateColumns = "repeat(1, 1fr)"
    url = "https://dog.ceo/api/breeds/image/random/6"
}

function getimages() {
    load.style.display = "block"
    fetch(url).then(Response => Response.json()).then(data => {
        console.log(data.message)
        data.message.forEach(element => {
            const img = document.createElement("img")
            img.src = element
            img.style.width = "300px"
            img.style.height = "300px"
            img.style.gridArea = "span 1"
            img.style.position = "center"
            img.style.objectFit = "cover"
            images.appendChild(img)
        });
    }).catch(error => {
        alert("что-то пошло не так")
    }).finally(() => {
        console.log("попытка загрузки завершена"); load.style.display = "none"; loadmore.style.display = "block"; clearAll.style.display = "block"; clear.style.display = "block"
    })
}
loadButton.addEventListener("click", getimages)
clear.addEventListener("click", () => {
    images.innerHTML = ""
    loadMore.style.display = "none"
    clearAll.style.display = "none"
    clear.style.display = "none"
})
loadMore.addEventListener("click", getimages)
clearAll.addEventListener("click", () => {
    images.innerHTML = ""
    loadMore.style.display = "none"
    clearAll.style.display = "none"
})