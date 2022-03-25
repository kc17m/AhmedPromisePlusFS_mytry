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
        .then(() => createFolder("./myFolder/ThirdFolder"))
        .catch((err) => {
            console.log(err)
        })
}

if (!fs.existsSync("./myFolder/ThirdFolder/hallo.txt", "Hallo Welt in hallo.txt") || (!fs.existsSync("./myFolder/ThirdFolder/welt.txt"))) {
    createFile("./myFolder/ThirdFolder/hallo.txt", "Hallo Welt in hallo.txt")
        .then(() => createFile("./myFolder/ThirdFolder/welt.txt", "Hallo Welt in welt.txt"))
        .catch((err) => {
            console.log(err)
        })
}


