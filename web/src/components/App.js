import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import LoginPage from './login/LoginPage';


const PrimaryLayout = () => (
  <div>
    <header>
      Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={LoginPage} />
    </main>
    <footer>Footer</footer>
  </div>
)

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;


