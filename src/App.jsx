import { useState } from 'react'
import './App.css'
import Home from './components/home'
import ArticleCard from './components/articleCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import LowerBanners from './components/lowerBanners'
import ArticlePage from './components/articlePage'
import stockPhoto from './assets/stockPhoto.jpg'
import news from './assets/articlePhoto2.jpg'
import Layout from './components/layout'
import QnA from './components/QnA'
import Admin from './components/admin'

function App() {
  const isHomePage = window.location.pathname === "/";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/contact" element={<QnA />} />
        <Route path="*" element={<p className='text-center text-4xl font-bold text-white mb-4'>Sorry, not implemented yet</p>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/article/:title" element={<ArticlePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  
//   <div className="app-container">
//   <Header />
//   {/* Main Content Area - appears between banners */}
//   <main className="main-content">
//     {/* {isHomePage ? <Home /> : <p className='text-center text-4xl font-bold text-white mb-4'>Sorry, not implemented yet</p>} */}
//     {/* <ArticlePage image={news} title="Judge: D.C. police chief remains in command, but Trump can likely demand help on immigration" views={1} comments={2} likes={3} shares={4} time="111111" text="Insert Title Here" /> */}
//   <Routes>
//   <Route exact path="/" element={<Home />} />
//   <Route path="*" element={<p className='text-center text-4xl font-bold text-white mb-4'>Sorry, not implemented yet</p>} />
// </Routes>
//   </main>
//   {/* Footer Banner - appears on every page */}
//   <LowerBanners />
// </div>


}

export default App;


