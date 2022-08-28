const menuBtn = document.getElementById("menu-icon")
const menuItems = document.getElementById("menu-items")
const smallImg = document.getElementsByClassName("small-img")
const productImg = document.getElementById("product-img")
const loginForm = document.getElementById("login-form")
const registrationForm = document.getElementById("registration-form")
const indicator = document.getElementById("indicator")

const loginBtn = document.getElementById("login")
const registerBtn = document.getElementById("register")


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

// Toggle sign up and login form



loginBtn.addEventListener("click", () => {
    console.log("Login");

    loginForm.style.transform = "translateX(0px)"
    registrationForm.style.transform = "translateX(0px)"
    indicator.style.transform = "translateX(0px)"
})

registerBtn.addEventListener("click", () => {
    console.log("Create");
    loginForm.style.transform = "translateX(300px)"
    registrationForm.style.transform = "translateX(300px)"
    indicator.style.transform = "translateX(100px)"
})