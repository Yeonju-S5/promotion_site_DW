
// 메인 메뉴
const mainOuter = document.querySelector('.main_menu_outer');
const mainList = document.querySelector('.main_list');
const fulldownMenu = document.querySelector('.fulldown_menu');

mainList.addEventListener('mouseenter', () => {
  gsap.to(fulldownMenu, {
    opacity: 1,
    visibility: 'visible',
    pointerEvents: 'auto',
    duration: 0.4,
    ease: "power2.out"
  });
});

mainOuter.addEventListener('mouseleave', () => {
  gsap.to(fulldownMenu, {
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    duration: 0.3,
    ease: "power2.in"
  });
});

// 탑 버튼
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const bannerHeight = document.querySelector('.main_banner').offsetHeight;

  if (scrollTop > bannerHeight * 0.5) {
    gsap.to(".top_btn", {
      opacity: 1,
      visibility: "visible",
      duration: 0.3,
      overwrite: "auto"
    });
  } else {
    gsap.to(".top_btn", {
      opacity: 0,
      visibility: "hidden",
      duration: 0.3,
      overwrite: "auto"
    });
  }

});

const btnTop = document.querySelector('.top_btn');

btnTop.addEventListener('click', () => {
  gsap.to(window, {
    scrollTo: 0,
    duration: 1,
    ease: "power2.inOut"
  });
});


// Slide00_Main-banner

// 메인배너-스크롤
$(function () {
  let isMoving = false;

  $(window).on('mousewheel', function (event) {
    let delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
    let scrollTop = $(window).scrollTop();
    let bannerHeight = $('.main_banner').height();

    if (delta < 0 && scrollTop < bannerHeight / 2 && !isMoving) {
      isMoving = true;
      $('html, body').stop().animate({
        scrollTop: $('.wrap').offset().top
      }, 800, function () {
        isMoving = false;
      });
      return false;
    }

    if (delta > 0 && scrollTop <= $('.wrap').offset().top + 10 && !isMoving) {
      isMoving = true;
      $('html, body').stop().animate({
        scrollTop: 0
      }, 600, function () {
        isMoving = false;
      });
      return false;
    }
  });
});


// 메인배너-슬라이드
$(function () {
  $('.slide_wrapper').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    speed: 1000
  });

  $('.banner_pagination label').eq(0).css('background-color', '#EE1C25');

  $('.banner_pagination label').click(function () {
    let idx = $(this).index();
    $('.slide_wrapper').slick('slickGoTo', idx);
  });


  $('.slide_wrapper').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    $('.banner_pagination label').css('background-color', '#D9D9D9');
    $('.banner_pagination label').eq(nextSlide).css('background-color', '#EE1C25');
  });
});


// Slide01_Company-introduce
$(function () {

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page01",
      start: "top 20%",
      toggleActions: "play none none none"
    }
  });

  let countObj = { val: 1897 };

  tl.to(".img_page01", {
    width: "100%",
    duration: 1,
    ease: "power3.inOut"
  })

  tl.to(".company_years", { opacity: 1, duration: 0.5 })

    .to(countObj, {
      val: 2026,
      duration: 1,
      ease: "power2.out",
      onUpdate: function () {
        let current = Math.floor(countObj.val);
        if (current < 2020) current = Math.floor(current / 10) * 10;
        $(".company_years").text(current);
      }
    })

    .to(".desc_txt", {
      opacity: 1,
      y: -10,
      duration: 0.6,
      onStart: function () {
        $(".desc_txt").addClass("active");
      }
    }, "-=0.3")

    .to(".num_info_page01 p", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    })

    .to(".divider", {
      height: "40px",
      duration: 0.3,
      stagger: 0.2,
      ease: "power1.inOut"
    }, "<0.2");

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page02",
      start: "top center",
      toggleActions: "play none none none"
    }
  });

  // Slide02_Company-info
  tl2.to(".opacity_txt_page02", { opacity: 1, y: 0, duration: 1 });

  gsap.utils.toArray(".content_item").forEach((item, i) => {
    ScrollTrigger.create({
      trigger: item,
      start: "top center",
      end: "bottom center",
      onToggle: self => {
        if (self.isActive) {
          $(".pin_item").removeClass("active");
          $(".pin_item").eq(i).addClass("active");
        }
      }
    });
  });

  btnTop.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: 0
    });
  });
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".item02_list",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

tl3.to(".item02_list li", {
  opacity: 1,
  y: 0,
  duration: 0.3,
  stagger: 0.3,
  ease: "power2.out",
  onComplete: function () {
    gsap.set(".item02_list li", { clearProps: "transform" });
  }
});


const pinItems = document.querySelectorAll('.pin_item');

pinItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    const allTriggers = ScrollTrigger.getAll();
    const targetId = `content0${index + 1}`;
    const targetST = allTriggers.find(st => st.trigger && st.trigger.id === targetId);

    if (targetST) {
      const currentScroll = window.scrollY;
      const targetScroll = targetST.start + 280;

      let scrollObj = { y: window.scrollY };
      gsap.to(scrollObj, {
        y: targetScroll,
        duration: 1.2,
        ease: "power2.inOut",
        onUpdate: () => window.scrollTo(0, scrollObj.y)
      });
    }
  });
});

// Slide03_Product-info

const slideBtns = document.querySelectorAll('.slide_btn');
const prevBtn = slideBtns[0];
const nextBtn = slideBtns[1];

const sliderWrapper = document.querySelector('.slider_wrapper');
const products = document.querySelectorAll('.slider_wrapper > div');

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  if (currentIndex < products.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  move();
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = products.length - 1;
  }
  move();
});

function move() {
  const slideWidth = products[0].offsetWidth;
  const gap = 40;
  const moveDistance = (slideWidth + gap) * currentIndex;

  gsap.to(sliderWrapper, {
    x: -moveDistance,
    duration: 0.6,
    ease: "power2.out"
  });
}

// list_btn

const listBtns = document.querySelectorAll('.list_btn');
const productList = document.querySelector('.product_list');
const listClose = document.querySelector('.list_close');

listBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    productList.classList.add('on');
  });
});

listClose.addEventListener('click', () => {
  productList.classList.remove('on');
});

// list_move

const listItems = document.querySelectorAll('.product_list li');

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    const targetIndex = Number(item.getAttribute('data-target'));
    currentIndex = targetIndex;
    move();
    productList.classList.remove('on');
  });
});


// Slide04_Company-news

gsap.fromTo(".news_slide > div",
  {
    y: 30,
    opacity: 0
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page04",
      start: "top 50%",
      toggleActions: "play none none none"
    },
    onComplete: function () {
      gsap.set(".news_slide > div", { clearProps: "transform" });
    }
  }
);

// footer_brand_line

gsap.fromTo(".brand_line_top",
  { xPercent: -30 },   // 시작: 왼쪽으로 절반 가있는 상태
  {
    xPercent: 0,       // 끝: 원래 자리로
    duration: 30,
    repeat: -1,
    ease: "none"
  }
);


gsap.to(".brand_line_bottom", {
  xPercent: -30,
  duration: 30,
  repeat: -1,
  ease: "none"
});

