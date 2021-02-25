import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playPauseButton = document.querySelector('.video-player__playPause');
playPauseButton.onclick = () => {
    player.togglePlay();
};

const muteUnmuteButton = document.querySelector('.video-player__muteUnmute');
muteUnmuteButton.onclick = () => {
    player.toggleMute();
};