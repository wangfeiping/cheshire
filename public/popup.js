const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', () => {
  // 发送切换页面消息，background.js(service worker)会监听到并设置页面，以保证重新点击图标打开popup时，popup页面不会打开就页面
  chrome.runtime.sendMessage({ action: 'dashboard' });
  // 立即切换页面
  window.location.replace("dashboard.html");
});
document.body.appendChild(button);

