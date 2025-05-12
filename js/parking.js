var car_in = document.getElementById("car_in");
var car_out = document.getElementById("car_out");
var car_1 = document.getElementById("car_1");
var car_2 = document.getElementById("car_2");
var block2_1 = document.getElementsByClassName("block2_1")[0];
var block2_2 = document.getElementsByClassName("block2_2")[0];
car_out.onclick = function(){
    car_out.setAttribute("disabled","disabled");
    block2_1.style.transform = "rotate(60deg)";
    setTimeout(function(){
        block2_1.style.transform = "rotate(0deg)";
        car_out.removeAttribute("disabled");
    },3000)
}
car_in.onclick = function(){
    car_in.setAttribute("disabled","disabled");
    block2_2.style.transform = "rotate(-60deg)";
    setTimeout(function(){
        block2_2.style.transform = "rotate(0deg)";
        car_in.removeAttribute("disabled");
    },3000)
}
