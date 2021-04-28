// Music Player 
const group = document.querySelector('.group')
const btnLeft = document.querySelector('#BtnLeft')
const title = document.querySelector('#title')
const btnRight = document.querySelector('#BtnRight')
const img = document.querySelector('#cover')
const audio = document.querySelector('.audio')
const barCover = document.querySelector('.bar-cover')
const bar = document.querySelector('.bar')
const bucle = document.querySelector('.BtnBucle')
const btnPrev = document.querySelector('.BtnPrev')
const play = document.querySelector('.BtnPlay')
const btnNext = document.querySelector('.BtnNext')
//const alt = document.querySelector('.BtnAlt')

// Songs Titles 
const songs = ['ALonestar (Feat. Ed Sheeran) - Raise  em up (Team Lit Mix)', '24kgoldn - Mood', 'Marwa Loud - Bad boy', 'Y2K - Lalala', 'Джаро   Ханза - Ty moy kayf', "Coolio - Gangsta's Paradise", 'M83 - Midnight City']

// Keep track of song
let songIndex = 0

// Initially load song info DOM
loadSong(songs[songIndex])

// Update song datails
function loadSong(song) {
    title.innerHTML = song
    audio.src = `music/${song}.mp3`
    img.src = `image/${song}.jpg`
}

function playSong() {
    group.classList.add('.play')
    play.querySelector('i.fas').classList.remove('fa-play')
    play.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    group.classList.remove('.play')
    play.querySelector('i.fas').classList.add('fa-play')
    play.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
    console.log('click')
}

function prevSong() {
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++ 
    
    if(songIndex >songs.length -1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateBar(e) {
    const {duration, currentTime} = e.srcElement
    const barPercent = (currentTime / duration) * 100
    bar.style.width = `${barPercent}%`
}

function setBarCover(e) {
    const width = this.clientWidth 
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}


// Event listeners
play.addEventListener('click', () => {
    const isPlaying = group.classList.contains('.play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }

})

// Change song events
btnPrev.addEventListener('click', prevSong)
btnNext.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateBar)

barCover.addEventListener('click', setBarCover)

audio.addEventListener('ended', nextSong)

