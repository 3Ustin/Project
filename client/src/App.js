import Resources from './components/Resources'
import './App.css';
import '../src/css/Nav.css'
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Resources path = '/' />
      </Router>
    </div>
  );
}

export default App;
