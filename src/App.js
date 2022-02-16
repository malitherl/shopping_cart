
import './App.css';
import Shop from './components/Shop';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>   
          <Route path="/" element={<Shop/>}></Route>
      </Routes>
    </div>
  
  );
}



export default App;
