/* themes/lens/source/js/main.js */
document.addEventListener('DOMContentLoaded', function() {
  console.log('Lens Theme Loaded');

  // 获取 DOM 元素
  var toggleButton = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  // 移动端菜单切换逻辑
  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', function() {
      // 切换 active 类
      navMenu.classList.toggle('active');
      
      // 简单的图标切换动画（可选）
      var icon = toggleButton.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.style.transform = 'rotate(90deg)';
        } else {
          icon.style.transform = 'rotate(0deg)';
        }
      }
    });
  }
});