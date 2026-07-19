(function(){
  // ---- Hero fretboard widget ----
  var tunings = {
    0: {name:"Standard E Tuning", sub:"No capo — open strings sound as normal."},
    1: {name:"F Standard Tuning", sub:"Capo 1 — open shapes now sound one half-step higher."},
    2: {name:"F# Standard Tuning", sub:"Capo 2 — open shapes now sound two half-steps higher."},
    3: {name:"G Standard Tuning", sub:"Capo 3 — open shapes now sound three half-steps higher."},
    4: {name:"G# Standard Tuning", sub:"Capo 4 — open shapes now sound four half-steps higher."},
    5: {name:"A Standard Tuning", sub:"Capo 5 — open shapes now sound five half-steps higher."}
  };
  var fretX = {0:15, 1:55, 2:125, 3:195, 4:265, 5:335, 6: 405}; // capo sits just left of the target fret's leftmost line, offset for 0
  var capoBar = document.getElementById('capoBar');
  var tuningName = document.getElementById('tuningName');
  var tuningSub = document.getElementById('tuningSub');
  var fretButtons = document.querySelectorAll('.fret-buttons button');

  function setFret(f){
    fretButtons.forEach(function(b){
      b.setAttribute('aria-pressed', b.dataset.fret === String(f) ? 'true' : 'false');
    });
    var x = f === 0 ? 8 : (20 + (f-1)*70 + 25);
    capoBar.setAttribute('x', x);
    tuningName.textContent = tunings[f].name;
    tuningSub.textContent = tunings[f].sub;
  }
  fretButtons.forEach(function(b){
    b.addEventListener('click', function(){ setFret(parseInt(b.dataset.fret,10)); });
  });
  setFret(0);

  // ---- Transposition calculator ----
  var chromatic = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
  var chords = ["C","D","E","G","A","Am","Em","Dm","D7","G7","C7","Am7"];

  function rootAndQuality(chordName){
    var m = chordName.match(/^([A-G]#?)(.*)$/);
    return {root:m[1], quality:m[2]};
  }
  function transposeChord(chordName, semitones){
    var parts = rootAndQuality(chordName);
    var idx = chromatic.indexOf(parts.root);
    var newIdx = ((idx + semitones) % 12 + 12) % 12;
    return chromatic[newIdx] + parts.quality;
  }

  var chordSelect = document.getElementById('chordSelect');
  var capoSelect = document.getElementById('capoSelect');
  var resultValue = document.getElementById('resultValue');
  var resultLabel = document.getElementById('resultLabel');
  var chordSelectLabel = document.getElementById('chordSelectLabel');
  var modeButtons = document.querySelectorAll('#modeToggle button');
  var mode = 'forward';

  chords.forEach(function(c){
    var opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    chordSelect.appendChild(opt);
  });
  for(var i=0;i<=7;i++){
    var opt2 = document.createElement('option');
    opt2.value = i; opt2.textContent = "Fret " + i + (i===0 ? " (none)" : "");
    capoSelect.appendChild(opt2);
  }
  capoSelect.value = "2";

  function render(){
    var chord = chordSelect.value;
    var fret = parseInt(capoSelect.value, 10);
    if(mode === 'forward'){
      chordSelectLabel.textContent = "Shape you play";
      resultLabel.textContent = "Sounds like";
      resultValue.textContent = transposeChord(chord, fret);
    } else {
      chordSelectLabel.textContent = "Chord you want to sound";
      resultLabel.textContent = "Play this shape";
      resultValue.textContent = transposeChord(chord, -fret);
    }
  }
  chordSelect.addEventListener('change', render);
  capoSelect.addEventListener('change', render);
  modeButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      modeButtons.forEach(function(b){ b.setAttribute('aria-pressed','false'); });
      btn.setAttribute('aria-pressed','true');
      mode = btn.dataset.mode;
      render();
    });
  });
  render();
})();
