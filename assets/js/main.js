const myNav = document.getElementById('nav-bar');
const myNavLink = document.querySelectorAll('#navLink');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function () {
  myNav.classList.add('show');
});
closeBtn.addEventListener('click', function () {
  myNav.classList.remove('show');
});
myNavLink.forEach((link) => {
  link.addEventListener('click', function () {
    myNav.classList.remove('show');
  });
});

/* product dropdown */

const dropdownDetailsBtn = document.querySelector('.product-dropdown'),
      dropdownDetails = document.querySelector('.product-dropdown-details'),
      dropdownArrow = document.querySelector('.product-arrow');
dropdownDetailsBtn.addEventListener('click', () => {
  dropdownDetails.classList.toggle('show-product-dropdown');
  dropdownArrow.classList.toggle('flip-arrow')
});

/* Home section animation */

const titleLeft = document.querySelector('.title-left'),
  titleright = document.querySelector('.title-right'),
  homeImg = document.querySelector('.home-img');
/* Image */
/* text */
window.addEventListener('scroll', () => {
  homeImg.style.transform = `rotate(${scrollY}deg)`;
  titleLeft.style.transform = `translateX(-${scrollY}px)`;
  titleright.style.transform = `translateX(${scrollY}px)`;
});

/* co-ownership section animation */

const featuresContainer = document.querySelector('.features-cards-container'),
  featureCard = document.querySelector('.feature-card'),
  indicators = document.querySelectorAll('.indicator');

setInterval(function () {
  const cardWidth = featureCard.offsetWidth,
    featuresContainerWidth = featuresContainer.offsetWidth,
    limit = featuresContainerWidth + cardWidth;
  if (featuresContainer.scrollLeft >= limit) {
    featuresContainer.scrollLeft = 0;
  } else {
    featuresContainer.scrollLeft += cardWidth;
  }
}, 3000);
