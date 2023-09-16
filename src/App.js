import './App.css';
import Footer from './footer';
import NewsLetter from './newsletter';
import Comments from './comments';
import Latest from './latest';
import Header from './header';

function App() {
  return (
    

    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div className="parent">
        <Header />
        <Latest />
        <Comments />
        <NewsLetter/>
        <Footer/>
      </div>
    </body>
    </html>
    
  );
}

export default App;
