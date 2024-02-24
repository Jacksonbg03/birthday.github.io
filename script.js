var typed = new Typed(".typing", {
    strings:["", "Kiw Kiww", "", "","Hai Cantikk", "", "", "Tekan tombol dibawah akuu dongg !!"],
    typeSpeed:100,
    BackSpeed:60,
    showCursor:true
})

var types = new Typed(".typings", {
    strings:["", "", "", "","", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Cepetannn Kocakk (!-_-!)"],
    typeSpeed:20,
    BackSpeed:60,
    showCursor:false
})

var typess = new Typed(".typingss", {
    strings:["", "", "", "","", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","","","Kann ditontonin doang"],
    typeSpeed:20,
    BackSpeed:60,
    showCursor:false
})

let amount = 100;
let body = document.querySelector('body');
let i = 0;
while(i < amount){
    let drop = document.createElement('i');

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5

    drop.style.width = 0.2 + size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
    body.appendChild(drop);
    i++;
}

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('delayedButton');

    function showButton() {
        button.style.display = 'flex';
    }

    setTimeout(showButton, 14000);
});

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('toggleText');

    function toggleTextState() {
        textElement.classList.toggle('active');
        textElement.classList.toggle('typing');
    }


    textElement.addEventListener('click', function () {

        if (textElement.classList.contains('active')) {
            toggleTextState();
        } else {
            toggleTextState();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('toggleTexts');

    function toggleTextState() {
        textElement.classList.toggle('actives');
        textElement.classList.toggle('typings');
    }


    textElement.addEventListener('click', function () {

        if (textElement.classList.contains('actives')) {
            toggleTextState();
        } else {
            toggleTextState();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('toggleTextss');

    function toggleTextState() {
        textElement.classList.toggle('activess');
        textElement.classList.toggle('typingss');
    }


    textElement.addEventListener('click', function () {

        if (textElement.classList.contains('activess')) {
            toggleTextState();
        } else {
            toggleTextState();
        }
    });
});

