
import React from 'react';

const Article = ({ article }) => {
  return (
    <div className="article">
          <img src={article.UrlToImage} alt={article.title} className="article-image" />
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    
      <a href={article.url} target="_blank">
        Read more
      </a>
      <p><strong>Source:</strong> {article.source}</p>
      <p><strong>Published on:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
    </div>
  );
};

export default Article;
