var letterBoxs = document.getElementsByClassName("letterBox");
var myAudio = document.getElementById("myAudio");
var mask = document.getElementById("mask");
var closeBtn = document.getElementsByClassName("close")[0];
var bigBox = document.getElementById("bigBox");
var txt = document.getElementsByClassName("txt")[0];
var btnBox = document.getElementsByClassName("btnBox")[0];
var playImg = document.getElementById("playImg");
var pinyin = 'b、p、m、f、d、t、n、l、g、k、h、j、q、x、zh、ch、sh、r、z、c、s、y、w、a、o、e、i、u、ü、ai、ei、ui、ao、ou、iu、ie、üe、er、an、en、in、un、ün、ang、eng、ing、ong、zhi、chi、shi、ri、zi、ci、si、yi、wu、yu、yin、yun、ye、yue、yuan、ying' 
var arrs = pinyin.split("、");
console.log(arrs);
for(var index=0;index<letterBoxs.length;index++){
    (function(i){
        letterBoxs[i].onclick = function(){
            playImg.src = "assets/play.gif";
            mask.style.display = "block";
            bigBox.style.display = "block";
            txt.innerHTML = arrs[i];
            txt.style.color = "#47cc9b";
            // myAudio.src="assets/mp3/zimu/zimu"+i+".mp3";
            // myAudio.play();
            // sessionStorage.setItem("zimuSrc","assets/mp3/zimu/zimu"+i+".mp3")
            // console.log(i);
        }
    })(index)
}
myAudio.onended = function(){
    txt.style.color = "#000";
    playImg.src = "assets/play.png";
}
playImg.onclick = function(){
    playImg.src = "assets/play.gif";
    txt.style.color = "#47cc9b";
    myAudio.src=sessionStorage.getItem("zimuSrc");
    myAudio.play();
}
closeBtn.onclick = function(){
    mask.style.display = "none";
    bigBox.style.display = "none";
}