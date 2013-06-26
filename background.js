// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {

    if (tab.url.indexOf('guidance.nice.org.uk') > -1) {
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

