import { getGuests, getAreas, database } from "./database.js"
import { guestListGenerator } from "./guestList.js"
import { areasList } from "./parkAreas.js"

const guests = getGuests()
const areas = getAreas()
// Event listener
// click the button
// get guest's current parkArea Id
// get new area's primary id
// change guest's parkAreaId to new area's primary id
// will need to change database directly, not a copy
document.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        if (buttonClicked.dataset.type === "movebutton") {
            // get guestID
            const guestDropDownElement = document.getElementById("guest-select")
            const guestDropDownValue = guestDropDownElement.value
            // get areaID
            const areaDropDownElement = document.getElementById("area-select")
            const areaDropDownValue = areaDropDownElement.value

            // once we have both, access guest database, access correct guest object, reassign parkAreaId
            for (const guest of database.guests) {
                if (guest.id === parseInt(guestDropDownValue)) {
                    guest.parkAreaId = parseInt(areaDropDownValue)
                    // window.alert(`${guest.name} is now at location # ${guest.parkAreaId}`)
                }
            }

            // reload and reassign DOM elements after changes to database
            const guestElement = document.querySelector(".guest-sidebar")
            const mainElement = document.querySelector("#main-container")

            const guestHTML = guestListGenerator()
            const parkAreasHTML = areasList()

            guestElement.innerHTML = guestHTML
            mainElement.innerHTML = parkAreasHTML
        }
    }
)



// HTML: 
// generate two dropdown menus
// first, list of guests
// second, list of areas
// generate button

export const generateGuestDropDown = () => {
    let guestDropDownHTML = '<label> Select a guest </label>' + '<select name="Visitor_" id="guest-select">' + '<option>Guests</option>'
    for (const guest of guests) {
        guestDropDownHTML += `<option value="${guest.id}">${guest.name}</option>`
    }

    guestDropDownHTML += "</select>"
    return guestDropDownHTML
}

export const generateAreaDropDown = () => {
    let areaDropDownHTML = '<label> Select an area </label>' + '<select name="Area" id="area-select">' + '<option> Areas </option>'
    for (const area of areas) {
        areaDropDownHTML += `<option value="${area.id}"> ${area.name} </option>`
    }
    areaDropDownHTML += "</select>"
    return areaDropDownHTML
}