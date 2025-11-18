import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import Home from './components/Home'
import ProjectPage from './components/ProjectPage'
import { Routes, Route } from 'react-router-dom'
import { projects } from './data/projects'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home projects={projects} />
      {/* <Routes>
        <Route path="/" element={ <Home />} />
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;