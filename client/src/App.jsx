import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

function handleRedirect() {
  // Define your method logic here
  const redirectLogic = async () => {
    const { id } = useParams();

    fetch(`https://shortly-app-api.onrender.com/api/urls/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(response => response.json())
    .then(data => {
      if (data.originalUrl) {
        window.location.href = data.originalUrl;
      } else {
        // Handle error (e.g., URL not found)
      }
    });
  };

  // Call the method logic
  redirectLogic();

  // Return null or loading indicator if needed
  return null;
}

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* Use a Route component with an inline function as element */}
          <Route path="/:id" element={handleRedirect()} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
