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
    url: "https://news.google.com/rss/search?q=Cordoba+Colombia+when:24h&hl=es-419&gl=CO&ceid=CO:es-419",
    filterRequired: true,
    color: "yellow",
  },
  {
    name: "Google News - Chicanoticias",
    url: "https://chicanoticias.com/feed/",
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
    url: "https://elmeridiano.co/cordoba/feed/",
    filterRequired: false,
    color: "pink",
  },
  {
    name: "LaRazon",
    url: "https://larazon.co/feed/",
    filterRequired: true,
    color: "green",
  },
  {
  name: "Twitter X",
  url: "https://news.google.com/rss/search?q=site:twitter.com+Cordoba+Colombia+judicial+OR+seguridad+when:24h&hl=es-419&gl=CO&ceid=CO:es-419",
  filterRequired: true,
  color: "lime",
  },


];
