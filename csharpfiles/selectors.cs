namespace Nhs.Evidence.Syndication.Services.Egap2013.Scraper
{
    public static class XPathConstants
    {
        public static Dictionary<LinkType, string> GetAllConstants(string id)
        {
            if (id == "GPG1")
            {
                return new Dictionary<LinkType, string>
                    {
                        {LinkType.GuidanceFormats, @"//div[@class='contentInner']/ul/li[2]/a"},
                        {LinkType.HowProduced, @"//div[@class='contentInner']/ul/li[3]/a"}
                    };
            }

            return new Dictionary<LinkType, string>
                    {
                        {LinkType.OtherInformation, @"//li[@id='OtherInformation']/ul/li/a[@class='gdoc']"},
                        //$("#OtherInformation ul li a.gdoc")
                        {LinkType.HowProduced, @"//h4[@id='howproduced']/a"},
                        // $("#howproduced")
                        {LinkType.BackgroundInformation, @"//li[@id='OtherInformation']/ul/li/a[not (@class='gdoc')]"},
                        // $("#OtherInformation ul li a:not(.gdoc)")
                        {LinkType.GuidanceFormats, @"//li[@id='Guidline']/ul[1]/li/a"},
                        // $("#Guidline ul:nth-of-type(1) li a")
                        {LinkType.InformationForThePublic, @"//div[@class='patientinformation']/h2/a"},
                        // $(".patientinformation h2 a")
                        {LinkType.GuidelineReviewDecision, @"//div[@id='GuidelineReviews']/p/strong/p/a"},
                        //$("#GuidelineReviews p strong p a")
                        {LinkType.GuidelineReviewDocuments, @"//ul[@class='options']/li/a"},
                        // .options li a
                        {LinkType.ImplementationTools, @"//div[@id='nptMainContentRight']/ul[1]/li/a"},
                        //$('#nptMainContentRight ul:nth-of-type(1) li a')
                        {LinkType.GuidanceInPractice, @"//div[@id='nptMainContentRight']/ul[2]/li/a"}
                        //$("#nptMainContentRight ul:nth-of-type(2) li a")
                    };



        }
    }
}