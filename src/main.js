const player = videojs('my-video');
const btnForward = document.querySelector('#btnForward')
const btnBack = document.querySelector('#btnBack')

const vr = player.vr({projection: '360'});
console.log({vr})
player.pause();

let state = false;
let direction = 1;

const advanceFrame = () => {
    if (state) {
      player.currentTime(player.currentTime() + direction * 0.05)
    } else {
        //console.log(vr.camera.position)
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

document.addEventListener('keydown', key => {
    console.log(vr.camera.position)
    vr.camera.lookAt(400, 400, 400)
    switch (key.key) {
        case "ArrowRight":
            vr.camera.position.x -= 0.1;
            vr.camera.position.z -= 0.1;
            break;

        case "ArrowLeft":
            vr.camera.position.x += 0.1;
            vr.camera.position.z -= 0.1;
            break;

        case "ArrowUp":
            vr.camera.position.y++;
            break;

        case "ArrowDown":
            vr.camera.position.y--;
            break;
            
    }
})

setInterval(() => advanceFrame(), 1000 / 10)