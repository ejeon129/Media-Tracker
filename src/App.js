import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import MediasList from "./components/medias-list.component";
import EditMedia from "./components/edit-media.component";
import CreateMedia from "./components/create-media.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={MediasList} />
      <Route path="/edit/:id" component={EditMedia} />
      <Route path="/create" component={CreateMedia} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;