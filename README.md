# 자사 쇼핑몰 웹사이트 제작 프로젝트
HTML, CSS, JavaScript, jQuery 기반의 자사 쇼핑몰 웹사이트 구현
<br/><br/>

### 🌐 프로젝트 소개
계속하여 확산되는 꾸미기 트렌드를 바탕으로,
유행에 민감한 세대를 타깃으로 해 다양한 스마트폰 케이스를 판매하는 쇼핑몰 웹사이트입니다.
<br/><br/>

### 📅 기획/개발 기간
- 25.04.02. ~ 25.05.27.  
- 기획 1주 | 설계·디자인 3주 | 개발 3주
<br/><br/>

### 💡 기획의도
**문제점**
- 기종마다 제공되는 스마트폰 케이스가 다르기 때문에 카테고리 세분화 없을 시 검색의 어려움  
- 본인이 찾는 제품을 제품명이 아니어도 직관적으로 빠르게 찾을 수 있는 기능 필요
- 유행하는 감성과 디자인에 치중한 웹사이트는 필터 기능이 부재하거나 기종 등 분류에 있어 불친절한 정보구조  

**개선 방향**
- 메타포, 이미지 활용을 통해 보다 더 직관적인 카테고리 분류
- 색상, 기종, 가격대 등 필터 기능 활용
- 정렬 기능 구현하여 빠르게 원하는 제품을 찾을 수 있도록 서비스 제공
<br/><br/>

### 📍 프로젝트 목표
- 화이트와 블랙이 주가 되는 심플하고 깔끔한 홈페이지 레이아웃
- 메인 타겟인 20대 여성이 선호하는 젊은 감성에 맞추어 큐레이션 등을 통한 제품 추천
- 상품 정렬 서비스 제공(신상품, 추천상품, 리뷰 많은 순, 가격 높은 순, 가격 낮은 순 등)
- 우측 하단 탑 버튼, 최근 본 상품, 챗봇 버튼 제공하여 편리성 제고
<br/><br/>

### 📐 디자인 가이드
![스타일 가이드 1-100](https://github.com/user-attachments/assets/0ce1ca5c-b09b-401d-a43c-2c1d577e1d49)
![스타일 가이드 2-100](https://github.com/user-attachments/assets/79bbd8ac-a6bc-43bd-90ee-63597afdf051)
<br/><br/>


### 🛠️ 코드 리뷰
(1) ul > li 구조 기반으로 배너 슬라이드 구현
- Swiper 등 외부 라이브러리 없이 순수 CSS와 transition을 활용해 슬라이드 애니메이션 처리
- input[type="radio"]와 :checked 선택자를 이용해 버튼 클릭 시 슬라이드 위치 이동 제어
- 각 슬라이드 별 left 값 변경으로 이동 효과 구현, transition: all 1s;로 부드러운 애니메이션 적용  

``` javascript

// html > index.html
<section class="pro_best_sheet">
  <ul>
    <li class="pro_best_sheet_01">
      <div class="pro_best best01">
        <a href="./sub/detail/detail.html" class="best_img">
          <img src="./image/best_pro_01.jpg" alt="베스트 제품 01">
        </a>
        <div class="pro_best_info">
          <a href="./sub/detail/detail.html">
            <p>소프트 러브 버니(범퍼) 아이폰케이스</p>
          </a>
          <a href="./sub/detail/detail.html">
            <p>17,000</p>
          </a>
        </div>
        <div class="best_num">
          <span>1</span>
        </div>
      </div>
    <!--pro_best_sheet_01 이하 내용 생략-->
    </li>
    <li class="pro_best_sheet_02">
    <!--pro_best_sheet_02 생략-->
    </li>
    <li class="pro_best_sheet_03">
    <!--pro_best_sheet_03 생략-->
    </li>
  </ul>
</section><!--pro_best_sheet-->
```

```javascript

// html > css > main.css
/* ---- 제품 슬라이드 전체 컨테이너 ---- */
.pro_best_sheet ul {
  width: 2685px; /* 세 개의 li(875px * 3) 넓이 합 */
  position: relative; /* left/top 값으로 이동 가능하도록 설정 */
  top: 0;
  left: 0;
  transition: all 1s; /* 슬라이드 이동 시 부드러운 애니메이션 효과 */
}

/* 각 li 항목은 좌측으로 배치 */
.pro_best_sheet ul li {
  float: left; /* li를 가로로 나열 */
}

.pro_best_sheet_01,
.pro_best_sheet_02,
.pro_best_sheet_03 {
  width: 875px; /* 한 화면에 표시될 슬라이드 넓이 */
  margin: 0 auto; /* 중앙 정렬 */
  display: flex; /* 내부 제품들을 가로로 배치 */
}

/* ---- 라디오 버튼 활용 슬라이드 제어 ---- */
#best_sheet_01, #best_sheet_02, #best_sheet_03 {display: none;} /* 화면에는 라디오 버튼 숨김 처리 */

/* 1번 슬라이드 선택 시 ul 위치를 첫 번째 슬라이드로 이동 */
#best_sheet_01:checked~.pro_best_outer .pro_best_sheet ul {
  top: 0; left: 0;
}
#best_sheet_01:checked~.pro_best_outer .best_btn_01 {
  display: block; /* 1번 버튼 표시 */
}

/* 2번 슬라이드 선택 시 ul 위치를 두 번째 슬라이드로 이동 */
#best_sheet_02:checked~.pro_best_outer .pro_best_sheet ul {
  top: 0; left: -875px;
}
#best_sheet_02:checked~.pro_best_outer .best_btn_02 {
  display: block; /* 2번 버튼 표시 */
}
#best_sheet_02:checked~.pro_best_outer .best_slider .best_slider_btn {
  top: 0; left: calc(875px / 3); /* 슬라이더 버튼 위치 조정 (두 번째 위치) */
}

/* 3번 슬라이드 선택 시 ul 위치를 두 번째 슬라이드로 이동 */
#best_sheet_03:checked~.pro_best_outer .pro_best_sheet ul {
  top: 0; left: -1750px;
}
#best_sheet_03:checked~.pro_best_outer .best_btn_03 {
  display: block; /* 3번 버튼 표시 */
}
#best_sheet_03:checked~.pro_best_outer .best_slider .best_slider_btn {
  top: 0; left: calc(875px / 3 * 2);  /* 슬라이더 버튼 위치 조정 (세 번째 위치) */
}
```

(2) productList 데이터를 받아 HTML에 렌더링
- 상품 데이터를 동적으로 HTML에 생성
- DOM 구조와 UI 분리를 통한 유지보수 용이성  

```javascript
// 기본값은 data.js에서 import한 productList
function renderProductList(list = productList) {
  productWrap.innerHTML = ''; // 기존 내용 초기화

  for(let i=0; i<list.length; i++) {
    const product = list[i];

    // 상품 박스 생성
    const proBox = document.createElement('div');
    proBox.setAttribute('class', 'product_box');

    // 이미지 영역
    const proImgBox = document.createElement('div');
    proImgBox.setAttribute('class', 'product_img');
    const proImgA = document.createElement('a');
    proImgA.setAttribute('href', './detail/detail.html');
    const proImg = document.createElement('img');
    proImg.setAttribute('src', product.src);

    // 정보 영역
    const proInfo = document.createElement('div');
    proInfo.setAttribute('class', 'product_info');
    const proNameBox = document.createElement('div');
    proNameBox.setAttribute('class', 'product_name');
    const proNameA = document.createElement('a');
    proNameA.setAttribute('href', './detail/detail.html');
    const proName = document.createElement('p');
    const proNameText = document.createTextNode(product.name);

    // 버튼 영역 (장바구니, 하트)
    const proBtnBox = document.createElement('div');
    proBtnBox.setAttribute('class', 'product_btn');
    const proCart = document.createElement('div');
    proCart.setAttribute('class', 'cart_img');
    const proHeart = document.createElement('div');
    proHeart.setAttribute('class', 'heart_img');


    // 가격 영역
    const proPriceBox = document.createElement('div');
    proPriceBox.setAttribute('class', 'product_price');
    const proPriceA = document.createElement('a');
    proPriceA.setAttribute('href', './detail/detail.html');
    const proPrice = document.createElement('div');
    const proPriceText = document.createTextNode(product.price);

    // DOM 구조 연결
    proBox.appendChild(proImgBox);
    proBox.appendChild(proInfo);
    proBox.appendChild(proPriceBox);

    proImgBox.appendChild(proImgA);
    proImgA.appendChild(proImg);

    proInfo.appendChild(proNameBox);
    proInfo.appendChild(proBtnBox);
    proNameBox.appendChild(proNameA);
    proNameA.appendChild(proName);
    proName.appendChild(proNameText);

    proBtnBox.appendChild(proCart);
    proBtnBox.appendChild(proHeart);

    proPriceBox.appendChild(proPriceA);
    proPriceA.appendChild(proPrice);
    proPrice.appendChild(proPriceText);

    // 최종적으로 상품 박스를 productWrap에 추가
    productWrap.appendChild(proBox);
  }
};

// 초기 렌더링
renderProductList();
```

(3) select 요소 값 변경 시 정렬 기능 (sort)
- listSort select 요소에서 값이 바뀌면 이벤트 리스너 실행
- 선택된 기준에 따라 productList 배열을 정렬

```javascript
// select 요소 값 변경 시 정렬 기능
const listSort = document.querySelector('.list_sort');
listSort.addEventListener('change', () => {
  
  if (listSort.value === '최신순') {
    // update 날짜 기준 내림차순 정렬
    productList.sort((proA, proB) => {
      return new Date(proB.update) - new Date(proA.update);
    });
  } else if (listSort.value === '리뷰 많은 순') {
    // review 수 기준 내림차순 정렬
    productList.sort((proA, proB) => {
      return (proB.review - proA.review);
    });
  } else if (listSort.value === '인기순') {
    // 판매량(sell) 기준 내림차순 정렬
    productList.sort((proA, proB) => {
      return (proB.sell - proA.sell);
    });
  }
  // 정렬 후 다시 렌더링
  renderProductList();
});
```

(4) 체크박스 필터링 기능 구현 (filter)
- 체크된 옵션 값 추출 -> productList 필터링 -> 렌더링
- 선택하지 않은 필터는 모든 항목 허용, 여러 필터 동시 적용 가능
```javascript

// 각 필터 옵션(input[type="checkbox"])에 change 이벤트
filterOptions.forEach((filterOption) => {
  filterOption.addEventListener('change', () => {
    // 체크된 옵션만 배열로 추출
    const checkedOptions = [...filterOptions].filter(option => option.checked);

    // color 타입 체크박스의 value 추출
    const colorFilterValues = checkedOptions
      .filter(opt => opt.dataset.type === 'color') // 데이터 속성 type이 color인 경우
      .map(opt => opt.value); // value 값 배열로 저장

    // device 타입 체크박스의 value 추출
    const deviceFilterValues = checkedOptions
      .filter(opt => opt.dataset.type === 'device')
      .map(opt => opt.value);

    // event 타입 체크박스의 value 추출
    const eventFilterValues = checkedOptions
      .filter(opt => opt.dataset.type === 'event')
      .map(opt => opt.value);

    // productList를 필터링
    const filteredProducts = productList.filter(product => {
      // color 필터 조건 확인: 선택된 값 없으면 모두 true, 있으면 포함 여부 확인
      const colorMatch = colorFilterValues.length === 0 || colorFilterValues.some(val => product.color.includes(val));
      // device 필터 조건 확인
      const deviceMatch = deviceFilterValues.length === 0 || deviceFilterValues.some(val => product.device.includes(val));
      // event 필터 조건 확인
      const eventMatch = eventFilterValues.length === 0 || eventFilterValues.some(val => product.event.includes(val));

      // 세 조건 모두 충족하면 true
      return colorMatch && deviceMatch && eventMatch;
    });

    // 현재 체크된 필터 값 콘솔에 확인
    console.log('현재 체크된 값:', {
      colorFilterValues,
      deviceFilterValues,
      eventFilterValues
    });

    // 필터링된 제품 목록 HTML로 렌더링
    renderProductList(filteredProducts);
  });
});

```

(5) 사용자가 작성한 리뷰 동적으로 HTML에 추가 기능 구현
- 리뷰 입력값과 별점, 작성자, 옵션, 날짜 가져오기
- 리뷰 리스트 최상단 삽입
- 모달 닫기 및 입력값 초기화
- 리뷰 업로드 시 리뷰 개수 업데이트

```javascript

reviewUploadBtn.addEventListener('click', (e) => {
  e.preventDefault(); // 기본 제출 이벤트 막기
  if (reviewUploadBtn.disabled) return; // 버튼 비활성화 상태 시 종료

  // 입력값 가져오기
  let reviewInnerText = reviewContext.value; // 리뷰 내용
  let reviewStarValue = reviewStarBox.value; // 별점 숫자
  // 별점 텍스트 변환: 예) ★★★☆☆
  let reviewStarText = '★★★★★'.slice(0, reviewStarValue) + '☆☆☆☆☆'.slice(reviewStarValue); 
  let reviewScoreText = `${reviewStarValue}.0`; // 별점 점수 표시
  const reviewCount = document.querySelector('.review_count'); // 리뷰 개수 표시

  // 리뷰 작성 날짜 생성
  const today = new Date();
  const reviewDateText = `${today.getFullYear()}.${(today.getMonth() + 1).toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}.`;

  const reviewOptionText = '선택 옵션: 아이폰14 Pro'; // 옵션 텍스트(예시)

  // 리뷰 박스 div 생성
  const reviewBox = document.createElement('div');
  reviewBox.setAttribute('class', 'review_box');

  const reviewText = document.createElement('div');
  reviewText.setAttribute('class', 'review_text');

  const reviewSubtext = document.createElement('div');
  reviewSubtext.setAttribute('class', 'review_subtext');

  // 작성자 이름 span 생성
  const reviewerName = document.createElement('span');
  reviewerName.setAttribute('class', 'reviewer_name');
  reviewerName.innerText = reviewerNameInput.value;

  // 구분용 슬래시 span 생성
  const reviewSlash = document.createElement('span');
  reviewSlash.setAttribute('class', 'review_slash');
  reviewSlash.innerText = ' / '

  // 날짜 span 생성
  const reviewDate = document.createElement('span');
  reviewDate.setAttribute('class', 'review_date');
  reviewDate.innerText = reviewDateText;

  const reviewBr1 = document.createElement('br'); // 줄바꿈

  // 별점 span 생성
  const reviewStar = document.createElement('span');
  reviewStar.setAttribute('class', 'review_star');
  reviewStar.innerText = `${reviewStarText} `;

  // 별점 점수 span 생성
  const reviewScore = document.createElement('span');
  reviewScore.setAttribute('class', 'review_score');
  reviewScore.innerText = reviewScoreText;

  const reviewBr2 = document.createElement('br'); // 줄바꿈

  // 옵션 텍스트 span 생성
  const reviewOption = document.createElement('span');
  reviewOption.setAttribute('class', 'review_option');
  reviewOption.innerText = reviewOptionText;

  // 리뷰 내용 div 생성
  const reviewContentBox = document.createElement('div');
  reviewContentBox.setAttribute('class', 'review_content_box');

  const reviewContent = document.createElement('p');
  reviewContent.setAttribute('class', 'review_content');
  reviewContent.innerText = reviewInnerText;

  // DOM 구조 연결
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

  // 새 리뷰를 리스트 최상단에 삽입
  reviewList.insertBefore(reviewBox, reviewList.children[0]);

  // 모달 닫기 및 입력 초기화
  reviewModalWrap.style.display = 'none';
  reviewerNameInput.value = '';
  reviewStarBox.value = 0;
  reviewContext.value = '';

  // 리뷰 카운트 업데이트
  let countText = reviewCount.innerText;
  let count = parseInt(countText[countText.length - 2]); // 문자열에서 숫자 추출

  count++;
  reviewCount.innerText = `(${count})`;

});

```
<br/>

### 🔍 코드 리뷰 요약
- ul > li 구조 + CSS transition으로 외부 라이브러리 없이 슬라이드 구현
- productList 기반 DOM 동적 생성, UI/데이터 분리
- select 입력 값 변경 시 최신·리뷰·인기순으로 배열 정렬 후 재렌더링
- 체크박스 선택 값으로 color/device/event 조건 필터링 후 재렌더링
- 작성 리뷰를 동적 추가, 최상단 삽입, 모달 닫기 및 입력 초기화, 개수 업데이트
<br><br/>

### 🔹 학습 포인트
- 순수 CSS와 transition을 활용한 슬라이드 애니메이션 구현 경험
- input[type="radio"] + :checked 선택자 조합으로 상태 기반 UI 제어 방법 습득
- DOM API를 사용하여 데이터 기반 HTML 렌더링 및 동적 UI 구성 능력 강화
- 배열 정렬(sort)과 필터(filter) 로직을 통해 사용자 인터랙션 기반 데이터 처리 경험
- 모달, 입력 초기화, 리뷰 개수 업데이트 등 UI 상태 관리 및 동적 이벤트 처리 실습
<br/><br/>
