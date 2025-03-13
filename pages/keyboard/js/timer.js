var startBtn = document.getElementById("startBtn");
var timeBox = document.getElementById("timeBox");
var second = document.getElementById("second");
var minute = document.getElementById("minute");
var rateBox = document.getElementById("rateBox");

var count = 0;
var timer = null;
var flag = true;

// 计时器
function startTimer(){
    timer = setInterval(function() {
        count++;
        // console.log(count)
        // 需要改变页面上时分秒的值
        var s = showNum(count % 60)
        var m = showNum(parseInt(count / 60) % 60)
        var h = showNum(parseInt(count / 60 / 60))
        // timeBox.innerHTML = "时间："+m+"分"+s+"秒"
        minute.innerHTML = m;
        second.innerHTML = s;
    }, 1000)
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

function checkFn(){
    // rateBox.innerHTML='';
    // 检查
    checkOver = setInterval(()=>{
        var myCoded = inputText.value.split("");
        // console.log(myCoded)
        // letterNumMsg.innerHTML = '已输入'+inputText.value.length+'/'+maxl+'字';

        if(inputText.value.length>=maxl){
            resultBtn.removeAttribute("disabled");
        }

        var overLetterLen = inputText.value.length;
        for(var i=0;i<oldSpans.length;i++){
            oldSpans[i].setAttribute("class","old");
        }
        for(var j=0;j<overLetterLen;j++){
            
            if(myCoded[j]!==oldLetterArr[j]){
                oldSpans[j].setAttribute("class","old red");
            }else{
                oldSpans[j].setAttribute("class","old over");
            }
        }
        var wrongNum = document.getElementsByClassName("red").length;
        var rightNum = Number(overLetterLen)-Number(wrongNum);
        var successRate = ((rightNum/overLetterLen)*100).toFixed(2);
        var minute = document.getElementById("minute").innerHTML;
        var second = document.getElementById("second").innerHTML;
        var s = Number(minute)*60+Number(second);
        var typeSpeed = ((overLetterLen/s)*60).toFixed(0);
        if(successRate==='NaN'||typeSpeed==='NaN'){
            successRate = '0';
            typeSpeed = '0';
        } 
        rateBox.innerHTML = `已输入 ${inputText.value.length}/${maxl}字，正确率：${successRate}%，速率：${typeSpeed}字/分，`
    },500)
}
// 时间结束
function endTimer(){
    clearInterval(timer)
}

//封装一个处理单位数字的函数
function showNum(num) {
    if (num < 10) {
        return '0' + num
    }
    return num
}

// 开始测试按钮
startBtn.addEventListener('click',function(){
    if(flag){
        startTimer();
        checkFn();
        // checkOver();
        flag = false;
        myLetters.style.display = "none";
        inputText.removeAttribute("disabled")
        inputText.style.display = "block";
        inputText.focus();
        startBtn.innerHTML = '暂停';
        startBtn.style.background = '#fff'
        startBtn.style.color = '#666'
        startBtn.style.borderColor = '#666'

        
    }else{
        flag = true;
        startBtn.innerHTML = '暂停中'
        startBtn.style.background = 'orange'
        startBtn.style.color = '#fff'
        startBtn.style.borderColor = 'orange'
        inputText.setAttribute("disabled","true");
        myLetters.style.display = "block";
        inputText.focus();
        clearInterval(checkOver);
        clearInterval(timer);
    }
})