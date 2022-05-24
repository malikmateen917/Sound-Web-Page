var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
        mySong.play();
        icon.src = "sound images/pause.png";
    }else{
        mySong.pause();
        icon.src = "sound images/play.png";
    }
}