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

  console.log("cheshire cat...");

  const current = await chrome.windows.getCurrent();
  const allTabs = await chrome.tabs.query({});
  allTabs.forEach((tab) => {
    if (tab.windowId == current.id) {
        //chrome.tabs.executeScript(tab.id, {
        //    code: `
        //        const button = document.createElement('button');
        //        button.textContent = 'Click me';
        //        button.addEventListener('click', () => {
        //            // Perform some action when the button is clicked
        //        });
        //        document.body.appendChild(button);
        //    `
        //});
        console.log("cheshire cat!");
     }
   });
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

