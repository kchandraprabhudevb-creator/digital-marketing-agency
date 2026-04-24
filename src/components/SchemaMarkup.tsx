export default function SchemaMarkup({ 
  type, 
  data 
}: { 
  type: 'Organization' | 'Service' | 'Article' | 'FAQPage',
  data?: any 
}) {
  const baseData = {
    "@context": "https://schema.org",
  };

  let schemaData = {};

  if (type === 'Organization') {
    schemaData = {
      "@type": "Organization",
      "name": "exceln8n",
      "url": "https://exceln8n.space",
      "logo": "https://exceln8n.space/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "Customer Service"
      }
    };
  } else if (type === 'Service') {
    schemaData = {
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "exceln8n"
      },
      ...data
    };
  } else if (type === 'Article') {
    schemaData = {
      "@type": "Article",
      "publisher": {
        "@type": "Organization",
        "name": "exceln8n"
      },
      ...data
    };
  } else if (type === 'FAQPage') {
    schemaData = {
      "@type": "FAQPage",
      ...data
    };
  }

  const finalSchema = { ...baseData, ...schemaData };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
    />
  );
}
