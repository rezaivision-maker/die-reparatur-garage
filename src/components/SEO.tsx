import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
}

export const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage = 'https://diereparaturgarage.com/og-image.jpg', 
  type = 'website' 
}: SEOProps) => {
  const siteUrl = 'https://diereparaturgarage.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Die Reparatur Garage</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Die Reparatur Garage",
          "image": ogImage,
          "@id": siteUrl,
          "url": siteUrl,
          "telephone": "+49 6303 8090929",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Tilsiter Straße 9",
            "addressLocality": "Enkenbach-Alsenborn",
            "postalCode": "67677",
            "addressCountry": "DE"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/diereparaturgarage",
            "https://www.instagram.com/die_reparatur_garage/"
          ]
        })}
      </script>
    </Helmet>
  );
};
