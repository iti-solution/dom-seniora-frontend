import React, { useEffect, useState } from 'react';
import { getHello } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHello();
        setMessage(data || 'Brak odpowiedzi z serwera');
      } catch (error) {
        console.error('Błąd podczas pobierania danych:', error);
        setMessage('Błąd połączenia z backendem');
      }
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dom Seniora</h1>
      <h2>Komunikat z backendu:</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
