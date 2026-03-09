import { Helmet } from 'react-helmet-async';
import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_CANONICAL_URL,
  SEO_OG,
  SEO_TWITTER,
  STRUCTURED_DATA,
} from '@constants/seo.constants';

export default function SEOMeta(): JSX.Element {
  return (
    <Helmet>
      <title>{SEO_TITLE}</title>
      <meta name="description" content={SEO_DESCRIPTION} />
      <meta name="keywords" content={SEO_KEYWORDS} />
      <link rel="canonical" href={SEO_CANONICAL_URL} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="BC Marine Electronics Inc." />
      <meta httpEquiv="Content-Language" content="en-CA" />
      <meta property="og:title" content={SEO_OG.title} />
      <meta property="og:description" content={SEO_OG.description} />
      <meta property="og:image" content={SEO_OG.image} />
      <meta property="og:image:alt" content={SEO_OG.imageAlt} />
      <meta property="og:type" content={SEO_OG.type} />
      <meta property="og:locale" content={SEO_OG.locale} />
      <meta property="og:url" content={SEO_CANONICAL_URL} />
      <meta property="og:site_name" content="BC Marine Electronics Inc." />
      <meta name="twitter:card" content={SEO_TWITTER.card} />
      <meta name="twitter:title" content={SEO_TWITTER.title} />
      <meta name="twitter:description" content={SEO_TWITTER.description} />
      <script type="application/ld+json">
        {JSON.stringify(STRUCTURED_DATA, null, 2)}
      </script>
    </Helmet>
  );
}
