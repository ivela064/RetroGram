import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
//import UploadForm from './UploadForm';

//import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
//import {createUploadLink} from 'apollo-upload-client'

// const client = new ApolloClient({

//   link: createUploadLink({
//     uri: 'http://localhost:5000/',
//   }),
//   cache: new InMemoryCache(),

// })

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
