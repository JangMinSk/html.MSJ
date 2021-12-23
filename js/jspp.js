/*
var name=prompt("하이");
var Height=prompt("하이");
var weight=prompt("하이");


var normal_w=(Height-100)*0.9;
var result=weight>=normal_w -5 && weight<=normal_w+5;
result = result?"적정체중입니다":"비만입니다";
document.write(name+"님은"+result);


var walkAmount=prompt("당신의 하루 걷는 양은 몇보 인가요?","0")

if(walkAmount>=10000){
    document.write("매우 좋은 습관을 지니고 계시는군요!!","<br>");
}
document.write("=========The End==========");


var min=prompt("당신의 하루 통화량은 몇분인가요?");

if(min>=60){
    document.write("많이 사용하는 편이네요","<br>");
}

document.write("=======The End========");


var num=prompt("값을 하나 넣어주세요");

if(num){
    document.write(num);
}


var num=prompt("방문 자의 이름은?");

if(num){
    document.write(num);
}


var num=prompt("당신이 좋아하는 숫자는?","0");

if(num%2==0){
    document.write("당신이 좋아하는 숫자는 짝수")
}
else{
    document.write("당신이 좋아하는 숫자는 홀수")
}


var result = confirm("정말로 회원을 탈퇴하시겠습니까?");

if(result){
    document.write("탈퇴 처리되었습니다");
}
else{
    document.write("탈퇴 취소되었습니다")
}

var id="alstlr";
var pw="12345";

var user_id=prompt("아이디는?","");
var user_pw=prompt("비밀번호는?","");

if(id==user_id){
    if(pw==user_pw){
        document.write(user_id+"님 반갑습니다!");
    }
    else{
        alert("비밀번호가 일치하지 않습니다!")
        location.reload();
    }   
}
else{
    alert("아이디가 일치하지 않습니다!");//alert 알림,경고창띄우는것
    location.reload();
}


var site = prompt("네이버,다음,네이트,구글 중 즐겨 사용하는 포털");

var url;

switch(site){
    case"구글":url="www.google.com";
    break;
    case"다음":url="www.daum.net";
    break;
    case"네이버":url="www.naver.com";
    break;
    case"네이트":url="www.nate.com";
    break;
    
    default:alert("보기 중에 골라");
}
if(url)location.href="http://"+url;


var i=0;
while(i<=300){
    if(i%3==0){
        document.write(i,"<br>");
    }
    i++    
}
document.write("the end");

var i=20;
while(i>=10){
    if(i%2==0){
        document.write("<p class='blue'>"+i+"</p>");
    }else{
        document.write("<p class='red'>"+i+"</p>");
    }
    i--;
}


var i=1;
while(i<10){
    document.write("5X"+i+"="+i*5,"<br/>")
    i++
}

var num=1;
var t="<table border=1>";
for(var i=1;i<=5;i++){
    t+="<tr>";

    for(var k=1;k<=5;k++){
        t+="<td>"+num+"</td>";
        num++;
    }
    t+="</tr>"
}
t+="</table>";
console.log(i);
document.write(t);


var tv=new Object();
tv.color="white";
tv.price=300000;
tv.info=function(){
    document.write("tv 색상:"+this.color,"<br>")
    document.write("tv 가격:"+this.price,"<br>")
}

var car={
    color:"black",
    price:5000000,
    info:function(){
        document.write("car 색상:"+this.color,"<br>")
        document.write("car 가격:"+this.price,"<br>")
    }
};
document.write("티브이")
tv.info()
document.write("자동차")
car.info()


var today=new Date();
var nowMonth=today.getMonth(),
nowDate=today.getDate(),
nowDay=today.getDay();

document.write("오늘 날짜 정보 ");
document.write(nowMonth);
document.write(nowDate);
document.write(nowDay);

var worldcup=new Date(2002,4,31);
var theMonth=worldcup.getMonth(),
theDate=worldcup.getDate(),
theDay=worldcup.getDay();

document.write("월드컵 날짜 정보");
document.write(theMonth);
document.write(theDate);
document.write(theDay);

var today=new Date();
var nowYear=today.getFullYear();

var theDate=new Date(nowYear,11,31);
var diffDate=theDate.getTime()-today.getTime();

var result=Math.ceil(diffDate/(60*1000*60*24));
document.write("연말 D-day:"+result+"일 남았습니다");


document.write("<h1>컴퓨터 가위 바위 보 맞추기</h1>");

var game=prompt("가위,바위,보 중 선택하세요","가위");

var gameNum;
switch(game){
    case "가위":
        gameNum=1;break;
    case "바위":
        gameNum=2;break;
    case "보":
        gameNum=3;break;
    default:alert("잘못 작성하였습니다");
    location.reload();
}
var com=Math.ceil(Math.random()*3);
document.write("<img src='"+com+".png'");

if(gameNum==com){
    document.write("<br>성공");
}
else{
    document.write("<br>실패");
}

배열.splice(배열,0,"입력값")//(삭제할배열,0은추가(1은삭제),입력값순이다)
*/

