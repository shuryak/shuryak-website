import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer'
import { MainPage } from '../Pages/MainPage';
import { ArticlesPage } from '../Pages/ArticlesPage';
import { EditorPage } from '../Pages/EditorPage';
import { DonationPage } from '../Pages/DonationPage';
import { ArticlePage } from '../Pages/ArticlePage';
import { LoginPage } from '../Pages/LoginPage';

export const App: React.FunctionComponent = () => {
  return (
    <HashRouter> {/* for gh pages */}
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
    </HashRouter>
  );
};

export default App;
