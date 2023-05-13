import React, { useState, useEffect } from 'react';

function Homepage() {
  const [load, setLoad] = useState(true);
  const [quote, setQuote] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=beauty';
    const headers = { 'X-Api-Key': 'Kf0w1Pynqp9Y7SMlz02jcw==jGvmkxMkvq9FiCWO' };

    fetch(url, { headers })
      .then((response) => response.json())
      .then((json) => {
        setQuote(json[0]);
        setLoad(false);
      })
      .catch((err) => {
        setLoad(false);
        setError(err);
      });
  }, []);

  if (load) {
    return <div className="message">Loading...</div>;
  }

  if (error) {
    return <div className="message">Error...</div>;
  }

  return (
    <div>
      <div className="d-flex navbar mx-10c">
        <div>
          <h1>Math Magician</h1>
        </div>
      </div>
      <div className="banner mx-10c">
        <h3>Quote of the day:</h3>
        <p>{quote.quote}</p>
        <div>
          --
          { quote.author }
        </div>
      </div>
    </div>
  );
}
export default Homepage;
