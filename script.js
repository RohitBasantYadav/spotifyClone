// async function getSongs(){
//     let res = await fetch("http://127.0.0.1:5500/songs/")
//     let data = await res.json()
//     console.log(data)
// }
// getSongs()
// let body = document.querySelector("#demo")
// let songsArr = [
//     "./songs/Avicii - The Nights.mp3"
// ]

// let audio = document.createElement("audio");


// audio.src = songsArr[0];
// audio.controls = true
// // audio.currentTime =true
// audio.volumechange = true

// body.append(audio)
let container = document.getElementById("demo")
async function getSongs(){
    let res = await fetch("http://localhost:3000/songs");
    let data = await res.json();
    // console.log(data);
    displayData(data)
    
}
getSongs()

function displayData(data){
    // console.log(data[0].path)
    let audio1 = document.createElement("audio");
    audio1.src = data[0].path;
    // audio1.controls = true;
    container.append(audio1)
}