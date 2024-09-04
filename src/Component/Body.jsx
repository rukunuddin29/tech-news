import React, { useState, useEffect } from 'react';
import Card from './Card'; 
import Header from './Header';

function Body() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setFilteredArticles(data.articles);
      })
      .catch(error => console.error('Error fetching the articles:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="body-container">
      <Header onSearch={handleSearch} />
      <h1 className='text-8xl lg:mx-52 font-bold text-left text-gray-100 lg:text-9xl'>Newz...</h1>

      {filteredArticles.map((news, index) => (
        <Card 
          key={index} 
          title={news.title} 
          description={news.description} 
          src={news.urlToImage} 
          url={news.url} 
        />
      ))}
    </div>
  );
}

export default Body;
