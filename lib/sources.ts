export interface FeedSource {
  name: string;
  url: string;
  filterRequired: boolean; // true = must pass Cordoba keyword filter
  color: string;
}

export const RSS_SOURCES: FeedSource[] = [
  {
    name: "Google News - Puerto Libertador",
    url: "https://news.google.com/rss/search?q=Puerto+Libertador+Cordoba+Colombia&hl=es-419&gl=CO&ceid=CO:es-419",
    filterRequired: true,
    color: "blue",
  },
  {
    name: "Google News - Caucasia",
    url: "https://news.google.com/rss/search?q=Caucasia+Antioquia+when:7d&hl=es-419&gl=CO&ceid=CO:es-419",
    filterRequired: true,
    color: "indigo",
  },
  {
    name: "Google News - Gobernacion Cordoba",
    url: "https://news.google.com/rss/search?q=Cordoba+Colombia+site:cordoba.gov.co+OR+source:%22El+Meridiano%22&hl=es-419&gl=CO&ceid=CO:es-419",
    filterRequired: true,
    color: "yellow",
  },
  {
    name: "Google News - Chicanoticias",
    url: "https://news.google.com/rss/search?q=site:chicanoticias.com+Cordoba+Colombia&hl=es-419&gl=CO&ceid=CO:es-419",
    filterRequired: false,
    color: "green",
  },
  {
    name: "Lalenguacaribe",
    url: "https://lalenguacaribe.co/noticias/judicial/feed/",
    filterRequired: false,
    color: "teal",
  },
  {
    name: "Elmeridiano",
    url: "https://rss.app/feeds/J9FEaiDvuaSe0f8Y.xml",
    filterRequired: false,
    color: "pink",
  },
  {
    name: "LaRazon",
    url: "https://rss.app/feeds/oxwyFvnDQ333t5Bx.xml",
    filterRequired: true,
    color: "green",
  },
  {
  name: "Twitter X",
  url: "https://rss.app/feeds/D9RgavDgEfuD5H9L.xml",
  filterRequired: true,
  color: "lime",
  },


];
