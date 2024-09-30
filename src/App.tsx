import React from 'react';
import {
  Header,
  ImageSlider,
  Menu,
  CustomerReviews,
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
      <Footer />
    </div>
  );
}

export default App;
