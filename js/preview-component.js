const btnShare = document.querySelector('#btn-share');
const avatar = document.getElementById('avatar')
const toggleShare = document.getElementById('toggle-share')



let toggleBtnOn = function () {
    if (window.matchMedia("(max-width: 768px)").matches) {
        avatar.classList.add('toggler-hide');
        toggleShare.classList.remove('toggler-hide');

    } else {
        if (btnShare.className == 'btn-active') {
            toggleShare.classList.add('toggler-hide');
            btnShare.classList.remove('btn-active');
        }
        else {
            toggleShare.classList.remove('toggler-hide');
            btnShare.className = 'btn-active';
        }
    }
}

let toggleBtnOff = function () {
    avatar.classList.remove('toggler-hide');
    toggleShare.classList.add('toggler-hide');
}