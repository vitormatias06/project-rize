// PostCard.jsx
function PostCard() {
  // Components are just functions
  return (
    // This looks like HTML but it's JSX
    <div className="post-card">
      <div className="post-header">
        <img 
          src="https://placehold.co/40x40" 
          alt="User avatar" 
          className="avatar"
        />
        <div className="user-info">
          <h3 className="username">AlexTech</h3>
          <span className="timestamp">2 hours ago</span>
        </div>
      </div>
      <p className="post-content">
        Just shipped my first React component! 🚀 The future is component-based.
      </p>
      <div className="post-actions">
        <button className="action-btn">👍 Like</button>
        <button className="action-btn">💬 Comment</button>
        <button className="action-btn">🔄 Share</button>
      </div>
    </div>
  );
}

// Every component file must export the component
export default PostCard;