// database
const database = {
    guests: [
        { id: 1, name: "John Smith", parkAreaId: 3 },
        { id: 2, name: "Emily Johnson", parkAreaId: 6 },
        { id: 3, name: "Michael Chen", parkAreaId: 2 },
        { id: 4, name: "Sarah Rodriguez", parkAreaId: 6 },
        { id: 5, name: "David Kim", parkAreaId: 1 },
        { id: 6, name: "Olivia Martinez", parkAreaId: 3 },
        { id: 7, name: "James Wilson", parkAreaId: 2 },
        { id: 8, name: "Emma Thompson", parkAreaId: 5 },
        { id: 9, name: "Alexander Park", parkAreaId: 4 },
        { id: 10, name: "Sophia Lee", parkAreaId: 1 }
    ],
    parkAreas: [
        { id: 1, name: "Lodge" },
        { id: 2, name: "Lost Wolf Hiking Trail" },
        { id: 3, name: "Chamfort River" },
        { id: 4, name: "Gander River" },
        { id: 5, name: "Camp Ground" },
        { id: 6, name: "Pine Bluffs Trails" },
    ],
    services: [
        {id: 1, name: "Hiking"},
        {id: 2, name: "Rafting"},
        {id: 3, name: "Canoeing"},
        {id: 4, name: "fishing"},
        {id: 5, name: "parking"},
        {id: 6, name: "lodging"},
        {id: 8, name: "picnicking"},
        {id: 9, name: "Food Vendors"},
        {id: 10, name: "Zip Lines"},
        {id: 11, name: "Office"},
        {id: 12, name: "Park"},
        {id: 13, name: "Children Play Areas"},
        {id: 14, name: "Information"},
        {id: 15, name: "Rock Climbing"},
    
    ],
    parkAreaServices: [
        {id: 1, parkAreaId: 1, serviceId: 6, },
        {id: 2, parkAreaId: 1, serviceId: 5 },
        {id: 3, parkAreaId: 1, serviceId: 14 },
        {id: 4, parkAreaId: 1, serviceId: 8 },
        {id: 5, parkAreaId: 2, serviceId: 1 },
        {id: 6, parkAreaId: 2, serviceId: 8 },
        {id: 7, parkAreaId: 2, serviceId: 15 },
        {id: 8, parkAreaId: 3, serviceId: 2},
        {id: 9, parkAreaId: 3, serviceId: 3 },
        {id: 10, parkAreaId: 3, serviceId: 4 },
        {id: 11, parkAreaId: 4, serviceId: 4 },
        {id: 12, parkAreaId: 4, serviceId: 1 },
        {id: 13, parkAreaId: 5, serviceId: 14 },
        {id: 14, parkAreaId: 5, serviceId: 6 },
        {id: 15, parkAreaId: 5, serviceId: 5 },
        {id: 16, parkAreaId: 6, serviceId: 9 },
        {id: 17, parkAreaId: 6, serviceId: 1 },
        {id: 18, parkAreaId: 6, serviceId: 8 },
        {id: 19, parkAreaId: 6, serviceId: 10 }
    ] 
}
// get functions

//getGuests

export const getGuests = () => {
        return database.guests.map(guests => ({ ...guests }))
    }
// getAreas

export const getAreas = () => {
    return database.areas.map(area => ({ ...area }))
}
//getServices
    
export const getServices = () => {
        return database.services.map(service => ({ ...service }))
}
//getParkAreaServices

export const getParkAreaServices = () => {
        return database.parkAreaServices.map(parkAreaService => ({ ...parkAreaService }))
}