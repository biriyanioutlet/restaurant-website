import React from 'react';
import {
  Header,
  ImageSlider,
  Menu,
  CustomerReviews,
  Inquiry,
  Partners,
  ContactUs,
  Footer,
} from './components';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider autoSlide={true} autoSlideInterval={5000} />
      <Menu backgroundColor="#f0f4f8" />
      <CustomerReviews />
      <Inquiry backgroundColor="#f0f4f8" />
      <Partners />
      <ContactUs backgroundColor="#f0f4f8" />
      <Footer />
      <Footer />
    </div>
  );
}

export default App;
