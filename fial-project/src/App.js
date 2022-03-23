
import './App.css';
import '@mui/material';
import React from 'react';
// import HomePage from './pages/Home/HomePage.component';
import AppRoute from './routes/App.route';
// import AppRoute from 'routes/App.routes'
import { Provider } from 'react-redux';
import store from 'redux/Store';


function App() {


  



  return (
    <>


      <Provider store={store}>

        <AppRoute />

      </Provider>


    </>
  );
}

export default App;


