//level 1-1, made by Spotky1004
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
    }, time: tickSpeed*1000, activated: false},
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

//level 2-1, made by PillowPrism
function level_21() {
  levelInit();

PillowX = 0;
PillowY = 0;
PillowDeg = 0;
levelFunctions = new Task([
  {callback: function(){
    //some functions here!
  }, time: 0, activated: false},
]);

levelTasks = new Task([
  {callback: function(){


  }, time: 0, activated: false},
]);

levelLoop = setInterval( function () {
  levelLoopCount++;
    particles[`${levelLoopCount}`] = new Particle({'speed': 30, 'spanper': 30, 'speedI': 9, 'speedIType': 'span', 'color': '#600', 'size': [0.03,0.03], 'position': [Math.random()*2-1,1]})

    if (levelLoopCount > 1) {
      PillowX = particles[`${levelLoopCount}` - 1].position[0]
      PillowY = particles[`${levelLoopCount}` - 1].position[1]
      PillowDeg = Math.random()*90

      for (var i = 0; i < 4; i++) {
        particles[`${levelLoopCount}with${i}`] = new Particle({'speed': 12, 'deg': PillowDeg + i*90, 'color': '#600', 'position': [PillowX,PillowY]})
      }

      if (levelLoopCount > 30 && levelLoopCount <= 120) {
        for (var i = 0; i < 4; i++) {
          particles[`${levelLoopCount}with${i}withTwo`] = new Particle({'speed': 12, 'deg': (PillowDeg + i*90 + 45)%360, 'color': '#600', 'position': [PillowX,PillowY]})
        }
      }
      if (levelLoopCount > 60 && levelLoopCount <= 120) {
        for (var i = 0; i < 8; i++) {
          particles[`${levelLoopCount}with${i}withThree`] = new Particle({'speed': 15, 'deg': (PillowDeg + i*45)%360, 'color': '#600', 'position': [PillowX,PillowY]})
          particles[`${levelLoopCount}with${i}withFour`] = new Particle({'speed': 18, 'deg': (PillowDeg + i*45)%360, 'color': '#600', 'position': [PillowX,PillowY]})
        }
        for (var i = 0; i < 4; i++) {
          particles[`${levelLoopCount}with${i}withFive`] = new Particle({'speed': 15, 'deg': (PillowDeg + i*90+22.5)%360, 'color': '#600', 'position': [PillowX,PillowY]})
        }
      }
      if (levelLoopCount > 120) {
        for (var i = 0; i < 16; i++) {
          particles[`${levelLoopCount}with${i}withSix`] = new Particle({'speed': 18, 'deg': (PillowDeg + i*22.5)%360, 'color': '#600', 'position': [PillowX,PillowY]})
          particles[`${levelLoopCount}with${i}withSeven`] = new Particle({'speed': 22, 'deg': (PillowDeg + i*22.5)%360, 'color': '#600', 'position': [PillowX,PillowY]})
        }
        for (var i = 0; i < 6; i++) {
          particles[`${levelLoopCount}with${i}withEight`] = new Particle({'speed': 8, 'spanper': 60, 'speedI': 30, 'speedIType': 'span', 'deg': (PillowDeg + i*60)%360, 'color': '#006', 'position': [PillowX,PillowY]})
        }
      }

      delete particles[`${levelLoopCount}` - 1]
    }
}, tickSpeed*32);

particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
particles['text'] = new Particle({'type': 'text', 'absSize': 0.2, 'text': 'boom!', 'color': '#c49b29', 'zIndex': 1})
levelTasks.activateAll();
}
//level 2-2, made by Spotky1004
function level_22() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      screenSettings.size = 1.03;
      screenSizeSpan(1, 10)
      var dist = 1.2;
      for (var i = 0; i < 10+Math.sqrt(levelLoopCount)/3; i++) {
        var deg = Math.random()*360;
        particles[`P${levelLoopCount}S${i}`] = new Particle({'color': hsvToRgb(levelLoopCount*(0.001*(levelLoopCount/30+1)), 0.8, 0.5), 'speed': 100.5, 'moveType': ['circle']}).moveTo([Math.sin(Math.rad(deg))*dist, -Math.cos(Math.rad(deg))*dist]);
      }
      if (levelLoopCount > 1) {
        for (var i = 0; i < 10+Math.sqrt(levelLoopCount)/5; i++) {
          particles[`P${levelLoopCount-1}S${i}`].moveType = ['trace', 'player'];
          particles[`P${levelLoopCount-1}S${i}`].speed = 2+Math.sqrt(levelLoopCount)/3;
          particles[`P${levelLoopCount-1}S${i}`].speedI = 0.3+Math.sqrt(levelLoopCount)/15;
        }
      }
      if (levelLoopCount > 2) {
        for (var i = 0; i < 10+Math.sqrt(levelLoopCount)/5; i++) {
          particles[`P${levelLoopCount-2}S${i}`].moveType = ['normal'];
          particles[`P${levelLoopCount-2}S${i}`].speedI = 0.7+Math.sqrt(levelLoopCount)/7;
        }
      }
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    levelFunctions.activate(0);
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 1000005});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.17, 'text': 'circle!', 'color': '#c49b29', 'zIndex': 1})
  //levelTasks.activateAll();
}
//level 2-3, made by PillowPrism
function level_23() {
  levelInit();
  pillowx = 0;
  pillowindex = 0;
  pillowstate = 0;
  pillowrandom = 0;
  pillowrandomtwo = 0;
  levelFunctions = new Task([
    {callback: function(){
      particles[`PPhase${pillowindex}with1`] = new Particle({'speed': 45, 'position': [pillowx,1]})
      particles[`PPhase${pillowindex}with2`] = new Particle({'speed': 45, 'position': [pillowx+0.7,1]})
      if (pillowx >= 0.3) {
        pillowstate = 1;
      }
      else if (pillowx <= -1){
        pillowstate = 0;
      }
      if (Math.random() < 0.56 && Math.abs(pillowx + 0.35) < 0.03) {
        pillowstate = 1 - pillowstate;
      }

      if (pillowstate == 0) {
        pillowx = pillowx + 0.06;
      }
      else {
        pillowx = pillowx - 0.06;
      }

      pillowindex++;

      levelFunctions.activate(0);
    }, time: tickSpeed*3, activated: false},

    {callback: function(){
      if(levelLoopCount >= 30) {
        pillowrandom = Math.random()*2
        for (var i = 0; i <= 5; i = i + 1) {
          particles[`SPhase${levelLoopCount}with${i}`] = new Particle({'color': '#600', 'hitboxSize': 0.45, 'speed': 18, 'position': [pillowrandom/5-1,1]})
          pillowrandom = pillowrandom + 2;
        }
      }
      levelFunctions.activate(1);
    }, time: tickSpeed*30, activated: false},

    {callback: function(){
      if(levelLoopCount >= 60) {
        pillowrandomtwo = Math.random()*2.5
        for (var i = 0; i <= 4; i = i + 1) {
          particles[`TPhase${levelLoopCount}with${i}`] = new Particle({'color': '#006', 'hitboxSize': 0.5, 'speed': 6, 'position': [-1,pillowrandomtwo/5-1]})
          .setDeg(90);

          pillowrandomtwo = pillowrandomtwo + 2.5;
        }
      }
      levelFunctions.activate(2);
    }, time: tickSpeed*120, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      screenSizeSpan(0.8, 200);
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
      levelLoopCount++;
  }, tickSpeed*30);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [0,-0.75], 'hp': 20, 'playerSpeed': 0.02});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.17, 'text': 'zigzag!', 'color': '#c49b29', 'zIndex': 1})
  levelTasks.activateAll();
  levelFunctions.activate(0);
  levelFunctions.activate(1);
  levelFunctions.activate(2);
}

//level 3-1, made by PillowPrism
function level_31() {
  levelInit();

  PillowRand1 = 0;
  PillowRand2 = 0;
  PillowSwitch = 0;
  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){


    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;

    PillowRand1 = (Math.random()-4)/4
    PillowRand2 = (Math.random()-4)/4
    if (levelLoopCount <= 90) {
      for(var i = 0; i<8; i++) {
        particles[`${levelLoopCount}With${i}`] = new Particle({'speed': 12, 'color': '#A00', 'position': [PillowRand1,1]})
        PillowRand1 = PillowRand1 + 0.25;
      }
      if (levelLoopCount > 30) {
        for(var i = 0; i<8; i++) {
        particles[`${levelLoopCount}With${i}With2`] = new Particle({'speed': 12, 'color': '#00A', 'position': [-1,PillowRand2]})
        .setDeg(90);
        PillowRand2 = PillowRand2 + 0.25;
        }
      }
    } else {
      if (PillowSwitch == 1) {
        for(var i = 0; i<8; i++) {
          particles[`${levelLoopCount}With${i}`] = new Particle({'speed': 12, 'color': '#A00', 'position': [PillowRand1,1]})
          PillowRand1 = PillowRand1 + 0.25;
        }
        for(var i = 0; i<8; i++) {
          particles[`${levelLoopCount}With${i}With2`] = new Particle({'speed': 12, 'color': '#00A', 'position': [-1,PillowRand2]})
          .setDeg(90);
          PillowRand2 = PillowRand2 + 0.25;
        }
      } else {
        for(var i = 0; i<8; i++) {
          particles[`${levelLoopCount}With${i}`] = new Particle({'speed': 12, 'color': '#A00', 'position': [PillowRand1,-1]})
          .setDeg(180);
          PillowRand1 = PillowRand1 + 0.25;
        }
        for(var i = 0; i<8; i++) {
          particles[`${levelLoopCount}With${i}With2`] = new Particle({'speed': 12, 'color': '#00A', 'position': [1,PillowRand2]})
          .setDeg(270);
          PillowRand2 = PillowRand2 + 0.25;
        }
      }
      PillowSwitch = 1 - PillowSwitch
    }
  }, tickSpeed*35);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 24});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.17, 'text': 'grid!', 'color': '#c49b29', 'zIndex': 1})
  levelTasks.activateAll();
}
//level 3-2, made by Spotky1004
function level_32() {
  levelInit();

  screenSettings.color = '#000'
  levelFunctions = new Task([
    {callback: function(){
      particles['player'].playerSpeed = (1+levelLoopCount/90)/100;
      particles[`P${levelLoopCount}LC`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'size': [1.2, 0.05+levelLoopCount/1000], 'position': [0, Math.random()*((levelLoopCount%2) ? 1 : -1 )]});
      if (levelLoopCount > 1) {
        particles[`P${levelLoopCount-1}L`] = new Particle({'atk': 5, 'color': '#fff', 'size': [1.2, (0.05+(levelLoopCount-1)/1000)], 'hitboxSize': 0.95, 'position': [2.5, particles[`P${levelLoopCount-1}LC`].position[1]], 'outOfBounds': [[-10, 10], [-2, 2]], 'deg': 270, 'speed': 100, 'speedI': 6, 'speedIType': 'multiply'});
        particles[`P${levelLoopCount-1}L`].positionC[0][0] = 0;
        levelFunctions.activate(1);
        var pow = (8+levelLoopCount)/1000;
        screenSettings.p = [Math.random()*pow*2-pow, Math.random()*pow*2-pow];
        delete particles[`P${levelLoopCount-1}LC`];
      }
      if (levelLoopCount > 2) {
        try {
          particles[`P${levelLoopCount-2}L`].positionC = [[-999, 999], [-999, 999]];
        } catch (e) {

        }
      }
    }, time: tickSpeed*2, activated: false},
    {callback: function(){
      screenSettings.p = [0, 0];
      try {
        var tempD = Math.min(180, 60+levelLoopCount/3);
        for (var i = 0; i < Math.random()*2+levelLoopCount/5; i++) {
          particles[`P${levelLoopCount-1}LP${i}`] = new Particle({'color': '#fff', 'speed': 9, 'hitboxSize': 0.5, 'sides': Math.floor(Math.random()*3)+4, 'position': [-1, particles[`P${levelLoopCount-1}L`].position[1]], 'deg': (360+(180-tempD)/2+Math.random()*tempD)%360, 'zIndex': 0});
        }
      } catch (e) {

      }
    }, time: 80, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    levelFunctions.activate(0);
  }, tickSpeed*40);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 15});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.17, 'text': 'laser!', 'color': '#fff', 'zIndex': 1, 'alpha': 0.3})
  levelTasks.activateAll();
}
//level 3-3, made by Spotky1004
function level_33() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    for (var i = 0; i < 4+Math.sqrt(levelLoopCount)/2; i++) {
      particles[`P${levelLoopCount}S${i}`] = new Particle({'specialAttrs': ['bounce'], 'speed': 4+Math.log(levelLoopCount, 10), 'speedC': [0, 40], 'color': '#250e99', 'deleteTick': 400+levelLoopCount*6, 'alphaI': 0.7/(400+levelLoopCount*6)*-1000/tickSpeed}).randMove('rR');
    }
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.15, 'text': 'bounce!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
}
//level 3-4, made by Spotky1004
function level_34() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){

    }, time: tickSpeed*10, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    while (tempP === undefined || (Math.abs(tempP[0]-screenSettings.p[0]) < 0.5 && Math.abs(tempP[1]-screenSettings.p[1]) < 0.5) || (Math.abs(tempP[0]-screenSettings.p[0]) > 0.7 || Math.abs(tempP[1]-screenSettings.p[1]) > 0.7)) {
      var tempP = [(Math.floor(Math.random()*3)-1)*(2/3), (Math.floor(Math.random()*3)-1)*(2/3)];
    }
    screenPositionLinear([tempP[0], tempP[1]], 70);
    var orbLv = Math.floor(Math.random()*3)
    particles[`P${levelLoopCount}`] = new Particle({'speed': Math.random()*0.3+0.2, 'moveType': ['circle', [0, 0]], 'position': [0, (orbLv+1)*(1/3)], 'color': hsvToRgb(orbLv/3, 0.6, 0.7)});
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'playerSpeed': 0.015});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.2, 'text': 'move!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
  screenSettings.size = 0;
  screenSizeSpan(1/3, 3, 10);
}
//level 3-5, made by Spotky1004
function level_35() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      particles[`Wall${new Date().getTime()}`] = new Particle({'color': (Math.floor(Math.random()*2) ? '#000' : '#fff'), 'incrementI': 20, 'speed': 5, 'deg': 175+Math.random()*10, 'position': [(Math.floor(Math.random()*2) ? -1 : 1), -1]});
      levelFunctions.activate(0);
    }, time: tickSpeed*5, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    for (var i = 0; i < 3+levelLoopCount/10; i++) {
      particles[`P${levelLoopCount}S${i}`] = new Particle({'color': (levelLoopCount%2 ? '#fff' : '#000'), 'speed': -(Math.random()*5+30)*Math.min(2, 1+levelLoopCount/100), 'speedI': 0, 'speedIType': 'span', 'absSizeI': 1, 'absSizeIType': 'span', 'spanPer': 15});
      particles[`P${levelLoopCount}S${i}`].position = [Math.random()*2-1, -1];
    }
    screenSettings.color = (levelLoopCount%2 ? '#000' : '#fff');
    particles['text'].color = (levelLoopCount%2 ? '#fff' : '#000');
    particles['text'].alpha = 0.3;
    for (var name in particles) {
      if (name == 'player' || name == 'text' || Number(name.replace(/P|S[0-9]*/g, ''))%2 != levelLoopCount%2) continue;
      particles[name].speed = -(Math.random()*3+32)*Math.min(2, 1+levelLoopCount/100);
      particles[name].absSize = Math.min(1.3, 1.1+levelLoopCount/500);
    }
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.14, 'text': 'stop,go!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
  levelFunctions.activate(0);
}

//level 4-1, made by PillowPrism
function level_41() {
  PillowRandom = 0;
  PillowDeg = 0;
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    screenSettings.size = 1.01;
    screenSizeSpan(1, 10)
    for (var i = 0; i < (levelLoopCount/13)+1; i++) {
      PillowDeg = 0;
      PillowRandom = (Math.random()*10)+55;
      if (levelLoopCount >= 31) {
        PillowDeg = (Math.random()*10)-5
      }
      if (levelLoopCount >= 91) {
        PillowDeg = (Math.random()*30)-15
      }
      if (levelLoopCount >= 121) {
        PillowDeg = (Math.random()*50)-25
      }
    particles[`${levelLoopCount}with${i}`] = new Particle({'linearSpeed': [PillowDeg,PillowRandom], 'linearSpeedI': [0,-60], 'linearSpeedIType': 'increment', 'color': '#cc9514', 'position':[Math.random()*2-1,-1], 'effects': ['glow']})
    }
    particles['lava'].position[1] -= 0.04;
    particles['lava'].positionI = [0, Math.min(-1.7, -1.95+levelLoopCount/200)]
  }, tickSpeed*40);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 16});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.2, 'text': 'lava!', 'color': '#e00', 'zIndex': 1, 'alpha': 0.6});
  particles['lava'] = new Particle({'breakOnAttack': 0, 'color': '#A00', 'effects': ['glow'], 'size': [1.2, 1], 'position': [0, -1.99], 'positionI': [0, -1.95], 'positionIType': 'span', 'zIndex': 4});
  screenSettings.color = '#222';
  levelTasks.activateAll();
}
//level 4-2, made by Spotky1004
function level_42() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    var tempS = Math.random()*0.2+0.4;
    var tempL = Math.floor(Math.random()*Math.min(10, levelLoopCount/2)+3+Math.min(10, levelLoopCount/2));
    var tempE = Math.random();
    particles[`P${levelLoopCount}D`] = new Particle({'type': 'decoration', 'position': [particles.player.position[0], particles.player.position[1]], 'alpha': 0.4, 'color': (tempL%2 ? '#00f' : '#f00'), 'size': [1, 1], 'absSize': tempS, 'sides': -1});
    for (var i = 0; i < tempL; i++) {
      if (Math.abs(tempE-i/tempL) < 0.1) continue;
      particles[`P${levelLoopCount}S${i}`] = new Particle({'color': hsvToRgb((i/tempL*0.2-tempE/2+1)%1, 0.8, 0.7),'position': [particles.player.position[0]+tempS*Math.sin(Math.PI*2/tempL*i+(levelLoopCount>30 ? tempE*5 : 0)), particles.player.position[1]-tempS*Math.cos(Math.PI*2/tempL*i+(levelLoopCount>30 ? tempE*5 : 0))], 'speed': 0.4, 'speedI': 7, 'speedIType': 'multiply'}).tickTraceTo(particles.player);
    }
    if (levelLoopCount > 1) {
      delete particles[`P${levelLoopCount-1}D`];
    }
  }, tickSpeed*150);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.12, 'text': 'circle v2!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
}
//level 4-3, made by Spotky1004
function level_43() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      tempL++;
      particles[`S${tempL}`] = new Particle({'position': [Math.sin(Math.PI*2*(tempL/14.556))*1.5, Math.cos(Math.PI*2*(tempL/14.556))*1.5], 'speed': 4+tempL/1000, 'outOfBounds': [[-1.5, 1.5], [-1.5, 1.5]], 'hitboxSize': 0.85}).tickTraceTo(particles.dummy);
      levelFunctions.activate(0);
    }, time: tickSpeed*9, activated: false},
    {callback: function(){
      levelLoopCount++;
      switch (levelLoopCount%4) {
        case 1:
        particles['wall'].positionI = [-0.5, -0.5];
          break;
        case 2:
        particles['wall'].positionI = [0.5, -0.5];
          break;
        case 3:
        particles['wall'].positionI = [0.5, 0.5];
          break;
        case 0:
        particles['wall'].positionI = [-0.5, 0.5];
          break;
      }
      levelFunctions._data[1].time = tickSpeed*Math.max(100, Math.min(190, 230-levelLoopCount));
      levelFunctions.activate(1);
    }, time: tickSpeed*230, activated: false}
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {

  }, tickSpeed*150);

  var tempL = 0;
  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [0.5, -0.5], 'hitboxSize': 0.85});
  particles['wall'] = new Particle({'position': [-0.5, 0.5], 'size': [0.5, 0.5], 'positionI': [-0.5, 0.5], 'positionIType': 'span', 'spanPer': 20, 'breakOnAttack': 0, 'color': '#db5625', 'zIndex': 1});
  particles['dummy'] = new Particle({'type': 'decoration', 'alpha': 0.1, 'color': '#000'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.15, 'text': 'sprial!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
  levelFunctions.activate(0);
  levelFunctions.activate(1);
}
//level 4-4, made by Spotky1004
function level_44() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    var tempV = Math.min(50, 10+levelLoopCount/6);
    var tempB = -(levelLoopCount%2*2-1);
    var tempM = Math.random()/10+1.1;
    if (Math.floor(Math.random()*2)) {
      var tempP = [-tempM, (levelLoopCount%5 != 0 ? screenRand() : particles.player.position[1])];
      var tempD = 90;
    } else {
      var tempP = [tempM, (levelLoopCount%5 != 0 ? screenRand() : particles.player.position[1])];
      var tempD = 270;
    }
    var tempT = 1000+levelLoopCount*300;
    particles[`P${levelLoopCount}`] = new Particle({'speed': tempB*tempV, 'color': hsvToRgb((tempV/100+2/3-0.4)%1, 0.5, 0.6), 'position': [tempP[0], tempP[1]], 'deg': tempD, 'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'hitboxSize': 0.7, 'alphaI': calcAlphaI(tempT, 0.7), 'deleteTick': tempT});
    particleSpeedSpan(-(levelLoopCount%2*2-1), 12, 130);
    particles[`P${levelLoopCount}T0`] = new Particle({'color': '#5540D5', 'speed': 5, 'speedI': 4, 'position': [1.2, 1.2], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T1`] = new Particle({'color': '#5540D5', 'speed': 5, 'speedI': 4, 'position': [-1.2, 1.2], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T2`] = new Particle({'color': '#5540D5', 'speed': 5, 'speedI': 4, 'position': [1.2, -1.2], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T3`] = new Particle({'color': '#5540D5', 'speed': 5, 'speedI': 4, 'position': [-1.2, -1.2], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T0C`] = new Particle({'color': '#5540D5', 'speed': 2, 'speedI': 4, 'position': [1.2, 0], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T1C`] = new Particle({'color': '#5540D5', 'speed': 2, 'speedI': 4, 'position': [0, 1.2], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T2C`] = new Particle({'color': '#5540D5', 'speed': 2, 'speedI': 4, 'position': [0, -1.2], 'effects': ['glow']}).tickTraceTo(particles.player);
    particles[`P${levelLoopCount}T3C`] = new Particle({'color': '#5540D5', 'speed': 2, 'speedI': 4, 'position': [-1.2, 0], 'effects': ['glow']}).tickTraceTo(particles.player);
  }, tickSpeed*150);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'playerSpeed': 0.012, 'hp': 10});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.17, 'text': 'swing!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
}
//level 4-5, made by Spotky1004
function level_45() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      for (var i = 0; i < 100; i++) {
        try {
          delete particles[`P${levelLoopCount-2}S${i}D0`]
        } catch (e) {

        }
        try {
          delete particles[`P${levelLoopCount-2}S${i}D1`]
        } catch (e) {

        }
      }
    }, time: 200, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    var tempC = 55;
    var tempP = [(levelLoopCount%2 ? -1 : 1), particles.player.position[1]];
    var tempM = (Math.random()*0.008+0.004)*(1+levelLoopCount/28)*signRand();
    var tempM2 = 0;
    var tempL = Math.max(0.1, 0.3-levelLoopCount*(0.2/120))
    for (var i = 0; i < tempC; i++) {
      tempM2 += tempM/20;
      var tempL2 = tempL+Math.abs(tempM2);
      particles[`P${levelLoopCount}S${i}D0`] = new Particle({'color': (i%2 ? '#ed5a5a' : '#fff'), 'position': [tempP[0], tempP[1]+0.7], 'positionIType': 'span', 'positionI': [tempP[0], tempP[1]+tempL2], 'alpha': 0.01, 'alphaI': 2});
      particles[`P${levelLoopCount}S${i}D1`] = new Particle({'color': (i%2 ? '#ed5a5a' : '#fff'), 'position': [tempP[0], tempP[1]-0.7], 'positionIType': 'span', 'positionI': [tempP[0], tempP[1]-tempL2], 'alpha': 0.01, 'alphaI': 2});
      tempP[0] -= (levelLoopCount%2 ? -1 : 1)/tempC*1.9;
      tempP[1] = Math.min(1, Math.max(-1, tempP[1]+tempM2));
      if (Math.abs(tempP[1]) == 1 || Math.abs(tempM2) > (0.01+levelLoopCount/3000)) {
        if (Math.abs(tempP[1]) == 1) {
          tempM2 = 0;
        } else {
          tempM2 = Math.sign(tempM2)*(0.01+levelLoopCount/3000);
        }
        tempM *= -1;
      } else if (Math.max(0.03, 0.01+levelLoopCount*(0.04/240)) > Math.random()) {
        tempM = (Math.random()*0.008+0.004)*(1+levelLoopCount/28)*signRand();
      }
      console.log(`${tempM}, ${tempM2}`);
    }
    if (levelLoopCount > 1) {
      for (var i = 0; i < 100; i++) {
        try {
          particles[`P${levelLoopCount-1}S${i}D0`].positionI = [particles[`P${levelLoopCount-1}S${i}D0`].positionI[0], -2];
          particles[`P${levelLoopCount-1}S${i}D0`].spanPer = 40;
          particles[`P${levelLoopCount-1}S${i}D0`].alpha = 1;
          particles[`P${levelLoopCount-1}S${i}D0`].alphaI = -0.6;
          particles[`P${levelLoopCount-1}S${i}D0`].color = '#222';
        } catch (e) {

        }
        try {
          particles[`P${levelLoopCount-1}S${i}D1`].positionI = [particles[`P${levelLoopCount-1}S${i}D1`].positionI[0], 2];
          particles[`P${levelLoopCount-1}S${i}D1`].spanPer = 40;
          particles[`P${levelLoopCount-1}S${i}D1`].alpha = 1;
          particles[`P${levelLoopCount-1}S${i}D1`].alphaI = -0.6;
          particles[`P${levelLoopCount-1}S${i}D1`].color = '#222';
        } catch (e) {

        }
      }
      levelFunctions.activate(0);
    }
  }, tickSpeed*180);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'playerSpeed': 0.022, 'effects': ['glow'], 'position': [-0.9, 0]});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.17, 'text': 'speed!', 'color': '#333', 'zIndex': 0});
  screenSettings.color = '#444';
  levelTasks.activateAll();
}
//level 4-6, made by Spotky1004
function level_46() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    particles[`P${levelLoopCount}`] = new Particle({'speedI': 3, 'speedIType': 'span', 'spanPer': 100, 'speed': 20, 'position': [(Math.random()*0.5+1.1)*signRand(), (Math.random()*0.5+1.1)*signRand()], 'outOfBounds': [[-5, 5], [-5, 5]], 'deleteTick': 500+levelLoopCount*10, 'alphaI': calcAlphaI(500+levelLoopCount*10, 0.7)});
    for (var i in particles) {
      if (!i.includes('P') || i.includes('E')) continue;
      particles[i].speed = 25;
      particles[i].tickTraceTo(particles.player);
    }
    if (levelLoopCount > 30) {
      if (levelLoopCount%4 == 0) {
        for (var i = 0; i < 10; i++) {
          particles[`P${levelLoopCount}E${i}`] = new Particle({'color': '#e01db9', 'spanPer': 4, 'position': [screenRand(), 1.1*signRand()], 'positionIType': 'span'});
          particles[`P${levelLoopCount}E${i}`].positionI = [particles[`P${levelLoopCount}E${i}`].position[0], Math.sign(particles[`P${levelLoopCount}E${i}`].position[1])*0.9];
        }
      }
      if (levelLoopCount%4 == 1) {
        for (var i = 0; i < 10; i++) {
          particles[`P${levelLoopCount-1}E${i}`].positionI = [0, 0];
          particles[`P${levelLoopCount-1}E${i}`].positionIType = 'increment';
          particles[`P${levelLoopCount-1}E${i}`].spanPer = 100;
          particles[`P${levelLoopCount-1}E${i}`].speed = 30;
          particles[`P${levelLoopCount-1}E${i}`].speedI = 3;
          particles[`P${levelLoopCount-1}E${i}`].speedIType = 'span';
          particles[`P${levelLoopCount-1}E${i}`].color = '#ba1313';
          particles[`P${levelLoopCount-1}E${i}`].tickTraceTo(particles.player);
        }
      }
    }
    if (levelLoopCount > 60) {
      if (levelLoopCount%4 == 1) {
        for (var i = 0; i < 10; i++) {
          particles[`P${levelLoopCount}E${i}`] = new Particle({'color': '#e01db9', 'spanPer': 4, 'position': [1.1*signRand(), screenRand()], 'positionIType': 'span'});
          particles[`P${levelLoopCount}E${i}`].positionI = [Math.sign(particles[`P${levelLoopCount}E${i}`].position[0])*0.9, particles[`P${levelLoopCount}E${i}`].position[1]];
        }
      }
      if (levelLoopCount%4 == 2) {
        for (var i = 0; i < 10; i++) {
          particles[`P${levelLoopCount-1}E${i}`].positionI = [0, 0];
          particles[`P${levelLoopCount-1}E${i}`].positionIType = 'increment';
          particles[`P${levelLoopCount-1}E${i}`].spanPer = 100;
          particles[`P${levelLoopCount-1}E${i}`].speed = 30;
          particles[`P${levelLoopCount-1}E${i}`].speedI = 3;
          particles[`P${levelLoopCount-1}E${i}`].speedIType = 'span';
          particles[`P${levelLoopCount-1}E${i}`].color = '#ba1313';
          particles[`P${levelLoopCount-1}E${i}`].tickTraceTo(particles.player);
        }
      }
    }
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.2, 'text': 'dash!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
}
//level 4-7, made by RedMountain
function level_47() {
    levelInit();

    levelFunctions = new Task([
    {callback: function(){
        particles['core']['sides'] = 10 - Math.floor(smallLoopCount / 4)
        if (particles['core']['rotateDegI'] == 0) {
            particles['core']['rotateDegI'] = 1440
        } else {
            particles['core']['rotateDegI'] = 0
        }
        if (smallLoopCount < 20) {levelFunctions.activate(0)}
    }, time: tickSpeed * 400, activated: false},
    {callback: function() {
        if (phase3count % 3 == 1) {particles[`${phase3count}`] = new Particle({'speed': 15 + 5 * Math.random(), 'atk': 2, 'color': hslToRgb(Math.random(), 1, 0.8), 'absSize': 0.8, 'effects': ["glow"], 'position': [-0.5, 0.9]}).tickTraceTo(particles.player)}
        if (phase3count % 3 == 2) {particles[`${phase3count}`] = new Particle({'speed': 15 + 5 * Math.random(), 'atk': 2, 'color': hslToRgb(Math.random(), 1, 0.8), 'absSize': 0.8, 'effects': ["glow"], 'position': [0, 0.9]}).tickTraceTo(particles.player)}
        if (phase3count % 3 == 0) {particles[`${phase3count}`] = new Particle({'speed': 15 + 5 * Math.random(), 'atk': 2, 'color': hslToRgb(Math.random(), 1, 0.8), 'absSize': 0.8, 'effects': ["glow"], 'position': [0.5, 0.9]}).tickTraceTo(particles.player)}
        if (phase3count % 10 == 0) {
            particles[`Laser_S${phase3count}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'size': [1.2, 0.07 + 0.0005 * phase3count], 'position': [0, Math.random() * 1.8 - 1]});
        }
        if (phase3count % 10 == 9) {
            particles[`Laser${phase3count}`] = new Particle({'atk': 10, 'color': hslToRgb(Math.random(), 1, 0.85), 'size': [1.2, 0.07 + 0.0005 * phase3count], 'hitboxSize': 0.95, 'position': [2.5, particles[`Laser_S${phase3count - 9}`].position[1]], 'outOfBounds': [[-10, 10], [-2, 2]], 'deg': 270, 'speed': 100, 'speedI': 6, 'speedIType': 'multiply'});
          delete particles[`Laser_S${phase3count - 9}`]
        }
        phase3count++
        if (smallLoopCount < 75) {levelFunctions.activate(1)} else {
            for (i in particles) {
                if (i.includes('Laser_S')) {
                    delete particles[i]
                }
            }
        }
    }, time: tickSpeed * 6, activated: false}
    ]);

    levelTasks = new Task([
    {callback: function(){
        screenSettings.color = '#000'
        smallLoopCount = 0
        phase3count = 0
        particles.player["playerSpeed"] = 0.015
        particles.player["hp"] = 120
        // particles.player["screenParallaxPer"] = 1
        particles['core'] = new Particle({'speed': 0, 'deg': 0, 'speedI': 0, 'speedIType': 'span', 'zIndex': 3,
        'color': hslToRgb(Math.random(), 1, 0.8), 'atk': 3, 'breakOnAttack': 0, 'sides': 7, 'absSize': 12, 'position': [0, 0.9],
        'spanPer': 120, 'rotateDeg': 360, 'hsvRotateI': 0.03, 'hsvRotateIType': 'increment', 'rotateDegI': 0, 'rotateDegIType': 'span'})
        particles['core1'] = new Particle({'speed': 0, 'deg': 0, 'speedI': 0, 'speedIType': 'span', 'zIndex': 3,
        'color': hslToRgb(Math.random(), 1, 0.8), 'atk': 3, 'breakOnAttack': 0, 'sides': 5, 'absSize': 9, 'position': [-0.5, 1.2],
        'spanPer': 120, 'rotateDeg': 360, 'hsvRotateI': 0.03, 'hsvRotateIType': 'increment'})
        particles['core2'] = new Particle({'speed': 0, 'deg': 0, 'speedI': 0, 'speedIType': 'span', 'zIndex': 3,
        'color': hslToRgb(Math.random(), 1, 0.8), 'atk': 3, 'breakOnAttack': 0, 'sides': 5, 'absSize': 9, 'position': [0.5, 1.2],
        'spanPer': 120, 'rotateDeg': 360, 'hsvRotateI': 0.03, 'hsvRotateIType': 'increment'})
    }, time: 0, activated: false},
    ]);

    levelLoop = setInterval( function () {
        smallLoopCount++
        if (smallLoopCount == 2) {
            particles['core']['sides'] = 6 + Math.floor(4 * Math.random())
            if (particles['core']['rotateDegI'] == 0) {
                particles['core']['rotateDegI'] = 1440
            } else {
                particles['core']['rotateDegI'] = 0
            }
            levelFunctions.activate(0)
        }
        if (smallLoopCount <= 24) {
            particles['phasetext']['text'] = 'phase 1 / 4'
            if (smallLoopCount % 4 == 1) {

                particles[`${smallLoopCount}_1`] = new Particle({'atk': 2, 'breakOnAttack': 0, 'color': hslToRgb(Math.random(), 1, 0.7),
                'absSize': 2, 'sides': 5, 'position': [(-0.7 * Math.random()) - 0.3, 1], 'spanPer': 50, 'speed': 15,
                'speedI': 0, 'speedIType': 'span', 'onPlayerCollision': `this.type = 'decoration'`})

                particles[`${smallLoopCount}_2`] = new Particle({'atk': 2, 'breakOnAttack': 0, 'color': hslToRgb(Math.random(), 1, 0.7),
                'absSize': 2, 'sides': 5, 'position': [Math.random() * 0.3 * signRand(), 1], 'spanPer': 50, 'speed': 15,
                'speedI': 0, 'speedIType': 'span'})

                particles[`${smallLoopCount}_3`] = new Particle({'atk': 2, 'breakOnAttack': 0, 'color': hslToRgb(Math.random(), 1, 0.7),
                'absSize': 2, 'sides': 5, 'position': [(0.7 * Math.random()) + 0.3, 1], 'spanPer': 50, 'speed': 15,
                'speedI': 0, 'speedIType': 'span'})
            }
            if (smallLoopCount % 4 == 2) {
                seed = 19 + Math.floor(smallLoopCount / 3)

                for (i = 0; i < seed; i++) { particles[`${smallLoopCount}_1_${i}`] = new Particle({'atk': 5,
                'color': hslToRgb(Math.random(), 1, 0.8), 'rotateDeg': 45, 'deg': i * (360 / seed), 'absSize': 1.2,
                'sides': 4, 'position': [particles[`${smallLoopCount - 1}_1`]['position'][0],particles[`${smallLoopCount - 1}_1`]['position'][1]],
                'speed': 20, 'speedI': -10, 'speedC': [-25, 20], 'speedIType': 'increment', 'outOfBounds': [[-4, 4], [-4, 4]]}) }

                for (i = 0; i < seed; i++) { particles[`${smallLoopCount}_2_${i}`] = new Particle({'atk': 5,
                'color': hslToRgb(Math.random(), 1, 0.8), 'rotateDeg': 45, 'deg': i * (360 / seed), 'absSize': 1.2,
                'sides': 4, 'position': [particles[`${smallLoopCount - 1}_2`]['position'][0],particles[`${smallLoopCount - 1}_2`]['position'][1]],
                'speed': 20, 'speedI': -10, 'speedC': [-25, 20], 'speedIType': 'increment', 'outOfBounds': [[-4, 4], [-4, 4]]}) }

                for (i = 0; i < seed; i++) { particles[`${smallLoopCount}_3_${i}`] = new Particle({'atk': 5,
                'color': hslToRgb(Math.random(), 1, 0.8), 'rotateDeg': 45, 'deg': i * (360 / seed), 'absSize': 1.2,
                'sides': 4, 'position': [particles[`${smallLoopCount - 1}_3`]['position'][0],particles[`${smallLoopCount - 1}_3`]['position'][1]],
                'speed': 20, 'speedI': -10, 'speedC': [-25, 20], 'speedIType': 'increment', 'outOfBounds': [[-4, 4], [-4, 4]]}) }

                delete particles[`${smallLoopCount - 1}_1`]
                delete particles[`${smallLoopCount - 1}_2`]
                delete particles[`${smallLoopCount - 1}_3`]
            }
        }
        else if (smallLoopCount >= 30 && smallLoopCount <= 45) {
            particles['phasetext']['text'] = 'phase 2 / 4'
            for (k = 0; k < 5; k++) {
                particles[`${smallLoopCount}_${k}`] = new Particle({'atk': 3, 'color': hslToRgb(Math.random(), 1, 0.8), 'deg': k * 72,
                'speed': 15, 'sides': 5, 'absSize': 1.2, 'zIndex': 1, 'specialAttrs': ['bounce']})
                particles[`${smallLoopCount}_${k}`]['rotateDeg'] = particles[`${smallLoopCount}_${k}`]['deg']
            }
            setTimeout( function() {
              try {
                for (k = 0; k < 5; k++) {
                    particles[`${smallLoopCount}_${k}`]['speed'] = 0
                    particles[`${smallLoopCount}_${k}`]['speedI'] = 10
                    particles[`${smallLoopCount}_${k}`]['speedC'] = [0, 15]
                    particles[`${smallLoopCount}_${k}`]['zIndex'] = 4
                    particles[`${smallLoopCount}_${k}`].tickTraceTo(particles.player)
                    particles[`${smallLoopCount}_${k}`].fade(400, 0.3)
                }
              } catch (e) {

              }
            }, tickSpeed * 40)
        }
        else if (smallLoopCount >= 50 && smallLoopCount <= 75) {
            particles['phasetext']['text'] = 'phase 3 / 4'
        } else if (smallLoopCount >= 80 && smallLoopCount <= 110) {
            particles['phasetext']['text'] = 'phase 4 / 4'
            if (smallLoopCount == 80) {
                particles[`Shadow_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [Math.random(), Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                particles[`Shadow2_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [Math.random(), -1 * Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                particles[`Shadow3_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [-1 * Math.random(), Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                particles[`Shadow4_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [-1 * Math.random(), -1 * Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
              } else {
                if (smallLoopCount != 110) {
                    particles[`Shadow_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [Math.random(), Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                    particles[`Shadow2_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [Math.random(), -1 * Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                    particles[`Shadow3_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [-1 * Math.random(), Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                    particles[`Shadow4_${smallLoopCount}`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'speed': 0, 'position': [-1 * Math.random(), -1 * Math.random()], 'absSize': 0.5 * smallLoopCount - 28})
                }
                particles[`Main_${smallLoopCount}`] = new Particle({'atk': 12, 'alpha': 0.1, 'speed': 0, 'position': [particles[`Shadow_${smallLoopCount-1}`].position[0],particles[`Shadow_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(2, 0)
                particles[`Main2_${smallLoopCount}`] = new Particle({'atk': 12, 'alpha': 0.1, 'speed': 0, 'position': [particles[`Shadow2_${smallLoopCount-1}`].position[0],particles[`Shadow2_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(2, 0)
                particles[`Main3_${smallLoopCount}`] = new Particle({'atk': 12, 'alpha': 0.1, 'speed': 0, 'position': [particles[`Shadow3_${smallLoopCount-1}`].position[0],particles[`Shadow3_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(2, 0)
                particles[`Main4_${smallLoopCount}`] = new Particle({'atk': 12, 'alpha': 0.1, 'speed': 0, 'position': [particles[`Shadow4_${smallLoopCount-1}`].position[0],particles[`Shadow4_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(2, 0)
                particles[`Light_${smallLoopCount}`] = new Particle({'type': 'decoration', 'color': hslToRgb(Math.random(), 1, 0.8), 'speed': 0, 'position': [particles[`Shadow_${smallLoopCount-1}`].position[0],particles[`Shadow_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(25, 0)
                particles[`Light2_${smallLoopCount}`] = new Particle({'type': 'decoration', 'color': hslToRgb(Math.random(), 1, 0.8), 'speed': 0, 'position': [particles[`Shadow2_${smallLoopCount-1}`].position[0],particles[`Shadow2_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(25, 0)
                particles[`Light3_${smallLoopCount}`] = new Particle({'type': 'decoration', 'color': hslToRgb(Math.random(), 1, 0.8), 'speed': 0, 'position': [particles[`Shadow3_${smallLoopCount-1}`].position[0],particles[`Shadow3_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(25, 0)
                particles[`Light4_${smallLoopCount}`] = new Particle({'type': 'decoration', 'color': hslToRgb(Math.random(), 1, 0.8), 'speed': 0, 'position': [particles[`Shadow4_${smallLoopCount-1}`].position[0],particles[`Shadow4_${smallLoopCount-1}`].position[1]], 'absSize': 0.5 * smallLoopCount - 28.5}).fade(25, 0)
                for (i = 0; i < 7; i++) {
                    particles[`Normal_${smallLoopCount}_${i}`] = new Particle({'atk': 2, 'sides': 4 + Math.floor(5 * Math.random()), 'deg': Math.random() * 360,'color': hslToRgb(Math.random(), 1, 0.85), 'speed': 12, 'position': [particles[`Shadow_${smallLoopCount-1}`].position[0],particles[`Shadow_${smallLoopCount-1}`].position[1]], 'absSize': 1.2})
                }
                for (i = 0; i < 7; i++) {
                    particles[`Normal2_${smallLoopCount}_${i}`] = new Particle({'atk': 2, 'sides': 4 + Math.floor(5 * Math.random()), 'deg': Math.random() * 360,'color': hslToRgb(Math.random(), 1, 0.85), 'speed': 12, 'position': [particles[`Shadow2_${smallLoopCount-1}`].position[0],particles[`Shadow2_${smallLoopCount-1}`].position[1]], 'absSize': 1.2})
                }
                for (i = 0; i < 7; i++) {
                    particles[`Normal3_${smallLoopCount}_${i}`] = new Particle({'atk': 2, 'sides': 4 + Math.floor(5 * Math.random()), 'deg': Math.random() * 360,'color': hslToRgb(Math.random(), 1, 0.85), 'speed': 12, 'position': [particles[`Shadow3_${smallLoopCount-1}`].position[0],particles[`Shadow3_${smallLoopCount-1}`].position[1]], 'absSize': 1.2})
                }
                for (i = 0; i < 7; i++) {
                    particles[`Normal4_${smallLoopCount}_${i}`] = new Particle({'atk': 2, 'sides': 4 + Math.floor(5 * Math.random()), 'deg': Math.random() * 360,'color': hslToRgb(Math.random(), 1, 0.85), 'speed': 12, 'position': [particles[`Shadow4_${smallLoopCount-1}`].position[0],particles[`Shadow4_${smallLoopCount-1}`].position[1]], 'absSize': 1.2})
                }
                delete particles[`Shadow_${smallLoopCount-1}`]
                delete particles[`Shadow2_${smallLoopCount-1}`]
                delete particles[`Shadow3_${smallLoopCount-1}`]
                delete particles[`Shadow4_${smallLoopCount-1}`]
            }
        }
        // core move
        if (smallLoopCount == 26) {
            particles['core']['speed'] = 7.5
            particles['core']['speedI'] = 0
            particles['core']['rotateDegI'] = 0
        }
        if (smallLoopCount == 42) {
            particles[`coremove`] = new Particle({'type': 'decoration', 'alpha': 0.2, 'color': '#fff', 'size': [0.15, 0.6], 'position': [0, 0.6]});
        }
        if (smallLoopCount == 45) {
            particles['core']['speed'] = -7
            particles['core']['speedI'] = 0
            particles['core']['rotateDegI'] = 1440
            particles['core1']['speed'] = 3
            particles['core2']['speed'] = 3
            delete particles[`coremove`]
        }
        if (smallLoopCount == 50) {
            levelFunctions.activate(1)
        }
        if (smallLoopCount == 80) {
            particles['core1']['speed'] = -3
            particles['core2']['speed'] = -3
            particles['core']['speed'] = -5
            particles['core']['rotateDegI'] = 0
        }
        if (smallLoopCount == 112) {
            particles['core']['speed'] = 4
            particles['text']['text'] = 'clear!'
            particles['phasetext']['text'] = `score: ${particles.player.hp}`
            delete particles[`Shadow_110`]
            delete particles[`Shadow2_110`]
            delete particles[`Shadow3_110`]
            delete particles[`Shadow4_110`]
        }
        if (smallLoopCount == 116) {
          saveData.levelData.level21.phase = Math.max(saveData.levelData.level21.phase, particles.player.hp);
          playerDead();
        }
    }, tickSpeed*100);

    particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
    particles['text'] = new Particle({'type': 'text', 'text': 'boss stage!', 'absSize': 0.11, 'color': '#faa', 'zIndex': 1})
    particles['phasetext'] = new Particle({'type': 'text', 'text': 'phase 0 / 4', 'absSize': 0.07, 'color': '#faa', 'zIndex': 1, 'position': [0, -0.7]})

    screenSettings.infoUi = "score: ${(particles.player ? particles.player.hp : 0)}<br>hp: ${(particles.player ? particles.player.hp : 0)}";
    levelTasks.activateAll();
}

//level 5-1, made by RedMountain
function level_51() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
        particles.player["hp"] = 10
        particles[`Base1`] = new Particle({'speed': 0, 'position': [-0.9,0], 'atk': 100, 'absSize': 4})
        particles[`Base2`] = new Particle({'speed': 0, 'position': [0.9,0], 'atk': 100, 'absSize': 4})
        particles[`Base3`] = new Particle({'speed': 0, 'position': [0,0.9], 'atk': 100, 'absSize': 4, 'color': '#555'})
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    if (levelLoopCount == 20) {particles[`Base3`]['color'] = '#000'}
    if (levelLoopCount == 80) {particles[`Base3`]['color'] = '#009'}
    if (levelLoopCount < 20) {
        particles[`Phase${levelLoopCount}1`] = new Particle({'speed': 8, 'position': [0.9,0]})
        particles[`Phase${levelLoopCount}2`] = new Particle({'speed': 8, 'position': [-0.9,0]})
        particles[`Phase${levelLoopCount}1`].tickTraceTo(particles.player);
        particles[`Phase${levelLoopCount}2`].tickTraceTo(particles.player);
    } else if (levelLoopCount < 40) {
        particles[`Phase${levelLoopCount}1`] = new Particle({'speed': 8, 'position': [0.9,0]})
        particles[`Phase${levelLoopCount}2`] = new Particle({'speed': 8, 'position': [-0.9,0]})
        particles[`Phase${levelLoopCount}3`] = new Particle({'speed': 8, 'position': [0,0.9]})
        particles[`Phase${levelLoopCount}1`].tickTraceTo(particles.player);
        particles[`Phase${levelLoopCount}2`].tickTraceTo(particles.player);
        particles[`Phase${levelLoopCount}3`].tickTraceTo(particles.player);
    } else if (levelLoopCount < 60) {
        particles[`Phase${levelLoopCount}1`] = new Particle({'speed': 8, 'position': [0.9,0]})
        particles[`Phase${levelLoopCount}2`] = new Particle({'speed': 8, 'position': [-0.9,0]})
        particles[`Phase${levelLoopCount}1`].tickTraceTo(particles.player);
        particles[`Phase${levelLoopCount}2`].tickTraceTo(particles.player);
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}3_${i}`] = new Particle({ 'speed': 8, 'position': [0, 0.9] })
            particles[`Phase${levelLoopCount}3_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}3_${i}`]['deg'] += i * 15 - 30
        }
    } else if (levelLoopCount < 80) {
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}1_${i}`] = new Particle({ 'speed': 8, 'position': [0.9, 0] })
            particles[`Phase${levelLoopCount}1_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}1_${i}`]['deg'] += i * 15 - 30
        }
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}2_${i}`] = new Particle({ 'speed': 8, 'position': [-0.9, 0] })
            particles[`Phase${levelLoopCount}2_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}2_${i}`]['deg'] += i * 15 - 30
        }
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}3_${i}`] = new Particle({ 'speed': 8, 'position': [0, 0.9] })
            particles[`Phase${levelLoopCount}3_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}3_${i}`]['deg'] += i * 15 - 30
        }
    } else if (levelLoopCount < 100) {
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}1_${i}`] = new Particle({ 'speed': 8, 'position': [0.9, 0] })
            particles[`Phase${levelLoopCount}1_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}1_${i}`]['deg'] += i * 15 - 30
        }
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}2_${i}`] = new Particle({ 'speed': 8, 'position': [-0.9, 0] })
            particles[`Phase${levelLoopCount}2_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}2_${i}`]['deg'] += i * 15 - 30
        }
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}3_${i}`] = new Particle({ 'speed': 12, 'position': [0, 0.9], 'color': '#009'})
            particles[`Phase${levelLoopCount}3_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}3_${i}`]['deg'] += i * 10 - 20
        }
    } else {
        if (levelLoopCount % 2 == 0) {
            for (i = 1; i < 5; i++) {
                particles[`Phase${levelLoopCount}1_${i}`] = new Particle({ 'speed': 8, 'position': [0.9, 0] })
                particles[`Phase${levelLoopCount}1_${i}`].tickTraceTo(particles.player)
                particles[`Phase${levelLoopCount}1_${i}`]['deg'] += i * 10 - 25
            }
            for (i = 1; i < 4; i++) {
                particles[`Phase${levelLoopCount}2_${i}`] = new Particle({ 'speed': 8, 'position': [-0.9, 0] })
                particles[`Phase${levelLoopCount}2_${i}`].tickTraceTo(particles.player)
                particles[`Phase${levelLoopCount}2_${i}`]['deg'] += i * 15 - 30
            }
        } else {
            for (i = 1; i < 4; i++) {
                particles[`Phase${levelLoopCount}1_${i}`] = new Particle({ 'speed': 8, 'position': [0.9, 0] })
                particles[`Phase${levelLoopCount}1_${i}`].tickTraceTo(particles.player)
                particles[`Phase${levelLoopCount}1_${i}`]['deg'] += i * 15 - 30
            }
            for (i = 1; i < 5; i++) {
                particles[`Phase${levelLoopCount}2_${i}`] = new Particle({ 'speed': 8, 'position': [-0.9, 0] })
                particles[`Phase${levelLoopCount}2_${i}`].tickTraceTo(particles.player)
                particles[`Phase${levelLoopCount}2_${i}`]['deg'] += i * 10 - 25
            }
        }
        for (i = 1; i < 4; i++) {
            particles[`Phase${levelLoopCount}3_${i}`] = new Particle({ 'speed': 12, 'position': [0, 0.9], 'color': '#009'})
            particles[`Phase${levelLoopCount}3_${i}`].tickTraceTo(particles.player)
            particles[`Phase${levelLoopCount}3_${i}`]['deg'] += i * 10 - 20
        }
    }
  }, tickSpeed*40);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.15, 'text': 'turret!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
}
//level 5-2, made by Spotky1004
function level_52() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      levelVars[0] += 3;
      var tempD = (2+Math.min(6, levelLoopCount/30));
      for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 25; j++) {
          particles[`T${new Date().getTime()}S${i}P${j}`] = new Particle({'position': [(i*2-1)*1.1, 1.25-j*(1/tempD)+((levelVars[0]%30)/30)*(1/tempD)*(!i*2-1)], 'deg': 90+180*i, 'speed': Math.min(20, 10+levelLoopCount/20), 'outOfBounds': [[(i?-0.00625:-9),(!i?0.00625:9)], [-9, 9]], 'color': (i?'#f00':'#00f')});
        }
      }
      levelFunctions.activate(0);
    }, time: tickSpeed*12, activated: false},
    {callback: function(){
      levelVars[1]++;
      for (var i = 0; i < 4; i++) {
        particles[`T${new Date().getTime()}S${i}C${i}`] = new Particle({'position': [0, 0], 'positionI': [-Math.sin(Math.rad((levelVars[1]*12.3457+i*90)%360))*0.7, Math.cos(Math.rad((levelVars[1]*12.3457+i*90)%360))*0.7], 'positionIType': 'span', 'spanPer': 50}).fade(120);
      }
      levelFunctions.activate(1);
    }, time: tickSpeed*10, activated: false},
    {callback: function(){
      particles[`T${new Date().getTime()}T0`] = new Particle({'position': [0, 1], 'speed': 6, 'color': '#1cb2e8'}).tickTraceTo(particles.player);
      particles[`T${new Date().getTime()}T1`] = new Particle({'position': [0, 0.7], 'speed': 6, 'color': '#1cb2e8'}).tickTraceTo(particles.player);
      particles[`T${new Date().getTime()}T2`] = new Particle({'position': [0, -0.7], 'speed': 6, 'color': '#1cb2e8'}).tickTraceTo(particles.player);
      particles[`T${new Date().getTime()}T3`] = new Particle({'position': [0, -1], 'speed': 6, 'color': '#1cb2e8'}).tickTraceTo(particles.player);
      levelFunctions.activate(2);
    }, time: tickSpeed*35, activated: false}
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    if (levelLoopCount == 28) {
      particles['wariningCircle'] = new Particle({'size': [0.7, 0], 'sides': -1, 'color': '#f00', 'alpha': 0.2, 'type': 'decoration'}).fade(480, 0);
    }
    if (levelLoopCount == 30) {
      levelFunctions.activate(1);
    }
    if (levelLoopCount == 58) {
      particles['wariningCircle1'] = new Particle({'size': [0.1, 0], 'sides': -1, 'color': '#f00', 'alpha': 0.2, 'type': 'decoration', 'position': [0, 1]}).fade(480, 0);
      particles['wariningCircle2'] = new Particle({'size': [0.1, 0], 'sides': -1, 'color': '#f00', 'alpha': 0.2, 'type': 'decoration', 'position': [0, 0.7]}).fade(480, 0);
      particles['wariningCircle3'] = new Particle({'size': [0.1, 0], 'sides': -1, 'color': '#f00', 'alpha': 0.2, 'type': 'decoration', 'position': [0, -0.7]}).fade(480, 0);
      particles['wariningCircle4'] = new Particle({'size': [0.1, 0], 'sides': -1, 'color': '#f00', 'alpha': 0.2, 'type': 'decoration', 'position': [0, -1]}).fade(480, 0);
    }
    if (levelLoopCount == 60) {
      levelFunctions.activate(2);
    }
  }, tickSpeed*100);

  levelVars.push(0);
  levelVars.push(0);
  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.16, 'text': 'fusion!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
  levelFunctions.activate(0);
}
//level 5-3, made by Spotky1004
function level_53() {
  sendInfo('use portal!');

  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      for (var i = 0; i < 2; i++) {
        particles[`W${new Date().getTime()}S${i}`] = new Particle({'color': '#45c912', 'position': [i*2-1, Math.random()*0.07*(i*2-1)], 'deg': 90, 'speed': (Math.random()*10+20)*(!i*2-1)});
      }
      levelFunctions.activate(0);
    }, time: tickSpeed*5, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    var tempL = 0.3;

    var tempP = screenRand();
    var tempS = -Math.sign(tempP)*Math.max(1.5, (levelLoopCount/45+(1+levelLoopCount/20)*Math.random()));
    for (var i = 0; i < 2; i++) {
      particles[`P${levelLoopCount}S0T${i}`] = new Particle({'breakOnAttack': 0, 'speed': -2.5, 'speedI': (8+levelLoopCount/27), 'size': [0.04, 2], 'position': [1, tempP+(tempL+2)*(i*2-1)], 'deg': 270, 'linearSpeed': [0, (levelLoopCount >= 5 ? tempS : 0 )], 'outOfBounds': [[-2, 2], [-10, 10]]});
    }
    if (levelLoopCount > 30) {
      if (levelLoopCount > 60) {
        var tempP = screenRand();
      }
      var tempS = -Math.sign(tempP)*Math.max(1.5, (levelLoopCount/45+(1+levelLoopCount/20)*Math.random()));
      for (var i = 0; i < 2; i++) {
        particles[`P${levelLoopCount}S1T${i}`] = new Particle({'breakOnAttack': 0, 'speed': -2.5, 'speedI': (8+levelLoopCount/27), 'size': [0.04, 2], 'position': [-1, tempP+(tempL+2)*(i*2-1)], 'deg': 90, 'linearSpeed': [0, (levelLoopCount >= 5 ? tempS : 0 )], 'outOfBounds': [[-2, 2], [-10, 10]]});
      }
    }
    if (levelLoopCount == 58) {
      particles['warningSquare'] = new Particle({'size': [1, 0.07], 'color': '#f00', 'alpha': 0.2, 'type': 'decoration'}).fade(300, 0);
    }
    if (levelLoopCount == 60) {
      levelFunctions.activate(0);
    }
    var tempR = (0.25*levelLoopCount)%2-1;
    //levelVars[0] = [-2, tempR-0.4];
    //levelVars[1] = [tempR+0.4, 2];
  }, tickSpeed*130);

  levelVars.push([0, 0])
  levelVars.push([0, 0]);
  particles[`tele1`] = new Particle({'atk': 0, 'breakOnAttack': 0, 'onPlayerCollision': 'particles.player.position[1] = 0.925', 'position': [0, -1], 'size': [1, 0.05], 'color': '#eb9b1c'});
  particles[`tele2`] = new Particle({'atk': 0, 'breakOnAttack': 0, 'onPlayerCollision': 'particles.player.position[1] = -0.925', 'position': [0, 1], 'size': [1, 0.05], 'color': '#1c84eb'});

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 20, 'playerSpeed': 0.025});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.20, 'text': 'wall!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
}
//level 5-4, made by Spotky1004
function level_54() {
  sendInfo('you can destory particles when you become grey!');

  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    for (var i = 0; i < 3; i++) {
      particles[`P${levelLoopCount}S${i}`] = new Particle({'specialAttrs': ['bounce'], 'speed': 3, 'hsvRotateI': 0.015, 'color': '#4d8ddb', 'speedI': 0.5, 'hsvRotateC': [0, 0.015*(Math.sqrt(levelLoopCount)*0.4+8)], 'speedC': [0, 3+0.5*(Math.sqrt(levelLoopCount)*0.4+8)]}).randMove('rR');
    }
    if (levelLoopCount%5 != 0) {
      particles.player.color = '#f00';
      particles.player.absSize = 1;
      particles.player.playerSpeed = 0.01;
      particles.player.hsvRotate = 1-(levelLoopCount%5)/10;
      levelSettings.particleSpeed = 1;
      levelSettings.atkMult = 1;
    } else {
      particles.player.color = '#666';
      particles.player.absSize = 7;
      particles.player.playerSpeed = 0.04;
      levelSettings.particleSpeed = 1/10;
      levelSettings.atkMult = 0;
    }
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.13, 'text': 'bounce v2!', 'color': '#c49b29', 'zIndex': 1});
  levelTasks.activateAll();
}
//level 5-5, made by Spotky1004
function level_55() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  var tempT = 80;
  levelLoop = setInterval( function () {
    levelLoopCount++;
    var tempW = 0.02+levelLoopCount/1500;
    var tempP = [screenRand(), screenRand()];
    var tempV = Math.min(1, 0.2+levelLoopCount/30)
    tempP = [tempP[0]*tempV+Math.sign(tempP[0])*(1-tempV), tempP[0]*tempV+Math.sign(tempP[1])*(1-tempV)]
    particles[`P${levelLoopCount}S0W`] = new Particle({'type': 'decoration', 'color': '#fff', 'alpha': 0.4, 'size': [tempW*2, tempW], 'position': [tempP[0], tempP[1]], 'color': '#e8665d', 'hsvRotateI': 1/6, 'zIndex': 3}).fade(tempT*2.5);
    particles[`P${levelLoopCount}S1W`] = new Particle({'type': 'decoration', 'color': '#fff', 'alpha': 0.4, 'size': [tempW, tempW*2], 'position': [tempP[0], tempP[1]], 'color': '#e8665d', 'hsvRotateI': 1/6, 'zIndex': 3}).fade(tempT*2.5);
    if (levelLoopCount > 2) {
      particles[`P${levelLoopCount-2}S0`] = new Particle({'breakOnAttack': 0, 'color': '#f0948d', 'hsvRotateI': 1/10, 'size': [particles[`P${levelLoopCount-2}S0W`].size[0], particles[`P${levelLoopCount-2}S0W`].size[1]], 'sizeI': [10+levelLoopCount/9, 1], 'sizeIType': 'multiply', 'position': [particles[`P${levelLoopCount-2}S0W`].position[0], particles[`P${levelLoopCount-2}S0W`].position[1]]});
      particles[`P${levelLoopCount-2}S1`] = new Particle({'breakOnAttack': 0, 'color': '#f0948d', 'hsvRotateI': 1/10, 'size': [particles[`P${levelLoopCount-2}S1W`].size[0], particles[`P${levelLoopCount-2}S1W`].size[1]], 'sizeI': [1, 10+levelLoopCount/9], 'sizeIType': 'multiply', 'position': [particles[`P${levelLoopCount-2}S1W`].position[0], particles[`P${levelLoopCount-2}S1W`].position[1]]});
      if (levelLoopCount > 30) {
        for (var i = 0; i < 4; i++) {
          particles[`P${levelLoopCount-2}S${i}D`] = new Particle({'deg': 45+90*i, 'speed': 3, 'atk': 2, 'speedI': 3, 'color': '#e6bfbc', 'hsvRotateI': 1/6, 'zIndex': 1, 'position': [particles[`P${levelLoopCount-2}S0`].position[0], particles[`P${levelLoopCount-2}S0`].position[1]]});
        }
      }
      delete particles[`P${levelLoopCount-2}S0W`];
      delete particles[`P${levelLoopCount-2}S1W`];
    }
    if (levelLoopCount > 4) {
      var tempR = 40;
      var tempL = Math.min(20, 4+Math.sqrt(levelLoopCount)/2);
      for (var i = 0; i < 2; i++) {
        for (var j = 0; j < tempL; j++) {
          var tempS = Math.random();
          particles[`P${levelLoopCount-4}S${i}S${j}`] = new Particle({'size': [0.01+levelLoopCount/4000*tempS, 0.01+levelLoopCount/4000*tempS], 'speed': 7, 'atk': 8, 'position': [particles[`P${levelLoopCount-4}S${i}`].position[0], particles[`P${levelLoopCount-4}S${i}`].position[1]], 'color': '#a8635e', 'hsvRotateI': 1/6, 'deg': ((-tempR+tempR*2*Math.random())+(boolRand()*180)+(i*90))%360});
          particles[`P${levelLoopCount-4}S${i}S${j}`].position[i] = (j*(2/tempL))-1;
        }
      }
      delete particles[`P${levelLoopCount-4}S0`];
      delete particles[`P${levelLoopCount-4}S1`];
    }
  }, tickSpeed*tempT);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 100});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.13, 'text': 'laser v2!', 'color': '#fff', 'zIndex': 0, 'alpha': 0.2});
  screenSettings.color = '#000';
  levelTasks.activateAll();
}
//level 5-6, made by Spotky1004
function level_56() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      levelVars[0]++;
      switch (Math.floor(Math.min(3, levelLoopCount/30)*Math.random())) {
        case 1:
        particles[`P${levelVars[0]}`] = new Particle({
          'position': [Math.sin(levelVars[0]/8)*2, -Math.cos(levelVars[0]/8)*2], 'positionI': [Math.sin(levelVars[0]/8)*0.8, -Math.cos(levelVars[0]/8)*0.8], 'positionIType': 'span', 'spanPer': 20, 'deleteTick': 300, 'color': '#35dbdb', 'outOfBounds': [[-4, 4], [-4, 4]],
          'onDelete':
          `
          var tempR = Math.random()*360;
          for (var i = 0; i < 6; i++) {
            particles['P${levelVars[0]}T${new Date().getTime()}S' + i] = new Particle({'color': '#18a1a1', 'deg': (i*60+tempR)%360, 'speed': 15, 'position': [particles['P${levelVars[0]}'].position[0], particles['P${levelVars[0]}'].position[1]]});
          }
          `
        });
          break;
        case 2:
        particles[`P${levelVars[0]}`] = new Particle({
          'position': [Math.sin(levelVars[0]/8)*2, -Math.cos(levelVars[0]/8)*2], 'positionI': [Math.sin(levelVars[0]/8)*0.8, -Math.cos(levelVars[0]/8)*0.8], 'positionIType': 'span', 'spanPer': 20, 'deleteTick': 300, 'outOfBounds': [[-4, 4], [-4, 4]], 'color': '#eb7171', 'hsvRotateI': 0.1,
          'onDelete':
          `
            var tempR = Math.random()*360;
            for (var i = 0; i < 4; i++) {
              particles['P${levelVars[0]}S' + i] = new Particle({
                'deg': (tempR+90*i)%360, 'speed': 15, 'position': [particles['P${levelVars[0]}'].position[0], particles['P${levelVars[0]}'].position[1]], 'deleteTick': 30,
                'onDelete': "var tempR = Math.random()*360; for (var i = 0; i < 4; i++) {particles[pName + 'S' + i] = new Particle({'deg': (tempR+90*i)%360, 'absSize': 0.5, 'color': '#f00', 'speed': 15, 'position': [particles[pName].position[0], particles[pName].position[1]]});}"
              });
            }
          `
        });
          break;
        default:
        particles[`P${levelVars[0]}`] = new Particle({
          'position': [Math.sin(levelVars[0]/8)*2, -Math.cos(levelVars[0]/8)*2], 'positionI': [Math.sin(levelVars[0]/8)*0.8, -Math.cos(levelVars[0]/8)*0.8], 'positionIType': 'span', 'spanPer': 20, 'deleteTick': 300, 'outOfBounds': [[-4, 4], [-4, 4]],
          'onDelete':
          `
            var tempR = Math.random()*360;
            for (var i = 0; i < 4; i++) {
              particles['P${levelVars[0]}T${new Date().getTime()}S' + i] = new Particle({'deg': (tempR+90*i)%360, 'absSize': 0.5, 'color': '#f00', 'speed': 15, 'position': [particles['P${levelVars[0]}'].position[0], particles['P${levelVars[0]}'].position[1]]});
            }
          `
        });
      }
      if (levelVars[0]%Math.floor(16*Math.PI) == 0) {
        particles[`P${levelVars[0]}`].onDelete += `
        particles['H${levelVars[0]}'] = new Particle({'color': '#0f0', 'atk': -1, 'effects': ['glow'], 'speed': 6, 'position': [particles['P${levelVars[0]}'].position[0], particles['P${levelVars[0]}'].position[1]]}).tickTraceTo(particles.player);
        `
      }
      levelFunctions._data[0].time = tickSpeed*Math.max(7, 20-levelLoopCount/4);
      levelFunctions.activate(0);
    }, time: tickSpeed*20, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);
  levelLoopCount = 0;
  levelLoop = setInterval( function () {
    levelLoopCount++;
  }, tickSpeed*100);

  levelVars.push(0);

  particles[`B0`] = new Particle({'size': [0.3, 0.3], 'color': '#666', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'position': [1.15, 0], 'speed': 0.5, 'zIndex': 1, 'sides': 8, 'alpha': 0.8});
  particles[`B1`] = new Particle({'size': [0.3, 0.3], 'color': '#666', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'position': [-1.15, 0], 'speed': 0.5, 'zIndex': 1, 'sides': 8, 'alpha': 0.8});
  particles[`B2`] = new Particle({'size': [0.3, 0.3], 'color': '#666', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'position': [0, 1.15], 'speed': 0.5, 'zIndex': 1, 'sides': 8, 'alpha': 0.8});
  particles[`B3`] = new Particle({'size': [0.3, 0.3], 'color': '#666', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'position': [0, -1.15], 'speed': 0.5, 'zIndex': 1, 'sides': 8, 'alpha': 0.8});

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.16, 'text': 'boom v2!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
  levelFunctions.activate(0);
}
//level 5-7, made by Spotky1004
function level_57() {
  sendInfo('find the path! don\'t give up!');

  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    if (levelLoopCount == 27) {
      particles[`WindmillS1B0`].alpha = 0.3;
      particles[`WindmillS1B1`].alpha = 0.3;
      particles[`WindmillS2B0`].alpha = 0.3;
      particles[`WindmillS2B1`].alpha = 0.3;
    }
    if (levelLoopCount == 30) {
      for (var i = 1; i < 3; i++) {
        for (var j = 0; j < 2; j++) {
          particles[`WindmillS${i}B${j}`].alpha = 1;
          particles[`WindmillS${i}B${j}`].type = 'enemy';
          particles[`WindmillS${i}B${j}`].color = '#fff';
        }
      }
    }
    if (levelLoopCount == 57) {
      particles[`WindmillB2`].alpha = 0.3;
      particles[`WindmillB3`].alpha = 0.3;
    }
    if (levelLoopCount == 60) {
      for (var i = 2; i < 4; i++) {
        particles[`WindmillB${i}`].alpha = 1;
        particles[`WindmillB${i}`].type = 'enemy';
        particles[`WindmillB${i}`].color = '#fff';
      }
    }
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [1, 1], 'hp': 100});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.1, 'text': 'windmill!', 'color': '#fff', 'zIndex': 0});

  particles[`WindmillC`] = new Particle({'color': '#fff', 'size': [0.14, 0.14], 'breakOnAttack': 0});

  particles[`WindmillB0`] = new Particle({'sides': -2, 'moveType': ['circle', [0, 0]], 'speed': 0.2, 'color': '#fff', 'breakOnAttack': 0, 'points': [{x:-0.04, y:Math.sqrt(2)}, {x:0.04, y:Math.sqrt(2)}, {x:0.04, y:-Math.sqrt(2)},{x:-0.04, y:-Math.sqrt(2)}], 'rotateDegI': 20, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillB1`] = new Particle({'sides': -2, 'moveType': ['circle', [0, 0]], 'speed': 0.2, 'color': '#fff', 'breakOnAttack': 0, 'points': [{y:-0.04, x:Math.sqrt(2)}, {y:0.04, x:Math.sqrt(2)}, {y:0.04, x:-Math.sqrt(2)},{y:-0.04, x:-Math.sqrt(2)}], 'rotateDegI': 20, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillB2`] = new Particle({'type': 'decoration', 'alpha': 0, 'sides': -2, 'rotateDeg': 45, 'moveType': ['circle', [0, 0]], 'speed': 0.2, 'color': '#f00', 'breakOnAttack': 0, 'points': [{x:-0.04, y:Math.sqrt(2)}, {x:0.04, y:Math.sqrt(2)}, {x:0.04, y:-Math.sqrt(2)},{x:-0.04, y:-Math.sqrt(2)}], 'rotateDegI': 20, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillB3`] = new Particle({'type': 'decoration', 'alpha': 0, 'sides': -2, 'rotateDeg': 45, 'moveType': ['circle', [0, 0]], 'speed': 0.2, 'color': '#f00', 'breakOnAttack': 0, 'points': [{y:-0.04, x:Math.sqrt(2)}, {y:0.04, x:Math.sqrt(2)}, {y:0.04, x:-Math.sqrt(2)},{y:-0.04, x:-Math.sqrt(2)}], 'rotateDegI': 20, 'rotateDegC': [-1e308, 1e308]});


  particles[`WindmillS0B0`] = new Particle({'sides': -2, 'color': '#fff', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [0.5, 0.5], 'points': [{x:-0.05, y:0.5}, {x:0.05, y:0.5}, {x:0.05, y:-0.5},{x:-0.05, y:-0.5}], 'rotateDegI': -80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS0B1`] = new Particle({'sides': -2, 'color': '#fff', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [0.5, 0.5], 'points': [{y:-0.05, x:0.5}, {y:0.05, x:0.5}, {y:0.05, x:-0.5},{y:-0.05, x:-0.5}], 'rotateDegI': -80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS1B0`] = new Particle({'type': 'decoration', 'alpha': 0, 'sides': -2, 'color': '#f00', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [-0.5, 0.5], 'points': [{x:-0.05, y:0.5}, {x:0.05, y:0.5}, {x:0.05, y:-0.5},{x:-0.05, y:-0.5}], 'rotateDegI': 80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS1B1`] = new Particle({'type': 'decoration', 'alpha': 0, 'sides': -2, 'color': '#f00', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [-0.5, 0.5], 'points': [{y:-0.05, x:0.5}, {y:0.05, x:0.5}, {y:0.05, x:-0.5},{y:-0.05, x:-0.5}], 'rotateDegI': 80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS2B0`] = new Particle({'type': 'decoration', 'alpha': 0, 'sides': -2, 'color': '#f00', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [0.5, -0.5], 'points': [{x:-0.05, y:0.5}, {x:0.05, y:0.5}, {x:0.05, y:-0.5},{x:-0.05, y:-0.5}], 'rotateDegI': -80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS2B1`] = new Particle({'type': 'decoration', 'alpha': 0, 'sides': -2, 'color': '#f00', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [0.5, -0.5], 'points': [{y:-0.05, x:0.5}, {y:0.05, x:0.5}, {y:0.05, x:-0.5},{y:-0.05, x:-0.5}], 'rotateDegI': -80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS3B0`] = new Particle({'sides': -2, 'color': '#fff', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [-0.5, -0.5], 'points': [{x:-0.05, y:0.5}, {x:0.05, y:0.5}, {x:0.05, y:-0.5},{x:-0.05, y:-0.5}], 'rotateDegI': 80, 'rotateDegC': [-1e308, 1e308]});
  particles[`WindmillS3B1`] = new Particle({'sides': -2, 'color': '#fff', 'breakOnAttack': 0, 'moveType': ['circle', [0, 0]], 'speed': 0.4, 'position': [-0.5, -0.5], 'points': [{y:-0.05, x:0.5}, {y:0.05, x:0.5}, {y:0.05, x:-0.5},{y:-0.05, x:-0.5}], 'rotateDegI': 80, 'rotateDegC': [-1e308, 1e308]});

  screenSettings.color = "#28bdd1";
  levelTasks.activateAll();
}
//level 5-8, made by Spotky1004
function level_58() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      levelVars[0]++;
      particles[`T0P${levelVars[0]}S0`] = new Particle({'position': [-0.88, -1.1], 'size': [0.1, 0.1], 'deg': 180, 'speed': 5, 'color': hsvToRgb(Math.random(), 0.7, 0.5), 'zIndex': 4, 'alpha': 0.3});
      particles[`T0P${levelVars[0]}S1`] = new Particle({'position': [-1.1, 0.88], 'size': [0.1, 0.1], 'deg': 90, 'speed': 5, 'color': hsvToRgb(Math.random(), 0.7, 0.5), 'zIndex': 4, 'alpha': 0.3});
      particles[`T0P${levelVars[0]}S2`] = new Particle({'position': [0.88, 1.1], 'size': [0.1, 0.1], 'deg': 0, 'speed': 5, 'color': hsvToRgb(Math.random(), 0.7, 0.5), 'zIndex': 4, 'alpha': 0.3});
      particles[`T0P${levelVars[0]}S3`] = new Particle({'position': [1.1, -0.88], 'size': [0.1, 0.1], 'deg': 270, 'speed': 5, 'color': hsvToRgb(Math.random(), 0.7, 0.5), 'zIndex': 4, 'alpha': 0.3});
      levelFunctions.activate(0);
    }, time: tickSpeed*50, activated: false},
    {callback: function(){
      particles['acidBeam'].alpha = 1;
      particles['acidBeam'].type = 'enemy';
    }, time: tickSpeed*20, activated: false}
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    var tempP = [Math.random()*1.6-0.8, Math.random()*1.6-0.8];
    var tempC = 8+Math.floor(levelLoopCount/20);
    for (var i = 0; i < tempC; i++) {
      var tempD = Math.PI*(2/tempC)*i;
      particles[`P${levelLoopCount}S${i}`] = new Particle({'type': 'decoration', 'absSize': 0.6, 'alpha': 0.4, 'color': hsvToRgb(Math.random(), 0.7, 0.7), 'hsvRotateI': 0.10, 'speed': 7.2*2, 'position': [tempP[0]+Math.sin(tempD)*2, tempP[1]-Math.cos(tempD)*2], 'outOfBounds': [[-8, 8], [-8, 8]]}).tickTraceTo(new Particle({'position': [tempP[0], tempP[1]]}));
    }
    if (levelLoopCount >= 3) {
      for (var i = 0; i < 8+Math.floor((levelLoopCount-2)/20); i++) {
        particles[`P${levelLoopCount-2}S${i}`].type = 'enemy';
        particles[`P${levelLoopCount-2}S${i}`].alpha = 1;
        particles[`P${levelLoopCount-2}S${i}`].effects = ['glow'];
      }
    }
    if (levelLoopCount == 30) {
      particles['acidBeam'] = new Particle({
        'size': [4, 0.05], 'sizeI': [4, 0.03], 'sizeIType': 'span', 'spanPer': 20, 'position': [0, 0.9], 'color': hsvToRgb(Math.random(), 0.8, 0.8), 'hsvRotateI': 0.2, 'breakOnAttack': 0,
        'onPlayerCollision': `
          this.alpha = 0.3;
          this.type = 'decoration';
          levelFunctions.activate(1);
        `
      });
    }
    if (levelLoopCount > 30) {
      particles['acidBeam'].position[1] -= 0.2;
      particles['acidBeam'].size[1] = 0.05;
    }
    if (levelLoopCount > 30 && levelLoopCount%10 == 0) particles['acidBeam'].position[1] = 0.9;
    if (levelLoopCount > 60 && levelLoopCount%2 == 0) {
      for (var i = 0; i < 2; i++) {
        var tempP = screenRand()*0.84;
        var tempC = hsvToRgb(Math.random(), 0.7, 0.8);
        particles[`P${levelLoopCount}S${i}B`] = new Particle({
          'type': 'decoration', 'alpha': 0.4, 'position': [(i*2-1)*0.99, tempP], 'size': [0.03, 0.03], 'deg': 90+180*i, 'speed': 7, 'color': tempC, 'outOfBounds': [[-1, 1], [-1, 1]], 'effects': ['glow'],
          'onDelete':
          `
            particles['P${levelLoopCount}S${i}BC'] = new Particle({'size': [2, 0.03], 'position': [0, ${tempP}], 'color': '${tempC}'}).fade(30);
          `
        });
      }
    }
  }, tickSpeed*65);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.15, 'text': 'acid!', 'color': '#fff', 'alpha': 0.3, 'zIndex': 0});

  levelVars.push(0);

  screenSettings.color = '#000';
  levelTasks.activateAll();
  levelFunctions.activate(0);
}
//level 5-9, made by Spotky1004
function level_59() {
  levelInit();

  levelTickFunction = function() {
    
  };

  levelFunctions = new Task([
    {callback: function(){
      levelVars[0]++;
      for (var i in particles) {
        if (!i.endsWith("_Generator")) continue;
        particles[`Child_${i}_${levelVars[0]}`] = new Particle({speed: 10, position: [...particles[i].position], zIndex: 1, color: "#f00", absSize: 0.9}).tickTraceTo(new Particle({position: [0, 0]}));
        particles[i].speed *= 0.9;
      }
      levelFunctions.activate(0);
    }, time: 400, activated: false},
    {callback: function(){
      levelVars[0]++;
      for (var i = 0; i < 10; i++) particles[`Center${levelVars[0]}S${i}`] = new Particle({color: "#000", speed: 6, speedI: 2, absSize: 0.8, hitboxSize: 0.8, deg: (36*i+levelVars[0]**1.7)%360, rotateDeg: (36*i+levelVars[0]**1.7)%360});
      levelFunctions.activate(1);
    }, time: 200, activated: false},
    {callback: function(){
      levelVars[0]++;
      for (var i = 0; i < 2; i++) particles[`${levelVars[0]}S${i}_curve`] = new Particle({deg: Math.random()*360, degI: 10+levelVars[0]/5, degC: [0, 1e10], color: hslToRgb((levelVars[0]**2/100)%1, 0.6, 0.6), speed: 4, speedI: 1}).randMove('rR');
      particles[`${levelVars[0]}S${i}_trace`] = new Particle({speed: 5, speedI: 2, absSize: 0.9}).randMove("rR").tickTraceTo(particles.player);
      levelFunctions.activate(2);
    }, time: 150, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 7; j++) particles[`S${i}P${j}_S0`] = new Particle({color: "#800", position: [(Math.floor(i/2)%2)*2-1, !(Math.floor((i+1)/2)%2)*2-1], deg: i*90+Math.random()*90, speed: 5+Math.random()*5, speedI: 5});
      }
    }, time: 500, activated: false},
    {callback: function(){
      for (var i in particles) {
        if (!i.endsWith("_S0")) continue;
        particles[i].speed = 0;
      }
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 7; j++) particles[`S${i}P${j}_S1`] = new Particle({color: "#800", position: [(Math.floor(i/2)%2)*2-1, !(Math.floor((i+1)/2)%2)*2-1], deg: i*90+Math.random()*90, speed: 5+Math.random()*5, speedI: 5});
      }
    }, time: 2000, activated: false},
    {callback: function(){
      for (var i in particles) {
        if (!i.endsWith("_S1")) continue;
        particles[i].speed = 0;
      }
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 7; j++) particles[`S${i}P${j}_S2`] = new Particle({color: "#800", position: [(Math.floor(i/2)%2)*2-1, !(Math.floor((i+1)/2)%2)*2-1], deg: i*90+Math.random()*90, speed: 5+Math.random()*5, speedI: 5});
      }
    }, time: 3500, activated: false},
    {callback: function(){
      for (var i in particles) {
        if (!i.endsWith("_S2")) continue;
        particles[i].speed = 0;
      }
      particles.G0_Generator = new Particle({deg: 315, speed: 20, speedI: 1, specialAttrs: ['bounce'], color: "#c49b29", position: [1, 0], absSize: 1.4, breakOnAttack: 0, zIndex: 3});
      particles.G0_wall = new Particle({rotateDeg: 45, position: [1, -1], size: [Math.sqrt(0.5), Math.sqrt(0.5)], breakOnAttack: 0, color: "#222", alpha: 0.5, zIndex: 2});
    }, time: 5000, activated: false},
    {callback: function(){
      particles.G1_Generator = new Particle({deg: 315, speed: 20, speedI: 2, specialAttrs: ['bounce'], color: "#c49b29", position: [1, 0], absSize: 1.4, breakOnAttack: 0, zIndex: 3});
      particles.G1_wall = new Particle({rotateDeg: 45, position: [-1, -1], size: [Math.sqrt(0.5), Math.sqrt(0.5)], breakOnAttack: 0, color: "#222", alpha: 0.5, zIndex: 2});
    }, time: 5500, activated: false},
    {callback: function(){
      particles.G2_Generator = new Particle({deg: 315, speed: 20, speedI: 3, specialAttrs: ['bounce'], color: "#c49b29", position: [1, 0], absSize: 1.4, breakOnAttack: 0, zIndex: 3});
      particles.G2_wall = new Particle({rotateDeg: 45, position: [-1, 1], size: [Math.sqrt(0.5), Math.sqrt(0.5)], breakOnAttack: 0, color: "#222", alpha: 0.5, zIndex: 2});
    }, time: 6000, activated: false},
    {callback: function(){
      particles.G3_Generator = new Particle({deg: 315, speed: 20, speedI: 4, specialAttrs: ['bounce'], color: "#c49b29", position: [1, 0], absSize: 1.4, breakOnAttack: 0, zIndex: 3});
      particles.G3_wall = new Particle({rotateDeg: 45, position: [1, 1], size: [Math.sqrt(0.5), Math.sqrt(0.5)], breakOnAttack: 0, color: "#222", alpha: 0.5, zIndex: 2});
    }, time: 6500, activated: false},
    {callback: function(){
      for (var i = 0; i < 10; i++) particles[`S0S${i}_hScanLaser`] = new Particle({color: "#f00", size: [1, 0.05], position: [0, -1+0.2*i], alpha: 0.4, type: "decoration"});
    }, time: 10000, activated: false},
    {callback: function(){
      for (var i = 0; i < 10; i++) particles[`S0S${i}_hScanLaser`] = new Particle({color: "#f2dada", size: [1, 0.05], position: [0, -1+0.2*i], breakOnAttack: 0}).fade(20, 0.3);
      for (var i = 0; i < 10; i++) particles[`S1S${i}_hScanLaser`] = new Particle({color: "#f00", size: [1, 0.05], position: [0, -0.9+0.2*i], alpha: 0.4, type: "decoration"});
    }, time: 11000, activated: false},
    {callback: function(){
      for (var i = 0; i < 10; i++) particles[`S1S${i}_hScanLaser`] = new Particle({color: "#f2dada", size: [1, 0.05], position: [0, -0.9+0.2*i], breakOnAttack: 0}).fade(20, 0.3);
    }, time: 12000, activated: false},
    {callback: function(){
      for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) particles[`S${i*4+j}_fragBomb`] = new Particle({color: "#111", speed: 4, speedI: 6, position: [...particles[`G${i}_Generator`].position], deg: Math.random()*360});
        delete particles[`G${i}_Generator`];
      }
      levelFunctions.cancel(0);
    }, time: 20000, activated: false},
    {callback: function(){
      for (var i = 0; i < 16; i++) {
        for (var j = 0; j < 4; j++) particles[`S${i}S${j}_frag`] = new Particle({color: "#ed4a4a", speedI: 5, position: [...particles[`S${i}_fragBomb`].position], deg: Math.random()*360});
        delete particles[`S${i}_fragBomb`];
      }
      particles[`CenterCircle_warning`] = new Particle({color: "#f00", size: [0.3, 0], alpha: 0.4, sides: -1, type: "decoration"}).fade(200, 0.3);
      particles[`RotateBox`] = new Particle({sides: -2, color: "#f00", alpha: 0.4, type: "decoration", rotateDegI: 20, breakOnAttack: 0, points: [{x:-0.025, y:Math.sqrt(2)}, {x:0.025, y:Math.sqrt(2)}, {x:0.025, y:-Math.sqrt(2)},{x:-0.025, y:-Math.sqrt(2)}]});
    }, time: 20800, activated: false},
    {callback: function(){
      levelVars[0] = 0;
      levelFunctions.activate(1);
      particles[`RotateBox`].type = "enemy";
      particles[`RotateBox`].alpha = 1;
      particles[`RotateBox`].color = "#000";
    }, time: 22300, activated: false},
    {callback: function(){
      levelFunctions.cancel(1);
      delete particles[`RotateBox`];
      levelVars[0] = 0;
      levelFunctions.activate(2);
    }, time: 40000, activated: false},
    {callback: function(){
      levelFunctions.cancel(2);
      for (var i in particles) if (i.endsWith("_curve")) particles[i].tickTraceTo(particles.player).setDeg(particles[i].deg+180).fade(300, 0);
      saveData.levelData.level28.phase = Math.max(saveData.levelData.level28.phase, particles.player.hp*4);
    }, time: 60000, activated: false},
    {callback: function(){
      playerDead();
    }, time: 66000, activated: false},
  ]);

  levelLoop = setInterval( function () {
    //levelLoopCount++;
    //some functions here! 
  }, tickSpeed*100);

  particles['player'] = new Particle({type: 'player', color: '#f00', hp: 30});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.08, 'text': 'boss stage v2!', 'color': '#c49b29', 'zIndex': 0, effects: ['glow']});
  screenSettings.infoUi = "score: ${(particles.player ? particles.player.hp*4 : 0)}<br>hp: ${(particles.player ? particles.player.hp : 0)}";

  levelVars.push(0);
  //screenSettings.color = "#5ced58";
  levelTasks.activateAll();
  levelFunctions.activate(0);
}

//level 6-1, made by Spotky1004
function level_61() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;

    for (var i = 0; i < Math.min(18-(levelLoopCount>=60 ? 8 : 0), 15+Math.pow(levelLoopCount, 1/3)); i++) {
      particles[`P${levelLoopCount}S${i}`] = new Particle({'color': hsvToRgb(Math.random(), 0.5, 0.6), 'speed': 6, 'absSizeI': 0.3, 'absSizeIType': 'span', 'spanPer': 1000, 'zIndex': 1}).randMove('rR');
      if (i%3 == 0) {
        particles[`P${levelLoopCount}S${i}`].tickTraceTo(particles.player);
        particles[`P${levelLoopCount}S${i}`].deg += Math.random()*10-5;
      }
    }

    screenSettings.size = 0.9;
    screenSizeSpan(1, 20, 90);

    if (levelLoopCount >= 30) {
      var tempB = 0.52;
      var tempP = [...particles.player.position];
      particles.BlindS0.positionI[0] = 2+tempB+tempP[0];
      particles.BlindS1.positionI[0] = -2-tempB+tempP[0];
      particles.BlindS2.positionI[1] = 2+tempB+tempP[1];
      particles.BlindS3.positionI[1] = -2-tempB+tempP[1];
    }

    if (levelLoopCount >= 60) {
      particles[`P${levelLoopCount}T`] = new Particle({'moveType': ['trace', 'player'], 'absSize': 1.2, 'absSizeI': -0.17, 'deleteTick': 5200/tickSpeed, 'speed': 5, 'sppedI': -0.6, 'color': '#666', 'zIndex': 4, 'effects': ['glow'], 'alpha': 0.3, 'alphaI': 0.3, 'alphaC': [0, 1]}).randMove('rR');
    }
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'zIndex': 1});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.11, 'text': 'welcome v2!', 'color': '#c49b29', 'zIndex': 0});

  particles[`BlindS0`] = new Particle({'size': [2, 2], 'position': [8, 0], 'positionI': [8, 0], 'positionIType': 'span', 'spanPer': 30, 'outOfBounds': [[-10, 10], [-10, 10]], 'type': 'decoration', 'zIndex': 3});
  particles[`BlindS1`] = new Particle({'size': [2, 2], 'position': [-8, 0], 'positionI': [-8, 0], 'positionIType': 'span', 'spanPer': 30, 'outOfBounds': [[-10, 10], [-10, 10]], 'type': 'decoration', 'zIndex': 3});
  particles[`BlindS2`] = new Particle({'size': [2, 2], 'position': [0, 8], 'positionI': [0, 8], 'positionIType': 'span', 'spanPer': 30, 'outOfBounds': [[-10, 10], [-10, 10]], 'type': 'decoration', 'zIndex': 3});
  particles[`BlindS3`] = new Particle({'size': [2, 2], 'position': [0, -8], 'positionI': [0, -8], 'positionIType': 'span', 'spanPer': 30, 'outOfBounds': [[-10, 10], [-10, 10]], 'type': 'decoration', 'zIndex': 3});

  levelTasks.activateAll();

  sendInfo("Welcome to chapter 6...");
}
//level 6-2, made by Spotky1004
function level_62() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    for (var j = 0; j < 1+Math.sqrt(levelLoopCount); j++) {
      var tempP = new Particle().randMove('rR');
      var tempC = Math.random();
      var tempB = levelLoopCount >= 60 && Math.random() < 0.2;
      for (var i = 0; i < 5; i++) {
        particles[`P${levelLoopCount}A${j}S${i}_bump`] = new Particle({
          'position': [...tempP.position], 'positionIType': 'span', 'positionI': [...tempP.position], 'deg': tempP.deg, 'spanPer': (i/2+1)*8, 'color': hsvToRgb(tempC, 0.6-i/20, 0.6-i/20), 'outOfBounds': [[-1.1, 1.1], [-1.1, 1.1]]
        });
        if (tempB) particles[`P${levelLoopCount}A${j}S${i}_bump`].tickTraceTo(particles.player);
        if (levelLoopCount >= 30 && i == 0) {
          particles[`P${levelLoopCount}A${j}S${i}_bump`].onDelete = `
            particles['P${levelLoopCount}A${j}S${i}Sd'] = new Particle({
              'deg': Math.random()*360, 'speed': 8, 'position': [this.position[0], this.position[1]], 'color': '${hsvToRgb(tempC, 0.6-i/20, 0.6-i/20)}'
            });
            if (boolRand()) particles['P${levelLoopCount}A${j}S${i}Sd'].tickTraceTo(particles.player)
          `;
          particles[`P${levelLoopCount}A${j}S${i}_bump`].effects = ['glow'];
        }
      }
    }
    for (var i in particles) {
      if (!i.endsWith('_bump')) continue;
      var t = particles[i];
      if (levelLoopCount >= 60) t.deg += Math.min(5, Math.sqrt(levelLoopCount-60))+3;
      t.positionI = [t.positionI[0]+Math.sin(Math.rad(t.deg))*0.5, t.positionI[1]-Math.cos(Math.rad(t.deg))*0.5];
    }
    if (levelLoopCount >= 30) {
      screenSettings.scale = 1.1;
      screenScaleSpan(1, 20, 50);
    }
  }, tickSpeed*70);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 25});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.15, 'text': 'bump!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
}
//level 6-3, made by Spotky1004
function level_63() {
  levelInit();

  levelTickFunction = function() {
    for (var i in particles) {
      if (i.endsWith('_mass')) {
        if (particles[i].collisionWith(particles.star)) {
          delete particles[i];
          particles.star.tag.absorbed++;
        }
      } else if (i.endsWith('_shard') && !particles[i].tag.traced) {
        if (particles[i].lifeTime > 150) {
          particles[i].speed = (levelLoopCount>=60?11:8);
          particles[i].tickTraceTo(particles.player);
          particles[i].tag.traced = 1;
        }
      }
    }
    if (particles.star.tag.absorbed >= 100) {
      particles.star.tag.absorbed = 0;
      particles.star.tag.bombed++;
      var tempD = Math.random()*360;
      for (var i = 0; i < 16; i++) {
        particles[`B${particles.star.tag.bombed}S${i}_shard`] = new Particle({'speed': (3+(i%2)*1.5)*(levelLoopCount>=30?1.8:1), 'color': '#e65353', 'effects': ['glow'], 'deg': (360/16*i+tempD)%360, 'tag': {'traced': 0}, 'hsvRotateI': 0.2});
      }
    }
    particles.star.absSize = Math.sqrt(particles.star.tag.absorbed)/6+0.5;
    particles.star.color = hsvToRgb(0, (particles.star.tag.absorbed**2/10000)*0.7+0.3, (particles.star.tag.absorbed**2/10000)*0.7+0.3);
  };

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    for (var i = 0; i < 10+Math.sqrt(levelLoopCount); i++) {
      particles[`P${levelLoopCount}S${i}_mass`] = new Particle({'absSize': 0.73, 'color': (i%2?"#f0eab9":"#dfb9f0"), 'speed': 4}).randMove('rR').tickTraceTo(particles.star);
    }
  }, tickSpeed*80);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [0, -.1]});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.14, 'text': 'star!', 'color': '#fff', 'zIndex': 0, 'alpha': 0.7});
  particles['star'] = new Particle({'color': '#666', 'absSize': 0.5, 'tag': {'absorbed': 0, 'bombed': 0}, 'breakOnAttack': 0});
  screenSettings.size = 1/Math.sqrt(2);
  screenSettings.color = '#07011c';
  levelTasks.activateAll();
}

function levelTemplate() {
  levelInit();

  levelTickFunction = function() {
    // this function will called every tick
  };

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    //some functions here!
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.20, 'text': 'text!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
}

function lagTest() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      for (var i = 0; i < 2000; i++) {
        particles[`t${i}`] = new Particle({'speed': 3}).randMove('rR');
      }
    }, time: 0, activated: false},
  ]);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  levelTasks.activateAll();
}
function debugLevel() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    //some functions here!
  }, tickSpeed*10);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  levelTasks.activateAll();
}
function onDeleteEventTest() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    particles[`P${levelLoopCount}`] = new Particle({
      'position': [signRand()*(0.5+Math.random()*0.5), signRand()*(0.5+Math.random()*0.5)], 'deleteTick': 500,
      'onDelete':
      `
        var tempR = Math.random()*360;
        particles['P${levelLoopCount}S0'] = new Particle({'deg': (tempR+0)%360, 'color': '#f00', 'speed': 15, 'position': [particles['P${levelLoopCount}'].position[0], particles['P${levelLoopCount}'].position[1]]});
        particles['P${levelLoopCount}S1'] = new Particle({'deg': (tempR+90)%360, 'color': '#f00', 'speed': 15, 'position': [particles['P${levelLoopCount}'].position[0], particles['P${levelLoopCount}'].position[1]]});
        particles['P${levelLoopCount}S2'] = new Particle({'deg': (tempR+180)%360, 'color': '#f00', 'speed': 15, 'position': [particles['P${levelLoopCount}'].position[0], particles['P${levelLoopCount}'].position[1]]});
        particles['P${levelLoopCount}S3'] = new Particle({'deg': (tempR+270)%360, 'color': '#f00', 'speed': 15, 'position': [particles['P${levelLoopCount}'].position[0], particles['P${levelLoopCount}'].position[1]]});
      `
    });
  }, tickSpeed*10);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  levelTasks.activateAll();
}
function levelIcon() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      var tempL2 = 8;
      for (var i = 0; i < tempL2; i++) {
        var dist = 2-((i+1)/tempL2)*1.8;
        var tempL = 20-i;
        for (var j = 0; j < tempL; j++) {
          var tempD = Math.PI*2*(((j+1)/tempL+i/tempL2));
          particles[`Particle${j}_${i}`] = new Particle({'color': hsvToRgb(((j+1)/tempL), 1-((i+1)/tempL2)*0.4, 0.9-((i+1)/tempL2)*0.3), 'position': [Math.sin(tempD)*dist, -Math.cos(tempD)*dist], 'absSize': 5-((i+1)/tempL2)*1.2});
        }
      }
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {

  }, tickSpeed*10);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 200});
  levelTasks.activateAll();
}
function sidesTest() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      var tempSq = [3, 3];
      for (var i = 0; i < tempSq[0]; i++) {
        for (var j = 0; j < tempSq[1]; j++) {
          var tempS = 4+i+j*tempSq[0];
          particles[`S${tempS}`] = new Particle({'sides': tempS, 'position': [((2*(i/tempSq[0])-1)+2*((i+1)/tempSq[0])-1)/2, ((2*(j/tempSq[1])-1)+2*((j+1)/tempSq[1])-1)/2], 'size': [0.15, 0.3]});
        }
      }
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    //levelLoopCount++;
    //some functions here!
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [-1, -1], 'sides': 5, 'playerSpeed': 0.005});
  levelTasks.activateAll();
}
function levelCalc() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      levelVars[1]++;
      if (levelVars[1]%2 == 0) {
        for (var i = 0; i < 2; i++) {
          for (var j = 0; j < 12; j++) {
            particles[`T${new Date().getTime()}S${i}P${j}`] = new Particle({'position': [(i*2-1)*1.1, 1-j/5+((levelVars[1]/2)%4)*0.1], 'deg': 90+180*i, 'speed': 5, 'outOfBounds': [[(i?0:-9),(!i?0:9)], [-9, 9]]});
          }
        }
      }
      levelFunctions.activate(0);
    }, time: tickSpeed*20, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;

    var tempA, tempS, tempE, tempR;
    switch (Math.floor(Math.random()*Math.min(4, 2+levelLoopCount/30))) {
      case 0:
      tempE = [Math.floor(Math.random()*(levelLoopCount/2+4)), Math.floor(Math.random()*(levelLoopCount/2+4))];
      tempS = `${tempE[0]}+${tempE[1]}`;
      tempA = tempE[0]+tempE[1];
        break;
      case 1:
      tempE = [Math.floor(Math.random()*(levelLoopCount/2+5)), 0];
      tempE[1] = Math.floor(Math.random()*tempE[0]);
      tempS = `${tempE[0]}-${tempE[1]}`;
      tempA = tempE[0]-tempE[1];
        break;
      case 2:
      tempE = [Math.floor(Math.random()*(levelLoopCount/6+5)), Math.floor(Math.random()*(levelLoopCount/6+5))];
      tempS = `${tempE[0]}×${tempE[1]}`;
      tempA = tempE[0]*tempE[1];
        break;
      case 3:
      tempE = [0, Math.floor(Math.random()*levelLoopCount/6+5)];
      tempE[0] = tempE[1]*Math.floor(Math.random()*levelLoopCount/6+5);
      tempS = `${tempE[0]}÷${tempE[1]}`;
      tempA = tempE[0]/tempE[1];
        break;
      default:

    }

    particles[`P${levelLoopCount}QuestionSrting`] = new Particle({'type': 'text', 'text': tempS, 'position': [0, 0.4], 'speed': 0.1, 'color': hsvToRgb((levelLoopCount/120+0.3)%1, 0.8, 0.7), 'absSize': 0.6/tempS.length});
    tempR = Math.random();
    levelVars[0] = Math.floor(Math.random()*2);
    for (var i = 0; i < 2; i++) {
      var tempA2 = (i==levelVars[0] ? tempA : Math.floor(tempA+signRand()*(1+Math.random()*(tempA*Math.random()*0.2+Math.random()*3))));
      particles[`P${levelLoopCount}AnswerSrting${i}`] = new Particle({'type': 'text', 'position': [-0.6+1.2*i, -0.3], 'color':  hsvToRgb(tempR+Math.random()*3, 0.8, 0.7), 'text': tempA2.toString(), 'absSize': 0.4/tempA2.length, 'speed': 0.05});
    }

    if (levelLoopCount > 1) {
      particles[`P${levelLoopCount-1}QuestionSrting`].alpha = 0.5;
      particles[`P${levelLoopCount-1}QuestionSrting`].zIndex = 1;
      particles[`P${levelLoopCount-1}QuestionSrting`].fade(60, 0);
      particles[`P${levelLoopCount-1}QuestionSrting`].speedI = -3;
      for (var i = 0; i < 2; i++) {
        particles[`P${levelLoopCount-1}AnswerSrting${i}`].alpha = 0.5;
        particles[`P${levelLoopCount-1}AnswerSrting${i}`].zIndex = 1;
        particles[`P${levelLoopCount-1}AnswerSrting${i}`].fade(60, 0);
        particles[`P${levelLoopCount-1}AnswerSrting${i}`].speedI = -2;
      }
    }
  }, tickSpeed*180);

  for (var i = 0; i < 2; i++) {
    levelVars.push(0);
  }
  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'playerSpeed': 0.016});
  levelTasks.activateAll();
  levelFunctions.activate(0);
}
function pointTest() {
  levelInit();

  particles['hehe'] = new Particle({
    'sides': -2,
    'points': [{'x': -0.2, 'y': 1}, {'x': 0, 'y': 0.8}, {'x': -0.4, 'y': 0.2}, {'x': 1, 'y': 0.1}, {'x': 1, 'y': -0.1}, {'x': -0.4, 'y': -0.2}, {'x': 0, 'y': -0.8}, {'x': -0.2, 'y': -1}, {'x': -1, 'y': 0}],
    'color': '#666',
    'breakOnAttack': 0
  });

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [1, 1], 'hp': 1e10});
}
function levelIncremental() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    particles.text.text = levelVars[0];

  }, tickSpeed*5);

  levelVars.push(0);
  levelVars.push(0);
  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.13, 'text': '0', 'color': '#c49b29', 'zIndex': 0, 'hsvRotateI': 0.1});

  //point
  particles['point0'] = new Particle({'atk': 0, 'onPlayerCollision': 'levelVars[0]+=2**levelVars[1]; particles[pName].position = [screenRand(), screenRand()];', 'breakOnAttack': 0, 'color': '#fff'});
  //upgrades
  for (var i = 0; i < 4; i++) {
    particles[`upgradeTxt${i}`] = new Particle({'type': 'text', 'absSize': 0.07, 'text': `upg${i}`, 'color': '#c49b29', 'zIndex': 0, 'hsvRotateI': 0.07, 'position': [-0.75+0.5*i, -0.5]});

  }

  screenSettings.color = '#000';
  levelTasks.activateAll();
}
function pointTest2() {
  levelInit();

  particles['hehe'] = new Particle({
    'sides': -2,
    'points': [{x:-0.1, y:1}, {x:0.1, y:1}, {x:0.1, y:-1},{x:-0.1, y:-1}],
    'color': '#666',
    'breakOnAttack': 0
  });

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [1, 1], 'hp': 1e10});

}
function circleTest() {
  levelInit();

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'absSize': 8, 'hp': 1e10, 'position': [-1, -1], 'playerSpeed': 0.005});
  particles['circle'] = new Particle({'size': [0.4 , 0], 'breakOnAttack': 0, 'sides': -1});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.20, 'text': 'text!', 'color': '#c49b29', 'zIndex': 0});
  levelTasks.activateAll();
}
function levelShrink() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      var tempP = Math.pow(levelLoopCount, 1/4);
      screenSettings.scale /= 1.004**tempP;
      particles.player.absSize *= 1.00399**tempP;
      particles.blackhole.absSize *= 1.005**tempP;
      console.log(1/particles.player.absSize/screenSettings.scale);
      particles.player.playerSpeed *= 1.00399**tempP;
      levelFunctions.activate(0);
    }, time: tickSpeed*3, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);
  levelLoopCount = 30;
  levelLoop = setInterval( function () {
    //levelLoopCount++;
    for (var i = 0; i < 4+Math.sqrt(levelLoopCount); i++) {
      particles[`P${levelLoopCount}S${i}`] = new Particle({'sides': Math.floor(Math.random()*Math.min(6, levelLoopCount/10)+3), 'rotateDeg': 180, 'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'positionC': [[-1e308, 1e308], [-1e308, 1e308]], 'absSize': Math.floor(Math.sqrt(levelLoopCount)+Math.random()*2+0.5)/screenSettings.scale, 'speedC': [0, 1e308]}).fade(1000, 0);
      var tempD = Math.random()*Math.PI*2;
      var tempL = Math.random()*0.3+1.2;
      particles[`P${levelLoopCount}S${i}`].position = [Math.sqrt(2)*tempL*Math.sin(tempD)/screenSettings.scale, -Math.sqrt(2)*tempL*Math.cos(tempD)/screenSettings.scale];
    }
    if (levelLoopCount%5 == 0) {
      particles[`P${levelLoopCount}Text`] = new Particle({'type': 'text', 'absSize': 1/screenSettings.scale, 'text': `${levelLoopCount}`, 'color': '#c49b29', 'zIndex': 0, 'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'positionC': [[-1e308, 1e308], [-1e308, 1e308]], 'position': [0, 2/screenSettings.scale]}).fade(2000);
    }
    if (levelLoopCount >= 30) {
      /*for (var i = Math.floor(Math.random()*4), l = i+3; i < l; i++) {
        var tempD = Math.PI*2*(i/4);
        particles[`P${levelLoopCount}W${i}`] = new Particle({'disableC': 1, 'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'sides': -2, 'absSize': 1/screenSettings.scale, 'points': [{'x': -0.05, 'y': 1.15}, {'x': 0.05, 'y': 1.15}, {'x': 0.05, 'y': -1.15}, {'x': -0.05, 'y': -1.15}], 'position': [Math.sin(tempD)*1.1/screenSettings.scale, -Math.cos(tempD)*1.1/screenSettings.scale], 'rotateDeg': (i%2?0:90)});
      }*/

      //particles[`P${levelLoopCount}B`] = new Particle({'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'atk': 3, 'positionC': [[-1e308, 1e308], [-1e308, 1e308]], 'speedC': [0, 1e308], 'size': [1/screenSettings.scale, 1/screenSettings.scale], 'sizeC': [[-1e308, 1e308], [-1e308, 1e308]], 'speed': 6/screenSettings.scale, 'position': [(levelLoopCount%2?2:-2)/screenSettings.scale,0]}).tickTraceTo(new Particle({}));
    }
  }, tickSpeed*120);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'positionC': [[-1e308, 1e308], [-1e308, 1e308]], 'position': [0.5, 0.5]});
  particles['blackhole'] = new Particle({'outOfBounds': [[-1e308, 1e308], [-1e308, 1e308]], 'positionC': [[-1e308, 1e308], [-1e308, 1e308]], 'absSize': 6, 'sides': -1, 'breakOnAttack': 0});
  particles['text'] = new Particle({'type': 'text', 'absSize': 1, 'text': 'shrink!', 'color': '#c49b29', 'zIndex': 0});

  levelTasks.activateAll();
  levelFunctions.activate(0);
}
function levelWallTest() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    particles[`P${levelLoopCount}`] = new Particle({'speed': 5, 'specialAttrs': ['bounce']}).randMove('rR');
  }, tickSpeed*100);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00'});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.20, 'text': 'text!', 'color': '#c49b29', 'zIndex': 0});

  particles['wall'] = new Particle({'type': "wall", 'absSize': 5, 'position': [0, 0.5], 'moveType': ['circle', [0, 0]], 'speed': 0.5, 'alpha': 0.3});
  particles['wall2'] = new Particle({'type': "wall", 'absSize': 5, 'alpha': 0.3, 'moveType': ['trace', 'player'], 'speed': 5});
  particles['wall3'] = new Particle({'type': "wall", 'size': [1, 0.04], 'position': [0, 0.975], 'alpha': 0.3});

  levelSettings.advancedMode = 1;

  levelTasks.activateAll();
}
function levelPingPong() {
  levelInit();

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      particles['playerPaddle'].positionI[0] = particles.player.position[0];
      particles['ememyPaddle'].positionI[0] = particles.ball.position[0];
      if (particles.playerGoal.collisionWith(particles.ball)) {
        particles.ball.speed = 0;
        particles.ball.speedI = 0;
        particles.text.text = 'you lose!';
      }
      if (particles.enemyGoal.collisionWith(particles.ball)) {
        particles.ball.speed = 0;
        particles.ball.speedI = 0;
        particles.text.text = 'you win!';
      }
      levelTasks.activate(0);
    }, time: tickSpeed, activated: false},
  ]);

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'position': [0, 0.9], 'playerSpeed': 0.008});
  particles['ball'] = new Particle({'specialAttrs': ['bounce'], 'speed': 4, 'speedI': 0.2, 'deg': -48, 'color': '#fff', 'type': 'decoration', 'color': '#e3c58d'});
  particles['playerPaddle'] = new Particle({'type': 'wall', 'size': [0.16, 0.0125], 'position': [0, 0.8525], 'positionI': [0, 0.8525], 'positionIType': 'span', 'color': '#8de3dc', 'spanPer': 40});
  particles['ememyPaddle'] = new Particle({'type': 'wall', 'size': [0.16, 0.0125], 'position': [0, -0.8525], 'positionI': [0, -0.8525], 'positionIType': 'span', 'color': '#e38d8d', 'spanPer': 25});
  particles['playerGoal'] = new Particle({'size': [1, 0.04], 'position': [0, 0.98], 'alpha': 0.2, 'color': '#f00', 'type': 'decoration'});
  particles['enemyGoal'] = new Particle({'size': [1, 0.04], 'position': [0, -0.98], 'alpha': 0.2, 'color': '#f00', 'type': 'decoration'});
  particles['line'] = new Particle({'size': [1, 0.005], 'color': '#fff', 'spanPer': 25, 'alpha': 0.3, 'atk': 10});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.1, 'text': 'ping pong!', 'color': '#fff', 'zIndex': 0, 'alpha': 0.7});

  levelTasks.activateAll();

  screenSettings.color = '#000';
  levelSettings.advancedMode = 1;

  sendInfo('wasn\'t this bullet hell game??');
}
function levelTextParse() {
  levelInit();

  levelTickFunction = function() {
    // this function will called every tick
  };

  levelFunctions = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelTasks = new Task([
    {callback: function(){
      //some functions here!
    }, time: 0, activated: false},
  ]);

  levelLoop = setInterval( function () {
    levelLoopCount++;
    if (typeof levelVars[0][levelLoopCount] != "undefined") {
      particles.text.text = levelVars[0][levelLoopCount];
    } else {
      var tempStr = '';
      for (var i = 0; i < 2+Math.floor(levelLoopCount/10); i++) tempStr += Math.floor(Math.random()*36).toString(36);
      particles.text.text = tempStr;
    }
    for (var i = 0; i < 50; i++) {
      for (var j = 0; j < 50; j++) {
        var col = c.getImageData(maxLeng/50*i, maxLeng/50*j, 1, 1).data;
        if ([...col].splice(0, 3).every(d => d == 0)) {
          var tempP = {x: i/50*2-1, y: -j/50*2+1};
          var tempR = Math.random()*360;
          var tempD = Math.sqrt(2)*(1.5+Math.random()*0.5);
          var tempP2 = {x: tempP.x+tempD*Math.sin(Math.rad(tempR)), y: tempP.y-tempD*Math.cos(Math.rad(tempR))};
          var tempD2 = Math.sqrt((tempP2.x-tempP.x)**2+(tempP2.y-tempP.y)**2);
          var tempS = tempD2*5.5;
          particles[`P${levelLoopCount}Draw${levelVars[0][levelLoopCount-1]}_${i}_${j}`] = new Particle({'absSize': 0.5, 'deg': (tempR+180)%360, 'speed': tempS, 'speedI': 0.99, 'speedIType': 'multiply', 'position': [tempP2.x, tempP2.y], 'color': "#09a7b3", "effects": ['glow'], 'outOfBounds': [[-5, 5], [-5, 5]]});
        }
      }
    }
  }, tickSpeed*300);

  levelVars[0] = ['s', 'p', 'o', 't', 'k', 'y', ':d', 'bye']; // text to write

  particles['player'] = new Particle({'type': 'player', 'color': '#f00', 'hp': 25});
  particles['text'] = new Particle({'type': 'text', 'absSize': 0.5, 'text': levelVars[0][0], 'color': '#000', 'zIndex': 0});

  levelTasks.activateAll();
}

var playDebug = 0;
if (playDebug) {
  function level_11() {levelTextParse()};
}

var levelNames = [
  'welcome!', 'circle!', 'bounce!', 'swing!', 'laser v2!', '',
  'boom!', 'zigzag!', 'move!', 'speed!', 'boom v2!', '',
  'grid!', 'laser!', 'stop,go!', 'dash!', 'windmill!', '',
  'lava!', 'circle v2!', 'sprial!', 'boss stage!', 'acid!', '',
  'turret!', 'fusion!', 'wall!', 'bounce v2!', 'boss stage v2!', '',
  'welcome v2!', 'bump!', 'star!', '', '', '',
];

var levelCreator = [
  'Spotky1004', 'Spotky1004', 'Spotky1004', 'Spotky1004', 'Spotky1004', '',
  'PillowPrism', 'PillowPrism', 'Spotky1004', 'Spotky1004', 'Spotky1004', '',
  'PillowPrism', 'Spotky1004', 'Spotky1004', 'Spotky1004', 'Spotky1004', '',
  'PillowPrism', 'Spotky1004', 'Spotky1004', 'RedMountain', 'Spotky1004', '',
  'RedMountain', 'Spotky1004', 'Spotky1004', 'Spotky1004', 'Spotky1004', '',
  'Spotky1004', 'Spotky1004', '', '', '', ''
];
