import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from './firebaseconfig';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import '../App.css';


function Home () {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();


  const handleGoogle = async (e) => {

      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        setIsAuthenticated(true);
        console.log('wtf');
        navigate('./Dashboard');
        

      }catch (error) {
        console.error('Authentication error:', error);
      }
      
  }

    return (
        <div className="App">
            <div class="overlay">
    
            <div class="overlay__inner">
    
              <h1 class="overlay__title">
                  Hey there!👋     are you ready to make your 
                <span class="text-gradient"> dreams</span> turn into a reality?
              </h1>
    
              <p class="overlay__description">
                  Welcome to <strong>WowisDream</strong>, 
                  the one-stop-shop that helps turn your dreams into reality by 
                  incorporating them into your pictures with just a click of a button. 
                  Exciting, isn't it? 
                <strong>Let's get started! 💫</strong>
              </p>
    
              <div class="overlay__btns">
    
                <button onClick={handleGoogle} class="login-with-google-btn overlay__btn overlay__btn--transparent">
                  <a>
    
                    Sign in with Google
                  </a>
                </button>
    
                <button class="overlay__btn overlay__btn--colors">
                  <span class="overlay__btn-emoji">📝</span>
                  <span>Documentation</span>
                </button>
              </div>
            </div>
            </div>
            
        </div>
      );
    }

    export default Home;
    