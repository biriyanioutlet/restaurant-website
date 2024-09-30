import React from 'react';
import Container from './Container/Container';
import restroData from '../data/restro.json';
import { addBaseUrl } from '../utils/imageUrl';

const Partners: React.FC = () => {
  const partners = restroData.partners;

  return (
    <div id="partners" className="p-4 md:p-8 lg:p-12">
      <Container>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-6">
          Partners
        </h1>
        <div className="flex flex-col items-center md:flex-row justify-around space-y-6 md:space-y-0 lg:mt-12 md:mt-8 mt-4">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={addBaseUrl(partner.logo)} // Use the base URL with the logo path
                alt={`${partner.name} logo`}
                className="h-16 w-16 md:w-40 md:h-36 hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
