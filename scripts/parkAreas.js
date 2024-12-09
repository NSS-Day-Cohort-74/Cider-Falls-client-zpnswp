// import ParkAreas
// Import Guests
import { getAreas, getGuests, getParkAreaServices, getServices } from "./database.js";

const guests = getGuests()
const areas = getAreas()
const services = getServices()
const parkAreaServices = getParkAreaServices()


// CLICK EVENT SECTION
// WHEN AREA NAME IS CLICKED CURRENT NUMBER OF PARK GUESTS ARE DISPLAYED IN A WINDOW ALERT "THERE ARE X GUESTS IN THE AREA"

document.addEventListener(
    "click",
    (clickEvent) => {
        const areaClicked = clickEvent.target
        const id = parseInt(areaClicked.dataset.id)
        let guestCount = 0

        if (areaClicked.dataset.type === "area") {
            for (const guest of guests) {
                if (guest.parkAreaId === id) {
                    guestCount++
                }

            }
            window.alert(`There are ${guestCount} guests in this area.`)
        }
    }
)


export const areasList = () => {
    let areaHTML = "<section class='park-areas'>"

    for (const area of areas) {
        const serviceIdArray = []
        const serviceNameArray = []

        for (const parkAreaService of parkAreaServices) {
            if (area.id === parkAreaService.parkAreaId) {
                serviceIdArray.push(parkAreaService.serviceId)
            }
        }

        for (const serviceId of serviceIdArray) {
            for (const service of services) {
                if (serviceId === service.id) {
                    serviceNameArray.push(service.name)
                }
            }
        }

        areaHTML += `<article   class="park-area-card"
                                data-id="${area.id}"
                                style="background-color:${area.color};">
                                <img src="${area.img}">
                                <h3 data-type="area" data-id="${area.id}">${area.name}:</h3> 
                                ${serviceNameArray.join(", ")}
                                </article>`
    }

    areaHTML += "</section>"

    return areaHTML
}

// HTML SECTION
// Export function Park Areas List
// iterate through parkAreas database
// for each park, generate an html element and store state in html variable

// example tags <article data-id="${}"></article>