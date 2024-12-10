// generator HTML code for guestList sidebar

import { getGuests, getAreas } from "./database.js"


// Display the guest location name next to the guest
// How do we access a guests' Area
// Every guest has a parkAreaId

export const guestListGenerator = () => {
    const guestArray = getGuests()
    const areas = getAreas()

    let guestHTML = "<ul>"

    for (const guest of guestArray) {
        // grab guest.parkAreaId
        const currentGuestParkAreaId = guest.parkAreaId
        // iterate through parkAreas database
        for (const area of areas) {
            // grab matched location
            if (currentGuestParkAreaId === area.id) {
                // should display "Guest Name (Park Location)"
                guestHTML += `<li>${guest.name}: (${area.name})</li>`
            }
        }
    }
    guestHTML += "</ul>"

    return guestHTML
}

