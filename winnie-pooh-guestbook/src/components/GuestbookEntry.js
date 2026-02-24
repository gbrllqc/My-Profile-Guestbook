cat > src/components/GuestbookEntry.js << 'EOF'
import React from 'react';

function GuestbookEntry({ entry }) {
  const getRandomPoohEmoji = () => {
    const emojis = ['🍯', '🐻', '🐝', '🍂', '🌲', '✨'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div className="guestbook-entry">
      <div className="entry-header">
        <span className="entry-icon">{getRandomPoohEmoji()}</span>
        <span className="entry-name">{entry.name}</span>
        <span className="entry-time">
          {new Date(entry.created_at).toLocaleDateString()}
        </span>
      </div>
      <div className="entry-message">
        "{entry.message}"
      </div>
    </div>
  );
}

export default GuestbookEntry;
EOF