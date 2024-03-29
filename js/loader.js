const preloader = document.querySelector('.preloader');
const main = document.querySelector('main'); // Select the main element

// Add the no-transition class to the main
main.classList.add('no-transition');

window.addEventListener('load', () => {
  setTimeout(() => {
    const fadeEffect = setInterval(() => {
      // if we don't set opacity 1 in CSS, then it will be equaled to "", that's why we check it
      if (!preloader.style.opacity) {
        preloader.style.opacity = 1;
      }
      if (preloader.style.opacity > 0) {
        preloader.style.opacity = 0;
      } else {
        clearInterval(fadeEffect);
      }
    }, );
  }, 100); // Delay of 1 second
});