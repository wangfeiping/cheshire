import {TronWeb} from './TronWeb.js';

let active = false;

async function onInit() {
  chrome.action.setBadgeText({
    text: "OFF",
  });

  //  chrome.action.setPopup({
  //    popup: 'dashboard.html'
  //  });

  console.log("cheshire cat...");
}

// 监听安装事件
chrome.runtime.onInstalled.addListener(onInit);

// 监听图标点击消息
chrome.action.onClicked.addListener((tab) => {
    // chrome.windows.create({
    //     url: 'popup.html',
    //     type: 'popup',
    //     width: 400,
    //     height: 300
    // });
});

// 通过监听消息来切换 popup 页面，不会在当前popup 中刷新，点击图标后才会进入新的 popup 页面
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'popup') {
    chrome.action.setPopup({
      popup: 'popup.html'
    });
    console.log("receive action popup...");
    return true;
  }
  if (message.action === 'dashboard') {
    chrome.action.setPopup({
      popup: 'dashboard.html'
    });
    console.log("receive action dashboard...");
    return true;
  }
});


