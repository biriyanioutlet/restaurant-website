import React, { useState } from 'react';
import restroData from '../data/restro.json';
import Container from './Container/Container';

interface InquiryProps {
  backgroundColor?: string; // Accept background color as a prop
}

const Inquiry: React.FC<InquiryProps> = ({ backgroundColor = '#ffffff' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`;
    const whatsappLink = `https://wa.me/${restroData.phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    const mailtoLink = `mailto:${restroData.email}?subject=Contact Us Submission&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`)}`;

    // Check if the user is on mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
    } else {
      // Open email client
      window.location.href = mailtoLink;
    }

    // Clear the form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div
      id="catering"
      className="p-4 md:p-8 lg:p-12"
      style={{ backgroundColor }}
    >
      <Container>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-6 pb-4 md:pb-8 lg:pb-12">
          Catering
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
          <div id="contact" className="px-6 py-4 lg:w-1/2">
            <h2 className="text-xl font-semibold text-gray-800">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-sm md:text-base lg:text-lg py-4">
              We are here to assist you! Fill out our catering form, and let us
              help make your occasion unforgettable!
            </p>
          </div>

          <div id="catering" className="px-6 py-4 lg:w-1/2">
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 md:text-base lg:text-lg"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 text-sm md:text-base lg:text-lg"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 text-sm md:text-base lg:text-lg"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700 text-sm md:text-base lg:text-lg"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="text-sm md:text-base lg:text-lg bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Inquiry;
