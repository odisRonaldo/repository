const lampada = document.querySelector('.lampada');
const btnOn = document.querySelector('.btn-on');
const btnOff = document.querySelector('.btn-off');
const lamp = document.querySelector('#lamp');

function lampOn(){
    lamp.src = 'assets/img/ligada.jpg'
}

function lampOf(){
    lamp.src = 'assets/img/desligada.jpg'
}

function lampQuebra(){
    lamp.src = 'assets/img/quebrada.jpg'
}

btnOn.addEventListener('click', lampOn);
btnOff.addEventListener('click', lampOf);
lamp.addEventListener('dblclick', lampQuebra);

// btnOn.addEventListener('click', (e) => {
//     document.getElementById('imgsz').src = 'assets/img/ligada.jpg'
// })
// btnOff.addEventListener('click', (e) => {
//     document.getElementById('imgsz').src = 'assets/img/desligada.jpg'
// })

// lampada.addEventListener('dblclick', (e) => {
//     document.getElementById('imgsz').src = 'assets/img/quebrada.jpg'
// })



