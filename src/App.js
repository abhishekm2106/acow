import './App.css';
import { Route, useHistory, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react'
import GlobalLoader from "./components/GlobalLoader";
import SignIn from "./pages/SignIn/SignIn.page";
import Home from "./pages/Home/Home.page";



function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      {user === undefined ? (
        <GlobalLoader />
      ) : (
        <Routes>
          <Route path="/" element={user ? <Home user={user} /> : <Navigate to="/signin" replace />} />
          <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
        </Routes>
      )}

    </div>
  );
}

export default App;
