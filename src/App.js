import Footer from './footer';
import NewsLetter from './newsletter';
import Comments from './comments';
import Latest from './latest';
import Header from './header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';

function App() {
  return (
  <Router>
  
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
    
      <div className="parent">
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Latest></Latest>
            <Comments></Comments>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </body>
    </html>

  </Router>
    
  );
}

export default App;
