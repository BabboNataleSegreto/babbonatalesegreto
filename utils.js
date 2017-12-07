function myFunction() {
    var x, text;

    x = document.getElementById("name").value;
    document.getElementById("overlay").style.display = "block";
    

    var video = document.getElementById("myVideo");
    video.src = "https://www.youtube.com/embed/DAGrhFf-2b0?autoplay=1"

    if(x == "Zenzero"){
        video.src = "https://www.youtube.com/embed/8bb7n8eKPP8?rel=0";
    }
    if(x == "Pan di spagna"){
        video.src = "https://www.youtube.com/embed/Z5zl7BPenfw?rel=0";
    }
    if(x == "Pandoro"){
        video.src = "https://www.youtube.com/embed/VTFvcU2bSlo?rel=0";
    }
    if(x == "Rudolf"){
        video.src = "https://www.youtube.com/embed/-0_MsnRo4fA?rel=0";
    }
    if(x == "Pan di stella"){
        video.src = "https://www.youtube.com/embed/y5aqlwtr5Lk?rel=0";
    }
    if(x == "Nutella"){
        video.src ="https://www.youtube.com/embed/r-n-UpS0-_4?rel=0";
    }
    if(x == "Panna cotta"){
        video.src ="https://www.youtube.com/embed/b7b75J-1b8s?rel=0";
    }
    if(x == "Spumino"){
        video.src = "https://www.youtube.com/embed/WuxrjABUZ2Y?rel=0";
    }
    $(document.getElementById('myVideo').contentWindow.document).keydown(function() {
        document.getElementById("overlay").style.display = "none";
    });
}