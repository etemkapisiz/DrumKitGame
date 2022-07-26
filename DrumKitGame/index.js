
var num = document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){

    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
        var audio = new Audio("sounds/crash.mp3");
        
        this.style.color = "#EEEEEE";

        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
    }); 
}

addEventListener("keydown",function (event) {
    
    var pressedKey = event.key;
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3")
            audio.play();
            break;           
        case "j":
            var snare= new Audio("sounds/snare.mp3")
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;             
        default:
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
    
}