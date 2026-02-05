/**
 * Composable для добавления Schema.org разметки (JSON-LD)
 * Улучшает SEO и позволяет поисковым системам лучше понимать контент
 */

export const useSchemaOrg = () => {
  /**
   * Добавляет JSON-LD разметку на страницу
   */
  const addSchema = (schema: object | object[]) => {
    const schemas = Array.isArray(schema) ? schema : [schema];

    useHead({
      script: schemas.map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(s),
      })),
    });
  };

  /**
   * Schema для организации (Organization)
   */
  const createOrganizationSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ПлесКад",
      legalName: "Кадастровый инженер в Плесецком районе",
      url: "https://pleskad.ru",
      logo: "https://pleskad.ru/logo.png",
      description:
        "Кадастровые работы в Плесецком районе Архангельской области. Межевание земельных участков, технические планы, постановка на кадастровый учет. Опыт более 15 лет.",
      foundingDate: "2009",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Кооперативная ул., 4",
        addressLocality: "рабочий посёлок Плесецк",
        addressRegion: "Архангельская область",
        postalCode: "164262",
        addressCountry: "RU",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+7-909-552-20-52",
        contactType: "customer service",
        areaServed: "RU",
        availableLanguage: "Russian",
      },
      sameAs: [
        // Добавьте ссылки на соцсети, если есть
      ],
    };
  };

  /**
   * Schema для локального бизнеса (LocalBusiness)
   */
  const createLocalBusinessSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "ПлесКад - Кадастровый инженер",
      image: "https://pleskad.ru/images/office.jpg",
      "@id": "https://pleskad.ru",
      url: "https://pleskad.ru",
      telephone: "+7-909-552-20-52",
      priceRange: "₽₽",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Кооперативная ул., 4",
        addressLocality: "рабочий посёлок Плесецк",
        addressRegion: "Архангельская область",
        postalCode: "164262",
        addressCountry: "RU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 62.7144,
        longitude: 40.2819,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      areaServed: {
        "@type": "Place",
        name: "Плесецкий район, Архангельская область",
      },
    };
  };

  /**
   * Schema для услуги (Service)
   */
  const createServiceSchema = (params: {
    name: string;
    description: string;
    price?: number;
    url: string;
  }) => {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: params.name,
      name: params.name,
      description: params.description,
      provider: {
        "@type": "Organization",
        name: "ПлесКад",
        url: "https://pleskad.ru",
      },
      areaServed: {
        "@type": "Place",
        name: "Плесецкий район, Архангельская область",
      },
      url: params.url,
      ...(params.price && {
        offers: {
          "@type": "Offer",
          price: params.price,
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
          url: params.url,
        },
      }),
    };
  };

  /**
   * Schema для хлебных крошек (BreadcrumbList)
   */
  const createBreadcrumbSchema = (
    breadcrumbs: Array<{ name: string; url: string }>,
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    };
  };

  /**
   * Schema для FAQ страницы
   */
  const createFAQSchema = (
    faqs: Array<{ question: string; answer: string }>,
  ) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  };

  /**
   * Schema для статьи в блоге (Article)
   */
  const createArticleSchema = (params: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    image: string;
    url: string;
    author?: string;
  }) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: params.headline,
      description: params.description,
      image: params.image,
      datePublished: params.datePublished,
      dateModified: params.dateModified || params.datePublished,
      author: {
        "@type": "Person",
        name: params.author || "Кадастровый инженер ПлесКад",
      },
      publisher: {
        "@type": "Organization",
        name: "ПлесКад",
        logo: {
          "@type": "ImageObject",
          url: "https://pleskad.ru/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": params.url,
      },
    };
  };

  /**
   * Schema для веб-сайта (WebSite)
   */
  const createWebSiteSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ПлесКад - Кадастровые работы в Плесецком районе",
      url: "https://pleskad.ru",
      description:
        "Профессиональные кадастровые услуги в Плесецком районе Архангельской области",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://pleskad.ru/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    };
  };

  return {
    addSchema,
    createOrganizationSchema,
    createLocalBusinessSchema,
    createServiceSchema,
    createBreadcrumbSchema,
    createFAQSchema,
    createArticleSchema,
    createWebSiteSchema,
  };
};
