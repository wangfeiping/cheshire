const button = document.createElement('button');
button.textContent = 'Click me';
button.addEventListener('click', () => {
            // Perform some action when the button is clicked
    //chrome.tabs.create({
    //  url: 'dashboard.html',
    //  active: true
    //});
//    chrome.action.setPopup({
//    popup: 'dashboard.html'
//  });

  // chrome.action.setBadgeBackgroundColor({
  //   color: '#FF0000'
  // });

  // chrome.action.setIcon({

  chrome.runtime.sendMessage({ action: 'dashboard' });

  window.location.replace("dashboard.html");
});
document.body.appendChild(button);

