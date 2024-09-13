import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Quote from './pages/Quote';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 64px - 50px)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>

        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;