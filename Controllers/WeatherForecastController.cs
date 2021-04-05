using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Xml.Linq;
using DotnetAngularSample.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace DotnetAngularSample.Controllers
{
    [ApiController]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/WeatherForecast/GetData")]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 50).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        [Route("api/WeatherForecast/GetString")]
        public string GetString()
        {
            return "Hello";
        }

        [ResponseCache(Duration = 1200)]
        [HttpGet]
        [Route("api/WeatherForecast/GetFeed")]
        public List<Item> Rss()
        {
            var httpClient = new HttpClient();
            var result = httpClient.GetAsync(@"https://www.altnews.in/feed/").Result;

            var stream = result.Content.ReadAsStreamAsync().Result;
            
            var itemXml = XElement.Load(stream);            

            var locElement = itemXml.Elements().Elements(XName.Get("item"));
            var test = locElement.Elements();
            // Console.WriteLine(locElement.Value);
            return locElement.Select(x => new Item{
                Title = (x.Element("title").FirstNode as XText).Value,
                Description = (x.Element("description").FirstNode as XText).Value
            }).ToList();
        }
    }
}
