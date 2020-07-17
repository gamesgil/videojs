const player = videojs('my-video');
const btnForward = document.querySelector('#btnForward')
const btnBack = document.querySelector('#btnBack')

player.vr({projection: '360'});

player.pause();

let state = false;
let direction = 1;

const advanceFrame = () => {
    if (state) {
      player.currentTime(player.currentTime() + direction * 0.05)
    } 
}

btnForward.addEventListener("mousedown", () => {
    state = true
    direction = 1
})

btnForward.addEventListener("mouseup", () => state = false)

btnBack.addEventListener("mousedown", () => {
    state = true
    direction = -1
})

btnBack.addEventListener("mouseup", () => state = false)

setInterval(() => advanceFrame(), 1000 / 10)