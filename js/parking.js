var car_in = document.getElementById("car_in");
var car_out = document.getElementById("car_out");
var car_1 = document.getElementById("car1");
var car_2 = document.getElementById("car2");
var block2_1 = document.getElementsByClassName("block2_1")[0];
var block2_2 = document.getElementsByClassName("block2_2")[0];
var num = document.getElementById("num");
var cars = document.getElementsByClassName("car");
const arr = ['🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空','🚗','空'];

function getRandomElements(arr, num) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
var randomElements = getRandomElements(arr, 6);
var valueToCount = '空';
var count=0;
// var count = randomElements.filter(item => item === valueToCount).length;
console.log(count); 
console.log(randomElements);
car_out.onclick = function(){
    car_out.setAttribute("disabled","disabled");
    randomElements = getRandomElements(arr, 18);
    for(var i=0;i<cars.length;i++){
        cars[i].innerHTML = randomElements[i];
    }
    count = randomElements.filter(item => item === valueToCount).length;
    num.innerHTML = count;

    // block2_1.style.transform = "rotate(60deg)";
    // setTimeout(function(){
    //     block2_1.style.transform = "rotate(0deg)";
    //     car_out.removeAttribute("disabled");
    // },3000)
    setTimeout(function(){
        car_2.style.display = "block";
        block2_1.style.transform = "rotate(60deg)";
        setTimeout(function(){
            car_2.style.transform = "translateY(150px)";
            setTimeout(function(){
                car_2.style.display = "none";
                car_2.style.transform = "translateY(0px)";
                setTimeout(function(){
                    block2_1.style.transform = "rotate(0deg)";
                    car_out.removeAttribute("disabled");
                },0)
            },2000)
        },1000)
    },500)
}
car_in.onclick = function(){
    car_in.setAttribute("disabled","disabled");
    randomElements = getRandomElements(arr, 18);
    for(var i=0;i<cars.length;i++){
        cars[i].innerHTML = randomElements[i];
    }
    count = randomElements.filter(item => item === valueToCount).length;
    num.innerHTML = count;

    setTimeout(function(){
        car_1.style.display = "block";
        block2_2.style.transform = "rotate(-60deg)";
        setTimeout(function(){
            car_1.style.transform = "translateY(-190px)";
            setTimeout(function(){
                car_1.style.display = "none";
                car_1.style.transform = "translateY(0px)";
                setTimeout(function(){
                    block2_2.style.transform = "rotate(0deg)";
                    car_in.removeAttribute("disabled");
                },0)
            },2000)
        },1000)
    },500)
}
