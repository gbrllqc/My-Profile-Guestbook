import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [entries, setEntries] = useState([]);

  // Load entries from localStorage when app starts
  useEffect(() => {
    const saved = localStorage.getItem('guestbook');
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('guestbook', JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry = {
      id: Date.now(),
      name,
      message,
      created_at: new Date().toISOString()
    };

    setEntries([newEntry, ...entries]);
    setName('');
    setMessage('');
  };

  return (
    <div className="App">
      <header className="pooh-header">
        <h1>Welcome to the Hundred Acre Wood! 🍯</h1>
        <p>Join Pooh and friends - leave a message in our guestbook!</p>
      </header>
      
      <main>
        <div className="guestbook-form-container">
          <h2>Leave a Message in the Honey Pot! 🍯</h2>
          <form onSubmit={handleSubmit} className="guestbook-form">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="E.g., Winnie the Pooh"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write something sweet..."
                rows="4"
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message 🍯
            </button>
          </form>
        </div>

        <div className="guestbook-list">
          <h2>Messages from Friends 🐝</h2>
          {entries.length === 0 ? (
            <p className="no-messages">
              No messages yet. Be the first to leave a message for Pooh! 🐻
            </p>
          ) : (
            entries.map((entry) => (
              <div key={entry.id} className="guestbook-entry">
                <div className="entry-header">
                  <span className="entry-icon">🍯</span>
                  <span className="entry-name">{entry.name}</span>
                  <span className="entry-time">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </span>
                </div>
                <div className="entry-message">
                  "{entry.message}"
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      
      <footer style={{ textAlign: 'center', marginTop: '30px', color: '#8b5a2b' }}>
        <p>Made with love and honey 🐻 🍯</p>
      </footer>
    </div>
  );
}

export default App;