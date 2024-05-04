let container = document.getElementById("seekingSection");
let playBtn = document.getElementById("playBtn");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let volumeBtn = document.getElementById("volumeBtn");
let libraryList = document.getElementById("library-list");
let songNameSection = document.getElementById("songNameSection");
let docTitle = document.querySelector("title");

let flag = true;
let i = 0;
let audio1 = document.createElement("audio");


const volumeRange = document.getElementById('volumeRange');
const seekRange = document.getElementById('seekRange');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');




let songs = [
    {
        id: 1,
        image: "songsImg/Cruel-foxes.jpeg",
        songName: "Cruel",
        path: "songs/04. Cruel. - Foxes (320kbps).mp3",
        artist: "Foxes"
    },
    {
        id: 2,
        image: "songsImg/Faded.jpeg",
        songName: "Faded",
        path: "songs/080. Alan Walker - Faded.mp3",
        artist: "Alan Walker"
    },
    {
        id: 3,
        image: "songsImg/Attention.jpeg",
        songName: "Attention",
        path: "songs/Attention.mp3",
        artist: "Charlie Puth"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
    {
        id: 4,
        image: "songsImg/The nights.jpeg",
        songName: "The Nights",
        path: "songs/Avicii - The Nights.mp3",
        artist: "Avicii"
    },
]

let dataLength = songs.length;
// console.log(dataLength)
displayData(songs)



function displayData(data) {
    // console.log(data)
    // console.log(i)
    // console.log(data[i].path)
    songNameSection.innerHTML = "";
    let div1 = document.createElement("div");
    let img = document.createElement("img");
    img.src = data[i].image;

    let div2 = document.createElement("div");
    let p1 = document.createElement("p");
    p1.textContent = data[i].songName;
    let p2 = document.createElement("p");
    p2.setAttribute("class", "artist")
    p2.textContent = data[i].artist;

    div1.append(img);
    div2.append(p1, p2);
    songNameSection.append(div1, div2);

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
        docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
        flag = false;
        playBtn.src = "./img/pause.svg";
    } else {
        audio1.pause();
        docTitle.textContent = "Spotify - Web Player: Music for everyone";
        flag = true;
        playBtn.src = "./img/play.svg";
    }

}

// Next Song Button
nextBtn.addEventListener("click", nextBtnFunc)

function nextBtnFunc() {
    if (i == dataLength - 1) {
        i = 0;
        audio1.pause();
        docTitle.textContent = "Spotify - Web Player: Music for everyone";
        flag = true;
        playBtn.src = "./img/play.svg";
        setTimeout(() => {
            displayData(songs)
            audio1.play();
            docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
            flag = false;
            playBtn.src = "./img/pause.svg";
        }, 200)
    } else {
        i++;
        audio1.pause();
        docTitle.textContent = "Spotify - Web Player: Music for everyone";
        flag = true;
        playBtn.src = "./img/play.svg";
        setTimeout(() => {
            displayData(songs)
            audio1.play();
            docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
            flag = false;
            playBtn.src = "./img/pause.svg";
            // displayData(songs)
        }, 100)
    }
}

// Prev Song Button
prevBtn.addEventListener("click", prevBtnFunc)

function prevBtnFunc() {
    if (i == 0) {
        i = dataLength - 1;
        audio1.pause();
        docTitle.textContent = "Spotify - Web Player: Music for everyone";
        flag = true;
        playBtn.src = "./img/play.svg";
        setTimeout(() => {
            displayData(songs)
            audio1.play();
            docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
            flag = false;
            playBtn.src = "./img/pause.svg";
        }, 200)
    } else {
        i--;
        audio1.pause();
        docTitle.textContent = "Spotify - Web Player: Music for everyone";
        flag = true;
        playBtn.src = "./img/play.svg";
        setTimeout(() => {
            displayData(songs)
            audio1.play();
            docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
            flag = false;
            playBtn.src = "./img/pause.svg";
            // displayData(songs)
        }, 100)
    }
}

//Volume range Button
volumeRange.addEventListener('input', () => {
    if (volumeRange.value == 0) {
        audio1.volume = volumeRange.value;
        volumeBtn.src = "./img/mute.svg"
    }
    else {
        audio1.volume = volumeRange.value;
        volumeBtn.src = "./img/volume.svg"
    }
});

volumeBtn.addEventListener("click", () => {
    volumeBtn.src = "./img/mute.svg";
    volumeRange.value = 0;
    audio1.volume = volumeRange.value;
})


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
        // audio1.pause();
        // flag = true;
        // playBtn.src = "./img/play.svg";
        nextBtnFunc()
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

function appendSongsToLibrary(data) {
    data.forEach((el) => {
        let maindiv = document.createElement("div")
        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "poster")
        let contentdiv = document.createElement("div");
        let playBtndiv = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;

        let title = document.createElement("p");
        title.textContent = el.songName;
        let artist = document.createElement("p");
        artist.setAttribute("class", "artist")
        artist.textContent = el.artist;

        let svg = document.createElement("img");
        svg.src = "./img/play.svg"
        svg.addEventListener("click",()=>{
            libraryPlayFunc(svg,songs,el)
        })

        imgdiv.append(img);
        contentdiv.append(title, artist);

        playBtndiv.append(svg);

        maindiv.append(imgdiv, contentdiv, playBtndiv);
        libraryList.append(maindiv)
    })
}
appendSongsToLibrary(songs)

function libraryPlayFunc(svg,songs,obj){
    let newId = obj.id-1;
    i=newId;

    if (flag) {
        displayData(songs)
        audio1.play();
        docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
        flag = false;
        svg.src = "./img/pause.svg";
    } else {
        audio1.pause();
        docTitle.textContent = "Spotify - Web Player: Music for everyone";
        flag = true;
        svg.src = "./img/play.svg";
    }

    // audio1.pause();
    // docTitle.textContent = "Spotify - Web Player: Music for everyone";
    // flag = true;
    // playBtn.src = "./img/play.svg";
    // setTimeout(() => {
    //     displayData(songs)
    //     audio1.play();
    //     docTitle.textContent = `${songs[i].songName} - ${songs[i].artist}`
    //     flag = false;
    //     playBtn.src = "./img/pause.svg";
    // }, 200)

}