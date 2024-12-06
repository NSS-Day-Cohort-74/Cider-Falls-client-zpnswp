import { guestListGenerator } from "./guestList.js"
import { serviceList } from "./servicesList.js"

const guestElement = document.querySelector(".guest-sidebar")
const serviceListElement = document.querySelector("#services-message")
const guestHTML = guestListGenerator()
const serviceListHTML = serviceList()

guestElement.innerHTML = guestHTML
serviceListElement.innerHTML = serviceListHTML