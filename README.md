# Cheshire Cat

可能是由于TronWeb 还不支持 Manifest.json v3, 需要降级到 v2  

Manifest V2 support timeline  
June 2025: Chrome MV2 deprecation enterprise rollout  
https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline  

## 构建

$ npm run build

运行时会有警告：  
1) Manifest version 2 is deprecated, and support will be removed in 2024. See https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline for details.  

2) 'scripting' requires manifest version of at least 3.  

## 参考

Manifest V2  
https://developer.chrome.com/docs/extensions/mv2/getstarted/  

browser_action.default_popup in Manifest.json v2  
https://developer.chrome.com/docs/extensions/mv2/reference/browserAction  

Chrome Extensions: Adding a badge  
chrome.browserAction.setBadgeText(...)  
https://dev.to/paulasantamaria/chrome-extensions-adding-a-badge-644  

https://developer.chrome.com/docs/extensions  
https://developer.chrome.com/docs/extensions/get-started  

I will cover, what are extensions, the importance of TypeScript, and how to create a simple chrome extension using TypeScript showing the required procedures step by step.  
https://betterprogramming.pub/creating-chrome-extensions-with-typescript-914873467b65  

基于webpack搭建Chrome扩展开发环境  
Chrome扩展开发是目前比较火爆的领域，作为市场占有率第一的浏览器，有海量用户支撑。同时，Chrome扩展可以无缝对接Edge浏览器，不可不谓一箭双雕。本文将介绍如何使用webpack构建一个支持Typescript的开发环境，在此基础上，实现一个可以修改网页背景的扩展应用。  
https://segmentfault.com/a/1190000042584163  

https://stackoverflow.com/questions/17928979/how-to-programmatically-open-chrome-extension-popup-html  
https://stackoverflow.com/questions/10340481/popup-window-in-chrome-extension  

copy-webpack-plugin  
https://runebook.dev/zh/docs/webpack/plugins/copy-webpack-plugin  

https://www.webpackjs.com/plugins/copy-webpack-plugin/  

https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab

popup  
https://developer.chrome.com/docs/extensions/get-started/tutorial/popup-tabs-manager  

chrome extension API  
https://developer.chrome.com/docs/extensions/reference/api/windows  
https://developer.chrome.com/docs/extensions/reference/api/scripting  

TRON JS SDK

https://github.com/tronprotocol/tronweb

https://developers.tron.network/reference/getnowblock

