/* ============================================
   TAPPADOO — sounds.js
   Real MP3 audio: animals, AI voice, UI
   ============================================ */

let soundEnabled = true;
const audioCache = {};

const SOUND_FILES = {
  // Animal sounds
  'cow':    'sounds/cow-moo.mp3',
  'cat':    'sounds/cat-meow.mp3',
  'dog':    'sounds/dog-bark.mp3',
  'duck':   'sounds/duck-quack.mp3',
  'owl':    'sounds/owl-hoot.mp3',
  'lion':   'sounds/lion-roar.mp3',

  // AI Voice — animal names
  'voice-cow':    'sounds/its-a-cow.mp3',
  'voice-cat':    'sounds/its-a-cat.mp3',
  'voice-dog':    'sounds/its-a-dog.mp3',
  'voice-duck':   'sounds/its-a-duck.mp3',
  'voice-owl':    'sounds/its-an-owl.mp3',
  'voice-lion':   'sounds/its-a-lion.mp3',

  // AI Voice — colors
  'voice-red':    'sounds/red.mp3',
  'voice-blue':   'sounds/blue.mp3',
  'voice-yellow': 'sounds/yellow.mp3',
  'voice-green':  'sounds/green.mp3',
  'voice-orange': 'sounds/orange.mp3',
  'voice-purple': 'sounds/purple.mp3',

  // AI Voice — color objects (24 clips)
  'voice-red-apple':       'sounds/red-apple.mp3',
  'voice-red-firetruck':   'sounds/red-fire-truck.mp3',
  'voice-red-heart':       'sounds/red-heart.mp3',
  'voice-red-rose':        'sounds/red-rose.mp3',
  'voice-blue-butterfly':  'sounds/blue-butterfly.mp3',
  'voice-blue-blueberry':  'sounds/blue-blueberry.mp3',
  'voice-blue-whale':      'sounds/blue-whale.mp3',
  'voice-blue-gem':        'sounds/blue-gem.mp3',
  'voice-yellow-sunflower':'sounds/yellow-sunflower.mp3',
  'voice-yellow-star':     'sounds/yellow-star.mp3',
  'voice-yellow-banana':   'sounds/yellow-banana.mp3',
  'voice-yellow-chick':    'sounds/yellow-chick.mp3',
  'voice-green-frog':      'sounds/green-frog.mp3',
  'voice-green-leaf':      'sounds/green-leaf.mp3',
  'voice-green-kiwi':      'sounds/green-kiwi.mp3',
  'voice-green-tree':      'sounds/green-tree.mp3',
  'voice-orange-crab':     'sounds/orange-crab.mp3',
  'voice-orange-carrot':   'sounds/orange-carrot.mp3',
  'voice-orange-fox':      'sounds/orange-fox.mp3',
  'voice-purple-grapes':   'sounds/purple-grapes.mp3',
  'voice-purple-crystal':  'sounds/purple-crystal.mp3',
  'voice-purple-crown':    'sounds/purple-crown.mp3',
  'voice-purple-unicorn':  'sounds/purple-unicorn.mp3',

  // AI Voice — counting
  'voice-one':    'sounds/one.mp3',
  'voice-two':    'sounds/two.mp3',
  'voice-three':  'sounds/three.mp3',
  'voice-four':   'sounds/four.mp3',
  'voice-five':   'sounds/five.mp3',

  // AI Voice — counting objects
  'voice-one-star':       'sounds/one-star.mp3',
  'voice-two-bunnies':    'sounds/two-bunnies.mp3',
  'voice-three-bees':     'sounds/three-bees.mp3',
  'voice-four-turtles':   'sounds/four-turtles.mp3',
  'voice-five-balloons':  'sounds/five-balloons.mp3',

  // AI Voice — peek-a-boo hidden items
  'voice-teddy':  'sounds/teddy-bear.mp3',
  'voice-kitty':  'sounds/kitty-cat.mp3',
  'voice-puppy':  'sounds/puppy.mp3',
  'voice-bunny':  'sounds/bunny.mp3',
  'voice-birdie': 'sounds/Birdie.mp3',

  // AI Voice — UI phrases
  'voice-peekaboo':    'sounds/peek-a-boo.mp3',
  'voice-yay':         'sounds/yay-you-did-it.mp3',
  'voice-readanother': 'sounds/lets-read-another.mp3',

  // UI SFX
  'tap':         'sounds/bubble-pop.mp3',
  'pageFlip':    'sounds/simple-whoosh.mp3',
  'reveal':      'sounds/reveal-chime.mp3',
  'surprise':    'sounds/wow-surprise.mp3',
  'celebration': 'sounds/yay-endofbook.mp3',
  'bounce':      'sounds/ball-bounce-tennisball.mp3',
};

// Animal page ID → sound key
const ANIMAL_SOUNDS = {
  'cow': 'cow', 'cat': 'cat', 'dog': 'dog',
  'duck': 'duck', 'owl': 'owl', 'lion': 'lion',
};

// Animal page ID → voice key
const ANIMAL_VOICE = {
  'cow': 'voice-cow', 'cat': 'voice-cat', 'dog': 'voice-dog',
  'duck': 'voice-duck', 'owl': 'voice-owl', 'lion': 'voice-lion',
};

// Color page ID → voice key
const COLOR_VOICE = {
  'red': 'voice-red', 'blue': 'voice-blue', 'yellow': 'voice-yellow',
  'green': 'voice-green', 'orange': 'voice-orange', 'purple': 'voice-purple',
};

// Color object voice keys — [colorId][objectIndex]
const COLOR_OBJECT_VOICE = {
  'red':    ['voice-red-apple', 'voice-red-firetruck', 'voice-red-heart', 'voice-red-rose'],
  'blue':   ['voice-blue-butterfly', 'voice-blue-blueberry', 'voice-blue-whale', 'voice-blue-gem'],
  'yellow': ['voice-yellow-sunflower', 'voice-yellow-star', 'voice-yellow-banana', 'voice-yellow-chick'],
  'green':  ['voice-green-frog', 'voice-green-leaf', 'voice-green-kiwi', 'voice-green-tree'],
  'orange': ['voice-orange', 'voice-orange-crab', 'voice-orange-carrot', 'voice-orange-fox'],
  'purple': ['voice-purple-grapes', 'voice-purple-crystal', 'voice-purple-crown', 'voice-purple-unicorn'],
};

// Counting page ID → voice key
const COUNT_VOICE = {
  'one': 'voice-one', 'two': 'voice-two', 'three': 'voice-three',
  'four': 'voice-four', 'five': 'voice-five',
};

// Counting object voice keys
const COUNT_OBJECT_VOICE = {
  'one': 'voice-one-star',
  'two': 'voice-two-bunnies',
  'three': 'voice-three-bees',
  'four': 'voice-four-turtles',
  'five': 'voice-five-balloons',
};

// Peek-a-boo page ID → voice key
const PEEK_VOICE = {
  'blanket': 'voice-puppy',
  'hat':     'voice-bunny',
  'leaf':    'voice-kitty',
  'cloud':   'voice-birdie',
  'shell':   'voice-teddy',
};

// Preload all
function preloadSounds() {
  for (const [key, src] of Object.entries(SOUND_FILES)) {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = src;
    audioCache[key] = audio;
  }
}

// iOS audio unlock
let audioUnlocked = false;
function initAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const buffer = ctx.createBuffer(1, 1, 22050);
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
  for (const audio of Object.values(audioCache)) {
    audio.load();
  }
}

document.addEventListener('touchstart', initAudio, { once: true });
document.addEventListener('click', initAudio, { once: true });
preloadSounds();

function playSound(key, volume = 1.0) {
  if (!soundEnabled) return;
  const cached = audioCache[key];
  if (!cached) return;
  const audio = cached.cloneNode();
  audio.volume = Math.min(volume, 1.0);
  audio.play().catch(() => {});
}

function playAnimalSound(animalId) {
  const key = ANIMAL_SOUNDS[animalId];
  if (key) playSound(key, 0.9);
}

function playAnimalVoice(animalId) {
  const key = ANIMAL_VOICE[animalId];
  if (key) playSound(key, 0.9);
}

function playColorVoice(colorId) {
  const key = COLOR_VOICE[colorId];
  if (key) playSound(key, 0.9);
}

function playColorObjectVoice(colorId, objectIndex) {
  const arr = COLOR_OBJECT_VOICE[colorId];
  if (arr && arr[objectIndex]) playSound(arr[objectIndex], 0.9);
}

function playCountVoice(countId) {
  const key = COUNT_VOICE[countId];
  if (key) playSound(key, 0.9);
}

function playCountObjectVoice(countId) {
  const key = COUNT_OBJECT_VOICE[countId];
  if (key) playSound(key, 0.9);
}

function playPeekVoice(peekId) {
  const key = PEEK_VOICE[peekId];
  if (key) playSound(key, 0.9);
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.querySelectorAll('[data-sound-toggle]').forEach(el => {
    el.textContent = soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
  });
  document.querySelectorAll('[data-sound-icon]').forEach(el => {
    el.textContent = soundEnabled ? '🔊' : '🔇';
  });
}

// ============================================
// SFX API
// ============================================
const SFX = {
  tap()         { playSound('tap', 0.5); },
  reveal()      { playSound('reveal', 0.7); },
  bounce()      { playSound('bounce', 0.6); },
  pageFlip()    { playSound('pageFlip', 0.4); },
  celebration() { playSound('celebration', 0.8); },
  peekaboo()    { playSound('surprise', 0.7); },
  colorReveal() { playSound('reveal', 0.7); },

  countPop(index) {
    setTimeout(() => playSound('bounce', 0.5), index * 150);
  },
};

// speak() is now a no-op — kept so old code doesn't crash
function speak() {}
