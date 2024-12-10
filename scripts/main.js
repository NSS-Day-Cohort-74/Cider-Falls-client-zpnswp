import { guestListGenerator } from "./guestList.js"
import { serviceList } from "./servicesList.js"
import { areasList } from "./parkAreas.js"
import { generateGuestDropDown, generateAreaDropDown } from "./dropdown.js"

const guestElement = document.querySelector(".guest-sidebar")
const serviceListElement = document.querySelector("#services-message")
const mainElement = document.querySelector("#main-container")
const guestListDropDownElement = document.querySelector(".guest-dropdown")
const areaListDropDownElement = document.querySelector(".area-dropdown")

const guestHTML = guestListGenerator()
const serviceListHTML = serviceList()
const parkAreasHTML = areasList()
const GuestDropDownHTML = generateGuestDropDown()
const areaDropDownHTML = generateAreaDropDown()

guestElement.innerHTML = guestHTML
serviceListElement.innerHTML = serviceListHTML
serviceListElement.innerHTML += "."
mainElement.innerHTML = parkAreasHTML
guestListDropDownElement.innerHTML = GuestDropDownHTML
areaListDropDownElement.innerHTML = areaDropDownHTML