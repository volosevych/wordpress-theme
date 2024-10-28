import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./pages/SignIn"; 

import { Hero, Features, Pricing, Network } from './sections/index';

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
                </>
              } 
            />

            {/* Sign In Route */}
            <Route path="/sign-in" element={<SignIn />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
