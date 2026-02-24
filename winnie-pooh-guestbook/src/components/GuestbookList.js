cat > src/components/GuestbookList.js << 'EOF'
import React from 'react';
import GuestbookEntry from './GuestbookEntry';

function GuestbookList({ entries }) {
  return (
    <div className="guestbook-list">
      <h2>Messages from Friends 🐝</h2>
      {entries.length === 0 ? (
        <p className="no-messages">
          No messages yet. Be the first to leave a message for Pooh! 🐻
        </p>
      ) : (
        entries.map((entry) => (
          <GuestbookEntry key={entry.id} entry={entry} />
        ))
      )}
    </div>
  );
}

export default GuestbookList;
EOF