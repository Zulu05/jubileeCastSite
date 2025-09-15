import React from 'react'
import './home.css'
import jubilee from '../assets/jubilee.png'
import banner from '../assets/homeBanner.jpg'
import stockPhoto from '../assets/stockPhoto.jpg'
import ArticleCard from './articleCard'
import news from '../assets/articlePhoto2.jpg'
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const firstArticles = [
    { image: stockPhoto, text: "Insert Title Here", number: 111111 },
    { image: news, text: "Insert Title Here" },
    { image: stockPhoto, text: "Insert Title HereInsert Title HereInsert Title HereInsert Title Here Insert Title Here", number: 3 },
    { image: news, text: "Insert Title Here", number: 4 },
    { image: stockPhoto, text: "Insert Title Here", number: 5 },
    { image: news, text: "Insert Title Here", number: 6 },
    { image: stockPhoto, text: "Insert Title Here", number: 7 },
    { image: news, text: "Insert Title Here", number: 8 },
  ];  

const secondArticles = [
  { image: news, text: "Insert Title Here", number: 5 },
  { image: news, text: "Insert Title Here", number: 6 },
  { image: news, text: "Insert Title Here", number: 7 },
  { image: news, text: "Insert Title Here", number: 8 },
  { image: news, text: "Insert Title Here", number: 9 },
  { image: news, text: "Insert Title Here", number: 10 },
  { image: news, text: "Insert Title Here", number: 11 },
  { image: news, text: "Insert Title Here", number: 12},

]

const thirdArticles = [
  { image: stockPhoto, text: "Insert Title Here", number: 13 },
  { image: stockPhoto, text: "Insert Title Here", number: 14 },
  { image: stockPhoto, text: "Insert Title Here", number: 15 },
  { image: stockPhoto, text: "Insert Title Here", number: 16 },
  { image: stockPhoto, text: "Insert Title Here", number: 17 },
  { image: stockPhoto, text: "Insert Title Here", number: 18 },
]

  const scrollLeft = (id ) => {
    const list = document.querySelector(id);
    if (list) {
      // Scroll by one card width + spacing
      const cardWidth = 600; // Adjust to match your card width
      const spacing = 64; // Adjust to match your space-x-4
      list.scrollLeft -= (cardWidth + spacing);
    }
  };
  
  const scrollRight = (id) => {
    const list = document.querySelector(id);
    if (list) {
      const cardWidth = 600;
      const spacing = 64;
      list.scrollLeft += (cardWidth + spacing);
    }
  };

  return (
    <div className="home-container">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content w-full  flex flex-col items-center justify-center text-center"> {/*border-2 border-red-500*/}
            <p className='text-l w-1/2 overflow-y-auto break-words'>HereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuoteHereQuote</p>
            <p className='text-2xl font-bold overflow-y-auto break-words'>HereQuote</p>
            <p className='text-l overflow-y-auto break-words'>HereQuote</p>
      <div className='bannerSearch w-96'>
                <input type="text" 
                  placeholder='Search' 
                  className="text-left bg-transparent border-1 border-white text-white placeholder-white/60 pl-2 py-2 rounded-lg focus:outline-none focus:border-white/80 w-full"
                />
      </div>
        </div>
      </section>
      
      {/* Article Lists Section */}
      <section className="article-lists py-8 flex flex-col items-center justify-center"> {/*border-2 border-green-500*/}
        {/* First List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Featured Articles</h2>
          <div className="relative flex flex-row items-center justify-center">
          <button 
        onClick={() => scrollLeft('#featured-list-one')}
        className="text-white text-2xl hover:bg-white/20 hover:cursor-pointer rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
              🡄
            </button>

            <ul 
            id="featured-list-one"
            className="flex list-none overflow-x-hidden scroll-smooth transition-all duration-500 ease-in-out mx-4"
            style={{ 
              width: 'calc(4 * 300px + 96px)',
              maxWidth: '100%', // Responsive fallback
              gap: '32px'
            }}
          >
            {firstArticles.map((article, index) => (
              <li key={index} className="flex-shrink-0">
                <ArticleCard 
                  image={article.image} 
                  text={article.text} 
                  number={article.number} 
                />
              </li>
        ))}
      </ul>
      <button 
        onClick={() => scrollRight('#featured-list-one')}
        className="text-white text-2xl hover:bg-white/20 hover:cursor-pointer rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
              🡆
            </button>
          </div>
        </div>

        {/* Second List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Latest News</h2>
          <div className="relative flex flex-row items-center justify-center">
          <button 
        onClick={() => scrollLeft('#latest-news-two')}
        className="text-white text-2xl hover:bg-white/20 hover:cursor-pointer rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
              🡄
            </button>

            <ul 
            id="latest-news-two"
            className="flex list-none overflow-x-hidden scroll-smooth transition-all duration-500 ease-in-out mx-4"
            style={{ 
              width: 'calc(4 * 300px + 96px)',
              maxWidth: '100%', // Responsive fallback
              gap: '32px'
            }}
          >
            {secondArticles.map((article, index) => (
              <li key={index} className="flex-shrink-0">
                <ArticleCard 
                  image={article.image} 
                  text={article.text} 
                  number={article.number} 
                />
              </li>
        ))}
      </ul>
      <button 
        onClick={() => scrollRight('#latest-news-two')}
        className="text-white text-2xl hover:bg-white/20 hover:cursor-pointer rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
              🡆
            </button>
          </div>
        </div>

        {/* Third List */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Popular Content</h2>
          <div className="relative flex flex-row items-center justify-center">
          <button 
        onClick={() => scrollLeft('#popular-content-three')}
        className="text-white text-2xl hover:bg-white/20 hover:cursor-pointer rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
              🡄
            </button>

            <ul 
            id="popular-content-three"
            className="flex list-none overflow-x-hidden scroll-smooth transition-all duration-500 ease-in-out mx-4"
            style={{ 
              width: 'calc(4 * 300px + 96px)',
              maxWidth: '100%', // Responsive fallback
              gap: '32px'
            }}
          >
            {thirdArticles.map((article, index) => (
              <li key={index} className="flex-shrink-0">
                <ArticleCard 
                  image={article.image} 
                  text={article.text} 
                  number={article.number} 
                />
              </li>
        ))}
      </ul>
      <button 
        onClick={() => scrollRight('#popular-content-three')}
        className="text-white text-2xl hover:bg-white/20 hover:cursor-pointer rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm transition-all duration-200"
      >
              🡆
            </button>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
