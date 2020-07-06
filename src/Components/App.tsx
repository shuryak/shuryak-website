import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MainPage } from '../Pages/MainPage';
import { ArticlesPage } from '../Pages/ArticlesPage';
import { EditorPage } from '../Pages/EditorPage';
import { DonationPage } from '../Pages/DonationPage';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="content-container">
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={ArticlesPage} path="/articles" />
          <Route component={EditorPage} path="/editor" />
          <Route component={DonationPage} path="/donation" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
