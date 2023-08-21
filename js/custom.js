//Button Hover Effect

const btnobj = {
  commonBtn: '.common-btn', //버튼 요소
  wArrow: '.white', // 흰색 화살표 요소
  bArrow: '.black', // 검은색 화살표 요소
};

// 호버 시 화살표 색상 교체 함수 정의
function btnHoverEffect(obj) {
  const hoverBtn = document.querySelectorAll(obj.commonBtn);
  console.log(hoverBtn);

  hoverBtn.forEach((btn) => {
    const wArrow = btn.querySelector(obj.wArrow);
    const bArrow = btn.querySelector(obj.bArrow);

    btn.addEventListener('mouseenter', function () {
      wArrow.style.display = 'block';
      bArrow.style.display = 'none';
    });

    btn.addEventListener('mouseleave', function () {
      wArrow.style.display = 'none';
      bArrow.style.display = 'block';
    });
  });
}

btnHoverEffect(btnobj); // 함수 호출

// Swiper Plugin Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  },
});

// mobile header toggle active
1. 아이콘 클릭 -> 1. 아이콘에 'on' 클래스 추가 -> 3. 네비게이션 높이 저장 -> 4. 'on' 클래스가 있을 때 네비게이션 활성화 -> 5. 'on' 클래스가 있을 때 네비게이션 바 활성화

const menuIcon = document.querySelector('menu-icon'); //메뉴 아이콘 요소 저장
const navi = document.querySelector('.navi'); // 네비게이션 박스 요소 저장

// console.log('menuIcon', menuIcon);
// console.log('navi', navi);

menuIcon.addEventListener('click', function() {
  // console. log(this);
  this.classlist.toggle('on');

  const naviHeight = navi.scrollHeight //
  // console .log(naviheight)

  if(this.classlist.toggle('on')){
    navi console
    //console. log(true); // menu-icon에 on클래스가 있다면
  }else {
    //console. log(false): //
    navi.style.height = 0
  }
});

//If pc size browser, navigation height to narmal
window.addEventListener('resize', function (){
  const winwidth = windowWidth; // 윈도우 화면 가로 사이즈 저장
  
  if(window > 980){
    menuIcon.classList.remove('on');
    navi.style.height = 'auto';
  }else {
    navi.style.height = 0
  }
});
