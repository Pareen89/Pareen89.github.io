var i = 0;
var text = "Hi! I am Pareen. I build websites. I specialize in front end developement (HTML5, CSS3, JavaScript)."
var speed = 60;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("write").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
window.onload = typeWriter;