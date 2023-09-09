import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './assets/firebaseconfig';
import Dashboard from './assets/Dashboard';
import React, { useState } from 'react';
import Home from './assets/Home';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleGoogle = async (e) => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, provider);
  //     setIsAuthenticated(true);
  //   } catch (error) {
  //     console.error('Authentication error:', error);
  //   }
  // }

  return (
    <div className="App">
      <Router> {/* Place the Router component here to wrap your entire application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
