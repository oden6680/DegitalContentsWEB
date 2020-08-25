import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';


import Background from "./images/background.jpg"

import Top from "./pages/top";
import Game from "./pages/game";
import Links from "./pages/link";

const TabLink = ({ to, children, exact }) => (
  <Route
    path = {to}
    exact = {exact}
    children = {({ match }) => {
      return (
        <li className = {match ? 'has-background-success-light' : 'is-active'}>
          <Link to = {to} style = {{ color:'black' }}>
            {children}
          </Link>
        </li>
      )
    }}
  />
)

const style = { backgroundImage:`url(${Background})`}

const App = () => {
  return (
    <Router hashType = "noslash">
    <div>
      <section className = "hero is-primary"　style = {style}>

        <div className = "hero-body">
          <div className = 'container'>
            <div className = 'content has-text-centered'>
              <img src = "http://sngk.net/XRYUxR/img1" alt = "logo" />
            </div>
          </div>
        </div>

        <div className = "hero-foot">
            <nav className = "tabs is-boxed is-fullwidth">
              <div className = "container">
                <ul>
                  <TabLink to = '/' exact>Top</TabLink>
                  <TabLink to = '/game'>Game</TabLink>
                  <TabLink to = '/link'>Link</TabLink>
                </ul>
              </div>
            </nav>
        </div>

      </section>

      <section className = "section has-background-success-light">
        <div className = "container ">
          <Switch>
            <Route exact path = "/" component = {Top}/>
            <Route exact path = "/game" component = {Game}/>
            <Route exact path = "/link" component = {Links}/>
          </Switch>
        </div>
      </section>  
        
      <footer className = 'footer'>
        <div className = 'container'>
          <div className = 'content has-text-centered'>
            <hr></hr>
            <p>&copy; 2020 Naoya Oda </p>
            <p><a href = "mailto:oden6680@gmail.com">oden6680@gmail.com</a></p>
          </div>
        </div>
      </footer>

    </div>
    </Router>
  );
}

export default App;　　　　