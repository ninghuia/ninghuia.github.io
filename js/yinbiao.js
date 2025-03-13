var letterBoxs = document.getElementsByClassName("letterBox");
var myAudio = document.getElementById("myAudio");
var mask = document.getElementById("mask");
var closeBtn = document.getElementsByClassName("close")[0];
var bigBox = document.getElementById("bigBox");
var txt = document.getElementsByClassName("txt")[0];
var btnBox = document.getElementsByClassName("btnBox")[0];
var tip = document.getElementsByClassName("tip")[0];
var word = document.getElementsByClassName("word")[0];
var playImg = document.getElementById("playImg");
var arrs = [
    {
        t:'[ɑ:]',
        s:'张大嘴巴 啊[ɑ:]啊[ɑ:]啊[ɑ:]',
        w:'car, start, hard'
    },
    {
        t:'[ɔ:]',
        s:'听得明白 [ɔ:]噢[ɔ:]噢[ɔ:]噢',
        w:'door, more, four'
    },
    {
        t:'[ɜ:]',
        s:'饿了三天 [ɜ:]饿[ɜ:]饿[ɜ:]饿',
        w:'bird, heard, learn'
    },
    {
        t:'[i:]',
        s:'开心中了 [i:]亿[i:]亿[i:]亿',
        w:'see, heat, meat'
    },
    {
        t:'[u:]',
        s:'火车长鸣 [u:]呜[u:]呜[u:]呜',
        w:'blue, true, food'
    },
    {
        t:'[ʌ]',
        s:'尖角扎人 [ʌ]阿[ʌ]阿[ʌ]阿',
        w:'bus, but, cup, duck, fun'
    },
    {
        t:'[ɒ]',
        s:'恍然大悟 [ɒ]嗷[ɒ]嗷[ɒ]嗷',
        w:'dog, box, lot, hot, not'
    },
    {
        t:'[ə]',
        s:'小鹅游水 [ə]鹅[ə]鹅[ə]鹅',
        w:'about, mother, taken'
    },
    {
        t:'[ɪ]',
        s:'工人口号 [ɪ]1[ɪ]1[ɪ]1',
        w:'sit, pin, big'
    },
    {
        t:'[ʊ]',
        s:'污水缸污水 [ʊ]污[ʊ]污[ʊ]污',
        w:'put, foot, good'
    },
    {
        t:'[e]',
        s:'一指微笑音 [e]唉[e]唉[e]唉',
        w:'bed, head, said'
    },
    {
        t:'[æ]',
        s:'二指绵羊音 [æ]嗳[æ]嗳[æ]嗳',
        w:'cat, hat, sad'
    },
    {
        t:'[eɪ]',
        s:'天天play [eɪ][eɪ][eɪ]',
        w:'day, say, may, pay, play'
    },
    {
        t:'[aɪ]',
        s:'大声说爱 [aɪ][aɪ][aɪ]',
        w:'eye, my, buy'
    },
    {
        t:'[ɔɪ]',
        s:'一个boy [ɔɪ][ɔɪ][ɔɪ]',
        w:'boy, toy, enjoy'
    },
    {
        t:'[əʊ]',
        s:'穿上coat [əʊ][əʊ][əʊ]',
        w:'boat, goat, road, float'
    },
    {
        t:'[aʊ]',
        s:'张开mouth [aʊ][aʊ][aʊ]',
        w:'now, how, cow'
    },
    {
        t:'[ɪə]',
        s:'竖起ear [ɪə][ɪə][ɪə]',
        w:'here, fear, beer'
    },
    {
        t:'[eə]',
        s:'小熊bear [eə][eə][eə]',
        w:'hair, where, air'
    },
    {
        t:'[ʊə]',
        s:'旅游tour [ʊə][ʊə][ʊə]',
        w:'poor, tour, sure'
    },
    {
        t:'[p]',
        s:'轻轻泼水 [p][p][p]',
        w:'pen, spin, happy'
    },
    {
        t:'[t]',
        s:'特别可爱 [t][t][t]',
        w:'tea, stop, late'
    },
    {
        t:'[k]',
        s:'小孩咳嗽 [k][k][k]',
        w:'cat, skill, make'
    },
    {
        t:'[b]',
        s:'手拨香蕉 [b][b][b]',
        w:'boy, web, rub'
    },
    {
        t:'[d]',
        s:'都是我的 [d][d][d]',
        w:'day, made, ride'
    },
    {
        t:'[g]',
        s:'快叫哥哥 [g][g][g]',
        w:'game, gig, big'
    },
    {
        t:'[f]',
        s:'敷敷行行 [f][f][f]',
        w:'fish, leaf, photo'
    },
    {
        t:'[s]',
        s:'蛛丝马迹 [s][s][s]',
        w:'sun, house, miss'
    },
    {
        t:'[θ]',
        s:'轻咬舌尖 [θ][θ][θ]',
        w:'thin, with, math'
    },
    {
        t:'[ʃ]',
        s:'出师不利 [ʃ][ʃ][ʃ]',
        w:'ship, push, wish'
    },
    {
        t:'[h]',
        s:'吃吃喝喝 [h][h][h]',
        w:'heat, hello, ahead'
    },
    {
        t:'[v]',
        s:'一脚油门 [v][v][v]',
        w:'view, love, have'
    },
    {
        t:'[z]',
        s:'两只蜜蜂 [z][z][z]',
        w:'zoo, rose, jazz'
    },
    {
        t:'[ð]',
        s:'these/those [ð][ð][ð]',
        w:'then, father, breathe'
    },
    {
        t:'[ʒ]',
        s:'日夜操劳 [ʒ]日[ʒ]日[ʒ]日',
        w:'measure, pleasure, vision'
    },
    {
        t:'[r]',
        s:'柔柔弱弱 [r][r][r]',
        w:'run, red, rain'
    },
    {
        t:'[tʃ]',
        s:'吃吃喝喝 [tʃ]吃[tʃ]吃[tʃ]吃',
        w:'teach, rich, reach, child'
    },
    {
        t:'[tr]',
        s:'轻轻戳动 [tr]戳[tr]戳[tr]戳',
        w:'try, tree, trust, track'
    },
    {
        t:'[ts]',
        s:'参差不齐 [ts]差[ts]差[ts]差',
        w:'cats,lots,carts,seats,wants'
    },
    {
        t:'[dʒ]',
        s:'吱吱作响 [dʒ]吱[dʒ]吱[dʒ]吱',
        w:'jeep, job, just, juice'
    },
    {
        t:'[dr]',
        s:'小鸡啄米 [dr]啄[dr]啄[dr]啄',
        w:'drive, dress, dream, draw'
    },
    {
        t:'[dz]',
        s:'自由自在 [dz]自[dz]自[dz]自',
        w:'beds, cards, goods, seeds'
    },
    {
        t:'[m]',
        s:'偷偷摸摸 [m][m][m]',
        w:'map, time, team'
    },
    {
        t:'[n]',
        s:'爸妈我呢 [n][n][n]',
        w:'no, fun, sign'
    },
    {
        t:'[ŋ]',
        s:'撒娇嗯嗯 [ŋ][ŋ][ŋ]',
        w:'sing, ring, long'
    },
    {
        t:'[ǀ]',
        s:'求求你了 [ǀ][ǀ][ǀ]',
        w:'love, well, silly'
    },
    {
        t:'[j]',
        s:'兢兢业业 [j][j][j]',
        w:'yes, you, use'
    },
    {
        t:'[w]',
        s:'呜呜哭泣 [w][w][w]',
        w:'we, will, now'
    }
];
for(var index=0;index<letterBoxs.length;index++){
    (function(i){
        letterBoxs[i].onclick = function(){
            playImg.src = "assets/play.gif";
            mask.style.display = "block";
            bigBox.style.display = "block";
            txt.innerHTML = arrs[i].t;
            txt.style.color = "#47cc9b";
            tip.innerHTML = arrs[i].s;
            word.innerHTML = arrs[i].w;
            myAudio.src="assets/mp3/yinbiao/yb"+(i+1)+".mp3";
            myAudio.play();
            sessionStorage.setItem("zimuSrc","assets/mp3/yinbiao/yb"+(i+1)+".mp3")
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