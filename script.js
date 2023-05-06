
const faqEl = document.getElementById("faq-box-content")
const faqEl1 = document.getElementById("faq-box-content1")
const faqEl2 = document.getElementById("faq-box-content2")
const faqEl3 = document.getElementById("faq-box-content3")
const faqEl4 = document.getElementById("faq-box-content4")
const faqEl5 = document.getElementById("faq-box-content5")

const iconEl = document.getElementById("icon1")
const iconEl1 = document.getElementById("icon2")
const iconEl2 = document.getElementById("icon3")
const iconEl3 = document.getElementById("icon4")
const iconEl4 = document.getElementById("icon5")
const iconEl5 = document.getElementById("icon6")

faqEl.style.display = "none"
faqEl1.style.display = "none"
faqEl2.style.display = "none"
faqEl3.style.display = "none"
faqEl4.style.display = "none"
faqEl5.style.display = "none"

function faqClick() {
    if (faqEl.style.display === "none") {
        faqEl.style.display = "block"
        iconEl.style.transform = "rotate(45deg)"
    }
    else {
        faqEl.style.display = "none"
        iconEl.style.transform = "rotate(90deg)"
    }
}

function faqClick1() {
    if (faqEl1.style.display === "none") {
        faqEl1.style.display = "block"
        iconEl1.style.transform = "rotate(45deg)"
    }
    else {
        faqEl1.style.display = "none"
        iconEl1.style.transform = "rotate(90deg)"
    }
}

function faqClick2() {
    if (faqEl2.style.display === "none") {
        faqEl2.style.display = "block"
        iconEl2.style.transform = "rotate(45deg)"
    }
    else {
        faqEl2.style.display = "none"
        iconEl2.style.transform = "rotate(90deg)"
    }
}

function faqClick3() {
    if (faqEl3.style.display === "none") {
        faqEl3.style.display = "block"
        iconEl3.style.transform = "rotate(45deg)"
    }
    else {
        faqEl3.style.display = "none"
        iconEl3.style.transform = "rotate(90deg)"
    }
}

function faqClick4() {
    if (faqEl4.style.display === "none") {
        faqEl4.style.display = "block"
        iconEl4.style.transform = "rotate(45deg)"
    }
    else {
        faqEl4.style.display = "none"
        iconEl4.style.transform = "rotate(90deg)"
    }
}

function faqClick5() {
    if (faqEl5.style.display === "none") {
        faqEl5.style.display = "block"
        iconEl5.style.transform = "rotate(45deg)"
    }
    else {
        faqEl5.style.display = "none"
        iconEl5.style.transform = "rotate(90deg)"
    }
}