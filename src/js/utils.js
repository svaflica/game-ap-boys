// FOURTH TASK - Attacks!!! - para ter a função de ataque de ambos os personagens para não precisar escrever no if abaixo de ataque
function colisao({ player1, enemy }) {
    return (
        player1.attackBox.position.x + player1.attackBox.width >= enemy.position.x &&
        player1.attackBox.position.x <= enemy.position.x + enemy.width &&
        player1.attackBox.position.y + player1.attackBox.height >= enemy.position.y &&
        player1.attackBox.position.y <= enemy.position.y + enemy.height
    )
}
// Botões quando acaba a partida
let buttonsFinish = document.querySelector('.l-main_buttons')
// let textFinish = document.querySelector('.l-main_tex')

function wait(ms) {
    let current_date = Date.now();
    while (current_date + ms > Date.now()) {}
  }

function status_game(text_status) {
    document.querySelector('.c-fufel').style.display = 'block';
    document.querySelector('.c-fufel').innerHTML = text_status;
}

// SIXTH TASK - Game trigger and game over
function winner({ player, enemy, timerID, winner_text, page_name}) {
    clearTimeout(timerID)

    document.querySelector('.c-timer').style.display = 'block';

    if (auxWinner === false) {
        if (player.health === enemy.health) {
            document.querySelector('.c-timer').innerText = winner_text;
            // textFinish.innerText = winner_text;
            // textFinish.style.display = 'flex';
            buttonsFinish.style.display = 'flex';
            buttonsFinish.style.background = '#00000047';
            blockControlE = true;
            blockControlP = true;
            auxWinner = true;
        } else if (player.health > enemy.health) {
            document.querySelector('.c-timer').innerText = winner_text;
            // textFinish.innerText = winner_text;
            // textFinish.style.display = 'flex';
            buttonsFinish.style.display = 'flex';
            buttonsFinish.style.background = '#00000047';
            auxWinner = true;
            blockControlE = true;
        } else if (enemy.health > player.health) {
            document.querySelector('.c-timer').innerText = winner_text;
            // textFinish.innerText = winner_text;
            // textFinish.style.display = 'flex';
            buttonsFinish.style.display = 'block';
            buttonsFinish.style.background = '#00000047';
            auxWinner = true;
            blockControlP = true;
        }
        // window.location.href = page_name;
    }
}

// SIXTH TASK - Game trigger and game over
// Diminuir o tempo do jogo
let timer = 60;
let timerID;
let auxWinner = false;
function decreaseTimer() {

    if (timer > 0) {
        timerID = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        winner({ player, enemy, timerID });
    }

}