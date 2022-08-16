
const numOfKeys = document.getElementsByClassName("key").length;

for(var i=0; i<numOfKeys; i++){

    document.querySelectorAll(".key")[i].addEventListener("click", function(){
        
        passKey(this.innerHTML);
        keyAnimi(this.innerHTML);

    });

    document.addEventListener("keypress",function(event){

        passKey(event.key);
        keyAnimi(event.key);

    } );

    function keyAnimi(keyAn){

        var classAdd= document.querySelector("." + keyAn);
        classAdd.classList.add("pressed");
        setTimeout(function(){
            classAdd.classList.remove("pressed");
        },200);
        
    }

    function passKey(key){

        switch(key){
            case'w':
                new Audio("audio/sounds/drum1.mp3").play();
            break;
            case'a':
                new Audio("audio/sounds/drum2.mp3").play();
            break;
            case's':
                new Audio("audio/sounds/drum3.mp3").play();
            break;
            case'd':
                new Audio("audio/sounds/drum4.mp3").play();
            break;
            case'j':
                new Audio("audio/sounds/drum5.mp3").play();
            break;
            case'k':
                new Audio("audio/sounds/drum6.mp3").play();
            break;
            case'l':
                new Audio("audio/sounds/drum7.mp3").play();
            break;
            default:
                break;
        }


    }

   
}