import logo from './logo.svg';
import './App.css';
import Header from './Components/headerComponent';
import Banner from './Components/bannerComponent';
import Latest from './Components/latestComponent';
import Items from './Components/itemsComponent';
import Footer from "./Components/footerComponent"
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Latest/>
      <Items/>
      <Footer/>
    </div>
  );
}

export default App;
