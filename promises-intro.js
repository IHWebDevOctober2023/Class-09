const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];

function getDirectionsFromTheServer(step) {
    setTimeout(() => {
        console.log(directions[step]);
       
    }, Math.floor(Math.random() * 2000))
}

// CALLBACK HELL
getDirectionsFromTheServer(0, () => {
    getDirectionsFromTheServer(1, () => {
        getDirectionsFromTheServer(2, () => {
            getDirectionsFromTheServer(3, () => {
                console.log("You have arrived to callback hell");
            })
        })
    })
})

// Let's create a promise
let somenthingWentWrong = true;

function myFirstPromise(){
    return new Promise((resolve, reject)=>{
        if(somenthingWentWrong){
            console.error("PROMISE REJECTED");
            return reject("Because I'm lazy I don't want to fulfill the promise")
        }else if (!somenthingWentWrong){
            console.log("The promise is resolved")
            return resolve("Yessss")
        }
    })
}

/* myFirstPromise()
    .then(()=>{
        console.log("We are on the first .then()");
    })
    .then(()=>{
        console.log("This is the second THEN");
    })
    .catch(()=>{
        console.log("something went wrong");
    }) */


    // THIS IS NOT WORKING BECAUSE getDirections is not a promise
    getDirectionsFromTheServer(0)
    .then(()=> getDirectionsFromTheServer(1))
    .then(()=> getDirectionsFromTheServer(2))
    .then(()=> getDirectionsFromTheServer(3))