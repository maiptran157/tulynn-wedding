import React, { Component } from 'react';
// import NavBar from './components/nav_bar';
// import Home from './components/home';
// import RSVP from './components/rsvp';
// import Photos from './components/photos';
// import Events from './components/events';
// import Footer from './components/footer';
// import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h3 style={{ "textAlign": "center" }}>Reservation is now closed. Thank you.</h3>
        {/* <NavBar />
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/photos" component={Photos} />
          <Route path="/events/usa" component={Events} />
          <Route path="/events/vietnam" component={Events} />
        </main>
        <Footer /> */}
      </div>
    );
  }
}

export default App;
