import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title='TextUtils' aboutText='About'/>
      <TextForm />
      {/* <About/> */}
    </>
  );
}

export default App;
