import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stream from './components/Stream';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stream" component={Stream} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
