(function() {
  const pinInput = document.getElementById('pin-input');
  const buttons = document.querySelectorAll('.btn');
  const message = document.getElementById('message');
  const MAX_LENGTH = 8;
  const correctPin = '25122022'; // Ваш пин-код

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('btn-clear')) {
        pinInput.value = '';
        message.textContent = '';
        return;
      }
      if (pinInput.value.length < MAX_LENGTH) {
        pinInput.value += button.dataset.digit;
        message.textContent = '';
      }
      if (pinInput.value.length === MAX_LENGTH) {
        if (pinInput.value === correctPin) {
          // Переход на страницу поздравления
          window.location.href = 'congratulations.html';
        } else {
          message.style.color = 'red';
          message.textContent = 'Неверный пин-код. Попробуйте снова.';
          pinInput.value = '';
        }
      }
    });
  });
})();
document.addEventListener('DOMContentLoaded', () => {
  const sliderTrack = document.getElementById('slider-track');
  const slides = sliderTrack.children;
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const audioPlayer = document.getElementById('audio-player');
  const audioToggle = document.getElementById('audio-toggle');

  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    sliderTrack.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlider();
    }
  });
});

const heartsContainer = document.querySelector('.floating-hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  // случайное горизонтальное положение
  heart.style.left = Math.random() * 100 + 'vw';
  // случайная продолжительность анимации (4-8 сек)
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';
  heartsContainer.appendChild(heart);

  // удаляем элемент после окончания анимации
  heart.addEventListener('animationend', () => heart.remove());
}

// Создаём сердечки с интервалом
setInterval(createHeart, 1000);