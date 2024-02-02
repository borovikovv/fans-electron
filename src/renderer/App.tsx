import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import User from './User';
import Main from './Main';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}
