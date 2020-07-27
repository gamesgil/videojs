const player = videojs('my-video');

const btnForward = document.querySelector('#btnForward')
const btnBack = document.querySelector('#btnBack')
const btnRotateRight = document.querySelector('#btnRotateRight')
const btnRotateLeft = document.querySelector('#btnRotateLeft')
const btnFullscreen= document.querySelector('#btnFullscreen')
const btnFov= document.querySelector('#btnFov')
const log = document.querySelector('#textArea')
let vr

let direction = 0
let rotationDirection = 0

const advanceFrame = () => {
    if (!vr.camera) {
    return
}
    const isRotated = vr.camera.position.z < 0
    const actualDirection = isRotated ? -direction : direction

    if (actualDirection) {
      player.currentTime(player.currentTime() + actualDirection * 0.05)
    }

    if (rotationDirection) {
        console.log(vr.camera.position)
        vr.camera.translateX(rotationDirection)
        log.textContent = `${vr.camera.position.x.toFixed(3)}, ${vr.camera.position.z.toFixed(3)}` 
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
    
    btnRotateLeft.addEventListener('touchstart', () => rotationDirection = 1)
    btnRotateLeft.addEventListener('mousedown', () => rotationDirection = 1)
    btnRotateRight.addEventListener('touchstart', () => rotationDirection = -1)
    btnRotateRight.addEventListener('mousedown', () => rotationDirection = -1)
    
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
        rotationDirection = 0
    })
    
    document.addEventListener('mouseup', () => {
        direction = 0
        rotationDirection = 0
    })

    setInterval(() => advanceFrame(), 1000 / 10)
})

player.pause();

