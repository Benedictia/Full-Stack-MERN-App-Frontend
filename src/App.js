import React from 'react';
import './App.css';
import { Link,BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; 
import AddArticle from './components/AddArticle'; 


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>Trending News </h1>
        </header>
        <nav className="navbar">
          <Link to="/" className="navbar-link">Home</Link>
         
        
        <Link to="/add-article" className="add-article-link">
          Add New Article
        </Link>
     
        
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-article" element={<AddArticle />} />
          
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
