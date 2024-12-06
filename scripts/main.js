import { guestListGenerator } from "./guestList.js"

const guestElement = document.querySelector(".guest-sidebar")
const guestHTML = guestListGenerator()

guestElement.innerHTML = guestHTML