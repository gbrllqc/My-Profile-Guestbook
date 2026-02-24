cat > src/components/GuestbookForm.js << 'EOF'
import React, { useState } from 'react';

function GuestbookForm({ onNewEntry }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newEntry = {
      id: Date.now(),
      name,
      message,
      created_at: new Date().toISOString()
    };

    onNewEntry(newEntry);
    setName('');
    setMessage('');
  };

  return (
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
  );
}

export default GuestbookForm;
EOF