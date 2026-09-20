import './App.css';
import Header from './components/Header';
import PostCard from './components/PostCard';

function App() {
  const posts = [
    {
      id: 1,
      username: "TechGuru42",
      avatar: "https://placehold.co/40x40/FF6B6B/ffffff?text=TG42",
      content: "Finally understood props in React. It's like function arguments!",
      timestamp: "5 minutes ago",
      likes: 5,
      comments: 3,
      shares: 1
    },
    {
      id: 2,
      username: "CodeNinja",
      avatar: "https://placehold.co/40x40/4ECDC4/ffffff?text=CN",
      content: "Building a social media clone to learn React. Best way to learn! 💪",
      timestamp: "20 minutes ago",
      likes: 22,
      comments: 5,
      shares: 2
    },
    {
      id: 3,
      username: "DevLife",
      avatar: "https://placehold.co/40x40/95E77E/ffffff?text=Dev",
      content: "React components + props = unlimited possibilities 🚀",
      timestamp: "59 minutes ago",
      likes: 51,
      comments: 6,
      shares: 4
    }
  ];

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <h2>Your Feed</h2>

        {posts.map(post => (
          <PostCard
            key={post.id}
            username={post.username}
            avatar={post.avatar}
            content={post.content}
            timestamp={post.timestamp}
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
        ))}
      </main>
    </div>
  );
}

export default App;