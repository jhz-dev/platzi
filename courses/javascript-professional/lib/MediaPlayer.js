
function MediaPlayer({el, plugins = []}) {
    this.media = el;
    this.plugins = plugins;
    
    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function (params) {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    });
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.media.play();
    } else {
        this.media.pause();
    }
}

MediaPlayer.prototype.toggleMute = function () {
    this.media.muted = !this.media.muted;
}

MediaPlayer.prototype.unMute = function () {
    this.media.muted = false;
}

export default MediaPlayer;