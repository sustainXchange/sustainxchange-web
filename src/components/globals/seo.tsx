import React, { FC } from "react";
import Helmet from "react-helmet";

const SEO_DATA = {
  description:
    "Wir sind ein junges, motiviertes Team mit dem Ziel, übergreifenden Austausch zur Nachhaltigkeit in der Gesellschaft zu fördern.",
  title: "sustainXchange",
  url: "https://sustainxchange.org/",
  author: "sustainXchange",
  keywords: [
    "Nachhaltigkeit",
    "Event",
    "sustain",
    "Xchange",
    "sustainX",
    "change"
  ]
};

const SEO: FC<{ title: string; meta?: any }> = ({ title, meta }) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(", ")} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="de" />
    </Helmet>
  );
};

export default SEO;
