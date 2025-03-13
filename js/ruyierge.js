window.onload = function(){
    let articles = ['公鸡叫','上幼儿园','老师早','老师本领大','好朋友','幼儿园里真快乐','谁会'];
    let j;
    for( j=0;j<articles.length;j++){
      document.getElementsByTagName('ul')[0].innerHTML+='<li><a href="erge.html">'+articles[j]+'</a></li>';
    }

    var num = document.getElementById('num');
    num.innerHTML = '共'+articles.length+'首';

    var obj = [
        '公鸡叫，公鸡叫，太阳笑，太阳笑，天亮了',
        '上幼儿园，爸爸妈妈要上班，珍珍要上幼儿园，高高兴兴说再见，就像小鸟飞蓝天',
        '老师早，小宝宝，蹦蹦跳，走进幼儿园，先说老师早，太阳见了眯眯笑，鸟儿听了跟着叫，老师早老师早，宝宝从小有礼貌',
        '老师本领大，老师老师本领大，会折纸会画画，唱歌跳舞顶呱呱，我们大家都爱她',
        '好朋友，你伸手，我伸手，小朋友们手拉手，你点头，我点头，我们都是好朋友',
        '幼儿园里真快乐，幼儿园里朋友多，有姐姐有哥哥，幼儿园里玩具多，滑梯荡船小汽车，做游戏唱儿歌，幼儿园里真快乐',
        '谁会，谁会飞，鸟会飞，鸟儿怎样飞，扑扑翅膀高高飞，谁会游，鱼会游，鱼儿怎样游，摇摇尾巴调调头，谁会爬，虫会爬，虫儿怎样爬，伸伸腿儿慢慢爬'
        
    ]
    let lists = document.getElementsByTagName('li');
    console.log(lists);
    for(let i=0;i<lists.length;i++){
        lists[i].onclick = function(){
            sessionStorage.setItem('tangshi', obj[i]);
            sessionStorage.setItem('audioSrc', '../assets/mp3/eg/eg'+i+'.mp3');
        }
    }
}