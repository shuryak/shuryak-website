import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MainPage } from '../Pages/MainPage';
import { ArticlesPage } from '../Pages/ArticlesPage';
import { EditorPage } from '../Pages/EditorPage';

export const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="content-container">
        <Switch>
          <Route component={MainPage} path="/" exact />
          <Route component={ArticlesPage} path="/articles" />
        </Switch>
      </div>
      <div className="editor-container">
        <Switch>
          <Route component={EditorPage} path="/editor" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
