window.onload = function(){
    // document.getElementsByTagName('title')[0].innerHTML = '如意背古诗';
    
    
    let getTangshi = sessionStorage.getItem('tangshi');
    // var a = getTangshi;
    console.log(getTangshi);  

    let arr = getTangshi.split("，");
    console.log(arr);

    document.getElementsByTagName("title")[0].innerHTML = '古诗-'+arr[0];

    let tangshiBox = document.getElementById('messageBox');
    for(let m=0;m<arr.length;m++){
        tangshiBox.innerHTML+='<p>'+arr[m]+'</p>';
    }
    document.getElementsByTagName("p")[0].innerHTML+='<img id="playImg" src="../assets/play.png" />';
    // 播放
    var playImg = document.getElementById("playImg");
    var audioSelf = document.getElementById("audio");
    // audioSelf.src = 'https://tts.baidu.com/text2audio?tex='+getTangshi+'&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9';
    playImg.onclick = function(){
        playImg.src = '../assets/play.gif';
        audioSelf.src = sessionStorage.getItem("audioSrc");
        audioSelf.play();
    }
    audioSelf.onended = function(){
        playImg.src = '../assets/play.png';
    }
    // audioSelf.src = sessionStorage.getItem("audioSrc");
    // audioSelf.play();
    
    
    
}

