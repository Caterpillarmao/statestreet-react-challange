import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransationDetails from './components/feature/transationDetails';
import Widget from './components/layout/widget';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Widget/>}/>
        <Route path=":id" element={<TransationDetails />} />
      </Routes>
  </Router>
  );
}

export default App;
