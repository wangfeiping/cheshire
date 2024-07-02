let active = false;

function changeTheme(color: string): void {
    document.body.style.backgroundColor = color;
}

function createDomElement(html: string) {
  const dom = new DOMParser().parseFromString(html, 'text/html');
  return dom.body.firstElementChild;
}

async function onInit() {
  chrome.action.setBadgeText({
    text: "OFF",
  });

//  chrome.action.setPopup({
//    popup: 'dashboard.html'
//  });

  console.log("cheshire cat...");
}

chrome.runtime.onInstalled.addListener(onInit);

chrome.action.onClicked.addListener((tab) => {
    // chrome.windows.create({
    //     url: 'popup.html',
    //     type: 'popup',
    //     width: 400,
    //     height: 300
    // });
});

// Send tip to content script via messaging
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'popup') {
    chrome.action.setPopup({
      popup: 'popup.html'
    });
    return true;
  }
  if (message.action === 'dashboard') {
    chrome.action.setPopup({
      popup: 'dashboard.html'
    });
    return true;
  }
});


