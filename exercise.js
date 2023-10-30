// CREATE AN HTML WITH AN UL

// Add the instructions array like this:

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

const ulElement = document.querySelector("#list");

// and use this function to ADD each step inside the UL with an LI
function getDirectionsFromTheServer(step) {
    return new Promise((resolve, reject) => {
        if (!directions[step]) {
            return reject("THE STEP DOES NOT EXIST")
        } else {
            setTimeout(() => {
                console.log(directions[step]);  // YOU CAN MODIFY THIS
                const liElement = document.createElement("li");
                liElement.innerText = directions[step]
                ulElement.appendChild(liElement)
                return resolve("Everything OK")
            }, Math.floor(Math.random() * 2000))
        }
    })
}

getDirectionsFromTheServer(0)
    .then(() => getDirectionsFromTheServer(1))
    .then(() => getDirectionsFromTheServer(2))
    .then(() => getDirectionsFromTheServer(3))
    .catch((error) => { console.log("HEY: ", error) })



