import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer'
import { MainPage } from '../Pages/MainPage';
import { ArticlesPage } from '../Pages/ArticlesPage';
import { EditorPage } from '../Pages/EditorPage';
import { DonationPage } from '../Pages/DonationPage';
import { ArticlePage } from '../Pages/ArticlePage';
import { LoginPage } from '../Pages/LoginPage';
import Client from '../client';

export const App: React.FunctionComponent = () => {
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => {
    Client.isMobile = document.documentElement.clientWidth < 840;
    console.log(Client.isMobile);
  };

  return (
    <BrowserRouter>
    { /* <HashRouter> */ }
      <Navbar/>
      <div className="content-container">
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={LoginPage} path="/login" />
          <Route component={EditorPage} path="/editor" />
          <Route component={ArticlesPage} path="/articles" />
          <Route component={DonationPage} path="/donation" />
          <Route component={ArticlePage} path="/article/:id" />
        </Switch>
      </div>
      <Footer/>
    { /* </HashRouter> */ }
    </BrowserRouter>
  );
};

export default App;
