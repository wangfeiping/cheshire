let active = false;

function changeTheme(color: string): void {
    document.body.style.backgroundColor = color;
}

chrome.action.onClicked.addListener((tab) => {
    // chrome.windows.create({
    //     url: 'popup.html',
    //     type: 'popup',
    //     width: 400,
    //     height: 300
    // });
});

