import React from 'react'
import { NextSeo } from 'next-seo'

interface SeoProps {
  title: string
  url: string
}

const Seo: React.FC<SeoProps> = ({ title, url }) => {
  return (
    <NextSeo
      title={title}
      description="Jesteśmy zwykłą rodziną preferującą zdrowy, proekologiczny, ale nie ortodoksyjny styl bycia i życia. Nasza działalność opiera się na subtelnym, wielopłaszczyznowym poradnictwie i oferowaniu szerokiego wachlarza produktów na bazie naturalnych składników, bez zbędnej chemii i na każdą kieszeń. Sprawdź naszą ofertę!"
      canonical="https://sklep-artesania.pl//"
      facebook={{
        appId: '906189503472261',
      }}
      openGraph={{
        url: `https://sklep-artesania.pl/${url}`,
        title,
        type: 'website',
        description:
          'Jesteśmy zwykłą rodziną preferującą zdrowy, proekologiczny, ale nie ortodoksyjny styl bycia i życia. Nasza działalność opiera się na subtelnym, wielopłaszczyznowym poradnictwie i oferowaniu szerokiego wachlarza produktów na bazie naturalnych składników, bez zbędnej chemii i na każdą kieszeń. Sprawdź naszą ofertę!',
        images: [
          {
            url: 'https://www.datocms-assets.com/42981/1613749478-logo.png',
            width: 800,
            height: 600,
            alt: 'Nasze logo',
          },
          {
            url: 'https://www.datocms-assets.com/42981/1613749478-logo.png',
            width: 900,
            height: 800,
            alt: 'Nasze logo',
          },
        ],
        site_name: 'Sklep Artesania',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default Seo
