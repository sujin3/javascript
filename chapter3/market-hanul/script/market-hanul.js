var loginForm = document.querySelector("#login-form");
var loginBTN = loginForm.querySelector("#go_login");
var u_id = document.querySelector("#user_id");
var u_pw = document.querySelector("#user_pw");

var admin_id = "super7797";
var admin_pw = "super7797!";
// 실제 백엔드 개발자, 웹프로그래머 등은 DB에서 admin id,pw 가져와서 비교

loginForm.addEventListener("submit", submitFunc);
    
function submitFunc(e) {
    e.preventDefault(); // 폼 새로고침을 막아줌(이벤트 전파를 막아줌)
    if(admin_id === u_id.value) {
        if(admin_pw === u_pw.value) {
            alert("관리자님, 로그인을 환영합니다.\n관리자 페이지로 이동합니다.");
            location.href="/admin_only";
        } else {
            alert("아이디 또는 비밀번호를 확인하세요.");
            location.reload();
        }
    } else {
        alert("아이디 또는 비밀번호를 확인하세요.");
        location.reload();
    }
}