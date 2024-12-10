// Import Services
// Import Areas
import { getServices, getAreas, getParkAreaServices } from "./database.js"
const services = getServices()
const areas = getAreas()
const areaServices = getParkAreaServices()

// //click event to show services for each

document.addEventListener(
    "click",
    (clickEvent) => {
        //know what was clciked on
        const clickTarget = clickEvent.target
        //if what was clicked ons type is "service" run code
        if (clickTarget.dataset.type === "service") {
            //store what was clicked ons id
            const currentServiceId = clickTarget.dataset.pkid
            // iterate through ParkAreaServices database
            const matchedAreas = []
            for (const areaService of areaServices) {
                // for each currentServiceID === (fk)serviceId, get parkAreaId and store.
                if (areaService.serviceId === parseInt(currentServiceId)) {
                    matchedAreas.push(areaService.parkAreaId)
                }
                // now we have our matchedAreas foreign IDs
                // example: matchedAreas = [1, 2, 3]
                // iterate matchedAreas 
                // iterate through the areas to get the name of the area that the matched area id is the same as the   
            }
            const matchedAreasName = []
            for (const matchedAreasNumber of matchedAreas) {
                for (const parkAreaObj of areas) {
                    if (matchedAreasNumber === parkAreaObj.id) {
                        matchedAreasName.push(parkAreaObj.name)
                    }
                }
            }
            let alertMessage = `${clickTarget.dataset.name} is available at ${matchedAreasName.join(" and ")}`

            window.alert(alertMessage)
        }

        // check parkAreaId in parkArea Database, if match pull area Name
    }
)



// // HTML SECTIOn
// EXPORT HTML Function
export const serviceList = () => {
    let serviceHTML = "Park Services:&nbsp"
    //iterate through services database for each service
    // for (const service of services) {
    //     //generate an html element
    //     //store state in html element
    //     serviceHTML += `<div class="services" data-type="service" data-pkid="${service.id}" data-name="${service.name}">
    //     ${service.name},&nbsp
    //     </div>`

    // }
    // same as above, but using .map() and .join() to remove trailing comma
    serviceHTML += services.map(service => `<div class="services" data-type="service" data-pkid="${service.id}" data-name="${service.name}">
        ${service.name}
        </div>`).join(",&nbsp")
    
    return serviceHTML
}



