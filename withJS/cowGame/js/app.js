//TODO  variables are defined

const container = document.querySelector('.container')
const startGame = document.querySelector('h3');
const cow = document.querySelector('img');
const goCow = document.querySelector('#go')
const stopCow = document.querySelector('#stop')
const jumpCow = document.querySelector('#jump')
let pos = 0;
startGame.onclick = () => {
    alert('then go to the control panel!');
}

function moveCow() {
    goCow.onclick = () => {
        startGame.textContent = 'Aga is going to the side of Yeman'
        let id = setInterval(() => {
            pos += 10;
            cow.style.left = pos + 'px';

        }, 200);
        stopCow.onclick = () => {
            clearInterval(id);
        }
    }
    let posUp = 0;

    jumpCow.onclick = () => {
        startGame.textContent = 'Aga is jumping for happiness '
        let idjump = setInterval(() => {
            posUp += 10;
            cow.style.bottom = posUp + 'px'
            setTimeout(() => {
                posUp = 0;
                cow.style.bottom = 0 + 'px';
            }, 200);

        }, 700);
        setTimeout(() => {
            clearInterval(idjump);
        }, 5000);


    }

}
cow.onclick = () => {
    startGame.textContent = 'I love Yeman '
}

moveCow()