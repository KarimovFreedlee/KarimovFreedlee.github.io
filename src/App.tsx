import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/portfolio/Portfolio';
import { useAppSelector } from './store/store';

function App() {
  const page = useAppSelector(state => state.PageReducer.page)

  const getPage = React.useMemo(() => {
    switch(page) {
      case "portfolio":
        return <Portfolio/>
      case "about":
        return <About/>
      case "home":
      default:
        return <Home/>
    }
  }, [page])

  return (
    <div className="App">
      <Header/>
      {getPage}
    </div>
  );
}

export default App;
