using System.Xml.Serialization;
using System.Collections.Generic;

namespace DotnetAngularSample.Model
{
	[XmlRoot(ElementName="link")]
	public class Link {
		[XmlAttribute(AttributeName="href")]
		public string Href { get; set; }
		[XmlAttribute(AttributeName="rel")]
		public string Rel { get; set; }
		[XmlAttribute(AttributeName="type")]
		public string Type { get; set; }
	}

	[XmlRoot(ElementName="image")]
	public class Image {
		[XmlElement(ElementName="url")]
		public string Url { get; set; }
		[XmlElement(ElementName="title")]
		public string Title { get; set; }
		[XmlElement(ElementName="link")]
		public string Link { get; set; }
		[XmlElement(ElementName="width")]
		public string Width { get; set; }
		[XmlElement(ElementName="height")]
		public string Height { get; set; }
	}

	[XmlRoot(ElementName="site", Namespace="com-wordpress:feed-additions:1")]
	public class Site {
		[XmlAttribute(AttributeName="xmlns")]
		public string Xmlns { get; set; }
		[XmlText]
		public string Text { get; set; }
	}

	[XmlRoot(ElementName="guid")]
	public class Guid {
		[XmlAttribute(AttributeName="isPermaLink")]
		public string IsPermaLink { get; set; }
		[XmlText]
		public string Text { get; set; }
	}

	[XmlRoot(ElementName="post-id", Namespace="com-wordpress:feed-additions:1")]
	public class Postid {
		[XmlAttribute(AttributeName="xmlns")]
		public string Xmlns { get; set; }
		[XmlText]
		public string Text { get; set; }
	}

	[XmlRoot(ElementName="item")]
	public class Item {
		[XmlElement(ElementName="title")]
		public string Title { get; set; }
		[XmlElement(ElementName="link")]
		public string Link { get; set; }
		[XmlElement(ElementName="creator")]
		public string Creator { get; set; }
		[XmlElement(ElementName="pubDate")]
		public string PubDate { get; set; }
		[XmlElement(ElementName="category")]
		public List<string> Category { get; set; }
		[XmlElement(ElementName="guid")]
		public Guid Guid { get; set; }
		[XmlElement(ElementName="description")]
		public string Description { get; set; }
		[XmlElement(ElementName="encoded")]
		public string Encoded { get; set; }
		[XmlElement(ElementName="post-id", Namespace="com-wordpress:feed-additions:1")]
		public Postid Postid { get; set; }
		[XmlElement(ElementName="enclosure")]
		public Enclosure Enclosure { get; set; }
	}

	[XmlRoot(ElementName="enclosure")]
	public class Enclosure {
		[XmlAttribute(AttributeName="url")]
		public string Url { get; set; }
		[XmlAttribute(AttributeName="length")]
		public string Length { get; set; }
		[XmlAttribute(AttributeName="type")]
		public string Type { get; set; }
	}

	[XmlRoot(ElementName="channel")]
	public class Channel {
		[XmlElement(ElementName="title")]
		public string Title { get; set; }
		[XmlElement(ElementName="link")]
		public Link Link { get; set; }
		[XmlElement(ElementName="description")]
		public string Description { get; set; }
		[XmlElement(ElementName="lastBuildDate")]
		public string LastBuildDate { get; set; }
		[XmlElement(ElementName="language")]
		public string Language { get; set; }
		[XmlElement(ElementName="updatePeriod")]
		public string UpdatePeriod { get; set; }
		[XmlElement(ElementName="updateFrequency")]
		public string UpdateFrequency { get; set; }
		[XmlElement(ElementName="generator")]
		public string Generator { get; set; }
		[XmlElement(ElementName="image")]
		public Image Image { get; set; }
		[XmlElement(ElementName="site", Namespace="com-wordpress:feed-additions:1")]
		public Site Site { get; set; }
		[XmlElement(ElementName="item")]
		public List<Item> Item { get; set; }
	}

}
