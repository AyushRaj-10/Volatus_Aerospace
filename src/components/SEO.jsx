import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords = "" }) => (
  <Helmet>
    <title>{title ? `${title} | Volatus Aerospace` : "Volatus Aerospace – Aerial Intelligence Solutions"}</title>
    <meta name="description" content={description || "Volatus Aerospace provides advanced aerial intelligence solutions leveraging drones, delivery, and fixed-wing aviation for industries worldwide."} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta property="og:title" content={title ? `${title} | Volatus Aerospace` : "Volatus Aerospace – Aerial Intelligence Solutions"} />
    <meta property="og:description" content={description || "Volatus Aerospace provides advanced aerial intelligence solutions leveraging drones, delivery, and fixed-wing aviation for industries worldwide."} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/volatus-og.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title ? `${title} | Volatus Aerospace` : "Volatus Aerospace"} />
    <meta name="twitter:description" content={description || "Volatus Aerospace provides advanced aerial intelligence solutions leveraging drones, delivery, and fixed-wing aviation for industries worldwide."} />
    <meta name="theme-color" content="#FFC300" />
    <link rel="canonical" href={window.location.href} />
  </Helmet>
);

export default SEO;
