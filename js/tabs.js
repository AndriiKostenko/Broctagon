window.onload = function () {
  document.querySelector('.tabs').addEventListener('click', showTabNameContent);

  function showTabNameContent(event) {
    let tabIndex = event.target.dataset.tab;
    if (!tabIndex) return;
    let tabTitles = document.querySelectorAll('.tab-title');
    for (let i = 0; i < tabTitles.length; i++) {
      if (i == tabIndex) {
        tabTitles[i].classList.contains('active-tab') ||
        tabTitles[i].classList.add('active-tab')
      } else {
        tabTitles[i].classList.contains('active-tab') &&
        tabTitles[i].classList.remove('active-tab')
      }
    }
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
      if (i == tabIndex) {
        slides[i].style.display = 'flex';
      } else {
        slides[i].style.display = 'none';
      }
    }
  }
};
