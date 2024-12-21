function lightmode() {
    let element = document.body;
    element.classList.toggle("light-mode");
    var elem = document.getElementById("myButton1");
}

document.getElementById('dark/light').addEventListener('click', function() {
    if(button.innerText.toLowerCase() === 'Dark Mode') {
        button.innerText = 'Light Mode';
    }
    else {
        button.innerText = 'Dark Mode';
    }
});

