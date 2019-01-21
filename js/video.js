'use strict';

var videoIds = {
  video1: 'gi3XtmSkCmc',
  video2: 'ujaxbY5rb1c',
  video3: 'sF1UKAlwte8'
}

function loadYouTubeIframeAPI() {
  var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function loadYouTubeVideo(id) {
  var wrapper = document.getElementById(id);

  var player = new YT.Player(id + '-frame', {
    videoId: videoIds[id],
    playerVars: {
      controls: 0,
      loop: 1,
      rel: 0,
      color: 'white',
      showinfo: 1,
      mute: 1,
      VQ: 'HD1080',
    },
    events: {
      onReady: function(event) {
        wrapper.classList.add('loaded');
      },
      onStateChange: function(event) {
        if (event.data == YT.PlayerState.ENDED) {
          player.seekTo(0);
          player.playVideo();
        }
      }
    }
  });

  wrapper.addEventListener('click', function() {
    if (wrapper.classList.contains('active')) {
      wrapper.classList.remove('active');
      setTimeout(function() {
        player.pauseVideo();
      }, 150);
    }
    else {
      player.playVideo();
      setTimeout(function() {
        wrapper.classList.add('active');
      }, 150);
    }
  });
}

function onYouTubeIframeAPIReady() {
  loadYouTubeVideo('video1');
  loadYouTubeVideo('video2');
  loadYouTubeVideo('video3');
}

(function() {
  setTimeout(loadYouTubeIframeAPI, 5);
})();
