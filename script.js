







// Находим все элементы с классом "animIt"
const animElements = document.querySelectorAll('.animIt');

// Функция для проверки видимости элемента
function checkVisibility() {
  animElements.forEach((anim) => {
    const rect = anim.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      anim.classList.add('visible'); // Элемент виден — добавляем класс
    } else {
      anim.classList.remove('visible'); // Элемент не виден — убираем класс
    }
  });
}

// Оптимизация через requestAnimationFrame
function optimizedCheck() {
  requestAnimationFrame(checkVisibility);
}

// Обрабатываем элементы при прокрутке страницы
window.addEventListener('scroll', optimizedCheck);
checkVisibility();





document.querySelectorAll('.Shadsw').forEach((element) => {
  element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Рассчитываем наклон
      const rotateX = ((y - centerY) / centerY) * -25;
      const rotateY = ((x - centerX) / centerX) * 25;

      // Рассчитываем смещение тени
      const shadowX = (x - centerX) / 25; // Сдвиг тени по X
      const shadowY = (y - centerY) / 25; // Сдвиг тени по Y

      // Применяем стили
      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      element.style.boxShadow = `${shadowX}px ${shadowY}px 24px rgba(0, 0, 0, 0.4)`;
  });

  element.addEventListener('mouseleave', () => {
      element.style.transform = 'rotateX(0) rotateY(0)'; // Сброс наклона
      element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Сброс тени
  });
});




    let lastScrollY = window.scrollY;
    let timer;

    const topMenu = document.querySelector('.top-menu');

    function showTopMenu() {
        topMenu.classList.add('visible');

        // Скрываем через 3 секунды, если не наводимся мышью
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (!topMenu.matches(':hover')) {
                topMenu.classList.remove('visible');
            }
        }, 700);
    }

    // Отслеживание прокрутки
    window.addEventListener('scroll', () => {
        if (window.scrollY !== lastScrollY) {
            showTopMenu();
            lastScrollY = window.scrollY;
        }
    });

    // Оставляем видимым при наведении
    topMenu.addEventListener('mouseenter', () => {
        clearTimeout(timer);
        topMenu.classList.add('visible');
    });

    // Убираем после ухода курсора
    topMenu.addEventListener('mouseleave', () => {
        timer = setTimeout(() => {
            topMenu.classList.remove('visible');
        }, 100);
    });



    function toggleContent() {
      const content = document.getElementById('content');
      content.classList.toggle('open');
    }



