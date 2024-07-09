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

const addrText = document.getElementById('test_addr');
const prikText = document.getElementById('test_prik');
const trxGetBalanceBtn = document.getElementById('trx_getbalance');
trxGetBalanceBtn.addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'trx_getbalance',
    addr: addrText.value,
    prik: prikText.value,
  });
});

