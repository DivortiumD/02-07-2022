let player = document.querySelector('.player');
let moveBy = 102;

window.addEventListener('load', () => {
    player.style.position = 'absolute';
    player.style.left = 0;
    player.style.top = 0;
    if ( player.style.left >= 0 &&  player.style.left <= 510 && player.style.top >= 0 && player.style.top <= 310) 
    return;
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft' :
            player.style.left = parseInt(player.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight' :
            player.style.left = parseInt(player.style.left) + moveBy + 'px';
            break;       
        case 'ArrowUp' :
            player.style.top = parseInt(player.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown' :
            player.style.top = parseInt(player.style.top) + moveBy + 'px';
            break;
    }
});

