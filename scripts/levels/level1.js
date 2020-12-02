function level_11() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      levelLoopCount++;
      for (var i = 0; i < 5+Math.sqrt(levelLoopCount); i++) {
        particles[`Phase${levelLoopCount}Shape${i}`] = new Particle({'color': hsvToRgb(Math.random(), 0.5, 0.6), 'speed': 2+levelLoopCount/10}).randMove('rR');
      }
      screenSizeSpan(Math.max(1-0.005*levelLoopCount, 0.6), 10, 50);
      levelTasks.activate(0);
    }, time: tickSpeed*100, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      levelFunctions.activate(0);
    }, time: 0, activated: false},
  ]);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.15, 'text': 'welcome!', 'color': '#c49b29', 'zIndex': 1})
  levelTasks.activateAll();
}
function level_12() {
  levelInit();

  levelLoop = setInterval( function () {
    levelLoopCount++;
    particles[`PPhase${levelLoopCount}`] = new Particle({'speed': 60, 'speedI': 3, 'speedIType': 'span', 'spanPer': 1}).randMove('r1').setDeg((Math.random()*10+355)%360);
  }, tickSpeed*10);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  levelTasks.activateAll();
}
function level_31() {
  console.log(31);
}
function level_41() {
  console.log(41);
}
function level_51() {
  console.log(51);
}