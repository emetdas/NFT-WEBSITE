let nav_toggle = document.querySelector('.nav_toggle');
let nav_toggle_icon = document.querySelector('.toggle_icon');
let nav_menu = document.querySelector('.nav_menu');

nav_toggle.addEventListener('click', () => {
  nav_toggle.classList.toggle('toggle_active');

  nav_toggle.classList.contains('toggle_active')
    ? nav_toggle_icon.setAttribute('name', 'close-outline')
    : nav_toggle_icon.setAttribute('name', 'grid-outline');
  nav_toggle.classList.contains('toggle_active')
    ? nav_menu.classList.add('active_menu')
    : nav_menu.classList.remove('active_menu');
});

const nft_collection = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },
  },
});
// Counter
let counters = document.querySelectorAll('.counter span');
let speed = 250;
counters.forEach((counter, index) => {
  function UpdateCounter() {
    const targetNumber = +counter.dataset.target;
    const initialNumber = +counter.innerText;
    const incPerCount = targetNumber / speed;
    if (initialNumber < targetNumber) {
      counter.innerText = Math.ceil(initialNumber + incPerCount);
      setTimeout(UpdateCounter, 40);
    } else {
      counter.innerText = targetNumber;
    }
  }
  UpdateCounter();
});
// Counter
// FAQ
let faq_list_header = document.querySelectorAll('.faq-list .faq-header');
faq_list_header.forEach((list) => {
  list.addEventListener('click', () => {
    list.classList.toggle('active');
    list.nextElementSibling.classList.toggle('active');
  });
});
// FAQ
let back_to_top = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    back_to_top.classList.add('show');
  } else {
    back_to_top.classList.remove('show');
  }
});
back_to_top.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
