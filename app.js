function loadNewPage(link) {
    document.querySelector('.load').style.transform = 'scaleY(1)';
    setTimeout(() => {
        window.location.href = link;
    }, 2000);
}