import Player from '@vimeo/player';
const throttle = require("lodash.throttle")
const iframe = document.querySelector('#vimeo-player')
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time"

const onPlay = function(data) {
   
    localStorage.setItem(STORAGE_KEY, data.seconds)
};

player.on('timeupdate', throttle(onPlay, 200));

player.setCurrentTime(localStorage.getItem(STORAGE_KEY))