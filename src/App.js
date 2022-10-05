import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        </div>
    </Router>
  );
}

export default App;
