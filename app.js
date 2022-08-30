const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');

const p1display = document.querySelector('#player1score');
const p2display = document.querySelector('#player2score');
const WinningScoreSelector = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let maxscore = 3;

let isGameover = false;

function reset() {
    isGameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('has-text-success', 'has-text-danger');
    p2display.classList.remove('has-text-success', 'has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false;
}

WinningScoreSelector.addEventListener('change', function () {
    maxscore = parseInt(this.value);
    reset();
})



p1btn.addEventListener('click', function () {
    if (!isGameover) {
        p1score += 1;
        if (p1score === maxscore) {
            isGameover = true;
            p1display.classList.add('has-text-success');
            p2display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1display.textContent = p1score;

    }
})

p2btn.addEventListener('click', function () {
    if (!isGameover) {
        p2score += 1;
        if (p2score === maxscore) {
            isGameover = true;
            p2display.classList.add('has-text-success');
            p1display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2display.textContent = p2score;

    }
})


resetbtn.addEventListener('click', reset)

