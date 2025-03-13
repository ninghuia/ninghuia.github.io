var inputText = document.getElementById("inputText");
var tips = document.getElementById("tips");
var choseArticle = document.getElementById("choseArticle");
var index;
var myLetters = document.getElementById("myLetters");

var userDefined = localStorage.getItem('userDefined')||'请先点击上方设置按钮添加自定义文案。'
var article = userDefined;
var hanziArrs = article||getRandomArrayElements(articleArrs, 1);
var sound = document.getElementById("audio");
var resultBox = document.getElementById("resultBox");

// 总字数
var hanziLength = hanziArrs.length;
var maxl = hanziLength;
var oldLetterArr =  hanziArrs;
var letterNum = document.getElementById("letterNum");
var separateBox = document.getElementsByClassName("separateBox")[0];

// 页面初始化
window.onload = function(){
    letterNum.innerHTML = maxl;
    inputText.setAttribute("maxlength",maxl);
    inputText.setAttribute("rows",Math.ceil(maxl/30));
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+maxl+')');
    var rows = Math.ceil(maxl/30);
    for(var i=0;i<rows;i++){
        separateBox.innerHTML+='<div></div>'
    }

    for(var i=0;i<oldLetterArr.length;i++){
        testLetter.innerHTML += '<span class="old">'+oldLetterArr[i]+'</span>'
    }
}

var oldSpans = document.getElementsByClassName("old");
var resultBtn = document.getElementById("resultBtn");

function showResult(){
    resultBtn.style.display = "none";
    startBtn.style.display = "none";
    tips.style.color = 'green';
    tips.style.borderRadius = '30px';
    tips.style.boxShadow = 'inset 0 0 30px green';
    clearInterval(checkOver);
    clearInterval(timer);
    var str = inputText.value;
    newLettersArr = str.split("");
    for(var i=0;i<newLettersArr.length;i++){ 
        myLetters.innerHTML += '<span class="new">'+newLettersArr[i]+'</span>'
    }
    inputText.style.display = "none";
    myLetters.style.display = "block";
    var newSpans = document.getElementsByClassName("new");
    for(var j=0;j<oldLetterArr.length;j++){
        if(newLettersArr[j]!==oldLetterArr[j]){
            oldSpans[j].setAttribute("class","old err");
            newSpans[j].setAttribute("class","new err");
        }else{
            oldSpans[j].setAttribute("class","old right");
            newSpans[j].setAttribute("class","new right");
        }
    }
}

// 刷新
function reload(){
    window.location.reload();
}

var popup = document.getElementById("popup");
var textNum = document.getElementById("textNum");
var nextOpen = document.getElementById("nextOpen");
var nextClose = document.getElementById("nextClose");
var setTips = document.getElementById("setTips");

// 设置按钮显示弹窗
function newSetup(){
    popup.style.display = "block";
}
var definedTextDom = document.getElementById("definedTextDom");
// 关闭弹窗
function closePop(){
    var str = definedTextDom.value;
    localStorage.setItem("userDefined",str);
    
    var num = str.length;
    inputText.setAttribute("maxlength",maxl);
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+num+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+num+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+num+')');
    popup.style.display = "none";
    window.location.reload();
}

// 清空设置
function clearHistory(){
    localStorage.setItem("userDefined",'');
    window.location.reload();
}