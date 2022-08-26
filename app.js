const menuBtn = document.getElementById("menu-icon")
const menuItems = document.getElementById("menu-items")

menuItems.style.maxHeight = "0px"

menuBtn.addEventListener("click", () => {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px"
    } else {
        menuItems.style.maxHeight = "0px"
    }
})