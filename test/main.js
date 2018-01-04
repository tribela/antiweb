window.addEventListener('load', () => {
    let elem = document.createElement('p');
    elem.innerText = 'cake'

    document.body.appendChild(elem);

    setTimeout(() => {
        elem.parentElement.removeChild(elem);
    }, 1000);
})
