using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using HtmlAgilityPack;

namespace Nhs.Evidence.Syndication.Services.Egap2013.Scraper
{
    public class GuidanceCodesList
    {
        public List<string> GetTheList()
        {
            var types = new[]
                {
                    "cg", "phg", "ta", "ip", "MT", "DT",
                    @"http://www.nice.org.uk/guidance/qualitystandards/qualitystandards.jsp?p=off",
                    @"http://www.nice.org.uk/mpc/goodpracticeguidance/PublishedGPG.jsp",
                }.ToList();

            var allDone = Task.WhenAll(types.Select(GetGuidanciesOfType));

            var lists = allDone.Result.ToList();
            var result = lists.SelectMany(o => o).Select(s => s.ToUpperInvariant()).Distinct()
                              .OrderByDescending(s => Guid.NewGuid()).ToList();
            return result;
        }

        private async Task<List<string>> GetGuidanciesOfType(string type)
        {
            var url = type.Length < 5
                          ? string.Format(@"http://www.nice.org.uk/guidance/{0}/published/index.jsp?p=off", type)
                          : type;

            var response = await new HttpClient().GetAsync(url);
            response.EnsureSuccessStatusCode();
            var stream = await response.Content.ReadAsStreamAsync();

            var doc = new HtmlDocument();
            doc.Load(stream);

            var links = doc.DocumentNode.SelectNodes(@"//td//a");

            var result = links.SelectMany(node => node.Attributes.Where(attr => attr.Name.ToLower() == "href"),
                                          (node, href) => href.Value.Split('/').Last().Split('.').First())
                              .OrderBy(s => s.Length == 1
                                                ? s[0] - 4444
                                                : Convert.ToInt32(Regex.Match(s, @"\d+").Value)).ToList();
            return result;
        }
    }
}