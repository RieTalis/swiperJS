let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);



let hideSlide = document.querySelector('.swiper-slide:nth-child(5)')

function hide() { 
if (window.innerWidth <= 768 ) {
  hideSlide.classList.add('hidden');
  }
}
hide();


let wrapper = document.getElementById('myWrapper');
let readMore = document.querySelector('.read-more');
let rotate = document.querySelector('.expand');


readMore.addEventListener('click', function () {
    if (!init) {
      init = true;
      wrapper.classList.add('swiper-wrapper-opened');
      readMore.textContent = 'Скрыть';
      rotate.style.transform = "rotate(180deg)";
    } else if (init) {
      wrapper.classList.remove('swiper-wrapper-opened');
      readMore.textContent = 'Показать всё';
      rotate.style.transform = "rotate(360deg)";
      init = false;
    }
});


