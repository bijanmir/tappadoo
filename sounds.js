/* ============================================
   TAPPADOO — sounds.js
   Web Audio API synthesized sounds + Speech
   Zero external files needed
   ============================================ */

let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

document.addEventListener('touchstart', initAudio, { once: true });
document.addEventListener('click', initAudio, { once: true });

function toggleSound() {
  soundEnabled = !soundEnabled;
  document.querySelectorAll('[data-sound-toggle]').forEach(el => {
    el.textContent = soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
  });
  document.querySelectorAll('[data-sound-icon]').forEach(el => {
    el.textContent = soundEnabled ? '🔊' : '🔇';
  });
}

function playTone(freq, duration, type = 'sine', volume = 0.3, delay = 0) {
  if (!audioCtx || !soundEnabled) return;
  const t = audioCtx.currentTime + delay;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + duration);
}

function playNoise(duration, volume = 0.1, delay = 0) {
  if (!audioCtx || !soundEnabled) return;
  const t = audioCtx.currentTime + delay;
  const bufferSize = audioCtx.sampleRate * duration;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  const source = audioCtx.createBufferSource();
  source.buffer = buffer;
  const gain = audioCtx.createGain();
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(800, t);
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(volume, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  source.start(t);
  source.stop(t + duration);
}

const SFX = {
  tap() {
    playTone(800, 0.08, 'sine', 0.12);
    playTone(1200, 0.06, 'sine', 0.08, 0.02);
  },

  reveal() {
    playTone(523, 0.15, 'sine', 0.18);
    playTone(659, 0.15, 'sine', 0.18, 0.08);
    playTone(784, 0.2, 'sine', 0.2, 0.16);
    playTone(1047, 0.3, 'sine', 0.18, 0.24);
  },

  bounce() {
    if (!audioCtx || !soundEnabled) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    const t = audioCtx.currentTime;
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(150, t + 0.2);
    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.25);
  },

  pageFlip() {
    playNoise(0.1, 0.06);
    playTone(600, 0.04, 'sine', 0.04, 0.02);
  },

  celebration() {
    const notes = [523, 659, 784, 1047, 1319];
    notes.forEach((n, i) => {
      playTone(n, 0.2, 'sine', 0.12, i * 0.08);
      playTone(n * 1.5, 0.15, 'triangle', 0.06, i * 0.08 + 0.03);
    });
  },

  peekaboo() {
    if (!audioCtx || !soundEnabled) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    const t = audioCtx.currentTime;
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(800, t + 0.25);
    osc.frequency.exponentialRampToValueAtTime(600, t + 0.4);
    gain.gain.setValueAtTime(0.18, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.5);
  },

  countPop(index) {
    const baseFreq = 400 + index * 80;
    playTone(baseFreq, 0.12, 'sine', 0.18, index * 0.15);
    playTone(baseFreq * 1.5, 0.08, 'triangle', 0.08, index * 0.15 + 0.03);
  },

  colorReveal() {
    playTone(440, 0.3, 'sine', 0.1);
    playTone(554, 0.3, 'sine', 0.1, 0.05);
    playTone(659, 0.35, 'sine', 0.13, 0.1);
  }
};

function speak(text, rate = 0.85, pitch = 1.2) {
  if (!soundEnabled || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = rate;
  utter.pitch = pitch;
  utter.volume = 0.9;
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    v.name.includes('Samantha') || v.name.includes('Karen') ||
    v.name.includes('Female') || v.name.includes('Google')
  );
  if (preferred) utter.voice = preferred;
  window.speechSynthesis.speak(utter);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}