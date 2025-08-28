// ----------------------- jQuery
$(function () {
  // ==============================
  // 전역 변수
  // ==============================
  let iphoneBtn = $('.gnb .gnb_menu .gnb_iphone');
  let iphoneMenu = $('.gnb .gnb_menu .gnb_iphone ul li');

  let galaxyBtn = $('.gnb .gnb_menu .galaxy');
  let galaxyMenu = $('.gnb .gnb_menu .galaxy ul li');
  
  let earBtn = $('.gnb .gnb_menu .gnb_ear');
  let earMenu = $('.gnb .gnb_menu .gnb_ear ul li');

  let accBtn = $('.gnb .gnb_menu .gnb_acc');
  let accMenu = $('.gnb .gnb_menu .gnb_acc ul li');

  let topBtn = $('.wing_banner .top_btn');


  // ==============================
  // event
  // ==============================
  // @@@@ gnb_full_down
  iphoneBtn.mouseover(function () {
    iphoneMenu.stop().slideDown(300);
  });
  iphoneBtn.mouseout(function () {
    iphoneMenu.stop().slideUp(300);
  });

  galaxyBtn.mouseover(function () {
    galaxyMenu.stop().slideDown(300);
  });
  galaxyBtn.mouseout(function () {
    galaxyMenu.stop().slideUp(300);
  });

  earBtn.mouseover(function () {
    earMenu.stop().slideDown(300);
  });
  earBtn.mouseout(function () {
    earMenu.stop().slideUp(300);
  });

  accBtn.mouseover(function () {
    accMenu.stop().slideDown(300);
  });
  accBtn.mouseout(function () {
    accMenu.stop().slideUp(300);
  });


  // @@@@ fixed_event 
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
      $('.header_02_outer').addClass('fixed');
    } else {
      $('.header_02_outer').removeClass('fixed');
    }
  });


  // @@@@ top_btn_event
  topBtn.click(function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
      scrollTop: 0
    }, 500)
  });

});




// ----------------------- JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // ==============================
  // 전역 변수
  // ==============================
  const keywordBtns = document.querySelectorAll('.keyword_img_box');
  let keywordInput = document.getElementById('keyword_input');


  // ==============================
  // addEventListener
  // ==============================
  keywordBtns.forEach((keywordBtn) => {
    keywordBtn.addEventListener('click', keywordClick)
  })


  // ==============================
  // function
  // ==============================
  // @@@@ wide_banner_swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 700,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // @@@@ keyword_event
  function keywordClick(e) {

    const keywordName = e.currentTarget.querySelector('.keyword_box a span').innerText;

    keywordInput.value = keywordName
  }

});
