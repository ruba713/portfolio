document.addEventListener('DOMContentLoaded', () => {
  const featureItems = document.querySelectorAll('.feature-item');
  featureItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, index * 300); // Staggered animation
  });
});
