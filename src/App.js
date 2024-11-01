import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn"; 

import { Hero, Features, Pricing, Network, Carousel, Subscribe } from './sections/index';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container">
          <Routes>
            {/* Home Route with Hero and Features */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Features />
                  <Pricing/>
                  <Network/>
                  <Carousel/>
                  <Subscribe/>
                </>
              } 
            />

            {/* Sign In Route */}
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
