"use strict";

//TODO  variables are defined
var container = document.querySelector('.container');
var startGame = document.querySelector('h3');
var cow = document.querySelector('img');
var goCow = document.querySelector('#go');
var stopCow = document.querySelector('#stop');
var jumpCow = document.querySelector('#jump');
var pos = 0;

startGame.onclick = function () {
  alert('then go to the control panel!');
};

function moveCow() {
  goCow.onclick = function () {
    startGame.textContent = 'Aga is going to the side of Yeman';
    var id = setInterval(function () {
      pos += 10;
      cow.style.left = pos + 'px';
    }, 200);

    stopCow.onclick = function () {
      clearInterval(id);
    };
  };

  var posUp = 0;

  jumpCow.onclick = function () {
    startGame.textContent = 'Aga is jumping for happiness ';
    var idjump = setInterval(function () {
      posUp += 10;
      cow.style.bottom = posUp + 'px';
      setTimeout(function () {
        posUp = 0;
        cow.style.bottom = 0 + 'px';
      }, 200);
    }, 700);
    setTimeout(function () {
      clearInterval(idjump);
    }, 5000);
  };
}

cow.onclick = function () {
  startGame.textContent = 'I love Yeman ';
};

moveCow();