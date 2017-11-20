/*eslint-disable*/

// function setupHelp(class){
//   helpText = [
//   {"note a": "aAudio"},
//   {"note b": "bAudio"},
//   {"note c": "cAudio"},
//   {"note d": "dAudio"},
//   {"note e": "eAudio"},
//   {"note f": "fAudio"},
//   {"note g": "gAudio"}
//   ]
//   return helpText[class]
// }

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
});
