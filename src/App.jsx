import './App.css';
import Header from './components/Header';
import PostCard from './components/PostCard';

function App() {
  return (
    <div className="app">
      <Header />  {/* Header at the top */}
      <main className="main-content">
        <h2>Your Feed</h2>
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </div>
  );
}

export default App;