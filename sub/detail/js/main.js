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
  let detailTab = $('.detail_sheet_wrap .detail_tab_list div a')


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


  // @@@@ fixed_event @@@@
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

  // @@@@ click_scroll_event
  detailTab.click(function (e) {
    e.preventDefault();
    $(window).scrollTo(this.hash || 0, 1000);
  });

}); 




// ----------------------- JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // ==============================
  // 전역 변수
  // ==============================
  const amountMinus = document.querySelector('.amount_minus');
  const amountPlus = document.querySelector('.amount_plus');
  const amount = document.querySelector('.amount');
  const amountPrice = document.querySelector('.amount_price span');
  const lastPrice = document.querySelector('.last_price');
  const reviewModalWrap = document.querySelector('.review_modal_wrap');
  const reviewModalBtn = document.querySelector('.review_modal_btn');
  const reviewCancleBtn = document.querySelector('.review_modal_wrap .detail_cancle_btn');
  const reviewModalXBtn = document.querySelector('.modal_x_btn');
  const reviewList = document.querySelector('.review_list');
  const reviewUploadBtn = document.querySelector('.review_modal_wrap .detail_submit_btn');
  const reviewContext = document.querySelector('.review_context'); 
  const reviewerNameInput = document.querySelector('.reviewer_name_input');
  const reviewStarBox = document.querySelector('.review_star_select');
  const qnaModalWrap = document.querySelector('.qna_modal_wrap');
  const qnaModalBtn = document.querySelector('.qna_modal_btn');
  const qnaCancleBtn = document.querySelector('.qna_modal_wrap .detail_cancle_btn');
  const qnaModalXBtn = document.querySelector('.qna_modal_wrap .modal_x_btn');
  const qnaListBox = document.querySelector('.qna_list_box');
  const qnaUploadBtn = document.querySelector('.qna_modal_wrap .detail_submit_btn');
  const qnaContextInput = document.querySelector('.qna_context'); 
  const qnaNameInput = document.querySelector('.qna_name_input');
  const qnaCategoryBox = document.querySelector('.qna_category_select');
  const reviewRequiredInfos = document.querySelectorAll('.review_modal_wrap .modal_required_info');
  const reviewModalAlert = document.querySelector('.review_modal_wrap .modal_alert');
  const qnaRequiredInfos = document.querySelectorAll('.qna_modal_wrap .modal_required_info');
  const qnaModalAlert = document.querySelector('.qna_modal_wrap .modal_alert');


  // ==============================
  // addEventListener
  // ==============================
  reviewRequiredInfos.forEach((reviewRequiredInfo) => {
    reviewRequiredInfo.addEventListener('input', reviewSubmit);
  });
  reviewStarBox.addEventListener('change', reviewSubmit);
  qnaRequiredInfos.forEach((qnaRequiredInfo) => {
    qnaRequiredInfo.addEventListener('input', qnaSubmit);
  });
  qnaCategoryBox.addEventListener('change', qnaSubmit);

  
  // ==============================
  // reset
  // ==============================
  const price = 22000;
  reviewUploadBtn.disabled = true;
  qnaUploadBtn.disabled = true;


  // ==============================
  // function
  // ==============================
  // @@@@ amount_price_event
  amountMinus.addEventListener('click', () => {
    let nowAmount = parseInt(amount.innerText);
    if (nowAmount > 1) {
      nowAmount--;
      amount.innerText = nowAmount;

      let totalPrice = nowAmount * price;
      amountPrice.innerHTML = totalPrice.toLocaleString();
      lastPrice.innerHTML = totalPrice.toLocaleString();
    };
  });

  amountPlus.addEventListener('click', () => {
    let nowAmount = parseInt(amount.innerText);
    nowAmount++;
    amount.innerText = nowAmount;

    let totalPrice = nowAmount * price;
    amountPrice.innerHTML = totalPrice.toLocaleString();
    lastPrice.innerHTML = totalPrice.toLocaleString();
  });


  // @@@@ review_modal_open_event
  reviewModalBtn.addEventListener('click', () => {
    reviewerNameInput.value = '';
    reviewStarBox.value = '0';
    reviewContext.value = '';

    reviewUploadBtn.disabled = true;
    reviewModalAlert.style.display = 'block';

    reviewModalWrap.style.display = 'block';
  })


  // @@@@ review_modal_cancle_btn
  reviewCancleBtn.addEventListener('click', () => {
    reviewModalWrap.style.display = 'none';
    reviewerNameInput.value = '';
    reviewStarBox.value = 0;
    reviewContext.value = '';
  });

  
  // @@@@ review_modal_X_btn
  reviewModalXBtn.addEventListener('click', () => {
    reviewModalWrap.style.display = 'none';
    reviewerNameInput.value = '';
    reviewStarBox.value = 0;
    reviewContext.value = '';
  });


  // @@@@ review_upload_event
  reviewUploadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (reviewUploadBtn.disabled) return;
    
    let reviewInnerText = reviewContext.value;
    let reviewStarValue = reviewStarBox.value;
    let reviewStarText = '★★★★★'.slice(0, reviewStarValue) + '☆☆☆☆☆'.slice(reviewStarValue); 
    let reviewScoreText = `${reviewStarValue}.0`;
    const reviewCount = document.querySelector('.review_count');

    const today = new Date();
    const reviewDateText = `${today.getFullYear()}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}.`;

    const reviewOptionText = '선택 옵션: 아이폰14 Pro';

    const reviewBox = document.createElement('div');
    reviewBox.setAttribute('class', 'review_box');

    const reviewText = document.createElement('div');
    reviewText.setAttribute('class', 'review_text');

    const reviewSubtext = document.createElement('div');
    reviewSubtext.setAttribute('class', 'review_subtext');

    const reviewerName = document.createElement('span');
    reviewerName.setAttribute('class', 'reviewer_name');
    reviewerName.innerText = reviewerNameInput.value;

    const reviewSlash = document.createElement('span');
    reviewSlash.setAttribute('class', 'review_slash');
    reviewSlash.innerText = ' / '

    const reviewDate = document.createElement('span');
    reviewDate.setAttribute('class', 'review_date');
    reviewDate.innerText = reviewDateText;

    const reviewBr1 = document.createElement('br');

    const reviewStar = document.createElement('span');
    reviewStar.setAttribute('class', 'review_star');
    reviewStar.innerText = `${reviewStarText} `;

    const reviewScore = document.createElement('span');
    reviewScore.setAttribute('class', 'review_score');
    reviewScore.innerText = reviewScoreText;

    const reviewBr2 = document.createElement('br');

    const reviewOption = document.createElement('span');
    reviewOption.setAttribute('class', 'review_option');
    reviewOption.innerText = reviewOptionText;

    const reviewContentBox = document.createElement('div');
    reviewContentBox.setAttribute('class', 'review_content_box');

    const reviewContent = document.createElement('p');
    reviewContent.setAttribute('class', 'review_content');
    reviewContent.innerText = reviewInnerText;


    reviewList.appendChild(reviewBox);
    reviewBox.appendChild(reviewText);
    reviewText.appendChild(reviewSubtext);
    reviewSubtext.appendChild(reviewerName);
    reviewSubtext.appendChild(reviewSlash);
    reviewSubtext.appendChild(reviewDate);
    reviewSubtext.appendChild(reviewBr1);
    reviewSubtext.appendChild(reviewStar);
    reviewSubtext.appendChild(reviewScore);
    reviewSubtext.appendChild(reviewBr2);
    reviewSubtext.appendChild(reviewOption);
    reviewSubtext.appendChild(reviewContentBox);
    reviewContentBox.appendChild(reviewContent);

    reviewList.insertBefore(reviewBox, reviewList.children[0]);


    reviewModalWrap.style.display = 'none';
    reviewerNameInput.value = '';
    reviewStarBox.value = 0;
    reviewContext.value = '';

    let countText = reviewCount.innerText;
    let count = parseInt(countText[countText.length - 2]);

    count++;
    reviewCount.innerText = `(${count})`;

  });


  // @@@@ review_required_input_event
  function reviewSubmit() {
    let reviewRequiredInfoFill = true;

    for(let reviewRequiredInfo of reviewRequiredInfos) {
      if (reviewRequiredInfo.value.trim() === '') {
        reviewRequiredInfoFill = false;
        break;
      } 
    };
    if (reviewStarBox.value === "0") {
      reviewRequiredInfoFill = false;
    }

    if(reviewRequiredInfoFill) {
      reviewModalAlert.style.display = 'none'
      reviewUploadBtn.disabled = false;
    } else {
      reviewModalAlert.style.display = 'block';
      reviewUploadBtn.disabled = true;
    };
  };


  // @@@@ qna_modal_open_event
  qnaModalBtn.addEventListener('click', () => {
    qnaNameInput.value = '';
    qnaCategoryBox.value = '0';
    qnaContextInput.value = '';

    qnaUploadBtn.disabled = true;
    qnaModalAlert.style.display = 'block';

    qnaModalWrap.style.display = 'block';
  });

  
  // @@@@ qna_modal_cancle_btn
  qnaCancleBtn.addEventListener('click', () => {
    qnaModalWrap.style.display = 'none';
    qnaNameInput.value = '';
    qnaCategoryBox.value = 0;
    qnaContextInput.value = '';
  });

  
  // @@@@ qna_modal_X_btn
  qnaModalXBtn.addEventListener('click', () => {
    qnaModalWrap.style.display = 'none';
    qnaNameInput.value = '';
    qnaCategoryBox.value = 0;
    qnaContextInput.value = '';
  });

  
  // @@@@ qna_upload_event

  qnaUploadBtn.addEventListener('click', () => {
    let qnaInnerText = qnaContextInput.value;
    let qnaCategoryValue = qnaCategoryBox.value;
    const qnaCount = document.querySelector('.qna_count');

    const today = new Date();
    const qnaDateText = `${today.getFullYear()}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}.`;
    // ★★★★★

    const qnaList = document.createElement('div');
    qnaList.setAttribute('class', 'qna_list');

    const qnaText = document.createElement('div');
    qnaText.setAttribute('class', 'qna_text');

    const qnaCategory = document.createElement('p');
    qnaCategory.innerText = `[${qnaCategoryValue}]`;

    const qnaATag = document.createElement('a');

    const qnaContent = document.createElement('p');
    qnaContent.innerText = qnaInnerText;

    const qnaInfo = document.createElement('div');
    qnaInfo.setAttribute('class', 'qna_info');

    const qnaName = document.createElement('span');
    qnaName.innerText = qnaNameInput.value;

    const qnaSlash = document.createElement('span');
    qnaSlash.innerText = ' / '

    const qnaDate = document.createElement('span');
    qnaDate.innerText = qnaDateText;

    qnaListBox.appendChild(qnaList);

    qnaList.appendChild(qnaText);
    qnaList.appendChild(qnaInfo);
    qnaText.appendChild(qnaCategory);
    qnaText.appendChild(qnaATag);
    qnaATag.appendChild(qnaContent);
    qnaInfo.appendChild(qnaName);
    qnaInfo.appendChild(qnaSlash);
    qnaInfo.appendChild(qnaDate);

    qnaListBox.insertBefore(qnaList, qnaListBox.children[0]);

    qnaModalWrap.style.display = 'none';
    qnaNameInput.value = '';
    qnaCategoryBox.value = 0;
    qnaContextInput.value = '';

    let countText = qnaCount.innerText;
    let count = parseInt(countText[countText.length - 2]);

    count++;
    qnaCount.innerText = `(${count})`;

  });


  // @@@@ qna_required_inuput_event
  function qnaSubmit() {
    let qnaRequiredInfoFill = true;

    for(let qnaRequiredInfo of qnaRequiredInfos) {
      if (qnaRequiredInfo.value.trim() === '') {
        qnaRequiredInfoFill = false;
        break;
      }
    };

    if(qnaCategoryBox.value === "0") {
      qnaRequiredInfoFill = false;
    }
    if (qnaRequiredInfoFill) {
      qnaModalAlert.style.display = 'none'
      qnaUploadBtn.disabled = false;
    } else {
      qnaModalAlert.style.display = 'block'
      qnaUploadBtn.disabled = true;
    };
  };
  
});