// Use fetch method to get some data from an API

// https://rickandmortyapi.com/api/character

// Create an index.html and LINK the script

// Create a ul and display the name of the character and the image inside an li

// BONUS: add some styles

console.log("JS is working!");

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData.results))
    // note for Marcel: Don't forget the catch
    .catch((error) => { console.log(error); })


// SAME METHOD USING ASYNC AWAIT 👇
async function getCharacters() {
    try {
        const data = await fetch("https://rickandmortyapi.com/api/character");
        const jsonData = await data.json();
        console.log(jsonData.results)
    } catch (error) {
        console.error(error);
    }
}
// REMEMBER TO CALL THE FUNCTION!
getCharacters()