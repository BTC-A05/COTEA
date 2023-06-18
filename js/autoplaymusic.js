var collection=[];// final collection of sounds to play
var loadedIndex=0;// horrible way of forcing a load of audio sounds

// remap audios to a buffered collection
function init(audios) {
  for(var i=0;i<audios.length;i++) {
    var audio = new Audio(audios[i]);
    collection.push(audio);
    buffer(audio);
  }
}

// did I mention it's a horrible way to buffer?
function buffer(audio) {
  if(audio.readyState==4)return loaded();
  setTimeout(function(){buffer(audio)},100);
}

// check if we're leady to dj this
function loaded() {
  loadedIndex++;
  if(collection.length==loadedIndex)playLooped();
}

// play and loop after finished
function playLooped() {
  var audio=Math.floor(Math.random() * (collection.length));
  audio=collection[audio];
  audio.play();
  setTimeout(playLooped,audio.duration*1000);
}

// the songs to be played!
init([
  'audio/ngayemtoi.MP3'
]);