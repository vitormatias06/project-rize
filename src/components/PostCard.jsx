// PostCard.jsx
import './PostCard.css';
function PostCard({ username, avatar, content, timestamp, likes, comments, shares }) {
  console.log(`Rendering post from ${username}`);

  return (
    <div className="post-card">
      <div className="post-header">
        <img 
          src={avatar}
          alt="User avatar" 
          className="avatar"
        />

        <div className="user-info">
          <h3 className="username">{username}</h3>
          <span className="timestamp">{timestamp}</span>
        </div>
      </div>

      <p className="post-content">
        {content}
      </p>

      <div className="post-actions">
        <button className="action-btn">👍 {likes}</button>
        <button className="action-btn">💬 {comments}</button>
        <button className="action-btn">🔄 {shares}</button>
      </div>
    </div>
  );
}

export default PostCard;