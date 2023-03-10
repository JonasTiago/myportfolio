const menu = document.querySelector('#menu');
const arrow = document.querySelector(".arrow");
const test = document.querySelectorAll("[data-repo]")
console.log(test)

document.addEventListener('scroll', (event) => {
  const scrollPosition = event.target.scrollingElement.scrollTop;
  if (scrollPosition > 10) {
    scrollMax = scrollPosition;
    if (!menu.classList.contains('scroll')) {
      menu.classList.add('scroll');
      arrow.classList.remove("top");
    }
  } else {
    if (menu.classList.contains('scroll')) {
      menu.classList.remove('scroll');
      arrow.classList.add("top");
    }
  }
});

document.addEventListener('scroll', (event) => {
  const windowTop = window.scrollY + window.innerHeight * 0.85;
  
  Array.from(document.querySelectorAll('[data-anime]')).forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animation');
    } else {
      element.classList.remove('animation');
    }
  });
});

Array.from(document.querySelectorAll('[data-input]')).forEach((e) => {
  e.addEventListener('focus', (event) => {
    e.parentNode.classList.add('form-focus');
    e.parentNode.classList.remove('form-check');
  });

  e.addEventListener('blur', (event) => {
    if (event.target.value.length !== 0) {
      e.parentNode.classList.add('form-check');
    } else {
      e.parentNode.classList.remove('form-focus');
    }
  });
});


