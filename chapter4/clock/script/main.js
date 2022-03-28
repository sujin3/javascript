
var myDate = new Date();
var myHours = myDate.getHours();
var myMins = myDate.getMinutes();
var mySec = myDate.getSeconds();

//출력대상 탐색
var targetTag = document.querySelector("#time_text");
//console.dir(targetTag);
targetTag.innerHTML = `<strong>${myHours}:${myMins}:${mySec}</strong>`;

//알람을 설정하려면?
/* if(내가 원하는 시 == myHours){
    if(내가 원하는 분 == myMins){

    }
} */


//p.118~121
//.setTimeout() : 지정시간이 종료되면
//.setInterval() : 매 지정 시간마다 (반복)