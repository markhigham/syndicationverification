

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	chrome.pageAction.show(tabId);
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

chrome.pageAction.onClicked.addListener(function(tab){

	chrome.tabs.sendRequest(tab.id, { method: "getText"}, function(response){
		console.log(response);
	});

});