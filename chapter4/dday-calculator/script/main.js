//Scene1

//DOM 요소 선택
var startBTN = document.querySelector("#calc")

//계산하기 버튼 클릭하면, changeScene에 기록한 일을 처리
startBTN.addEventListener("click", changeScene);

//(누르면)할일 목록-여러개!
function changeScene() {
    //article 태그 2개를 찾아서 변수를 넣으면?
    var articleTAGS = document.querySelectorAll("article");
    articleTAGS[0].classList.add("d-none");
    articleTAGS[1].classList.remove("d-none");
}

//Scene2.
//DOM 선택
var calcBTN = document.querySelector("#dday_calc");
var resetBTN = document.querySelector("#dday_reset");

calcBTN.addEventListener("submit", ddayCalc);

//(누르면)할일 목록-여러개!
function ddayCalc(e) {
    e.preventDefault();
    //년도 input의 값을 알아오고
    var userYear = document.querySelector("#user_year").Value;
    //월 input의 값도 알아오고
    var userMonth = document.querySelector("#user_month").Value;
    //일 input의 값을 알아와서
    var userDate = document.querySelector("#user_date").Value;

    console.log(userYear,userMonth,userDate);
    //시간, 날짜 객체를 생성해주고
    //알아온 input의 값으로 알아내야하는 시간, 날짜를 생성
    //두 시간, 날짜 차이를  계산 .getTime()
    //공식으로 나누고
    //소수점이하 Math.ceil() 적용해서 정수 반환
    //alert 알려주기
}