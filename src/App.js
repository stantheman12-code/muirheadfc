import Header from "./components/Header/Navigation";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";
import Footer from "./components/Footer/Footer";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Footer />
    </div>
  );
}
