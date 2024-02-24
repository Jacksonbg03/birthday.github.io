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

var typed = new Typed(".typing", {
    strings:["", "", "", "","", "", "", "","","","","","","","","","","","","","","","","","","","","Siapakah yang hari ini ulang tahun tepat pada tanggal 25 Februari 2024 ?"],
    typeSpeed:100,
    BackSpeed:60,
    showCursor:true
});

const btn1 = document.querySelector('.fake');
const btn2 = document.querySelector('.fake2');
const btn3 = document.querySelector('.fake3');

const wrapper = document.querySelector('.main');

const wrapperRect = wrapper.getBoundingClientRect();
const btn1Rect = btn1.getBoundingClientRect();

btn1.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - btn1Rect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - btn1Rect.height)) + 1;
    btn1.style.left = i + 'px';
    btn1.style.top = j + 'px';
});

function validateAndDisplay() {

    const buttonClicked = localStorage.getItem('buttonClicked');

    if (buttonClicked) {
        const displayTextContainer = document.getElementById('displayTextContainer');
        displayTextContainer.textContent = 'Salah Brok (Bukan Budi) !!';
    } else {
        localStorage.setItem('buttonClicked', 'true');
        alert('Salah Jawabannya Bang');
    }
}

function validateAndDisplay2() {

    const buttonClicked = localStorage.getItem('buttonClicked');

    if (buttonClicked) {
        const displayTextContainer = document.getElementById('displayTextContainer');
        displayTextContainer.textContent = 'Salah Brok (Bukan Sisca) !!';
    } else {
        localStorage.setItem('buttonClicked', 'true');
        alert('Salah Jawabannya Bang');
    }
}

function validateAndDisplay3() {

    const buttonClicked = localStorage.getItem('buttonClicked');

    if (buttonClicked) {
        const displayTextContainer = document.getElementById('displayTextContainer');
        displayTextContainer.textContent = 'Salah Brok (Bukan Budi & Sisca) !!';
    } else {
        localStorage.setItem('buttonClicked', 'true');
        alert('Salah Jawabannya Bang');
    }
}