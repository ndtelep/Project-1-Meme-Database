// function addMemes (){
//     let seeMemes = document.getElementById("meme-list");
//     seeMemes.innerText = "this is where grumpy cat should be"
// }

// addMemes ()

// let memeFeed = document.getElementById("meme-list");

// fetch("https://api.imgflip.com/get_memes")
// .then(response => response.json())
// .then(memeInfo => {
//     navBar(memeInfo)
// })

// function navBar(memeInfo){
//     let memeInfo = .append(navItem)
// }

let memeFeed = document.getElementById("meme-list")

fetch("https://api.imgflip.com/get_memes")
.then(response => response.json())
.then(memeInfo => {
    navBar(memeInfo)})

function navBar(memeInfo){
        memeInfo.forEach(meme => {
            let eachMeme = document.createElement('img')
            eachMeme.src = meme.url
            memeFeed.append(navItem)
        });
    }
// function addMeme(){
//     let eachMeme = document.createElement("img")
//     eachMeme.src = //url here
//     memeFeed.append(eachMeme)
// }

// addMeme()