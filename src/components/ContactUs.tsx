import React, { useState } from 'react';
import Container from './Container/Container';
import restroData from '../data/restro.json';

interface ContactPageProps {
  backgroundColor?: string; // Accept background color as a prop
}

const ContactPage: React.FC<ContactPageProps> = ({
  backgroundColor = '#ffffff',
}) => {
  const { address, phoneNumber, openHours } = restroData;
  const [showAll, setShowAll] = useState(false);
  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div
      id="contactUs"
      className="p-4 md:p-8 lg:p-12"
      style={{ backgroundColor }}
    >
      <Container>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-6 pb-4 md:pb-8 lg:pb-12">
          Contact Us
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
          <div className="relative sm:w-full lg:w-1/2 h-0 pb-[56.25%]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.7245004839806!2d-75.71163382263452!3d45.33418544210254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce07a40ab703ff%3A0x32f2f0542cf6f418!2sBiryani%20Outlet%20Ottawa!5e0!3m2!1sen!2sca!4v1727284715738!5m2!1sen!2sca"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>

          {/* Second div (Address, Phone, Open Hours) */}
          <div id="contact" className="px-6 py-4 lg:w-1/2">
            <div className="space-y-4">
              {/* Using flexbox for table-like alignment */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <h2 className="text-xl font-semibold text-gray-800 sm:w-1/3">
                  Address:
                </h2>
                <address className="text-sm md:text-base lg:text-lg sm:w-2/3 not-italic">
                  {address.address1}
                  <br /> {address.address2}
                </address>
              </div>

              {/* Phone Section */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <h2 className="text-xl font-semibold text-gray-800 sm:w-1/3">
                  Phone Number:
                </h2>
                <a
                  href="tel:+16137966199"
                  className="hover:underline text-sm md:text-base lg:text-lg sm:w-2/3"
                >
                  {phoneNumber}
                </a>
              </div>

              {/* Open Hours Section */}
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <h2 className="text-xl font-semibold text-gray-800 sm:w-1/3">
                  Open Hours:
                </h2>
                <div className="sm:w-2/3">
                  {!showAll ? (
                    <p className="text-sm md:text-base lg:text-lg">
                      {`${openHours[adjustedTodayIndex].hours} today`}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {openHours.map((item, index) => (
                        <li
                          key={item.day}
                          className={`flex justify-between p-2 rounded-md text-sm md:text-base lg:text-lg ${
                            index === adjustedTodayIndex
                              ? 'bg-blue-100 font-semibold text-blue-800'
                              : ''
                          }`}
                        >
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={toggleShowAll}
                    className="bg-blue-600 text-white py-2 mt-4 px-4 rounded-md text-sm md:text-base lg:text-lg hover:bg-blue-700 transition duration-300"
                  >
                    {showAll ? 'Show Today' : 'Show All Days'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
