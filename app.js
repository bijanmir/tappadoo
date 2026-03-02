/* ============================================
   TAPPADOO — app.js
   Book data, state, rendering, interactions
   ============================================ */

// =============================================
// BOOK DATA
// =============================================
const BOOKS = {
  animals: {
    title: "Who Says That?", subtitle: "An Animal Sounds Book", num: 1,
    icon: "🐾", iconBg: "linear-gradient(135deg, #FFECD2, #FFD6E0)",
    pages: [
      { id:"cover", type:"cover", bg:"linear-gradient(135deg, #FFECD2 0%, #FFD6E0 50%, #FFB8C6 100%)" },
      { id:"cow", animal:"Cow", sound:"Moo!", emoji:"🐄", scene:["🌾","🌻","☀️","🏡"], bg:"linear-gradient(135deg, #C5F0D6 0%, #7DD4A0 100%)", textColor:"#2d5016", question:"Who munches grass\nall day long?", fact:"Cows have best friends!" },
      { id:"cat", animal:"Cat", sound:"Meow!", emoji:"🐱", scene:["🧶","🐟","🌙","⭐"], bg:"linear-gradient(135deg, #E8D5F5 0%, #C9A0E8 100%)", textColor:"#5B2C87", question:"Who purrs softly\non your lap?", fact:"Cats sleep 16 hours a day!" },
      { id:"dog", animal:"Dog", sound:"Woof!", emoji:"🐶", scene:["🦴","🎾","🌳","🏠"], bg:"linear-gradient(135deg, #FFE0C8 0%, #FFB88A 100%)", textColor:"#7A4A00", question:"Who wags their tail\nwhen you come home?", fact:"Dogs can smell your feelings!" },
      { id:"duck", animal:"Duck", sound:"Quack!", emoji:"🦆", scene:["💧","🪷","🐸","🌿"], bg:"linear-gradient(135deg, #C5E4F7 0%, #7BBEE8 100%)", textColor:"#1A3A5C", question:"Who splashes in\nthe pond all day?", fact:"Ducks' feathers are waterproof!" },
      { id:"owl", animal:"Owl", sound:"Hoo!", emoji:"🦉", scene:["🌙","⭐","🌲","✨"], bg:"linear-gradient(135deg, #2C3E6B 0%, #1A1A3E 100%)", textColor:"#E8D5A0", question:"Who stays awake\nwhen you're asleep?", fact:"Owls can turn their heads almost all the way around!" },
      { id:"lion", animal:"Lion", sound:"Roar!", emoji:"🦁", scene:["🌅","🌴","🦒","🌍"], bg:"linear-gradient(135deg, #FFE0C8 0%, #E8A87C 100%)", textColor:"#5C2E00", question:"Who is the king\nof all the land?", fact:"A lion's roar can be heard 5 miles away!" },
      { id:"end", type:"end", bg:"linear-gradient(135deg, #FFECD2 0%, #FFD6E0 50%, #FFB8C6 100%)" },
    ]
  },
  colors: {
    title: "What Color Is That?", subtitle: "A Color Discovery Book", num: 2,
    icon: "🎨", iconBg: "linear-gradient(135deg, #C5E4F7, #E8D5F5)",
    pages: [
      { id:"cover", type:"cover", bg:"linear-gradient(135deg, #FF8A80 0%, #FFE066 25%, #7DD4A0 50%, #7BBEE8 75%, #C9A0E8 100%)" },
      { id:"red", color:"Red", hex:"#FF6B6B", objects:["🍎","🚒","❤️","🌹"], objectNames:["Apple","Fire Truck","Heart","Rose"], bg:"linear-gradient(135deg, #FFE5E5 0%, #FFCCCC 100%)", textColor:"#8B0000", scene:["🐞","🍓","🎈"], rhyme:"Red is warm\nlike a cozy hug,", fact:"Red is the first color babies can see!" },
      { id:"blue", color:"Blue", hex:"#5B9BD5", objects:["🦋","🫐","🐳","💎"], objectNames:["Butterfly","Blueberry","Whale","Gem"], bg:"linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)", textColor:"#0D47A1", scene:["💧","🌊","☁️"], rhyme:"Blue is the sky\nwhere birds fly high,", fact:"Blue is the world's favorite color!" },
      { id:"yellow", color:"Yellow", hex:"#F4C430", objects:["🌻","⭐","🍌","🐥"], objectNames:["Sunflower","Star","Banana","Chick"], bg:"linear-gradient(135deg, #FFFDE7 0%, #FFF9C4 100%)", textColor:"#6D5700", scene:["☀️","🌾","🍯"], rhyme:"Yellow shines bright\nlike the morning sun,", fact:"Yellow makes people feel happy!" },
      { id:"green", color:"Green", hex:"#66BB6A", objects:["🐸","🌿","🥝","🌲"], objectNames:["Frog","Leaf","Kiwi","Tree"], bg:"linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)", textColor:"#1B5E20", scene:["🍀","🦎","🥬"], rhyme:"Green is the grass\nbeneath your toes,", fact:"Our eyes see more shades of green than any other color!" },
      { id:"orange", color:"Orange", hex:"#FFA040", objects:["🍊","🦀","🥕","🦊"], objectNames:["Orange","Crab","Carrot","Fox"], bg:"linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)", textColor:"#BF360C", scene:["🌅","🎃","🍂"], rhyme:"Orange is playful\nlike a sunset glow,", fact:"The color was named after the fruit!" },
      { id:"purple", color:"Purple", hex:"#AB68C8", objects:["🍇","🔮","👑","🦄"], objectNames:["Grapes","Crystal","Crown","Unicorn"], bg:"linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)", textColor:"#4A148C", scene:["🪻","🌌","✨"], rhyme:"Purple is magic\nand royalty too,", fact:"Purple is the rarest color in nature!" },
      { id:"end", type:"end", bg:"linear-gradient(135deg, #FF8A80 0%, #FFE066 25%, #7DD4A0 50%, #7BBEE8 75%, #C9A0E8 100%)" },
    ]
  },
  counting: {
    title: "How Many Do You See?", subtitle: "A Counting Book", num: 3,
    icon: "🔢", iconBg: "linear-gradient(135deg, #E8D5F5, #FFD6E0)",
    pages: [
      { id:"cover", type:"cover", bg:"linear-gradient(135deg, #C9A0E8 0%, #FFB8C6 100%)" },
      { id:"one", number:1, word:"One", emoji:"🌟", bg:"linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)", textColor:"#5D4037", scene:["✨","🌙"], rhyme:"One bright star\nshines in the sky,", fact:"Every star you see is a sun!" },
      { id:"two", number:2, word:"Two", emoji:"🐰", bg:"linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)", textColor:"#880E4F", scene:["🥕","🌸"], rhyme:"Two little bunnies\nhop hop hop,", fact:"Bunnies can jump 3 feet high!" },
      { id:"three", number:3, word:"Three", emoji:"🐝", bg:"linear-gradient(135deg, #FFF9C4 0%, #FFF176 100%)", textColor:"#6D4C00", scene:["🌻","🍯"], rhyme:"Three busy bees\nbuzz all around,", fact:"Bees do a dance to talk to each other!" },
      { id:"four", number:4, word:"Four", emoji:"🐢", bg:"linear-gradient(135deg, #C8E6C9 0%, #A5D6A7 100%)", textColor:"#1B5E20", scene:["🌊","🏖️"], rhyme:"Four little turtles\nswim in the sea,", fact:"Sea turtles can live over 100 years!" },
      { id:"five", number:5, word:"Five", emoji:"🎈", bg:"linear-gradient(135deg, #E1BEE7 0%, #CE93D8 100%)", textColor:"#4A148C", scene:["🎉","🎊"], rhyme:"Five bright balloons\nfloat up so high,", fact:"Balloons pop because the air pushes too hard!" },
      { id:"end", type:"end", bg:"linear-gradient(135deg, #C9A0E8 0%, #FFB8C6 100%)" },
    ]
  },
  peekaboo: {
    title: "Where Did It Go?", subtitle: "A Peek-a-Boo Book", num: 4,
    icon: "👀", iconBg: "linear-gradient(135deg, #C5F0D6, #C5E4F7)",
    pages: [
      { id:"cover", type:"cover", bg:"linear-gradient(135deg, #C5F0D6 0%, #C5E4F7 100%)" },
      { id:"blanket", coverEmoji:"🛏️", coverLabel:"Under the blanket...", hiddenEmoji:"🐶", hiddenName:"Puppy!", bg:"linear-gradient(135deg, #FFE0C8 0%, #FFCCBC 100%)", textColor:"#BF360C", scene:["💤","🦴","🏠"], coverBg:"rgba(139,69,19,0.12)", fact:"Puppies are born with their eyes closed!" },
      { id:"hat", coverEmoji:"🎩", coverLabel:"Under the hat...", hiddenEmoji:"🐰", hiddenName:"Bunny!", bg:"linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)", textColor:"#4A148C", scene:["🥕","✨","🌸"], coverBg:"rgba(74,20,140,0.1)", fact:"A bunny's teeth never stop growing!" },
      { id:"leaf", coverEmoji:"🍃", coverLabel:"Behind the leaf...", hiddenEmoji:"🐱", hiddenName:"Kitty Cat!", bg:"linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)", textColor:"#1B5E20", scene:["🌿","🧶","🌺"], coverBg:"rgba(27,94,32,0.1)", fact:"Cats can jump 6 times their length!" },
      { id:"cloud", coverEmoji:"☁️", coverLabel:"Behind the cloud...", hiddenEmoji:"🐦", hiddenName:"Birdie!", bg:"linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)", textColor:"#0D47A1", scene:["🌈","🌤️","💨"], coverBg:"rgba(13,71,161,0.08)", fact:"Some birds can fly higher than airplanes!" },
      { id:"shell", coverEmoji:"🎁", coverLabel:"Inside the box...", hiddenEmoji:"🧸", hiddenName:"Teddy Bear!", bg:"linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)", textColor:"#E65100", scene:["🎀","🎊","⭐"], coverBg:"rgba(230,81,0,0.08)", fact:"Teddy bears are named after President Teddy Roosevelt!" },
      { id:"end", type:"end", bg:"linear-gradient(135deg, #C5F0D6 0%, #C5E4F7 100%)" },
    ]
  }
};

// =============================================
// STATE
// =============================================
let currentView = 'library';
let currentBook = null;
let currentPage = 0;
let revealed = false;
let bouncing = false;
let touchStartX = null;
let countRevealed = 0;

const app = document.getElementById('app');

// =============================================
// RENDER
// =============================================
function render() {
  if (currentView === 'library') { renderLibrary(); return; }
  const book = BOOKS[currentBook];
  const page = book.pages[currentPage];
  const isCover = page.type === 'cover';
  const isEnd = page.type === 'end';

  let contentHTML = '';
  if (isCover) contentHTML = renderCover(book);
  else if (isEnd) contentHTML = renderEnd(book);
  else if (currentBook === 'animals') contentHTML = renderAnimalPage(page);
  else if (currentBook === 'colors') contentHTML = renderColorPage(page);
  else if (currentBook === 'counting') contentHTML = renderCountPage(page);
  else if (currentBook === 'peekaboo') contentHTML = renderPeekPage(page);

  const nc = getNavColor(page, isCover, isEnd);

  app.innerHTML = `
    <div class="book-container" style="background:${page.bg};" ontouchstart="onTouchStart(event)" ontouchend="onTouchEnd(event)" onmousedown="onMouseDown(event)" onmouseup="onMouseUp(event)">
      <button class="back-btn" onclick="goToLibrary()" style="color:${nc};">←</button>
      <button class="sound-btn-book" onclick="toggleSound()" style="color:${nc};" data-sound-icon>${soundEnabled ? '🔊' : '🔇'}</button>
      <div class="page-content" style="color:${page.textColor || nc};" ${isCover ? 'onclick="initAudio(); nextPage();"' : ''}>
        ${contentHTML}
      </div>
      <div class="nav-bar">
        <button class="nav-btn" style="color:${nc};" onclick="prevPage()" ${currentPage===0?'disabled':''}>◀</button>
        <div class="dots">${book.pages.map((_,i)=>`<div class="dot ${i===currentPage?'active':'inactive'}"></div>`).join('')}</div>
        <button class="nav-btn" style="color:${nc};" onclick="nextPage()" ${currentPage===book.pages.length-1?'disabled':''}>▶</button>
      </div>
    </div>
  `;
  document.body.style.overflow = 'hidden';
}

function getNavColor(page, isCover, isEnd) {
  if (currentBook === 'animals' && (isCover || isEnd)) return '#6B4A4A';
  if ((isCover || isEnd)) return '#4A4A6B';
  return page.textColor || '#3D2C2C';
}

// =============================================
// LIBRARY
// =============================================
function renderLibrary() {
  document.body.style.overflow = 'auto';
  const bookKeys = ['animals','colors','counting','peekaboo'];
  const spines = ['spine-1','spine-2','spine-3','spine-4'];

  app.innerHTML = `
    <div class="library-screen">
      <div class="library-top">
        <div class="library-dots">
          <span style="width:80px;height:80px;top:-20px;right:-10px;background:rgba(255,255,255,0.3);"></span>
          <span style="width:50px;height:50px;bottom:30px;left:10px;background:rgba(255,255,255,0.2);"></span>
          <span style="width:30px;height:30px;top:20px;left:30%;background:rgba(255,255,255,0.15);"></span>
          <span style="width:60px;height:60px;bottom:50px;right:20%;background:rgba(255,255,255,0.12);"></span>
        </div>
        <div class="library-logo">Tappadoo</div>
        <div class="library-tagline">Interactive Books for Little Ones</div>
        <button class="sound-toggle" onclick="toggleSound()" data-sound-toggle>${soundEnabled ? '🔊 Sound On' : '🔇 Sound Off'}</button>
      </div>

      <div class="shelf-section">
        <div class="shelf-label">Your Bookshelf</div>
        <div class="book-grid">
        ${bookKeys.map((k,i) => {
          const b = BOOKS[k];
          return `<div class="book-card book-card-${spines[i]}" onclick="openBook('${k}')" style="animation:fadeIn 0.4s ease ${i*0.07}s both;">
            <div class="book-card-icon" style="background:${b.iconBg};">${b.icon}</div>
            <div class="book-card-info">
              <div class="book-card-number">Book ${b.num}</div>
              <div class="book-card-title">${b.title}</div>
              <div class="book-card-sub">${b.subtitle}</div>
            </div>
            <div class="book-card-arrow">›</div>
          </div>`;
        }).join('')}
        </div>

        <div class="shelf-label" style="padding-top:1rem;">Coming Soon</div>
        <div class="book-grid">
        ${[
          {n:5,t:"Big or Little?",s:"Opposites",ic:"↕️",sp:"spine-5"},
          {n:6,t:"What Shape Is That?",s:"Shapes",ic:"🔷",sp:"spine-6"}
        ].map((l,i) => `
          <div class="book-card book-card-locked book-card-${l.sp}" style="animation:fadeIn 0.4s ease ${(bookKeys.length+i)*0.07}s both;">
            <div class="book-card-icon" style="background:linear-gradient(135deg, #E8E0D8, #D5CCC2);">${l.ic}</div>
            <div class="book-card-info">
              <div class="book-card-number">Book ${l.n}</div>
              <div class="book-card-title">${l.t}</div>
              <span class="coming-soon-badge">Coming Soon</span>
            </div>
            <div class="book-card-arrow">🔒</div>
          </div>
        `).join('')}
        </div>
      </div>

      <div class="library-footer">
        <div class="library-footer-line"></div>
        <span>A Mirvan Studios Production</span>
      </div>
    </div>
  `;
}

function openBook(key) {
  initAudio();
  SFX.tap();
  currentView = 'book';
  currentBook = key;
  currentPage = 0;
  revealed = false;
  countRevealed = 0;
  render();
}

function goToLibrary() {
  currentView = 'library';
  currentBook = null;
  renderLibrary();
}

// =============================================
// COVER & END (Generic)
// =============================================
function renderCover(book) {
  const coverFloats = {
    animals:[{e:"🐄",x:10,y:14},{e:"🐱",x:80,y:9},{e:"🦆",x:6,y:62},{e:"🦉",x:84,y:58},{e:"🐶",x:14,y:40},{e:"🦁",x:76,y:36}],
    colors:[{e:"🎨",x:8,y:12},{e:"🖍️",x:82,y:8},{e:"🌈",x:7,y:65},{e:"🎭",x:85,y:68}],
    counting:[{e:"1️⃣",x:9,y:14},{e:"2️⃣",x:84,y:10},{e:"3️⃣",x:10,y:66},{e:"4️⃣",x:82,y:62},{e:"5️⃣",x:48,y:76}],
    peekaboo:[{e:"👀",x:10,y:12},{e:"🙈",x:82,y:8},{e:"🫣",x:8,y:66},{e:"🤭",x:84,y:62}],
  };
  const c = {
    animals:{title:"#6B4A4A",sub:"#8B6B6B",hint:"#B87878",series:"#B87878",shadow:"rgba(255,255,255,0.35)"},
    colors:{title:"#FFF",sub:"rgba(255,255,255,0.85)",hint:"rgba(255,255,255,0.6)",series:"rgba(255,255,255,0.7)",shadow:"rgba(0,0,0,0.1)"},
    counting:{title:"#FFF",sub:"rgba(255,255,255,0.85)",hint:"rgba(255,255,255,0.6)",series:"rgba(255,255,255,0.7)",shadow:"rgba(0,0,0,0.1)"},
    peekaboo:{title:"#3D5A5A",sub:"#5A7A7A",hint:"#6B8B8B",series:"#6B8B8B",shadow:"rgba(255,255,255,0.3)"},
  }[currentBook];
  const fl = coverFloats[currentBook] || [];

  return `
    ${fl.map((f,i) => floatingHTML({...f,d:i*0.5,dur:5+i*0.7})).join('')}
    <div class="page-inner">
      <div class="cover-series" style="color:${c.series};">Tappadoo · Book ${book.num}</div>
      <h1 class="cover-title" style="color:${c.title}; text-shadow:2px 2px 0 ${c.shadow};">${book.title.replace('?','?')}</h1>
      <div class="cover-icon">${book.icon}</div>
      <p class="cover-subtitle" style="color:${c.sub};">${book.subtitle}</p>
      <div class="cover-hint" style="color:${c.hint};">Tap anywhere to start</div>
    </div>
  `;
}

function renderEnd(book) {
  const allEmojis = {
    animals:["🐄","🐱","🐶","🦆","🦉","🦁"],
    colors:[{h:"#FF6B6B",n:"Red"},{h:"#5B9BD5",n:"Blue"},{h:"#F4C430",n:"Yellow"},{h:"#66BB6A",n:"Green"},{h:"#FFA040",n:"Orange"},{h:"#AB68C8",n:"Purple"}],
    counting:["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣"],
    peekaboo:["🐶","🐰","🐛","☀️","🦀"],
  };
  const c = {
    animals:{title:"#6B4A4A",sub:"#8B6B6B",btn:"#B87878",shadow:"rgba(255,255,255,0.3)"},
    colors:{title:"#FFF",sub:"rgba(255,255,255,0.8)",btn:"#FFF",shadow:"rgba(0,0,0,0.1)"},
    counting:{title:"#FFF",sub:"rgba(255,255,255,0.8)",btn:"#FFF",shadow:"rgba(0,0,0,0.1)"},
    peekaboo:{title:"#3D5A5A",sub:"#5A7A7A",btn:"#5A7A7A",shadow:"rgba(255,255,255,0.25)"},
  }[currentBook];
  const msgs = {
    animals:{emoji:"🎉",h:"Great Job!",p:"You learned 6 animal sounds!<br>Can you make them all?"},
    colors:{emoji:"🌈",h:"You Did It!",p:"You learned 6 beautiful colors!<br>Can you find them around you?"},
    counting:{emoji:"🏆",h:"You Can Count!",p:"You counted all the way to 5!<br>What else can you count?"},
    peekaboo:{emoji:"🎊",h:"Peek-a-boo!",p:"You found everyone!<br>Can you remember where they hid?"},
  }[currentBook];
  const items = allEmojis[currentBook];

  let itemsHTML = '';
  if (currentBook === 'colors') {
    itemsHTML = `<div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin:1rem 0;">
      ${items.map((c2,i) => `<div style="display:flex; flex-direction:column; align-items:center; gap:3px; animation:popIn 0.3s cubic-bezier(0.34,1.56,0.64,1) ${i*0.1}s both;">
        <div style="width:32px; height:32px; border-radius:50%; background:${c2.h}; box-shadow:0 2px 8px ${c2.h}33;"></div>
        <span style="font-size:0.55rem; font-weight:800; color:${c.sub};">${c2.n}</span>
      </div>`).join('')}
    </div>`;
  } else {
    itemsHTML = `<div style="display:flex; gap:0.4rem; font-size:clamp(1.5rem,5vw,2rem); flex-wrap:wrap; justify-content:center; margin:1rem 0;">
      ${items.map((e,i) => `<span style="animation:popIn 0.3s cubic-bezier(0.34,1.56,0.64,1) ${i*0.1}s both;">${e}</span>`).join('')}
    </div>`;
  }

  return `
    ${[{e:"⭐",x:10,y:16},{e:"✨",x:85,y:11},{e:"💛",x:12,y:70},{e:"🌟",x:82,y:66}].map((f,i) => floatingHTML({...f,d:i*0.4,dur:5+i})).join('')}
    <div class="page-inner">
      <div style="font-size:clamp(3rem,10vw,4.5rem); margin-bottom:0.7rem; animation:gentleBob 3s ease-in-out infinite;">${msgs.emoji}</div>
      <h2 class="end-title" style="color:${c.title}; text-shadow:2px 2px 0 ${c.shadow};">${msgs.h}</h2>
      <p class="end-subtitle" style="color:${c.sub};">${msgs.p}</p>
      ${itemsHTML}
      <button class="end-btn" onclick="goToLibrary()" style="color:${c.btn}; border-color:${c.btn}30; margin-top:0.8rem;">← Back to Library</button>
    </div>
  `;
}

// =============================================
// ANIMAL PAGES
// =============================================
function renderAnimalPage(page) {
  const fl = page.scene.map((s,i) => ({e:s, x:[8,82,12,78][i], y:[10,15,68,64][i], d:i*0.6, dur:5+i}));
  if (!revealed) {
    return `${fl.map(f=>floatingHTML(f)).join('')}
      <div class="page-inner">
        <p class="question-text">${page.question}</p>
        <div class="tap-target" style="color:${page.textColor};" onclick="revealPage()">
          <span style="font-size:1.4rem;">?</span>Tap me!
        </div>
      </div>`;
  }
  return `${fl.map(f=>floatingHTML(f)).join('')}
    <div class="page-inner">
      <p class="question-text">${page.question}</p>
      <div onclick="doBounce()" style="cursor:pointer; display:flex; flex-direction:column; align-items:center; gap:0.3rem;">
        <div class="animal-emoji ${bouncing?'bouncing':'revealed'}">${page.emoji}</div>
        <div class="sound-text" style="animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;">${page.sound}</div>
      </div>
      <div style="margin-top:0.7rem; animation:fadeSlideUp 0.5s ease 0.3s both;">
        <p class="reveal-name">It's a ${page.animal}!</p>
        <p class="fun-fact">✨ ${page.fact}</p>
      </div>
    </div>`;
}

// =============================================
// COLOR PAGES
// =============================================
function renderColorPage(page) {
  const fl = page.scene.map((s,i) => ({e:s, x:[8,84,50][i], y:[10,14,74][i], d:i*0.7, dur:5+i}));
  if (!revealed) {
    return `${fl.map(f=>floatingHTML(f)).join('')}
      <div class="page-inner">
        <p class="question-text">${page.rhyme}</p>
        <div class="tap-target tap-target-wide" style="color:${page.textColor};" onclick="revealPage()">
          <span style="font-size:1.4rem;">🎨</span>Tap to see ${page.color}!
        </div>
      </div>`;
  }
  return `${fl.map(f=>floatingHTML(f)).join('')}
    <div class="page-inner" style="gap:clamp(8px,2vw,14px);">
      <p class="question-text">${page.rhyme}</p>
      <div style="display:flex; align-items:center; gap:clamp(12px,3vw,18px);">
        <div class="color-swatch" style="width:clamp(65px,18vw,90px); height:clamp(65px,18vw,90px); background:${page.hex};"></div>
        <h2 style="font-family:'Lilita One',cursive; font-size:clamp(2.2rem,8vw,3.2rem); margin:0; color:${page.hex}; filter:brightness(0.9); animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;">${page.color}!</h2>
      </div>
      <div class="object-grid">
        ${page.objects.map((obj,i) => `<div class="object-card" style="animation:popIn 0.35s cubic-bezier(0.34,1.56,0.64,1) ${0.15+i*0.08}s both;" onclick="initAudio(); SFX.tap(); playColorObjectVoice('${page.id}', ${i}); this.style.animation='bigBounce 0.5s ease'; setTimeout(()=>this.style.animation='none',500)">
          <span class="object-card-emoji">${obj}</span>
          <span class="object-card-name" style="color:${page.textColor};">${page.objectNames[i]}</span>
        </div>`).join('')}
      </div>
      <p class="fun-fact" style="animation:fadeSlideUp 0.5s ease 0.45s both;">✨ ${page.fact}</p>
    </div>`;
}

// =============================================
// COUNTING PAGES
// =============================================
function renderCountPage(page) {
  const fl = page.scene.map((s,i) => ({e:s, x:[10,85][i], y:[12,70][i], d:i*0.8, dur:5+i}));
  const items = Array.from({length: page.number}, () => page.emoji);
  if (!revealed) {
    return `${fl.map(f=>floatingHTML(f)).join('')}
      <div class="page-inner">
        <p class="question-text">${page.rhyme}</p>
        <div class="count-grid">
          ${items.map((e,i) => `<div class="count-item" style="animation:countPop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.2+i*0.15}s both;">${e}</div>`).join('')}
        </div>
        <div class="tap-target tap-target-rect" style="color:${page.textColor};" onclick="revealCount()">
          <span style="font-size:1.4rem;">🔢</span>How many?
        </div>
      </div>`;
  }
  return `${fl.map(f=>floatingHTML(f)).join('')}
    <div class="page-inner">
      <p class="question-text">${page.rhyme}</p>
      <div class="count-number" style="color:${page.textColor}; animation:popIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both;">${page.number}</div>
      <div class="count-grid">
        ${items.map((e,i) => `<div class="count-item" style="animation:countPop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.2+i*0.15}s both;" onclick="initAudio(); SFX.bounce(); this.style.animation='bigBounce 0.5s ease'; setTimeout(()=>this.style.animation='none',500)">${e}</div>`).join('')}
      </div>
      <div style="margin-top:0.7rem; animation:fadeSlideUp 0.5s ease ${0.3+page.number*0.15}s both;">
        <p class="reveal-name">${page.word}!</p>
        <p class="fun-fact">✨ ${page.fact}</p>
      </div>
    </div>`;
}

// =============================================
// PEEK-A-BOO PAGES
// =============================================
function renderPeekPage(page) {
  const fl = page.scene.map((s,i) => ({e:s, x:[8,84,50][i], y:[10,14,76][i], d:i*0.6, dur:5+i}));
  return `${fl.map(f=>floatingHTML(f)).join('')}
    <div class="page-inner">
      <p class="question-text">${page.coverLabel}</p>
      <div class="peek-scene">
        <div class="peek-hidden ${revealed?'show':''}" style="${revealed?'':'opacity:0; transform:translateY(30px);'}">${page.hiddenEmoji}</div>
        <div class="peek-cover ${revealed?'lifted':''}" onclick="revealPeek()" style="background:${page.coverBg}; ${revealed?'':'animation:wiggle 2s ease-in-out infinite;'}">
          ${page.coverEmoji}
        </div>
      </div>
      ${revealed ? `
        <div style="margin-top:0.8rem; animation:fadeSlideUp 0.5s ease 0.3s both;">
          <p class="reveal-name">${page.hiddenName}</p>
          <p class="fun-fact">✨ ${page.fact}</p>
        </div>
      ` : `
        <p style="margin-top:0.8rem; font-size:clamp(0.82rem,2.3vw,0.95rem); opacity:0.55; font-weight:700; animation:pulse 2s ease-in-out infinite;">Tap to peek!</p>
      `}
    </div>`;
}

// =============================================
// HELPERS
// =============================================
function floatingHTML(f) {
  return `<div class="floating" style="left:${f.x}%; top:${f.y}%; font-size:clamp(1.2rem,3vw,1.8rem); animation:floatAround ${f.dur}s ease-in-out ${f.d}s infinite;">${f.e}</div>`;
}

function revealPage() {
  initAudio();
  revealed = true;
  if (currentBook === 'animals') {
    SFX.reveal();
    const page = BOOKS.animals.pages[currentPage];
    setTimeout(() => playAnimalSound(page.id), 400);
    setTimeout(() => playAnimalVoice(page.id), 1200);
  } else if (currentBook === 'colors') {
    SFX.colorReveal();
    const page = BOOKS.colors.pages[currentPage];
    setTimeout(() => playColorVoice(page.id), 400);
  }
  render();
}

function revealCount() {
  initAudio();
  revealed = true;
  const page = BOOKS.counting.pages[currentPage];
  for (let i = 0; i < page.number; i++) SFX.countPop(i);
  setTimeout(() => playCountVoice(page.id), 200 + page.number * 150);
  render();
}

function revealPeek() {
  if (!revealed) {
    initAudio();
    revealed = true;
    SFX.peekaboo();
    const page = BOOKS.peekaboo.pages[currentPage];
    setTimeout(() => playSound('voice-peekaboo', 0.9), 300);
    setTimeout(() => playPeekVoice(page.id), 1000);
    render();
  }
}

function doBounce() {
  if (!bouncing) {
    initAudio();
    bouncing = true;
    SFX.bounce();
    if (currentBook === 'animals') {
      const page = BOOKS.animals.pages[currentPage];
      playAnimalSound(page.id);
    }
    render();
    setTimeout(() => { bouncing = false; render(); }, 600);
  }
}

function nextPage() {
  const pages = BOOKS[currentBook].pages;
  if (currentPage < pages.length - 1) {
    initAudio();
    SFX.pageFlip();
    currentPage++;
    revealed = false;
    bouncing = false;
    countRevealed = 0;
    if (BOOKS[currentBook].pages[currentPage].type === 'end') {
      setTimeout(() => SFX.celebration(), 200);
      setTimeout(() => playSound('voice-yay', 0.9), 800);
    }
    render();
  }
}

function prevPage() {
  if (currentPage > 0) {
    initAudio();
    SFX.pageFlip();
    currentPage--;
    revealed = false;
    bouncing = false;
    countRevealed = 0;
    render();
  }
}

function onTouchStart(e) { touchStartX = e.touches[0].clientX; }
function onTouchEnd(e) {
  if (touchStartX === null) return;
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextPage(); else prevPage();
  }
  touchStartX = null;
}

let mouseStartX = null;
function onMouseDown(e) { mouseStartX = e.clientX; }
function onMouseUp(e) {
  if (mouseStartX === null) return;
  const diff = mouseStartX - e.clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextPage(); else prevPage();
  }
  mouseStartX = null;
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
  if (!currentBook) return;
  if (e.key === 'ArrowRight' || e.key === ' ') nextPage();
  if (e.key === 'ArrowLeft') prevPage();
  if (e.key === 'Escape') goToLibrary();
});

// Init
render();
