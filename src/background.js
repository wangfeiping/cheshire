import TronWeb from './TronWeb.js';

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
  if (message.action === 'trx_getbalance') {
    console.log("addr: "+ message.addr)

    const tronWeb = new TronWeb({
      // fullHost: 'https://api.trongrid.io',
      // fullHost: 'https://api.shasta.trongrid.io',
      fullHost: 'https://nile.trongrid.io',
      // fullHost: 'http://test.ng:8088/',
      
      // 调用测试网不要设置 headers，否则api 服务接口回返回错误无法调用 - 20240709
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Headers': '*',
      //   'Access-Control-Allow-Origin': '*',
      //   "TRON-PRO-API-KEY": "... api-key-here ..."
      //   // https://developers.tron.network/reference/select-network
      //   // Currently using Trongrid to request the Shasta/Nile testnet does not need to set an API Key.
      // },
      // privateKey: message.prik,
    });
    tronWeb.trx.getBalance(message.addr)
      .then(result => console.log(result))
    // tronWeb.trx.createTransaction(message.addr, 1, 'TDSYST3evMzdCk3w1KwwroknqSb7YUxikk')
    //   .then(result => console.log(result))
    //   .then(tronWeb.trx.sign)

    return true;
  }
});


