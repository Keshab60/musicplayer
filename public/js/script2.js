// let currentsong = new Audio();
// let songsk = [];
// // let currentsong1 = new Audio();
// console.log(" its starting")
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${minutes}:${secs.toString().padStart(2, '0')}`;
// }

// // Example usage
// console.log();
// console.log(formatTime(45));

// async function main() {
//     // let songs = await getsongs()
//     // let play = document.querySelector(".keshab")
//     // play.addEventListener("click", () => {
//     //     var audio = new Audio(songs[0]);
//     //     console.log(songs[0])
//     //     audio.play();
//     // })
//     Array.from(document.querySelector(".song-area").getElementsByTagName("section")).forEach(e => {
//         e.addEventListener("click", () => {
//             document.querySelector(".play-pause").src = "/svg/play.svg"
//             console.log(e)
//             // playmusic(e)
//             function get_e() {
//                 console.log(e);
//                 return e;
//             }

//             let qq = document.querySelector("#play-container").firstElementChild;
//             if (qq.innerHTML == null) {
//                 qq.prepend(e.firstElementChild.textContent)
//             }
//             else {
//                 qq.innerHTML = null
//                 qq.prepend(e.firstElementChild.textContent)
//             }
//             let qn = document.querySelector(".last-div-inside-play-container")
//             qn.style.width = "300px"

//             document.querySelector("#text-in-play-pause-line").style.width = "300px"


//             /*after all songs are loaded inside the song area we run this part because js is asynchronous and 
//              runned this part first before the songs are loaded in song area*/
//             // let moli = document.querySelector(".song-area").firstElementChild
//             // console.log(e)
//             if (e) {
//                 /*created the below part for dynamic image means when i click arijit singh it shows arijit photo 
//                 and like that and i used this Dynamic_img variable to acess that images dynamically*/
//                 let img = e.parentElement;
//                 let Dynamic_img = img.querySelector(".imageee").src
//                 // e.addEventListener("click", () => {
//                 console.log(" its clicked")
//                 document.querySelector(".artist-song-area").innerHTML = `<div class="inside-div-of-artist-song-area">

//             </div>
//             <div class="parent-div-of-scroll">

//                 <div class="status-artist">
//                     <p>Verified Artist</p>
//                     <h1 id="justin">${e.firstElementChild.textContent}</h1>
//                     <p>${Math.floor(Math.random() * 50000000)} listener</p>
//                 </div>
//                 <div class="justin2">
//                    <div id="div-of-pause2">
//                        <img class="pause2" src="/svg/pause.svg" alt="">
//                     </div>
//                      <div id="following">
//                         <h3>Following</h3>
//                     </div>
//                 </div>
//             </div>

//             <img class="image-of-artist-song-area" src="${Dynamic_img}" alt="">
//                     `
//                 // let kz=e.firstElementChild.textContent;
//                 // console.log(kz)
//                 async function getsongs1() {
//                     let c = await fetch(`http://127.0.0.1:5500/${e.firstElementChild.textContent}/`)
//                     let f = await c.text()
//                     console.log(f)
//                     let div = document.createElement("div")
//                     div.innerHTML = f
//                     let k = div.getElementsByTagName("a")
//                     // console.log(c)
//                     let songs1 = [];
//                     for (let index = 0; index < k.length; index++) {
//                         const element = k[index];
//                         if (element.href.endsWith(".mp3")) {
//                             songs1.push(element.href)
//                         }
//                     }
//                     for (let index = 0; index < songs1.length; index++) {
//                         const element = songs1[index];
//                         // let songg1 = element.split("1/").pop()
//                         // let songName = songUrl.substring(songUrl.lastIndexOf("/") + 1).replaceAll("%20", " ");
//                         let songg2 = element.substring(element.lastIndexOf("/") + 1)
//                         // let  songg2 = songg1.split("0/").pop()
//                         console.log(songg2)
//                         let songss1 = songg2.replaceAll("%20", " ")
//                         console.log(songss1)
//                         let p = `<p class="keshab5">${songss1}</p>`
//                         document.querySelector(".justin2").innerHTML =
//                             document.querySelector(".justin2").innerHTML + p
//                     }
//                     return songs1

//                 }


//                 const playmusic1 = async (zb, abc) => {
//                     console.log("Trying to play:", zb);
//                     console.log(abc);

//                     let gg, gg2;
//                     if (abc) {
//                         gg = abc.firstElementChild.textContent;
//                     }
//                     // } else {
//                     //     gg = e.firstElementChild.textContent;
//                     // }
//                 console.log(gg)
//                     gg2 = gg.replace(" ", "%20");
//                     console.log("Updated artist:", gg2);

//                     // Stop previous song before switching
//                     // if (!currentsong.paused) {
//                     //     currentsong.pause();
//                     // }
//                     // currentsong.currentTime = 0;
//                     // currentsong.src = "";

//                     // Assign new song
//                     let songName = (zb instanceof HTMLElement ? zb.textContent : zb);
//                     let newSongUrl = songName.startsWith("http") ? songName : `http://127.0.0.1:5500/${gg2}/` + songName;
//                     console.log("New song URL:", newSongUrl);

//                     currentsong.src = newSongUrl;
//                     currentsong.load();

//                     // Wait for metadata to ensure the song is ready to play
//                     currentsong.addEventListener("loadedmetadata", () => {
//                         currentsong.play().catch(error => console.error("Playback failed:", error));
//                     }, { once: true });

//                     console.log("Now playing:", currentsong.src);
//                 };









//                 async function main2() {
//                     songsk = await getsongs1();
//                     console.log("songsList")
//                     console.log(songsk)
//                     Array.from(document.querySelector(".justin2").getElementsByTagName("p")).forEach(kk => {
//                         kk.addEventListener("click", () => {
//                             document.querySelector(".play-pause").src = "/svg/play.svg"
//                             // console.log(e)
//                             console.log(currentsong.src)
//                             const abc = get_e();
//                             console.log(abc)
//                             playmusic1(kk, abc)

//                             let qq = document.querySelector("#play-container").firstElementChild;
//                             // qq.prepend(e.textContent)

//                             if (qq.innerHTML == null) {
//                                 qq.prepend(kk.textContent)
//                             }
//                             else {
//                                 qq.innerHTML = null
//                                 qq.prepend(kk.textContent)
//                             }

//                             let qn = document.querySelector(".last-div-inside-play-container");
//                             qn.style.width = "300px"

//                             document.querySelector("#text-in-play-pause-line").style.width = "300px"

//                         })
//                     })

//                     currentsong.addEventListener('timeupdate', () => {
//                         console.log(currentsong.currentTime, currentsong.duration)
//                         console.log(`${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}`)
//                         let songtime = document.querySelector(".last-div-inside-play-container")
//                         songtime.innerHTML =
//                             `<p>${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}</p>`
//                         let seekbar = document.querySelector("#seekbar")
//                         seekbar.max = currentsong.duration;
//                         seekbar.value = currentsong.currentTime;

//                     })
//                     seekbar.addEventListener('input', () => {
//                         currentsong.currentTime = seekbar.value;
//                     })


//                     let prev = document.querySelector(".prev");
//                     prev.addEventListener("click", () => {
//                         console.log("it is prev")

//                     })

//                     let next = document.querySelector(".next");
//                     next.addEventListener("click", () => {
//                         console.log("It is next");
//                         console.log("Current song:", currentsong.src);

//                         console.log("Song list:", songsk);

//                         let currentSongName = currentsong.src.split("/").pop();
//                         console.log(currentSongName);
//                         let index = songsk.findIndex(song => song.endsWith(currentSongName));

//                         console.log("Current song index:", index);
//                         console.log("Total songs:", songsk.length);

//                         if (index === -1 || index + 1 >= songsk.length) {
//                             console.log("No next item available");
//                         } else {
//                             console.log(songsk[index + 1]);
//                             const abc = get_e();
//                             console.log(abc)
//                             playmusic1(songsk[index + 1].split("/").slice(-1)[0],abc);
//                         }
//                     });


//                 }
//                 main2()
//                 // })
//             }
//         })
//     })
// }



// //play and pause button
// let ab = document.querySelector(".play-pause")
// ab.addEventListener("click", () => {
//     if (currentsong.paused) {
//         currentsong.play()
//         document.querySelector(".play-pause").src = "/svg/play.svg"
//     }
//     else {
//         currentsong.pause()
//         document.querySelector(".play-pause").src = "/svg/pause.svg"

//     }
// })

// // let moli = document.querySelector(".song-area")
// // moli.addEventListener("click", () => {
// //     document.querySelector(".artist-song-area").innerHTML = ` <div class="inside-div-of-artist-song-area">

// //             </div>
// //             <img class="image-of-artist-song-area" src="justin-bieber.jpg" alt="">
// //             `
// // })

// main()


let currentsong = new Audio();
let songsk = [];
let currentArtistElement = null; // Store the current artist element

console.log("It's starting");

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

async function getsongs1(artistElement) {
    let artistName = artistElement.firstElementChild.textContent
    console.log(artistName)
    let response = await fetch(`/songs/${artistName}/`);
    console.log(response)
    let text = await response.text();
    console.log(text)
    let div = document.createElement("div");
    div.innerHTML = text;
    let links = div.getElementsByTagName("a");
    console.log(links)
    let songs = [];
    for (let link of links) {
        if (link.href.endsWith(".mp3")) {
            songs.push(link.href);
        }
    }
    console.log(songs[0])
    document.querySelector(".justin2").innerHTML = `
        <div id="div-of-pause2">
            <img class="pause2" src="/svg/pause.svg" alt="">
        </div>
        <div id="following">
            <h3>Following</h3>
        </div>
    `;
    for (let songUrl of songs) {
        let songName = songUrl.substring(songUrl.lastIndexOf("/") + 1).replaceAll("%20", " ");
        document.querySelector(".justin2").innerHTML += `<p class="keshab5">${songName}</p>`;
    }
    return songs;
}

const playmusic1 = (songName, artistElement) => {
    let artistName = artistElement.firstElementChild.textContent.trim();
     console.log("the artist name",artistName)
    let newSongUrl = songName.startsWith("http") ? songName : `/songs/${artistName}/` + songName;
    console.log(newSongUrl)
    currentsong.src = newSongUrl;
    currentsong.load();
    currentsong.addEventListener("loadedmetadata", () => {
        currentsong.play().catch(error => console.error("Playback failed:", error));
    }, { once: true });
};

function updateSongInfoDisplay(songName) {
    let container = document.querySelector("#play-container").firstElementChild;
    container.innerHTML = "";
    container.prepend(songName);
    document.querySelector(".last-div-inside-play-container").style.width = "300px";
    document.querySelector("#text-in-play-pause-line").style.width = "300px";
}

function bindSongClickListeners() {
    document.querySelectorAll(".justin2 .keshab5").forEach(kk => {
        kk.addEventListener("click", () => {
            console.log(kk)
            console.log(currentArtistElement)
            console.log("the context is",kk.textContent)
            playmusic1(kk.textContent, currentArtistElement);
            updateSongInfoDisplay(kk.textContent);
            document.querySelector(".play-pause").src = "/svg/play.svg";
        });
    });
}

function bindSeekbar() {
    let seekbar = document.querySelector("#seekbar");
    currentsong.addEventListener('timeupdate', () => {
        document.querySelector(".last-div-inside-play-container").innerHTML = `
            <p>${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}</p>
        `;
        seekbar.max = currentsong.duration;
        seekbar.value = currentsong.currentTime;
    });
    seekbar.addEventListener('input', () => {
        currentsong.currentTime = seekbar.value;
    });
}

async function loadArtistSongs(e) {
    currentArtistElement = e;
    document.querySelector(".artist-song-area").innerHTML = `
        <div class="inside-div-of-artist-song-area"></div>
        <div class="parent-div-of-scroll">
            <div class="status-artist">
                <p>Verified Artist</p>
                <h1 id="justin">${e.firstElementChild.textContent}</h1>
                <p>${Math.floor(Math.random() * 50000000)} listener</p>
            </div>
            <div class="justin2">
                <div id="div-of-pause2">
                    <img class="pause2" src="/svg/pause.svg" alt="">
                </div>
                <div id="following">
                    <h3>Following</h3>
                </div>
            </div>
        </div>
        <img class="image-of-artist-song-area" src="${e.parentElement.querySelector(".imageee").src}" alt="">
    `;
    songsk = await getsongs1(e);
    bindSongClickListeners();
}

function bindArtistAreaClicks() {
    Array.from(document.querySelector(".song-area").getElementsByTagName("section")).forEach(e => {
        e.addEventListener("click", () => {
            document.querySelector(".play-pause").src = "/svg/play.svg";
            let container = document.querySelector("#play-container").firstElementChild;
            console.log(container)
            container.innerHTML = "";
            container.prepend(e.firstElementChild.textContent);
            loadArtistSongs(e);
        });
    });
}

function bindGlobalControls() {
    document.querySelector(".next").addEventListener("click", () => {
        if (!songsk.length) return;
        let currentSongName = currentsong.src.split("/").pop();
        let index = songsk.findIndex(song => song.endsWith(currentSongName));
        if (index === -1 || index + 1 >= songsk.length) {
            console.log("No next song");
        } else {
            playmusic1(songsk[index + 1].substring(songsk[index + 1].lastIndexOf("/") + 1), currentArtistElement);
            updateSongInfoDisplay(songsk[index + 1].substring(songsk[index + 1].lastIndexOf("/") + 1));
        }
    });

    document.querySelector(".prev").addEventListener("click", () => {
        if (!songsk.length) return;
        let currentSongName = currentsong.src.split("/").pop();
        let index = songsk.findIndex(song => song.endsWith(currentSongName));
        if (index <= 0) {
            console.log("No previous song");
        } else {
            playmusic1(songsk[index - 1].substring(songsk[index - 1].lastIndexOf("/") + 1), currentArtistElement);
            updateSongInfoDisplay(songsk[index - 1].substring(songsk[index - 1].lastIndexOf("/") + 1));
        }
    });
}

function bindPlayPauseButton() {
    document.querySelector(".play-pause").addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            document.querySelector(".play-pause").src = "/svg/play.svg";
        } else {
            currentsong.pause();
            document.querySelector(".play-pause").src = "/svg/pause.svg";
        }
    });
}

function main() {
    bindArtistAreaClicks();
    bindGlobalControls();
    bindPlayPauseButton();
    bindSeekbar();
    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menu-toggle");
        const homeContainer = document.getElementById("home-container");
        const menuClose = document.getElementById("menu-close");

        menuToggle.addEventListener("click", () => {
            homeContainer.classList.add("active");
        });

        menuClose.addEventListener("click", () => {
            homeContainer.classList.remove("active");
        });
    });


}

main();

