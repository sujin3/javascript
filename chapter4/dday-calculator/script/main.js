//Scene1

//DOM 요소 선택
var startBTN = document.querySelector("#calc")

//계산하기 버튼 클릭하면, changeScene에 기록한 일을 처리
startBTN.addEventListener("click", changeScene);

//(누르면)할일 목록-여러개!
function changeScene(e) {
    //article 태그 2개를 찾아서 변수를 넣으면?
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

//Scene2.
//DOM 선택
var ddayForm = document.querySelector("#ddayForm");
var calcBTN = document.querySelector("#dday_calc");
var resetBTN = ddayForm.querySelector("#dday_reset");

ddayForm.addEventListener("submit", ddayCalc);

//(누르면)할일 목록-여러개!
function ddayCalc(e) {
    e.preventDefault();
    //년도 input의 값을 알아오고
    var userYear = document.querySelector("#user_year").value;
    var userMonth = document.querySelector("#user_month").value;
    var userDate = document.querySelector("#user_date").value;

    //console.log(userYear, userMonth, userDate);
    //console.log(typeof userYear, typeof userMonth, typeof userDate);

    var today = new Date();

    //console.log("날짜객체에서 받아온 월 : "+nowMonth);
    //알아온 input의 값으로 알아내야하는 시간, 날짜를 생성
    var theDate = new Date(userYear, userMonth-1, userDate);

    //두 시간, 날짜 차이를  계산 .getTime()
    var diffDate = theDate.getTime() - today.getTime();
    
    //공식으로 1000*60*60*24로 나누고
    //소수점이하 Math.ceil() 적용해서 정수 반환 result에 담고
    var result = Math.ceil( diffDate / (1000*60*60*24));

    //alert("D-day : "+result);
    //alert 알려주기
    //팝업.아이디가 d_day를 찾은 후 내부에 텍스트 출력
    var ddayPOP = document.querySelector("#result_pop");
    var ddayTEXT = ddayPOP.querySelector("#d_day");
    ddayTEXT.innerHTML = `<strong>${result}</strong> 일`;
    //팝업.클래스목록.제거("d-none");
    ddayPOP.classList.remove("d-none");
}