
const fs = require("fs");
const { addMovie } = require("./utils/index")

const app = () => {
    let movieArray;
    try {
        movieArray = JSON.parse(fs.readFileSync("./storage.json"))
    } catch (error) {
        movieArray = []
    }
    if (process.argv[2] === "title" && process.argv[4] === "actor") {
        addMovie(movieArray, {title: process.argv[3], actor: process.argv[5]});
        console.log("Add movie done")
    } else {
        console.log("I don't understund!!!!!")
    }
};

app();