// 盲打练习
var lettersBox = document.getElementById("lettersBox");
var letters1 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var letters2 = ['1','2','3','4','5','6','7','8','9','0'];
var letters3 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
var letters4 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9',',','.','?','{','}','[',']','<','>',';','"','/','~','!','@','#','$','%','^','&','*','(',')','-','_','+','='];
if(localStorage.getItem('choseTypeIndex')==0){
    originLetters = letters1;
}else if(localStorage.getItem('choseTypeIndex')==1){
    originLetters = letters1;
}else if(localStorage.getItem('choseTypeIndex')==2){
    originLetters = letters2;
}else if(localStorage.getItem('choseTypeIndex')==3){
    originLetters = letters3;
}else if(localStorage.getItem('choseTypeIndex')==4){
    originLetters = letters4;
}else{
    originLetters = letters1;
}

var sound = document.getElementById("audio");
var randomLetters = getRandomArrayElements(originLetters, 5);
function show(){
    for(var i=0;i<randomLetters.length;i++){
        lettersBox.innerHTML += '<div class="common" id="'+randomLetters[i]+'">'+randomLetters[i]+'</div>'
    }
}
show();
    
// 数组中随机取
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

var enterDom = document.getElementById("enter");
var letters = document.getElementsByTagName("span");
var keyboardBox = document.getElementById("keyboardBox");
var len = letters.length;
var colors = ['pink','#ba2fe2','red','green','teal','#6a5acd','orange','#FFE4C4','#8A2BE2','#7CFC00','#5F9EA0','#20B2AA','#FAFAD2','#FF6347','#7E3D76','#DAA520','#750075','#FF7256','#EE6AA7','#8DB6CD','#436EEE','#8B6914','#C71585','#D2691E'];
// 随机取颜色
var color =  getRandomArrayElements(colors, 1);

document.addEventListener("keydown",function(event){
    // console.log(event);
    var currentLetter = (event.key).toUpperCase();
    var nextLetter = getRandomArrayElements(originLetters, 5);
    if(currentLetter!==randomLetters[0]&&currentLetter!==randomLetters[1]&&currentLetter!==randomLetters[2]&&currentLetter!==randomLetters[3]&&currentLetter!==randomLetters[4]){
        if(soundFlag){
            setTimeout(()=>{
                sound.src='./sound/error.mp3';
            },200)
        }
    }
    // clearTimeout(timer);
    for(var i=0;i<randomLetters.length;i++){
        if(currentLetter == randomLetters[i]){
            document.getElementById(currentLetter).setAttribute("class","right");
            var rightNum = document.getElementsByClassName("right").length;
            if(rightNum==5){
                var timer = setTimeout(() => {
                    randomLetters=nextLetter;
                    lettersBox.innerHTML = '';
                    if(soundFlag){
                        sound.src='./sound/right.wav';
                    }
                    show();
                }, 600);
            }
        }
    }

    var color =  getRandomArrayElements(colors, 1);
    for(var i=0;i<len;i++){
        letters[i].setAttribute("class","normal");
        if(letters[i].getAttribute('code')==event.code){
            if(soundFlag){
                sound.src='./sound/click.wav';
            }
            if(event.keyCode==32){
                letters[i].style.width = '401px';
            }
            letters[i].style.color = '#fff';
            letters[i].style.background = color;
            letters[i].style.borderColor = color;
            letters[i].style.boxShadow = '0px 0px 50px '+color;
            keyboardBox.style.borderColor = color;
            keyboardBox.style.boxShadow = 'inset 0px 0px 60px '+color;

            if(event.code=='Enter'){
                enterDom.style.borderColor = color;
                enterDom.style.background = color;
                enterDom.style.color = color;
                enterDom.style.boxShadow = 'none';
            }
            
            var removeActive = setTimeout(function(){
                letters[i].style.color = '#888';
                letters[i].style.background = '#fff';
                letters[i].style.borderColor = '#999';
                letters[i].style.boxShadow = 'none';
                keyboardBox.style.borderColor = '#999';
                keyboardBox.style.boxShadow = 'none';
                if(event.keyCode==32){
                    letters[i].style.width = '401px';
                }
                if(event.code=='Enter'){
                    enterDom.style.borderColor = '#999';
                    enterDom.style.background = '#fff';
                    enterDom.style.boxShadow = 'none';
                    enterDom.style.color = '#fff';
                }
            }, 300);
            removeActive();
        }
    }
})

// 设置按钮显示弹窗
function newSetup(){
    popup.style.display = "block";
}

// 关闭弹窗
function closePop(){
    index = choseArticle.selectedIndex;
    console.log(index);
    localStorage.setItem("choseTypeIndex",index);
    popup.style.display = "none";
    window.location.reload();
}

// 关闭音效
var soundBtn = document.getElementById("soundBtn");
var msgBox = document.getElementById("msgBox");
var flag = true;
var soundFlag = true;
soundBtn.addEventListener('click',function(){
    if(flag){
        setTimeout(()=>{
            soundBtn.innerHTML = '开启音效';
            flag = false;
            soundFlag = false;
            msgBox.innerHTML = '音效已关闭';
            msgBox.style.opacity = 1;
            setTimeout(()=>{
                msgBox.style.opacity = 0;
            },1000)
        },0)
    }else{
        setTimeout(()=>{
            soundBtn.innerHTML = '关闭音效';
            flag = true;
            soundFlag = true;
            msgBox.innerHTML = '音效已开启';
            msgBox.style.opacity = 1;
            setTimeout(()=>{
                msgBox.style.opacity = 0;
            },1000)
        },0)
    }
})

// 刷新
function reload(){
    window.location.reload();
}