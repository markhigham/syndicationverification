function getText(){
	
	console.log(Sizzle('a'));
	return 'cock';
}



chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse){
		if(request.method == "getText"){
			sendResponse({ data: getText()});
		}
	}
);