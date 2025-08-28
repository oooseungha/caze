// --------------------------------- JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // ==============================
  // 전역 변수
  // ==============================
  const gnbLoginBtn = document.querySelector('.gnb_login_btn');
  const gnbJoinBtn = document.querySelector('.gnb_join_btn a');  
  const gnbLogoutBtn = document.querySelector ('.gnb_logout_btn')
  const loginSuccess = localStorage.getItem('loggedIn');
  console.log(gnbLoginBtn, gnbJoinBtn, gnbLogoutBtn);

  // @@@@ login_logout_event
  // localstorage를 문자열로 불러왔기 때문에 ==='true'로 체크
  if (loginSuccess === 'true') {
    gnbLoginBtn.style.display = 'none';
    gnbJoinBtn.style.display = 'none';
    gnbLogoutBtn.style.display = 'inline-block';
    } else {
    gnbLoginBtn.style.display = 'inline-block';
    gnbJoinBtn.style.display = 'inline-block';
    gnbLogoutBtn.style.display = 'none';
    }

  gnbLogoutBtn.addEventListener('click', () => {
    localStorage.removeItem('loggedIn');
    location.reload();

  });
});