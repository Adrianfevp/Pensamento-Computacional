function togglePlayPause() {
    var trailerVideo = document.getElementById('trailerVideo');
    var playPauseButton = document.getElementById('playPauseButton');
    if (trailerVideo.paused) {
        trailerVideo.play();
        playPauseButton.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/12483/12483065.png" alt="Pause">';
    } else {
        trailerVideo.pause();
        playPauseButton.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/4028/4028535.png" alt="Play">';
    }
}