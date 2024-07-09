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

async function sendRawTransaction(tronWeb, from, prik){
  // https://developers.tron.network/reference/sendtrx
  const tradeobj = await tronWeb.transactionBuilder.sendTrx('TDSYST3evMzdCk3w1KwwroknqSb7YUxikk', 1, from);
  console.log("TX: "+tradeobj)
  // https://developers.tron.network/reference/sendrawtransaction
  const signedtxn = await tronWeb.trx.sign(tradeobj, prik);
  const receipt = await tronWeb.trx.sendRawTransaction(signedtxn);
  
  // https://nile.tronscan.org/#/transaction/0d27530edac41bbbfa73e69a55cd97029bb3d5aabebbcdfd1fa4e9acaf67f14c
  return receipt;
}

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
    
    sendRawTransaction(tronWeb, message.addr, message.prik)
      .then(receipt => console.log(receipt))

    return true;
  }
});


