function getRandomNumberOfTacos() {
    let tacoEmoji = '🌮';
    let randomNum = Math.floor(Math.random() * 10) + 1;
    let emptyArr = new Array(randomNum);
    let filledArr = emptyArr.fill(tacoEmoji);
    return filledArr;
}

function putTacosOnTray() {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('')
}

document.getElementById('tray').innerHTML = putTacosOnTray()
