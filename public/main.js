console.log('hello from main.js');

const worker = new Worker('worker.js');

worker.onmessage = (msg) => {
  console.log('message received from worker', msg.data);
};

worker.postMessage('message sent to worker');

console.log('hello from end of main.js');


console.log('hello from worker.js');

self.onmessage = (msg) => {
  console.log('message from main', msg.data);

  postMessage('message sent from worker');
};



// governing parameters

console.log('hello from main.js');

const worker = new Worker('worker.js');

worker.onmessage = msg => {
  console.log('message received from worker', msg.data);
};

worker.postMessage('message sent to worker');

console.log('hello from end of main.js');


// governing parameters


var seed = 91651088029;
const Colors = ['green', 'red', 'yellow', 'blue']; // four particle types
// const Colors = ['green', 'red', 'yellow'];
// const Colors = ['green', 'red'];
let time_scale = 1.0;
var cutOff = 6400; // interaction distance cut-off
const viscosity = 0.9; // speed-dampening
const pulseDuration = 10;



// Seedable 'decent' random generator
function mulberry32() {
  var t = (seed += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

var hash = window.location.hash;
if (hash != undefined && hash[0] == '#') {
  var param = Number(hash.substring(1)); // remove the leading '#'
  if (isFinite(param)) {
    seed = param;
    console.log('Using seed ' + seed);
  }
}



// Rules values
const RULES = {};
function randomRules() {
      /* if (!isFinite(seed)) */ seed = 0xcafecafe;
  console.log('Seed=' + seed);
  window.location.hash = '#' + seed;
  for (var i of Colors) {
    RULES[i] = {};
    for (var j of Colors) {
      RULES[i][j] = mulberry32() * 2 - 1;
    }
  }
  console.table(RULES);
  time_scale = 1;
}
function symmetricRules() {
  for (var i of Colors) {
    for (var j of Colors) {
      if (j < i) {
        let v = 0.5 * (RULES[i][j] + RULES[j][i]);
        RULES[i][j] = RULES[j][i] = v;
      }
    }
  }
  console.table(RULES);

}
function printRules() {
  for (var i of Colors) {
    let str = '';
    for (var j of Colors) str += TwoDigits(RULES[i][j]) + ' ';
    console.log(str);
  }
}



// Canvas
const canvas = document.getElementById('canvas');

// Canvas Dimensions
updateCanvasDimensions();
function updateCanvasDimensions() {
  canvas.width = window.innerWidth * 1 - 10;
  canvas.height = window.innerHeight * 1 - 10;
}

const m = canvas.getContext('2d');
const draw = (x, y, c, s) => {
  m.fillStyle = c;
  m.fillRect(x, y, s, s);
};

// Atoms array
const atoms = [];
const atom = (x, y, c) => {
  return { x: x, y: y, vx: 0, vy: 0, color: c };
};

// Initiate Random locations for Atoms ( used when atoms created )
function randomX() {
  return mulberry32() * (canvas.width - 100) + 50;
}
function randomY() {
  return mulberry32() * (canvas.height - 100) + 50;
}

// Create an Atoms
const create = (number, color) => {
  for (let i = 0; i < number; i++) {
    atoms.push(atom(randomX(), randomY(), color));
  }
};

function randomAtoms(number_of_atoms_per_color, clear_previous) {
  if (clear_previous) atoms.length = 0;
  for (var c of Colors) create(number_of_atoms_per_color, c);
}

// Apply Rules ( How atoms interact with each other )
var pulse = 0;
var pulse_x = 100,
  pulse_y = 100;
var total_v;
const applyRules = () => {
  total_v = 0;
  for (let i = 0; i < atoms.length; i++) {
    let fx = 0;
    let fy = 0;
    const a = atoms[i];
    for (let j = 0; j < atoms.length; j++) {
      if (j !== i) {
        const b = atoms[j];
        const g = RULES[a.color][b.color];
        if (g !== undefined) {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx !== 0 || dy !== 0) {
            const d = dx * dx + dy * dy;
            if (d < cutOff) {
              const F = g / Math.sqrt(d);
              fx += F * dx;
              fy += F * dy;
            }
          }
        }
      }
    }
    if (pulse != 0) {
      const dx = a.x - pulse_x;
      const dy = a.y - pulse_y;
      const d = dx * dx + dy * dy;
      if (d > 0) {
        const F = (100 * pulse) / d / time_scale;
        fx += F * dx;
        fy += F * dy;
      }
    }
    const vmix = 1 - viscosity;
    a.vx = a.vx * vmix + fx * time_scale;
    a.vy = a.vy * vmix + fy * time_scale;
    a.x += a.vx;
    a.y += a.vy;
    total_v += Math.abs(a.vx);
    total_v += Math.abs(a.vy);

    // When Atoms touch or bypass canvas borders
    // X - axis
    if (a.x < 0 || a.x >= canvas.width) {
      a.vx *= -1.01;
      a.x = a.x < 0 ? 0 : canvas.width - 1;
    }
    // Y - axis
    if (a.y < 0 || a.y >= canvas.height) {
      a.vy *= -1.01;
      a.y = a.y < 0 ? 0 : canvas.height - 1;
    }
  }
  total_v /= atoms.length;
};

randomRules(); // Generate rules

randomAtoms(300, true); // Create Atoms

var show_fps = true;
var lastT = Date.now();
var fps = 0;
window.addEventListener('keydown', e => {
  switch (e.code) {
    case 'KeyF':
      show_fps = !show_fps;
      break;
    case 'KeyR':
      randomRules();
      break;
    case 'KeyS':
      symmetricRules();
      break;
    case 'KeyP':
      randomAtoms(100, false);
      break;
    case 'KeyO':
      randomAtoms(500, true);
      break;
    case 'BracketRight':
      time_scale *= 1.1;
      break;
    case 'BracketLeft':
      time_scale /= 1.1;
      break;
    case 'Digit1':
      cutOff /= 1.1;
      break;
    case 'Digit2':
      cutOff *= 1.1;
      break;
    case 'KeyM':
      printRules();
      break;
    default:
      console.log(e.code);
  }
});
window.addEventListener('click', e => {
  pulse = pulseDuration;
  pulse_x = e.clientX;
  pulse_y = e.clientY;
});

// Update Frames
update();
function TwoDigits(x) {
  return Math.floor(100 * x) / 100;
}
function update() {
  // Update Canvas Dimensions - if screen size changed
  updateCanvasDimensions();

  applyRules();
  m.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < atoms.length; ++i) {
    draw(atoms[i].x, atoms[i].y, atoms[i].color, 2);
  }
  if (show_fps) {
    var curT = Date.now();
    if (curT > lastT) {
      const new_fps = 1000 / (curT - lastT);
      fps = fps * 0.8 + new_fps * 0.2;
      lastT = curT;
    }
    m.fillStyle = 'white';
    m.font = '32px serif';
    m.fillText(TwoDigits(fps) + ' FPS', 10, 36);
    m.fillText(
      'dt: ' + TwoDigits(time_scale) + '  Cutoff:' + cutOff,
      10,
      96
    );
    m.fillText('Atoms: ' + atoms.length, 10, 130);
    m.fillText('total_v: ' + TwoDigits(total_v), 10, 200);
  }
  seed = seed + 1;
  if (pulse > 0) pulse -= 1;
  if (total_v > 30 && time_scale > 5) time_scale /= 1.1;
  if (time_scale < 0.9) time_scale *= 1.01;
  if (time_scale > 1.1) time_scale /= 1.01;
  requestAnimationFrame(update);
}
;

class Animation {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;

    this.seed = 91651088029;
    // four particle types
    this.Colors = ['green', 'red', 'yellow', 'blue'];

    this.time_scale = 1.0;
    this.cutOff = 6400; // interaction distance cut-off
    this.viscosity = 0.9; // speed-dampening
    this.pulseDuration = 10;
    this.RULES = {};
  }

  update() {
    // Update Canvas Dimensions - if screen size changed
    updateCanvasDimensions();

    applyRules();
    m.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < atoms.length; ++i) {
      draw(atoms[i].x, atoms[i].y, atoms[i].color, 2);
    }
    if (show_fps) {
      var curT = Date.now();
      if (curT > lastT) {
        const new_fps = 1000 / (curT - lastT);
        fps = fps * 0.8 + new_fps * 0.2;
        lastT = curT;
      }
      m.fillStyle = 'white';
      m.font = '32px serif';
      m.fillText(TwoDigits(fps) + ' FPS', 10, 36);
      m.fillText(
        'dt: ' + TwoDigits(time_scale) + '  Cutoff:' + cutOff,
        10,
        96
      );
      m.fillText('Atoms: ' + atoms.length, 10, 130);
      m.fillText('total_v: ' + TwoDigits(total_v), 10, 200);
    }
    seed = seed + 1;
    if (pulse > 0) pulse -= 1;
    if (total_v > 30 && time_scale > 5) time_scale /= 1.1;
    if (time_scale < 0.9) time_scale *= 1.01;
    if (time_scale > 1.1) time_scale /= 1.01;
    requestAnimationFrame(update);
  }
  _randomRules() {
      /* if (!isFinite(seed)) */ seed = 0xcafecafe;
    console.log('Seed=' + seed);
    window.location.hash = '#' + seed;
    for (var i of Colors) {
      RULES[i] = {};
      for (var j of Colors) {
        RULES[i][j] = mulberry32() * 2 - 1;
      }
    }
    console.table(RULES);
    time_scale = 1;
  }
  _symmetricRules() {
    for (var i of Colors) {
      for (var j of Colors) {
        if (j < i) {
          let v = 0.5 * (RULES[i][j] + RULES[j][i]);
          RULES[i][j] = RULES[j][i] = v;
        }
      }
    }
    console.table(RULES);

  }
}
