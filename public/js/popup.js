function showResponse(response) {
  const txt = document.createElement('text');
  txt.textContent = JSON.stringify(response);
  document.body.appendChild(txt);
}

const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', () => {
  // 发送切换页面消息，background.js(service worker)会监听到并设置页面，以保证重新点击图标打开popup时，popup页面不会打开就页面
  chrome.runtime.sendMessage({ action: 'dashboard' });
  // 立即切换页面
  window.location.replace("dashboard.html");
});
document.body.appendChild(button);

const triggerBtn = document.createElement('button');
triggerBtn.textContent = 'Trigger';
triggerBtn.addEventListener('click', () => {
  // 调用tron
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  fetch('https://api.shasta.trongrid.io/walletsolidity/getnowblock', options)
  .then(response => response.json())
  .then(response => showResponse(response))
  .then(response => console.log(response))
  .catch(err => console.error(err));
});
document.body.appendChild(triggerBtn);
