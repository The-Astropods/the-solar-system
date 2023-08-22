let navbar = document.querySelector('.navbar');
let navbar_cells = document.querySelectorAll('.navbar .cell');

setTimeout(()=> {
    navbar.style.transform = 'scaleY(1)';
}, 3400);

let i = 0;
navbar_cells.forEach(cell => {
    setTimeout(() => {
        cell.querySelector('img').style.transform = 'translateY(0)';
        cell.querySelector('img').style.opacity = 1;
    }, (3950+(i*200)));

    setTimeout(() => {
        cell.querySelector('h1').style.transform = 'translateY(0)';
        cell.querySelector('h1').style.opacity = 1;
    }, (4050+(i*200)));

    i++;
})

navbar_cells.forEach(cell => {
    cell.addEventListener('mousemove', (e) => {
        cell.querySelector('img').style.top = (e.pageY)/10 + "px";
        cell.querySelector('img').style.left = (e.pageX)/10 + "px";
    })
    cell.addEventListener('mouseleave', (e) => {
        cell.querySelector('img').style.top = 0;
        cell.querySelector('img').style.left = 0;
    })

    cell.addEventListener('mouseenter', (e) => {
        cell.querySelector('img').style.top = 0;
        cell.querySelector('img').style.left = 0;
    })
})