// ASYNC AWAIT

const directions = [
    "Starting point: Ironhack Paris",
    "← Head northwest on Bd Voltaire toward Rue Léon Frot",
    "← Turn left onto Rue Chanzy",
    "* Café Titon, 34 Rue Titon, 75011 Paris, France"
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



async function getCoffee() {
    try {
        await getDirectionsFromTheServer(0);
        await getDirectionsFromTheServer(1);
        await getDirectionsFromTheServer(2);
        await getDirectionsFromTheServer(3);

    } catch (error) {
        console.log(error);
    }
}

getCoffee()