
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from the backend API
    axios.get('https://full-stack-mern-app-backend-2.onrender.com/api/articles')
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the articles!', error);
      });
  }, []);

  return (
    <div>
      
      <div>
        {articles.length > 0 ? (
          articles.map((article) => (
            <Article article={article} />
          ))
        ) : (
          <p>Loading articles...</p>
        )}
      </div>
    </div>
  );
};

export default ArticleList;
