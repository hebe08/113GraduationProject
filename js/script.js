const navbar = document.getElementById('navbar');
const content = document.querySelector('.content');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  // 在頁面下滑到 200px 的位置時顯示導覽列
  if (scrollPos > 200) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
});


//輪播
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
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