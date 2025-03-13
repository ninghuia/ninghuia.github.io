window.onload = function(){
    
    let getWen = sessionStorage.getItem('wenzhang');
    // var a = getTangshi;
    console.log(getWen);  

    let arr = getWen.split("+");
    console.log(arr);

    let articleBox = document.getElementById('main');
    for(let m=0;m<arr.length;m++){
        articleBox.innerHTML+='<p>'+arr[m]+'</p>';
    }
    
    // 播放
    
    // var audioSelf = document.getElementById("audio");
    // audioSelf.src = 'https://tts.baidu.com/text2audio?tex='+getTangshi+'&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9';
    
    
    
    
}

