const player = videojs('my-video');

const btnForward = document.querySelector('#btnForward')
const btnBack = document.querySelector('#btnBack')
const btnRotateRight = document.querySelector('#btnRotateRight')
const btnRotateLeft = document.querySelector('#btnRotateLeft')
const btnFullscreen= document.querySelector('#btnFullscreen')
const btnFov= document.querySelector('#btnFov')

let vr

let direction = 0
let rotation = 0

const advanceFrame = () => {
    const isRotated = Math.abs(Math.abs(vr.camera.rotation.x) - Math.PI) < 0.1
    const actualDirection = isRotated ? -direction : direction

    if (actualDirection) {
      player.currentTime(player.currentTime() + actualDirection * 0.05)
    }

    if (rotation) {
        vr.camera.translateX(rotation)
    }
}



player.ready(() => {
    vr = player.vr({projection: '360'})

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

    btnFov.addEventListener('click', () => {
        if (vr.camera.fov === 75) {
            vr.camera.fov = 60
        } else {
            vr.camera.fov = 75
        }

        vr.camera.updateProjectionMatrix()
    })
    
    document.addEventListener('touchend', () => {
        direction = 0
        rotation = 0
    })
    
    document.addEventListener('mouseup', () => {
        direction = 0
        rotation = 0
    })

    setInterval(() => advanceFrame(), 1000 / 10)
})

player.pause();

