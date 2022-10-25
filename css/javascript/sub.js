const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

var answer = 0;

function generate_eqation(){
  var num1 = Math.floor(Math.random() * 20)
  var num2 = Math.floor(Math.random() * 20)
  var wrongans1 = Math.floor(Math.random() * -30)
  var wrongans2 = Math.floor(Math.random() * 30)

  var allanswer = [];
  var switchans = [];

  answer =  num1 - num2;
  
  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allanswer = [answer, wrongans1, wrongans2];

  for(i = allanswer.length; i--;){
    switchans.push(allanswer.splice(Math.floor(Math.random() * (i + 1)), 1) [0]);
  }

  option1.innerHTML = switchans[0];
  option2.innerHTML = switchans[1];
  option3.innerHTML = switchans[2];

}

option1.addEventListener("click",function(){
  if (option1.innerHTML == answer){
    generate_eqation();
    audio2.play();
  }
  else{
    audio1.play();
  }

});

option2.addEventListener("click",function(){
  if (option2.innerHTML == answer){
    generate_eqation();
    audio2.play();
  }
  else{
    audio1.play();
  }

});

option3.addEventListener("click",function(){
  if (option3.innerHTML == answer){
    generate_eqation();
    audio2.play();
  }
  else{
    audio1.play();
  }

});

generate_eqation();