const button = document.createElement('button');
button.textContent = 'Go back';
button.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'popup' }); 
  window.location.replace("popup.html");
});
document.body.appendChild(button);

