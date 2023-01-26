var number = document.querySelectorAll("button").length;


for (let i = 0; i < number; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", clicked);


    function clicked() {

        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);

    }
}

document.addEventListener("keydown", function (event) {

    makesound(event.key);
    console.log(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "j":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log(buttoninnerhtml)
            break;
    }

};