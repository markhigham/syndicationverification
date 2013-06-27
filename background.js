// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {

    if (changeInfo.status != 'complete')
        return;

    if (tab.url.indexOf('guidance.nice.org.uk') > -1) {
        chrome.pageAction.show(tabId);

//        chrome.tabs.sendRequest(tab.id, { method: "storeSyndicationElements"}, function(response){
//            console.log(response);
//        });

//        chrome.tabs.sendRequest(tab.id, { method: "checkSyndicationElements"}, function (response) {
//
//            var storage = chrome.storage.local;
//
//            storage.set(response.data, function () {
//                console.log(arguments);
//                console.log('saved');
//            });
//
//
//        });

    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

