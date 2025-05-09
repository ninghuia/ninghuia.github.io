var go = document.getElementById("go");
        var hand2 = document.getElementsByClassName("hand_2")[0];
        var hand3 = document.getElementsByClassName("hand_3")[0];
        var hand4 = document.getElementsByClassName("hand_4")[0];
        var hand5 = document.getElementsByClassName("hand_5")[0];
        var hand6 = document.getElementById("hand_6");
        var hand7 = document.getElementById("hand_7");
        var gift1 = document.getElementById("gift1");
        var gift2 = document.getElementById("gift2");
        var hand_box = document.getElementById("hand_box");
        var toLeft = document.getElementById("left");
        var toRight = document.getElementById("right");
        var tips = document.getElementById("tips");
        var result = document.getElementById("result");
        var mask = document.getElementById("mask");
        var begin_audio = document.getElementById("begin_audio");
        var move_audio = document.getElementById("move_audio");
        var main_box = document.getElementsByClassName("main")[0];

        function getRandomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        const items = ['🍦', '🥤', '🌺',"✈️",'🥚','💰100元','💰1元','🍭','糖葫芦','尖叫','脉动',"芬达",'🪁','💎',"💻","📱","🍬","空的哦","再来一次","🍓","🌂","火火兔","🚢","🪀","🎈","⚽️","🏀","🏐️","🏸️","扭扭车","平衡车","东风21D","航母","AK47","98K","一片尿不湿","抽纸一包","湿巾一包","一袋盐","一瓶醋","酱油一瓶","奶黄包","🍎","农夫山泉","雪碧","百事可乐","东方树叶","百岁山","洗衣液","洗洁精","作业翻倍"];
        go.onclick = function(){
            begin_audio.play();
            var randomItem = getRandomItem(items);
            go.setAttribute("disabled","disabled");
            toLeft.setAttribute("disabled","disabled");
            toRight.setAttribute("disabled","disabled");
            hand2.style.height = "280px";
            hand3.style.top = "244px";
            hand4.style.top = "270px";
            hand5.style.top = "270px";
            hand6.style.top = "270px";
            hand7.style.top = "270px";
            setTimeout(function(){
                hand_6.style.transform = "rotate(65deg)";
                hand_7.style.transform = "rotate(-65deg)";
                setTimeout(function(){
                    // main_box.style.display = "none";
                    mask.style.display = "block";
                    tips.style.display = "block";
                    result.innerHTML = randomItem;
                    setTimeout(function(){
                        mask.style.display = "none";
                        tips.style.display = "none";
                        // main_box.style.display = "block";
                        go.removeAttribute("disabled");
                        toLeft.removeAttribute("disabled");
                        toRight.removeAttribute("disabled");
                        setTimeout(function(){
                            hand2.style.height = "119px";
                            hand3.style.top = "108px";
                            hand4.style.top = "126px";
                            hand5.style.top = "126px";
                            hand6.style.top = "126px";
                            hand7.style.top = "126px";
                            hand_6.style.transform = "rotate(85deg)";
                            hand_7.style.transform = "rotate(-85deg)";
                        },200)
                    },2000)
                },1000)
            },1000)
        }
       
        toLeft.onclick = function(){
            move_audio.play();
            hand_box.style.left="86px";
        };
        
        toRight.onclick = function(){
            move_audio.play();
            hand_box.style.left="224px"
        };