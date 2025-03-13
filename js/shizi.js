var arrs = text.split("");
var letterList = document.getElementsByClassName("letterList")[0];
for(var m=0;m<arrs.length;m++){
    letterList.innerHTML+='<div class="letterBox"><i>'+(m+1)+'</i><span class="icon"></span>+<span class="uppercase">'+arrs[m]+'</span></div>'
}

var letterBoxs = document.getElementsByClassName("letterBox");
var myAudio = document.getElementById("myAudio");
var mask = document.getElementById("mask");
var closeBtn = document.getElementsByClassName("close")[0];
var bigBox = document.getElementById("bigBox");
var txt = document.getElementsByClassName("txt")[0];
var btnBox = document.getElementsByClassName("btnBox")[0];
var playImg = document.getElementById("playImg");
var icons = document.getElementsByClassName("icon");

for(var index=0;index<letterBoxs.length;index++){
    (function(i){
        letterBoxs[i].onclick = function(){
            // bigBox.style.display="block";
            // mask.style.display = "block";
            // txt.style.color = "#47cc9b";
            icons[i].src = '../assets/play.gif';
            txt.innerHTML = arrs[i];
            // 对应的音频路径i
            myAudio.src="../assets/mp3/hanzi/hz"+(i+1)+".mp3";
            myAudio.play();
            sessionStorage.setItem("zimuSrc","../assets/mp3/hanzi/hz"+(i+1)+".mp3")
            console.log(i);
        }
    })(index)
}
playImg.onclick = function(){
    playImg.src = '../assets/play.gif';
    txt.style.color = "#47cc9b";
    myAudio.src=sessionStorage.getItem('zimuSrc');
    myAudio.play();
}
// myAudio.onended = function(){
//     txt.style.color = "#000";
//     playImg.src = '../assets/play.png';
//     mask.style.display = "none";
//     bigBox.style.display = "none";
// }
// myAudio.onended = function(){
//     for(var j=0;j<icons.length;j++){
//         icons[j].style.backgroundImage = 'url(../pages/assets/play.png)';
//     }
// }
closeBtn.onclick = function(){
    mask.style.display = "none";
    bigBox.style.display = "none";
}