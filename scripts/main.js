import { guestListGenerator } from "./guestList.js"
import { serviceList } from "./servicesList.js"
import { areasList } from "./parkAreas.js"

const guestElement = document.querySelector(".guest-sidebar")
const serviceListElement = document.querySelector("#services-message")
const mainElement = document.querySelector("#main-container")
const guestHTML = guestListGenerator()
const serviceListHTML = serviceList()
const parkAreasHTML = areasList()

guestElement.innerHTML = guestHTML
serviceListElement.innerHTML = serviceListHTML
mainElement.innerHTML = parkAreasHTML