import React from 'react'
import './articleCard.css'
import commentIcon from '../assets/comment.png'
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ image, text, number }) => {
  // Format number: if over 999, convert to k format
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate(`/article/${text}`);
    navigate(`/article/${text}`, { state: { image: image, title: text, comments: number } });
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <div className="card-image">
        <img src={image} alt={text} className="image" />
        {number && (
          <div className="comment-badge">
            <img src={commentIcon} alt="comment" className="comment-icon" />
            <span className="comment-count">{formatNumber(number)}</span>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">{text}</h3>
      </div>
    </div>
  );
}

export default ArticleCard;
