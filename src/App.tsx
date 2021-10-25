import { VFC } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';

export const App: VFC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Homeへ移動</Link>
        <Link to="/page1">Page1へ移動</Link>
        <Link to="/page2">Page2へ移動</Link>
        <Router />
      </div>
    </BrowserRouter>
  )
}
