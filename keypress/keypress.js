var button = document.createElement("a");
button.setAttribute('href', '#');
button.classList.add('key');
button.innerText = 'Key Press';
document.body.appendChild(button);

var buttonPosition = [
    {
        top: 0,
        left: 0
    }
]

var maxWidth = 100;
var maxHieght = 100;

function moveTop(e){
    if(e.keyCode === 36 || e.key === "w"){
        if(buttonPosition[0].top > -1){
            buttonPosition[0].top = (buttonPosition[0].top > 0) ? buttonPosition[0].top - 5 : buttonPosition[0].top;
        }

        button.style = `top: ${buttonPosition[0].top}px; left: ${buttonPosition[0].left}px`;
        console.log(buttonPosition[0].top);
    }
}

function moveDown(e){
    if(e.keyCode === 40 || e.key === "s"){
        if(buttonPosition[0].top < maxHieght){
            buttonPosition[0].top = (buttonPosition[0].top > -1) ? buttonPosition[0].top + 5 : buttonPosition[0].top;
        }

        button.style = `top: ${buttonPosition[0].top}px; left: ${buttonPosition[0].left}px`;
        console.log(buttonPosition[0].top);
    }
}

function moveRight(e){
    if(e.keyCode === 68 || e.key === "d"){
        if(buttonPosition[0].left <= maxWidth){
            buttonPosition[0].left = (buttonPosition[0].left > -1) ? buttonPosition[0].left + 5 : buttonPosition[0].left;
        }

        button.style = `top: ${buttonPosition[0].top}px; left: ${buttonPosition[0].left}px`;
        console.log(buttonPosition[0].left);
    }
}

function moveLeft(e){
    if(e.keyCode === 65 || e.key === "a"){
        if(buttonPosition[0].left > -1){
            buttonPosition[0].left = (buttonPosition[0].left > 0) ? buttonPosition[0].left - 5 : buttonPosition[0].left;
        }

        button.style = `top: ${buttonPosition[0].top}px; left: ${buttonPosition[0].left}px`;
        console.log(buttonPosition[0].left);
    }
}

let reload = (e) => {
    if ( e.key === "r") {
        window.location.reload();
    }
}

var keyboard = (e) => {
    e.preventDefault();
    moveTop(e);
    moveDown(e);
    moveLeft(e);
    moveRight(e);
    reload(e);
}

document.addEventListener('keydown', keyboard);

