const songs = ["Hopelessly Devoted to You","Take My Breath Away","She’s Like the Wind","I Will Always Love You","What a Feeling"]
const artists = ["Olivia Newton-John", "Berlin","Patrick Swayze","Whitney Houston","Irene Cara"]
const movies = ["Grease","Top Gun", "Dirty Dancing","The Bodyguard","Flashdance"]

// let scrambleSong = Math.floor(Math.random() * (songs.length))
// let scrambleArtist = Math.floor(Math.random() * (artists.length))
// let scrambleMovie = Math.floor(Math.random() * (movies.length))

const scramble = arr => Math.floor(Math.random() * (arr.length));

const randomChoice = (song,artist,movie) => {
    return "\""  + songs[song] + "\" by " + artists[artist] + ' - ' + movies[movie] + '.';
}

console.log(randomChoice(scramble(songs),scramble(artists),scramble(movies)))