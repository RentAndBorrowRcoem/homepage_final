import logo from './logo.svg';
import './App.css';
import FirstPage from './modules/FirstPage';
import SecondPage from './modules/SecondPage';
import Navbar from './modules/Navbar';
import Footer from './modules/Footer';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <Footer />
    </div>
  );
}

export default App;
