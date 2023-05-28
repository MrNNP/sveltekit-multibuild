chrome.action.onClicked.addListener((tab) => {
	chrome.tabs.create({
		url: chrome.runtime.getURL('build/index.html')
		//In here you can also add constrain for the window
		//This is for manifest v3
	});
});
