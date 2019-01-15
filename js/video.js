'use strict';

(function() {
  var videoUrls = {
    video1: 'https://www.youtube-nocookie.com/embed/zv5mmOAf4Gg?color=white&rel=0&showinfo=1&controls=0&mute=1&loop=1',
    video2: 'https://www.youtube-nocookie.com/embed/zv5mmOAf4Gg?color=white&rel=0&showinfo=1&controls=0&mute=1&loop=1',
    video3: 'https://www.youtube-nocookie.com/embed/zv5mmOAf4Gg?color=white&rel=0&showinfo=1&controls=0&mute=1&loop=1'
  }

  function loadVideo(id) {
    if (videoUrls[id]) {
      var frame = document.getElementById(id);
      if (frame) {
        if (-1 == navigator.userAgent.indexOf("MSIE")) {
          frame.src = videoUrls[id];
        }
        else {
          frame.location = videoUrls[id];
        }
      }
    }
  };

  setTimeout(function() {
    loadVideo('video1');
    loadVideo('video2');
    loadVideo('video3');
  }, 5);
})();
