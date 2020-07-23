const player = videojs('my-video');

const btnForward = document.querySelector('#btnForward')
const btnBack = document.querySelector('#btnBack')
const btnRotateRight = document.querySelector('#btnRotateRight')
const btnRotateLeft = document.querySelector('#btnRotateLeft')
const btnFullscreen= document.querySelector('#btnFullscreen')

const vr = player.vr({projection: '360'});

let direction = 0
let rotation = 0

const advanceFrame = () => {
    if (direction) {
      player.currentTime(player.currentTime() + direction * 0.05)
    }

    if (rotation) {
        vr.camera.translateX(rotation)
    }
}

btnForward.addEventListener("touchstart", () => {
    direction = 1
})

btnForward.addEventListener("mousedown", () => {
    direction = 1
})

btnBack.addEventListener("touchstart", () => {
    direction = -1
})

btnBack.addEventListener("mousedown", () => {
    direction = -1
})

btnRotateLeft.addEventListener('touchstart', () => rotation = 1)
btnRotateLeft.addEventListener('mousedown', () => rotation = 1)
btnRotateRight.addEventListener('touchstart', () => rotation = -1)
btnRotateRight.addEventListener('mousedown', () => rotation = -1)

btnFullscreen.addEventListener('click', () => {
    player.requestFullscreen()
})

document.addEventListener('touchend', () => {
    direction = 0
    rotation = 0
})

document.addEventListener('mouseup', () => {
    direction = 0
    rotation = 0
})

player.pause();

setInterval(() => advanceFrame(), 1000 / 10)