var inputText = document.getElementById("inputText");
var tips = document.getElementById("tips");
var choseArticle = document.getElementById("choseArticle");
var index;
var myLetters = document.getElementById("myLetters");

var articleArrs = [
    '请先选择一篇文章。',
    'I say to you today, my friends, so even though we face the difficulties of today and tomorrow, I still have a dream. It is a dream deeply rooted in the American Dream. I have a dream that one day this nation will rise up, live out the true meaning of its creed: “We hold these truths to be self-evident, that all men are created equal.” I have a dream that one day on the red hills of Georgia, sons of former slaves and the sons of former slave-owners, will they be able to sit down together at the table of brotherhood. I have a dream, that one day even the state of Mississippi, a state 12)sweltering with the heat of injustice, sweltering with the heat of oppression, will be transformed into an 13)oasis of freedom and justice. I have a dream, that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character, I have a dream today. I have a dream that one day down in Alabama, with its vicious racists, with its governor having his lips dripping with the words of 14)interposition and 15)nullification, one day right down in Alabama little black boys and black girls will be able to join hands with little white boys and white girls as sisters and brothers. I have a dream today. I have a dream that one day every valley shall be exalted, every hill and mountain shall be made low; the rough places will be made plain; and the 16)crooked places will be made straight; and the glory of the Lord shall be revealed and all 17)flesh shall see it together. This is our hope.',
    'Do you want a friend whom you could tell everything to, like your deepest feelings and thoughts? Or are you afraid that your friend would laugh at you, or would not understand what you aregoing through? Anne frank wanted the first kind,so she made her diary her best friend. Anne lived in Amsterdam in the Netherlands during Word WarⅡ. Her family was Jewish so they had to hide or they would be caught by German Nazis。 She and her family hid away for nearly twenty-five mouths before they were discovered. During that time the only true friend was her diary. She said:"I don not want to set down a series of facts in a diary as most people do,but I want this diary itself to be my best friend,and I shall call my friend Kitty" Now read how she felt after being in the hiding place for over a year. I wonder if it’s because I haven’t been able to be outdoors for so long that I’ve grown so crazy about everything to do with nature. I can well remember that there was a time when a deep blue sky, the song of the birds, moonlight and flowers could never have kept me spellbound. That’s changed since I was here. For example, one evening when it was so warm, I stayed awake on purpose until half past eleven in order to have a good look at the moon by myself. But as the moon gave far too much light, I didn’t dare open a window.',
    "Shanghai Hongqiao Airport has such a story, a pair of lovers broke up at the airport, the woman said to the man, 'you don't wait for me, we will not have the result, just like the airport can never wait for the train, we will not have the intersection in the future.'. The man was dumped. But a few years later, people were surprised to find that Hongqiao Airport was connected with the railway station. The chief engineer who designed the project was the man who was dumped. As long as there is love, there is a way. Anyone can be good to a person endlessly, but the premise is worth mentioning.",
];

var articleIndex = localStorage.getItem("articleEnIndex");
var article = articleArrs[articleIndex];
var hanziArrs = article||'Please chose an article first !';
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
    inputText.setAttribute("rows",Math.ceil(maxl/52));
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+maxl+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+maxl+')');
    var rows = Math.ceil(maxl/52);
    for(var i=0;i<rows;i++){
        separateBox.innerHTML+='<div></div>'
    }

    // console.log(oldLetterArr);
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

// 关闭弹窗
function closePop(){
    index = choseArticle.selectedIndex;
    // options[index].setAttribute("selected");
    // console.log(index);
    localStorage.setItem("articleEnIndex",index);
    
    var num = articleArrs[index].length;
    inputText.setAttribute("maxlength",maxl);
    inputText.setAttribute("οnchange",'this.value=this.value.substring(0, '+num+')');
    inputText.setAttribute("οnkeyup",'this.value=this.value.substring(0, '+num+')');
    inputText.setAttribute("οnkeydown",'this.value=this.value.substring(0, '+num+')');
    popup.style.display = "none";
    window.location.reload();
}

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