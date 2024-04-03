const img = document.querySelector('.current_image');
const controls = document.querySelector('.controls');


document.addEventListener('DOMContentLoaded', onLoadDocument);
controls.addEventListener('click', handlerControls);

function onLoadDocument() {
    slider.forEach((elem, index) => {
        const img = document.createElement('img');
        img.src = elem.slide;
        img.id = elem.id;

        if (index === 0) {
            img.className = 'active';
        }

        controls.appendChild(img);
    })
}

function handlerControls(event) {
    slider.forEach((elem, index) => {
        if (Number(event.target.id) === elem.id) {
            img.src = elem.slide;
            document.querySelector('.controls .active').classList.remove('active');
            controls.children[index].className = 'active';
        }
    })
}