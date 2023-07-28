import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';

const src: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer theme="dark" autoClose={3000}/>
      <Routes/>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default src;
