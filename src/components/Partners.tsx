import React from 'react';
import Container from './Container/Container';
import restroData from '../data/restro.json';
import { addBaseUrl } from '../utils/imageUrl';

interface Partner {
  name: string;
  url: string;
  logo: string;
}

const Partners: React.FC = () => {
  const partners: Partner[] = restroData?.partners || [];

  if (!partners.length) {
    return (
      <div className="text-center text-lg p-8">
        No partners to display at the moment.
      </div>
    );
  }

  return (
    <div id="partners" className="p-4 md:p-8 lg:p-12">
      <Container>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold my-6">
          Our Partners
        </h1>

        <p className="text-sm md:text-base lg:text-lg py-4 text-center">
          Whether you order directly with us or through your favorite apps, we
          are here to serve you the very best!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mt-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order from ${partner.name}`}
                className="group"
              >
                <img
                  src={addBaseUrl(partner.logo)}
                  alt={`${partner.name} logo`}
                  className="h-16 w-16 md:w-24 md:h-20 hover:scale-105 transition-transform hover:opacity-80 transition-opacity"
                  loading="lazy"
                />
                <p className="text-lg font-semibold mt-4 group-hover:text-blue-500 transition-colors">
                  {partner.name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
