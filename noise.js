/*eslint-disable*/

$(document).ready( function() {
  const getID = {
  "note a": "#aAudio",
  "note b": "#bAudio",
  "note c": "#cAudio",
  "note d": "#dAudio",
  "note e": "#eAudio",
  "note f": "#fAudio",
  "note g": "#gAudio"
};

  getColor = {
    "#aAudio": "#a13fad",
    "#bAudio": "#f26fd4",
    "#cAudio": "#3e181b",
    "#dAudio": "#f0421c",
    "#eAudio": "#fec02d",
    "#fAudio": "#20d071",
    "#gAudio": "#1a9ddb",
  };

  $('.note').on('click', function(){
    let audio = $(getID[$(this).attr('class')])[0]
    audio.load()
    audio.play()
    $('body').css('background-color', `${getColor[getID[$(this).attr('class')]]}`)
  })

  $('body').keydown(function(key) {
    let press = `note ${key.key}`
    let audio = $(getID[press])[0]
    audio.play()
  })

  $('body').keyup(function(key){
    let press = `note ${key.key}`;


    let audio = $(getID[press])[0];
    audio.pause();
    audio.load();
  })
});
