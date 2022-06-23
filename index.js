for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonpressed = this.innerHTML;
        playSound(buttonpressed);
        buttonAnimation(buttonpressed);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound(key) {

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log("buttonpressed is not defined");
            break;
    }

}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    // setTimout function is used to make a delay of the desired time(parameter 2) to perform the given function(parameter 1).
    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100)
}