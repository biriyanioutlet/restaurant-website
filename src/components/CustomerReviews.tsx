import React, { useState } from 'react';
import Container from './Container/Container';
import restroData from '../data/restro.json';

const CustomerReviews: React.FC = () => {
  const reviews = restroData.reviews;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the reviews to display based on the current index
  const displayedReviews = reviews.slice(currentIndex, currentIndex + 3);

  // Function to handle next and previous pagination
  // const handlePagination = (direction: 'next' | 'prev') => {
  //   if (direction === 'next' && currentIndex + 3 < reviews.length) {
  //     setCurrentIndex(currentIndex + 3);
  //   } else if (direction === 'prev' && currentIndex > 0) {
  //     setCurrentIndex(currentIndex - 3);
  //   }
  // };

  return (
    <div id="reviews" className="p-4 md:p-8 lg:p-12">
      <Container>
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mt-6 pb-4 md:pb-8 lg:pb-12">
          Customer Reviews
        </h1>

        <div className="flex flex-wrap justify-center space-x-4">
          {displayedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-none w-full md:w-1/3 bg-gray-100 rounded-lg p-4 flex flex-col m-2 max-w-xs" // Added max width to prevent overflow
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto"
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 60%, 60%)`, // Random solid color
                }}
              >
                <span className="text-xl font-bold text-white">
                  {review.name.charAt(0)}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-center mb-2">
                {review.name}
              </h2>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${idx < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 15l-5.878 3.09L5 11.618 0 7.09 6.174 6.21 10 0l3.826 6.21L20 7.09l-5 4.528 1.878 6.472z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-center mb-4 flex-1">
                {review.review}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {/* <div className="flex justify-between mt-4">
          <button
            onClick={() => handlePagination('prev')}
            disabled={currentIndex === 0}
            className={`px-4 py-2 text-white bg-blue-600 rounded ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Previous
          </button>
          <button
            onClick={() => handlePagination('next')}
            disabled={currentIndex + 3 >= reviews.length}
            className={`px-4 py-2 text-white bg-blue-600 rounded ${currentIndex + 3 >= reviews.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </button>
        </div> */}

        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-1">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
            (_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === Math.floor(currentIndex / 3) ? 'bg-blue-600' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index * 3)} // Navigate to the appropriate index
              />
            )
          )}
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviews;
