var startBtn = document.getElementById("startBtn");
var oCount = document.getElementById("count");
var num = 18;
var guoqi = document.getElementById("red");
var audioDom = document.getElementById("audioDom");
var audioTaoyita = document.getElementById("audioTaoyita");
var audioZhutuiqi = document.getElementById("audioZhutuiqi");
var audioErjifenli = document.getElementById("audioErjifenli");
var audioChuanfenli = document.getElementById("audioChuanfenli");
var rocketBox = document.getElementsByClassName("rocketBox")[0];
var location2 = document.getElementsByClassName("location")[0];
var earth = document.getElementById("earth");
var fire_1 = document.getElementById("fire1");
var fire_2 = document.getElementById("fire2");
var part1 = document.getElementsByClassName("part_1")[0];
var part2 = document.getElementsByClassName("part_2")[0];
var part5 = document.getElementsByClassName("part_5")[0];
var part4 = document.getElementsByClassName("part_4")[0];
var part6 = document.getElementsByClassName("part_6")[0];
var part7 = document.getElementsByClassName("part_7")[0];
var line1 = document.getElementsByClassName("line")[0];
var line2 = document.getElementsByClassName("line")[1];
var line3 = document.getElementsByClassName("line")[2];
var line4 = document.getElementsByClassName("line")[3];
var line5 = document.getElementsByClassName("line")[4];
var line6 = document.getElementsByClassName("line")[5];
var erji = document.getElementsByClassName("block_1")[0];
var block_2 = document.getElementsByClassName("block_2")[0];
var zhutuiqi_1 = document.getElementsByClassName("block_3")[0];
var zhutuiqi_2 = document.getElementsByClassName("block_4")[0];
var topBox = document.getElementsByClassName("top")[0];
var zhengliuzhao_1 = document.getElementsByClassName("zhengliuzhao_1")[0];
var zhengliuzhao_2 = document.getElementsByClassName("zhengliuzhao_2")[0];
var feichuanBox = document.getElementsByClassName("feichuanBox")[0];
var solarsys = document.getElementsByClassName("solarsys")[0];
var process = document.getElementById("process");

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const items = ['‌酒泉卫星发射中心｜神舟一号', '‌酒泉卫星发射中心｜神舟二号','‌酒泉卫星发射中心｜神舟三号','‌酒泉卫星发射中心｜神舟四号','‌酒泉卫星发射中心｜神舟五号','‌酒泉卫星发射中心｜神舟六号','‌酒泉卫星发射中心｜神舟七号','‌酒泉卫星发射中心｜神舟八号','‌酒泉卫星发射中心｜神舟九号','‌酒泉卫星发射中心｜神舟十号','‌酒泉卫星发射中心｜神舟十一号','‌酒泉卫星发射中心｜神舟十二号','‌酒泉卫星发射中心｜神舟十三号','‌酒泉卫星发射中心｜神舟十四号','‌酒泉卫星发射中心｜神舟十五号','‌酒泉卫星发射中心｜神舟十六号','‌酒泉卫星发射中心｜神舟十七号','‌酒泉卫星发射中心｜神舟十八号','‌酒泉卫星发射中心｜神舟十九号','‌酒泉卫星发射中心｜神舟二十号','‌太原卫星发射中心', '‌西昌卫星发射中心', '‌文昌航天发射场','‌中国东方航天港','北小卫星发射中心'];
const randomItem = getRandomItem(items);
location2.innerHTML = randomItem;
console.log(randomItem);

startBtn.onclick = function(){
    audioDom.play();
    startBtn.style.display = "none";
    setTimeout(() => {
        line1.style.transform = "rotate(-80deg)";
        line2.style.transform = "rotate(80deg)";
        // line3.style.transform = "rotate(-80deg)";
        // line4.style.transform = "rotate(80deg)";
        setTimeout(() => {
            // line1.style.transform = "rotate(-80deg)";
            // line2.style.transform = "rotate(80deg)";
            line3.style.transform = "rotate(-80deg)";
            line4.style.transform = "rotate(80deg)";
            setTimeout(function(){
                line5.style.width = "8px";
                line6.style.width = "8px";
            },4000)
        }, 5000);
    }, 2000);
    // oCount.style.display = "block";
    // var timer = setInterval(function () {
    //     //每隔1秒num值减一
    //     oCount.innerHTML = num--;
    //     //num--是后减量，执行-1操作后返回未做减量操作的值，因此当oCount中的值为0时，num的值为-1。
    //     if (num == -1) {
    //         //清除定时器
    //         clearInterval(timer);
    //     }
    // }, 1000);

    setTimeout(function(){
        // oCount.style.display = "none";
        // process.innerHTML = "点火";
        line1.style.display = "none";
        line2.style.display = "none";
        line3.style.display = "none";
        line4.style.display = "none";
        line5.style.display = "none";
        line6.style.display = "none";
        rocketBox.style.border = "10px solid transparent";
        audioDom.src = "fashe.mp3";
        audioDom.play();
        part5.style.display = "inline-block";
        fire_1.style.display = "inline-block";
        fire_2.style.display = "inline-block";
        part4.style.display = "none";
        location2.style.display = "none";
        // 逃逸塔分离
        setTimeout(function(){
            audioTaoyita.play();
            audioTaoyita.onended = function(){
                // process.innerHTML = "点火>逃逸塔分离";
                document.getElementsByClassName("taoyitaBox")[0].style.marginBottom = "30px";
                setTimeout(function(){
                    document.getElementsByClassName("taoyitaBox")[0].style.display = "none";
                    document.getElementsByClassName("part_1")[0].style.marginTop = "100px";
                },2000);
                // 助推器分离
                setTimeout(function(){
                    audioZhutuiqi.play();
                    audioZhutuiqi.onended = function(){
                        fire_1.style.display = "none";
                        fire_2.style.display = "none";
                        zhutuiqi_1.style.transform = "translate(-30px)";
                        zhutuiqi_2.style.transform = "translate(30px)";
                    }
                    setTimeout(function(){
                        zhutuiqi_1.style.display = "none";
                        zhutuiqi_2.style.display = "none";
                        // 一二级分离
                        setTimeout(function(){
                            audioErjifenli.play();
                            audioErjifenli.onended = function(){
                                part5.style.display = "none";
                                erji.style.marginTop = "30px";
                            }
                            setTimeout(function(){
                                document.getElementsByClassName("main")[0].style.background = "#000";
                                earth.style.display = "block";
                                block_2.style.display = "none";
                                erji.style.display = "none";
                                part6.style.display = "block";
                                // 船箭分离
                                setTimeout(function(){
                                    audioChuanfenli.play();
                                    audioChuanfenli.onended = function(){

                                        part6.style.display = "none";
                                        part2.style.marginTop = "30px";
                                    }
                                    setTimeout(function(){
                                        earth.style.right = "-120px";
                                        earth.style.bottom = "-120px";
                                        part2.style.display = "none";
                                        part7.style.display = "block";
                                        feichuanBox.style.transform = "rotate(60deg)";
                                        // document.getElementsByClassName("main")[0].style.background = "#000";
                                        // 抛整流罩
                                        setTimeout(function(){
                                            topBox.style.display = "none";
                                            part7.style.display = "none";
                                            guoqi.style.display = "none";
                                            zhengliuzhao_1.style.transform = "translate(-50px)";
                                            zhengliuzhao_2.style.transform = "translate(50px)";
                                            feichuanBox.style.display = "block";
                                            feichuanBox.style.marginTop = "-90px";
                                            setTimeout(function(){
                                                zhengliuzhao_1.style.display = "none";
                                                zhengliuzhao_2.style.display = "none";
                                                feichuanBox.style.transform = "rotate(90deg)";
                                                setTimeout(function(){
                                                    earth.style.display = "none";
                                                    feichuanBox.style.display = "none";
                                                    solarsys.style.display = "block";
                                                },2000)
                                            },3000)
                                        },5000)
                                    },5000)
                                },5000)
                            },5000)
                        },5000)
                    },5000)
                },5000)
            }
        },10000)
    },20000)
}