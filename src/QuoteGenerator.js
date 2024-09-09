import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Fetch a random quote from the API
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const quotes = response.data.quotes;
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    } catch (error) {
      console.error('Error fetching the quote', error);
    }
  };

  // Fetch an initial quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <p>"{quote}"</p>
      <p>- {author}</p><br></br>
      <button onClick={fetchQuote}>Next</button>
    </div>
  );
};

export default QuoteGenerator;