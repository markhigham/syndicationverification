function checkSyndicationElements(){

	var otherInformation = $("#OtherInformation ul li a.gdoc");
    var howProduced = $("#howproduced");
    var backgroundInformation,
        guidanceFormats,
        informationForThePublic,
        guidelineReviewDecisions,
        guidelineReviewDocuments,
        implementationTools,
        guidanceInPractice,
        documentCode;

    backgroundInformation = $("#OtherInformation ul li a:not(.gdoc)");
    guidanceFormats = $("#Guidline ul:nth-of-type(1) li a");
    informationForThePublic = $(".patientinformation h2 a");
    guidelineReviewDecisions = $("#GuidelineReviews p strong p a");
    guidelineReviewDocuments = $(".options li a");
    implementationTools = $('#nptMainContentRight ul:nth-of-type(1) li a');
    guidanceInPractice = $("#nptMainContentRight ul:nth-of-type(2) li a");
    documentCode = $('#code');

    applyStyleTo(otherInformation, 'found-element');
    applyStyleTo(howProduced, 'found-element');
    applyStyleTo(backgroundInformation, 'found-element');
    applyStyleTo(guidanceFormats, 'found-element');
    applyStyleTo(informationForThePublic, 'found-element');
    applyStyleTo(guidelineReviewDecisions, 'found-element');
    applyStyleTo(guidelineReviewDocuments, 'found-element');
    applyStyleTo(implementationTools, 'found-element');
    applyStyleTo(guidanceInPractice, 'found-element');
    applyStyleTo(documentCode, 'found-element');

    var results = [
        makeKVP(otherInformation, "Other Information"),
        makeKVP(howProduced, "How Produced"),
        makeKVP(backgroundInformation, "Background Information"),
        makeKVP(guidanceFormats, "Guidance Formats"),
        makeKVP(informationForThePublic, "Information for the Public"),
        makeKVP(guidelineReviewDecisions, "Guideline Review Decisions"),
        makeKVP(guidelineReviewDocuments, "Guideline Review Documents"),
        makeKVP(implementationTools, "Implementation Tools"),
        makeKVP(guidanceInPractice, "Guidance In Practice")
    ];

    return {
        code: documentCode.text().trim(),
        elements: results
    };
}

function makeKVP(foundElements, name){
    return {
        name: name,
        count: foundElements.length
    };
}

function applyStyleTo(foundElements, className){


    for(var i = 0; i< foundElements.length; i++){
        var el = foundElements[i];
        el.className = el.className + " " + className;
    }


}

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse){
		if(request.method == "checkSyndicationElements"){
			sendResponse({ data: checkSyndicationElements()});
		}
	}
);