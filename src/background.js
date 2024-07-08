let active = false;

async function onInit() {
  chrome.browserAction.setBadgeText({
    text: "OFF",
  });

  console.log("cheshire cat...");
}

// 监听安装事件
chrome.runtime.onInstalled.addListener(onInit);

// 通过监听消息来切换 popup 页面，不会在当前popup 中刷新，点击图标后才会进入新的 popup 页面
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'popup') {
    chrome.browserAction.setPopup({
      popup: 'popup.html'
    });
    console.log("receive action popup...");
    return true;
  }
  if (message.action === 'dashboard') {
    chrome.browserAction.setPopup({
      popup: 'dashboard.html'
    });
    console.log("receive action dashboard...");
    return true;
  }
});


