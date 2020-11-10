import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Navbary from './components/layout/navbar';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import NewPost from './components/posts/NewPost';
import Login from './components/auth/login';
import Register from './components/auth/Register';
import { Provider} from 'react-redux';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';
import Timeline from './components/posts/Timeline';
import Landing from './components/layout/Landing';
import Profile from './components/user/Profile';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        
        <Navbary />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />  
            <Route exact path="/add/post" component={NewPost} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Timeline} />
            <Route exact path="/profile/:id" component={Profile} />
          </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
