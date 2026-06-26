// ===== 見出しアニメーション =====
const titles = document.querySelectorAll('.section-title');

const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100);

      titleObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

titles.forEach(el => titleObserver.observe(el));


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

const serviceCards = document.querySelectorAll('.service-grid .card');

const serviceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 100); // ←ちょい遅延

      serviceObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

serviceCards.forEach(card => {
  serviceObserver.observe(card);
});

const timeline = document.querySelector('.timeline');
const timelineItems = document.querySelectorAll('.timeline li');

if (timeline) {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        // 線を伸ばす
        timeline.classList.add('show-line');

        // 順番に出す
        timelineItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('show');
          }, index * 150);
        });

        timelineObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  timelineObserver.observe(timeline);
}