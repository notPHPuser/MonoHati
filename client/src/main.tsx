import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Login from './pages/Log/Login';
import Register from './pages/Reg/Register';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
