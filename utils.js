function myFunction() {
    var x, text;

    x = document.getElementById("name").value;
    document.getElementById("overlay").style.display = "block";

    var video = document.getElementById("myVideo");
    video.src = "Malgio1.mp4";

    if(x == "Zenzero"){
        video.src = "2.mp4";
    }
    if(x == "Pan di spagna"){
        video.src = "3.mp4";
    }
    if(x == "Pandoro"){
        video.src = "4.mp4";
    }
    if(x == "Rudolf"){
        video.src = "6.mp4";
    }
    if(x == "Pan di stella"){
        video.src = "7.mp4";
    }
    if(x == "Nutella"){
        video.src = "8.mp4";
    }
    if(x == "Panna cotta"){
        video.src = "5.mp4";
    }
    if(x == "Spumino"){
        video.src = "1.mp4";
    }
     
    video.play();
}