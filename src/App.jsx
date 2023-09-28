import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HomePage from './pages/Homepage/HomePage'
import './reset.css';
import './grid.css';


const App = () => {
  return (
    <main className="main-grid">
      <Header />
      <HomePage />
      <Footer />
    </main>
  )
}

export default App;