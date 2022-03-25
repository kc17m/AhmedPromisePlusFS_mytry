const fs = require("fs")


function createFolder(path) {
    return new Promise((resolve, reject) => {
        fs.mkdir(path, (err) => {
            if (err) reject(err)
            else resolve(path)
            console.log(resolve)

        })
    })
}

function createFile(path, fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, fileContent, () => {
            resolve(path, fileContent)
            console.log(path, fileContent)
        })
    })
}

if (!fs.existsSync("./myFolder")) {
    createFolder("./myFolder")
        .then(() => createFolder("./myFolder/mySecondFolder"))
        .then(() => createFolder("./myFolder/myThirdFolder"))
        .catch((err) => {
            console.log(err)
        })
}

if (!fs.existsSync("./myFolder/myThirdFolder/hallo.txt") || (!fs.existsSync("./myFolder/myThirdFolder/welt.txt"))) {
    Promise.all([
        createFile("./myFolder/myThirdFolder/hallo.txt", "Hallo Welt in hallo.txt"),
        createFile("./myFolder/myThirdFolder/welt.txt", "Hallo Welt in welt.txt")
    ]).then(arr => {
        console.log(arr)
    })
}




