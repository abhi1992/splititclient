import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Login from './pages/login';
import Header from "./pages/header";

function App() {
  return (
    <>
    <div className="App marginBot20">
      <Header></Header>
      <Login />
    </div>
    
    </>

  );
}

export default App;
