const menuBtn = document.getElementById("menu-icon")
const menuItems = document.getElementById("menu-items")
const smallImg = document.getElementsByClassName("small-img")
const productImg = document.getElementById("product-img")


menuItems.style.maxHeight = "0px"

menuBtn.addEventListener("click", () => {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px"
    } else {
        menuItems.style.maxHeight = "0px"
    }
})
getImgs()
    // JS for Product Details
function getImgs() {
    for (const img of smallImg) {
        // console.log(img);
        img.addEventListener('click', (e) => {
            productImg.src = `images/gallery-${img.id}.jpg`

        })
    }
}