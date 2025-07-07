document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('animation-overlay').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 3500); // 3.5 секунды — время анимации замка
});