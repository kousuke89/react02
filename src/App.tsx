import { VFC } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';
import { Page2 } from './Page2';


export const App: VFC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Homeへ移動</Link>
        <Link to="/page1">Page1へ移動</Link>
        <Link to="/page2">Page2へ移動</Link>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1" render={(props) => {
            console.log(props)
            return (
              <Switch>
                <Route exact path="/page1">
                  <Page1 />
                </Route>
                <Route path="/page1/detailA">
                  <Page1DetailA />
                </Route>
                <Route path="/page1/detailB">
                  <Page1DetailB />
                </Route>
              </Switch>
            )
          }} />
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}