import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Article from '../components/Article'; 


const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://full-stack-mern-app-backend-2.onrender.com/api/articles');
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch articles');
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="homepage">
      

      <section className="articles-list">
       
        {loading && <p>Loading articles...</p>}
        {error && <p>{error}</p>}
        {articles.length > 0 ? (
          articles.map((article) => (
            <Article key={article._id} article={article} />
            
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
