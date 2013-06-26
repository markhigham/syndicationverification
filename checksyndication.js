
function syndicationChecker(){

chrome.tabs.getSelected(null, function(tab){

    if(typeof tab == 'undefined')
        return;

    chrome.tabs.sendRequest(tab.id, { method: "checkSyndicationElements"}, function (response) {
        var template = ich.syndicationRow(response);
        $("#results").append(template);

        $('#itemTitle').text(response.data.code);

        var source = $('#copySource');
        source.select();
        document.execCommand('copy');


    });


});

}


document.addEventListener('DOMContentLoaded', function () {
    syndicationChecker();


});

