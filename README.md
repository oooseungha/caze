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

### 🛠️ 코드 리뷰
## (1) ul > li 구조 기반으로 배너 슬라이드 구현
- Swiper 등 외부 라이브러리 없이 순수 CSS와 transition을 활용해 슬라이드 애니메이션 처리
- input[type="radio"]와 :checked 선택자를 이용해 버튼 클릭 시 슬라이드 위치 이동 제어
- 각 슬라이드 별 left 값 변경으로 이동 효과 구현, transition: all 1s;로 부드러운 애니메이션 적용  
```css

// html > css > main.css
.pro_best_sheet ul {
  width: 2685px;
  position: relative;
  top: 0;
  left: 0;
  transition: all 1s;
}

.pro_best_sheet ul li {
  float: left;
}

.pro_best_sheet_01,
.pro_best_sheet_02,
.pro_best_sheet_03 {
  width: 875px;
  margin: 0 auto;
  display: flex;
}

#best_sheet_01, #best_sheet_02, #best_sheet_03 {
  display: none;
}
#best_sheet_01:checked~.pro_best_outer .pro_best_sheet ul {
  top: 0; left: 0;
}
#best_sheet_01:checked~.pro_best_outer .best_btn_01 {
  display: block;
}
#best_sheet_02:checked~.pro_best_outer .pro_best_sheet ul {
  top: 0; left: -875px;
}
#best_sheet_02:checked~.pro_best_outer .best_btn_02 {
  display: block;
}
#best_sheet_02:checked~.pro_best_outer .best_slider .best_slider_btn {
  top: 0; left: calc(875px / 3);
}
#best_sheet_03:checked~.pro_best_outer .pro_best_sheet ul {
  top: 0; left: -1750px;
}
#best_sheet_03:checked~.pro_best_outer .best_btn_03 {
  display: block;
}
#best_sheet_03:checked~.pro_best_outer .best_slider .best_slider_btn {
  top: 0; left: calc(875px / 3 * 2);
}
```

<details>
  <summary>🔎 HTML 구조 자세히 보기</summary>

  ```html
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
  </section>
```
</details>

<br>

## (2) productList 배열 데이터를 기반으로 웹페이지에 상품 박스를 동적 생성 후 표시
- for 루프를 사용해 배열 list의 각 상품(product) 처리
- DOM 요소 생성 후 appendChild 활용해 DOM 구조 연결 후 최종 렌더링

```javascript
function renderProductList(list = productList) {
  productWrap.innerHTML = '';

  for(let i=0; i<list.length; i++) {
    const product = list[i];

    // DOM 요소 생성
    const proBox = document.createElement('div');
    proBox.setAttribute('class', 'product_box');
    // 이하 하위 DOM 요소 생략

    // DOM 구조 연결
    proBox.appendChild(proImgBox);
    proBox.appendChild(proInfo);
    proBox.appendChild(proPriceBox);
    // 이하 하위 DOM 구조 연결 생략
  }
};
renderProductList();

  
```

<details>
  <summary>🔎 'DOM 요소 생성 및 구조 연결' 생략 없이 전체 보기</summary>
  
```javascript

function renderProductList(list = productList) {
  productWrap.innerHTML = '';

  for(let i=0; i<list.length; i++) {
    const product = list[i];

    // DOM 요소 생성
    const proBox = document.createElement('div');
    proBox.setAttribute('class', 'product_box');

    const proImgBox = document.createElement('div');
    proImgBox.setAttribute('class', 'product_img');
    const proImgA = document.createElement('a');
    proImgA.setAttribute('href', './detail/detail.html');
    const proImg = document.createElement('img');
    proImg.setAttribute('src', product.src);

    const proInfo = document.createElement('div');
    proInfo.setAttribute('class', 'product_info');
    const proNameBox = document.createElement('div');
    proNameBox.setAttribute('class', 'product_name');
    const proNameA = document.createElement('a');
    proNameA.setAttribute('href', './detail/detail.html');
    const proName = document.createElement('p');
    const proNameText = document.createTextNode(product.name);

    const proBtnBox = document.createElement('div');
    proBtnBox.setAttribute('class', 'product_btn');
    const proCart = document.createElement('div');
    proCart.setAttribute('class', 'cart_img');
    const proHeart = document.createElement('div');
    proHeart.setAttribute('class', 'heart_img');

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

    productWrap.appendChild(proBox);
  }
};
renderProductList();

```
</details>

<br>

## (3) 사용자가 정렬 select 옵션 변경 시 배열 선택 기준에 맞춰 정렬 후 렌더링 (sort)
- document.querySelector('.list_sort') → 정렬 선택(select) 요소 호출
- change 이벤트 활용하여 사용자가 옵션 바꿀 시 이벤트 등록
- new Date 활용 날짜 기준 내림차순 정렬

```javascript
const listSort = document.querySelector('.list_sort');
listSort.addEventListener('change', () => {
  
  if (listSort.value === '최신순') {
    productList.sort((proA, proB) => {
      return new Date(proB.update) - new Date(proA.update);
    });
  } else if (listSort.value === '리뷰 많은 순') {
    productList.sort((proA, proB) => {
      return (proB.review - proA.review);
    });
  } else if (listSort.value === '인기순') {
    productList.sort((proA, proB) => {
      return (proB.sell - proA.sell);
    });
  }
  renderProductList();
});
```

<br>

## (4) 체크박스 값에 따라 제품 목록을 필터링 후 화면에 표시 (filter)
- filterOptions(모든 체크박스)을 순회하며 change 이벤트 등록
- 현재 체크된 옵션들을 배열로 추출하며 옵션 타입별로 분류(color, device, event)
- filter 함수 활용하며 각 상품이 체크된 조건과 하나라도 일치하면 포함되도록 필터링 처리
- console.log 활용하여 현재 선택된 필터 값 확인
```javascript

filterOptions.forEach((filterOption) => {
  filterOption.addEventListener('change', () => {
    const checkedOptions = [...filterOptions].filter(option => option.checked);

    const colorFilterValues = checkedOptions
      .filter(opt => opt.dataset.type === 'color')
      .map(opt => opt.value);

    const deviceFilterValues = checkedOptions
      .filter(opt => opt.dataset.type === 'device')
      .map(opt => opt.value);

    const eventFilterValues = checkedOptions
      .filter(opt => opt.dataset.type === 'event')
      .map(opt => opt.value);

    const filteredProducts = productList.filter(product => {
      const colorMatch = colorFilterValues.length === 0 || colorFilterValues.some(val => product.color.includes(val));
      const deviceMatch = deviceFilterValues.length === 0 || deviceFilterValues.some(val => product.device.includes(val));
      const eventMatch = eventFilterValues.length === 0 || eventFilterValues.some(val => product.event.includes(val));

      return colorMatch && deviceMatch && eventMatch;
    });

    console.log('현재 체크된 값:', {
      colorFilterValues,
      deviceFilterValues,
      eventFilterValues
    });

    renderProductList(filteredProducts);
  });
});
```

<br>

## (5) 사용자가 작성한 리뷰 동적으로 HTML에 추가 기능 구현
- 리뷰 텍스트, 별점 등 입력값 가져온 후 slice 활용해 별점 텍스트, 점수 문자열 생성
- new Date 함수로 날짜 호출 후 YYYY.MM.DD 형식 변환
- 리뷰 DOM 구조 생성 후 DOM 구조 연결 이후 UI 상태 초기화
- 리뷰 업로드 시 리뷰 기존 텍스트에서 숫자 추출 후 +1 되도록 코딩 후 화면에 반영

```javascript

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
  // 이하 하위 DOM 요소 생략

  reviewList.appendChild(reviewBox);
  reviewBox.appendChild(reviewText);
  reviewText.appendChild(reviewSubtext);
  // 이하 하위 DOM 구조 연결 생략

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

```

<details>
  <summary>🔎 'DOM 요소 생성 및 구조 연결' 생략 없이 전체 보기</summary>

  
```javascript

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

```
</details>

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
