window.onload = function () {
    var btn = document.querySelector('button');
    var body = document.querySelector('body');
    btn.onclick = () => {
        body.style.backgroundColor = 'red';
    }
}