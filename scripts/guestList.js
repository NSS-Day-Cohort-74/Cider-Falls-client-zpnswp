// generator HTML code for guestList sidebar

import { getGuests } from "./database.js"
const guestArray = getGuests()

export const guestListGenerator = () => {
    let guestHTML = "<ul>"

    for (const guest of guestArray) {
        guestHTML += `<li>${guest.name}</li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}

