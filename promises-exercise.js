const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];



function getDirectionsFromTheServer(step) {
    return new Promise((resolve, reject) => {
        if (!directions[step]) {
            return reject("THE STEP DOES NOT EXIST")
        } else {
            setTimeout(() => {
                console.log(directions[step]);
                return resolve("Everything OK")
            }, Math.floor(Math.random() * 2000))
        }
    })
}

/* 
getDirectionsFromTheServer(9)
    .then(() => getDirectionsFromTheServer(1))
    .then(() => getDirectionsFromTheServer(2))
    .then(() => getDirectionsFromTheServer(3))
    .catch((error) => { console.log("HEY: ", error) })
    .finally(() => console.log("The process has finished")) */


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("foo"), 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1337), 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "Bob" }), 10000);
});

Promise.all([p1, p2, p3])
    .then((values) => console.log("values", values));