import React, { useState, useEffect } from 'react';
import Card from './Card';

function Body() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []); // Set articles or empty array if none found
      } catch (error) {
        console.error('Error fetching the articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="body-container">
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <Card 
            key={index} 
            title={news.title} 
            description={news.description} 
            src={news.urlToImage} 
            url={news.url} 
          />
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default Body;
