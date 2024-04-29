let container = document.getElementById("demo")
let playBtn = document.getElementById("playBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let libraryList = document.getElementById("library-list")

const volumeRange = document.getElementById('volumeRange');
const seekRange = document.getElementById('seekRange');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

let flag = true;
let i = 0;
let audio1 = document.createElement("audio");


let songs = [
    {
        id: 1,
        image:"songsImg/Cruel-foxes.jpeg",
        songName: "Crule - Foxes",
        path: "songs/04. Cruel. - Foxes (320kbps).mp3",
        artist: "Foxes"
    },
    {
        id: 2,
        image:"songsImg/Faded.jpeg",
        songName: "Faded",
        path: "songs/080. Alan Walker - Faded.mp3",
        artist: "Alan Walker"
    },
    {
        id: 3,
        image:"songsImg/Attention.jpeg",
        songName: "Attention",
        path: "songs/Attention.mp3",
        artist: "Charlie Puth"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image:"songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
]

let dataLength = songs.length;
displayData(songs)



function displayData(data) {
    // console.log(i)
    console.log(data[i].path)
    audio1.src = data[i].path;
    container.append(audio1)
}


// Play and Pause Button
playBtn.addEventListener("click", function () {
    playAndPause()
})

function playAndPause() {
    if (flag) {
        audio1.play();
        flag = false;
        playBtn.src = "./img/pause.svg";
    } else {
        audio1.pause();
        flag = true;
        playBtn.src = "./img/play.svg";
    }
}

// Next Song Button
nextBtn.addEventListener("click", () => {
    if (i == dataLength - 1) {
        i = 0;
        audio1.pause();
        flag = true;
        playBtn.src = "./img/play.svg";
        setTimeout(() => {
            displayData(songs)
            audio1.play();
            flag = false;
            playBtn.src = "./img/pause.svg";
        }, 200)
    } else {
        i++;
        audio1.pause();
        flag = true;
        playBtn.src = "./img/play.svg";
        setTimeout(() => {
            displayData(songs)
            audio1.play();
            flag = false;
            playBtn.src = "./img/pause.svg";
            // displayData(songs)
        }, 100)
    }
})


// Prev Song Button
prevBtn.addEventListener("click", () => {
    if (i == 0) {
        i = dataLength - 1;
        displayData(songs)
    } else {
        i--;
        displayData(songs)
    }
})


//Volume range Button
volumeRange.addEventListener('input', () => {
    audio1.volume = volumeRange.value;
});


// Seeking bar Button
audio1.addEventListener("loadedmetadata", () => {
    seekRange.max = audio1.duration;
    durationDisplay.textContent = formatTime(audio1.duration);
});
seekRange.addEventListener('input', () => {
    audio1.currentTime = seekRange.value;
});
audio1.addEventListener("timeupdate", () => {
    seekRange.value = audio1.currentTime;
    if (audio1.currentTime == audio1.duration) {
        audio1.pause();
        flag = true;
        playBtn.src = "./img/play.svg";
    }
});


//Show duration
audio1.addEventListener('timeupdate', () => {
    const currentTime = audio1.currentTime;
    // const duration = audio1.duration;
    // seekRange.value = (currentTime / duration) * 100;
    currentTimeDisplay.textContent = formatTime(currentTime);
    // durationDisplay.textContent = formatTime(duration);
});


// Convert time in seconds to MM:SS format
function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}



// Adding List of songs to Library section

function appendSongsToLibrary(data){
    data.forEach((el)=>{
        let maindiv = document.createElement("div")
        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","poster")
        let contentdiv = document.createElement("div");
        let playBtndiv = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;
        
        let title = document.createElement("p");
        title.textContent = el.songName;
        let artist = document.createElement("p");
        artist.textContent = el.artist;

        let svg = document.createElement("img");
        svg.src = "/img/play.svg";

        imgdiv.append(img);
        contentdiv.append(title,artist);

        playBtndiv.append(svg);

        maindiv.append(imgdiv,contentdiv,playBtndiv);
        libraryList.append(maindiv)
    })
}
appendSongsToLibrary(songs)