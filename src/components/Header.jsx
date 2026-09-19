function Header() {
  return (
    <header className="app-header">
        <h1 className="logo">🐝 BuzzBoard</h1>
        <nav className="nav-menu">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Explore</a>
          <a href="#" className="nav-link">Messages</a>
          <a href="#" className="nav-link">Profile</a>
        </nav>
        <button className="post-btn">New Post</button>
    </header>
  );
}

export default Header;