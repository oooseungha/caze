// -------------- jQuery
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

  const openBtn = $('.wrap .aside .sub_menu .category .iphone label');
  const asideMenu = $('.wrap .aside .sub_menu .category .iphone .category_iphone');
  

  // ==============================
  // event
  // ==============================
  // @@@@ gnb_full_down
  iphoneBtn.mouseover(function() {
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

  // @@@@ aside_category_event
  openBtn.click(function(){
    let asideMenuHeight = asideMenu.height();
    if (asideMenuHeight == 0) {
      asideMenu.stop().animate({
        height: 210
      }, 300);
    } else {
      asideMenu.stop().animate({
        height: 0
      }, 300);
    }
    });

}); 




// ----------------------- JavaScript
import productList from "./data.js";
document.addEventListener('DOMContentLoaded', function(){
  // ==============================
  // 전역 변수
  // ==============================
  let pageBtn = document.querySelector('.wrap .sub_product .page_btn');
  const productWrap = document.querySelector('.product_list');
  const filterOptions = document.querySelectorAll('.filter_box input');


  // ==============================
  // function
  // ==============================
  // @@@@ sub_page_btn_event
  pageBtn.addEventListener('click', function(){
    window.scrollTo(0, 0)
  }) 


  // @@@@ product_list_database
  function renderProductList(list = productList) {
    productWrap.innerHTML = '';

    for(let i=0; i<list.length; i++) {
      const product = list[i];

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


  // @@@@ product_list_sort
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


  // @@@@ product_list_filter
  filterOptions.forEach((filterOption) => {
    filterOption.addEventListener('change', () => {
      const checkedOptions = [...filterOptions].filter(option => option.checked);

      const colorFilterValues = checkedOptions
        .filter(opt => opt.dataset.type === 'color')
        .map(opt => opt.value);

      // const deviceFilterType = checkedOptions.filter(opt => {
      //   return opt.dataset.type === 'device';
      // });
      // const deviceFilterValue = deviceFilterType.map(opt => {
      //   return opt.value
      // });

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

});
