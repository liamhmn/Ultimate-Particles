//tasks (ty CrackTrough for made this for me!)
class Task {
  constructor(v1, v2) {
    if (typeof v1 == "function") {
      this._data[0] = { callback: v1, time: v2, activated: false }
    } else if (typeof v1 == "object") {
      this._data = v1;
    }
  }

  _data = [{ callback: function(){}, time: 0, activated: false }]
  _dataRaw = [];

  cancel(index) {
    if (this._data[index] != null) {
      if (this._data[index].activated) {
        this._data[index] = null;
        if (this._dataRaw[index] != null) clearTimeout(this._dataRaw[index]);
      }
    }
  }

  cancelAll() {
    for (var i = 0; i < this._data.length; i++) {
      var raw = this._dataRaw[i];
      if (raw != null) {
        clearTimeout(raw);
      }
    }
  }

  activate(index) {
    this._data[index].activated = true;
    this._dataRaw[index] = setTimeout(this._data[index].callback, this._data[index].time);
  }

  activateAll() {
    for (var i = 0; i < this._data.length; i++) {
      this._data[i].activated = true;
      this._dataRaw[i] = setTimeout(this._data[i].callback, this._data[i].time);
    }
  }
}

//timeout for async function
const timer = ms => new Promise(
  res => {
    setTimeout(res, ms);
  }
)

//keyboard detect
keypress = {};
document.addEventListener('keydown', keyUp);
document.addEventListener('keyup', keyDown);
function keyUp(e) {
  keypress[e.keyCode] = true;
}
function keyDown(e) {
  keypress[e.keyCode] = false;
}

//span effect function
async function screenSizeSpan(size=1, per=1, loop=100) {
  screenSettings.size = (size+screenSettings.size*per)/(per+1);
  if(loop == 0 || Math.abs(screenSettings.size-size) < 0.001) return;
  await timer(tickSpeed);
  screenSizeSpan(size, per, loop-1);
}
async function screenScaleSpan(scale=1, per=1, loop=100) {
  screenSettings.scale = (scale+screenSettings.scale*per)/(per+1);
  if(loop == 0 || Math.abs(screenSettings.scale[0]-scale) < 0.001) return;
  await timer(tickSpeed);
  screenScaleSpan(scale, per, loop-1);
}
async function screenPositionSpan(position=[0, 0], per=1, loop=100) {
  screenSettings.p[0] = (position[0]+screenSettings.p[0]*per)/(per+1);
  screenSettings.p[1] = (position[1]+screenSettings.p[1]*per)/(per+1);
  if(loop == 0 || (Math.abs(screenSettings.p[0]-position[0]) < 0.001 && Math.abs(screenSettings.p[1]-position[1]) < 0.001)) return;
  await timer(tickSpeed);
  screenPositionSpan(position, per, loop-1);
}
async function particleSpeedSpan(speed=1, per=1, loop=100) {
  levelSettings.particleSpeed = (speed+levelSettings.particleSpeed*per)/(per+1);
  if(loop == 0 || Math.abs(levelSettings.particleSpeed-speed) < 0.001) return;
  await timer(tickSpeed);
  particleSpeedSpan(speed, per, loop-1);
}

//get funtcion
function getScreenAbsSize() {
  return screenSettings.size*(1/screenSettings.scale);
}

//color
function hsvToRgb(h, s, v) {
  var r, g, b;

  var i = Math.floor(h * 6);
  var f = h * 6 - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);

  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return '#' + Math.floor(r*255).toString(16) + Math.floor(g*255).toString(16) + Math.floor(b*255).toString(16);
}

//dom update
function gameStatusUpdate() {
  document.getElementById('phase').innerHTML = `phase: ${levelLoopCount}`;
  document.getElementById('hp').innerHTML = `hp: ${(particles.player ? particles.player.hp : 0)}`;
  document.getElementById('score').innerHTML = `score: ${score}`;
}

//document event
document.onmousemove = getMousePos;
var mousePos = [-150145150145, -167150141164];
function getMousePos(event) {
  mousePos = [event.clientX, event.clientY]
}

//canvas
function resetCanvasSettings() {
  c.lineWidth = 1;
  c.fillStyle = '#000';
  c.strokeStyle = '#000';
  c.globalAlpha = 1;
}

//screen change
function goMain() {
  screenState = 'main';
  playing = 0;
  screenSettings.size = 0;
}

//override
Math.rad = function(degrees) {
  return degrees * Math.PI / 180;
};
Math.csc = function(radian) {
  return 1/Math.sin(radian);
};
Math.log = (function() {
  var log = Math.log;
  return function(n, base) {
    return log(n)/(base ? log(base) : 1);
  };
})();
