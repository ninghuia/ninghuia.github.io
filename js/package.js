var qujian = document.getElementById("qujian");
        var okBtn = document.getElementById("ok");
        var delBtn = document.getElementById("del");
        var qujianma = document.getElementsByClassName("qujianmaBox")[0];
        var audioSelf = document.getElementById("audio");
        var boxes = document.getElementsByClassName("box");
        qujian.onclick = function(){
            audioSelf.src = 'assets/mp3/tips_qujianma.mp3';
            audioSelf.play();
            document.getElementById("mainBox").style.display = 'block';
            qujian.style.display = 'none';
        }
        // 随机生成1-5快递柜编号
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        let randomInt = getRandomInt(1, 5); // 生成1到10之间的随机整数（包括1和10）
        console.log(randomInt); // 输出例如5

        // 随机生成6位码
        var randomCode = '';
        for(var i=0;i<5;i++){
            randomCode += parseInt(Math.random()*10);
        }
        var code = (randomInt-1)+randomCode;
        document.getElementById('today').innerHTML = '取件码 '+code;
        // console.log(code);

        var buttons = document.getElementsByClassName("number");
        console.log(buttons)
        
        var qujianmaBox = document.getElementsByClassName("qujianmaBox")[0];
        // 循环遍历按钮元素
        for(var index=0;index<buttons.length;index++){
            (function(i){
                // var nums = [];
                // 为每个按钮绑定点击事件
                buttons[index].onclick = function(){
                    // 现实对应的数字
                    // alert(i);
                    // var n = i+1;
                    audioSelf.src = 'assets/mp3/ding.wav';
                    audioSelf.play();
                    if(i==9){
                        // audioSelf.src = 'https://tts.baidu.com/text2audio?tex=0&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9';
                        // audioSelf.play();
                        qujianmaBox.innerHTML+=0;
                    }else{
                        qujianmaBox.innerHTML+=i+1;
                    }
                    // if(qujianmaBox.length>6){
                    //     qujianmaBox = qujianmaBox.substring(0,3)
                    // }
                }
                
            })(index)
        }

        okBtn.onclick = function(){
            var text = qujianma.innerHTML.substring(0, 6);;
            console.log(text);
            if(text==code){
                console.log(sessionStorage.getItem('a'))
                // alert("");
                audioSelf.src = 'assets/mp3/qujianma_succe'+randomInt+'.mp3';
                audioSelf.play();
                // audioSelf.src = 'https://tts.baidu.com/text2audio?tex=0'+randomInt+'号格口已开启，包裹取出后请关闭格口，谢谢&cuid=dict&lan=ZH&ctp=1&pdt=30&vol=9';
                // audioSelf.play();
                document.getElementsByClassName("box")[randomInt-1].setAttribute("style", "background-color: orange; color: #fff;width:90%;border-right:18px solid #e9e9e9;");
            }else{
                audioSelf.src = 'assets/mp3/err_qujianma.mp3';
                audioSelf.play();
                // alert("取件码错误！请重新输入！");
            }
        }
        delBtn.onclick = function(){
            audioSelf.src = 'assets/mp3/ding.wav';
            audioSelf.play();
            var text = qujianma.innerHTML.substring(0, 6);;
            qujianma.innerHTML = text.slice(0,text.length-1);
        }

        // 重新取件
        // document.getElementById("again").onclick = function(){
        //     audioSelf.src = 'assets/mp3/ding.wav';
        //     audioSelf.play();
        //     window.location.reload();
            
        // }

        // 关门
        boxes[randomInt-1].onclick = function(){
            boxes[randomInt-1].setAttribute("style", "background-color: #fff;width:100%;border-right:1px solid #999;");
            audioSelf.src = 'assets/mp3/close_qujianma.mp3';
            audioSelf.play();
            setTimeout(function(){
                window.location.reload();
            },3600)
        }