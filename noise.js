/*eslint-disable*/

$(document).ready( function() {
  getID =
  {"note a": "#aAudio",
  "note b": "#bAudio",
  "note c": "#cAudio",
  "note d": "#dAudio",
  "note e": "#eAudio",
  "note f": "#fAudio",
  "note g": "#gAudio"}

  $('.instrument').on('click', '.note', function(){
    let audio = $(getID[$(this).attr('class')])[0]
    audio.load()
    audio.play()
  })

  $('body').keydown(function(key) {
    let press = `note ${key.key}`

    let audio = $(getID[press])[0]
    // audio.load()
    audio.play()
  })

  $('body').keyup(function(key){
      let press = `note ${key.key}`

    let audio = $(getID[press])[0]
    audio.pause()
    audio.load()
  })
});
