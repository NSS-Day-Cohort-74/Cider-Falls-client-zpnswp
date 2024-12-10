// generator HTML code for guestList sidebar

import { getGuests, getAreas } from "./database.js"
const guestArray = getGuests()
const areas = getAreas()

// Display the guest location name next to the guest
// How do we access a guests' Area
// Every guest has a parkAreaId

export const guestListGenerator = () => {
    let guestHTML = "<ul>"

    for (const guest of guestArray) {
        const currentGuestParkAreaId = guest.parkAreaId
        for (const area of areas) {
            if (currentGuestParkAreaId === area.id) {
                guestHTML += `<li>${guest.name}: (${area.name})</li>`
            }
        }

        // grab guest.parkAreaId

        // iterate through parkAreas database
        // grab matched location
        // should display "Guest Name (Park Location)"
    }

    guestHTML += "</ul>"

    return guestHTML
}

