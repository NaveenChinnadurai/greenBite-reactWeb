import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './compo/navbar';
import Home from './pages/Home';
function App() {
  return (
    <div className="row col-12 p-0 m-0">
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
