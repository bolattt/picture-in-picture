const videoElement = document.getElementById('video')
const startPip = document.getElementById('button')
const selectSource = document.getElementById('select')

// Prompt to select media stram, pass to video element, then play 
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    } catch(err){
        console.log(err)
    }
}

startPip.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picutre  
    await videoElement.requestPictureInPicture();
    // Reset Button 
    button.disabled = false;
});


selectSource.addEventListener('click',selectMediaStream)
