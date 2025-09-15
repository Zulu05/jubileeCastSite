import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ArticlePage = () => {

    const location = useLocation();
    const receivedData = location.state;
    const { image, title, comments, views, likes, shares, time } = receivedData;
    // console.log(receivedData);
    
    // alert('hello');

    // useEffect(() => {
    //     console.log(receivedData);
    // }, [receivedData]);

    return (
    <div className="article-page flex flex-col justify-center items-center">
        <div className="article-header py-8 text-white max-w-6xl font-sans">
            <h1 className="article-title text-center text-5xl font-semibold leading-[1.2]">{title}</h1>
        </div>
        <div className="article-info pb-2 max-w-5xl w-full text-white/50 flex space-x-4 font-serif
"> {/*border-2 border-blue-500*/}   
            <p className="article-views">{views} views</p>
            <p className="article-comments">{comments} comments</p>
            <p className="article-likes">{likes} likes</p>
            <p className="article-shares">{shares} shares</p>
            <p className="article-time ml-auto">{time}</p>
        </div>
        <div className="card-image relative max-w-6xl min-h-120 flex justify-center items-center"> {/*border-2 border-red-500*/}
            <img src={image} alt={title} className="image w-full h-auto"/>
            <div className="absolute bottom-0 left-0 right-0 h-100 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-10"></div>        </div>
        <div className="article-content max-w-5xl text-white w-full py-10 text-lg font-serif
">
            <p className="article-text leading-[1.6]">
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            text will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be heretext will be here
            </p>
        </div>
    </div>

);
}

export default ArticlePage;