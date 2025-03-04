for(var i = 0; i < document.querySelectorAll(".drum").length; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        
        
    });
}




document.addEventListener("keypress", function(event){

    makeSound(event.key);

});

    function makeSound(key){

    switch(key){
        case "w":
            var crash = new Audio('/drum_Kit/sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick = new Audio('/drum_Kit/sounds/kick-bass.mp3');
            kick.play();
            break;

        case "s":
            var snare = new Audio('/drum_Kit/sounds/snare.mp3');
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('/drum_Kit/sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('/drum_Kit/sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 =new Audio('/drum_Kit/sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('/drum_Kit/sounds/tom-4.mp3');
            tom4.play();
            break;

        default: console.log(buttonInnerHTML);
    }
};