import './App.css';
import { Route, useHistory, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react'
import GlobalLoader from "./components/GlobalLoader";
import SignIn from "./pages/SignIn/SignIn.page";
import Home from "./pages/Home/Home.page";
import { userContext } from './context/userContext'


function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={{ user, setUser }}>
        {user === undefined ? (
          <GlobalLoader />
        ) : (
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={user ? <Home user={user} /> : <Navigate to="/signin" replace />} />
            <Route path="/signin" element={user ? <Navigate to="/" /> : <SignIn />} />
          </Routes>
        )}
      </userContext.Provider>
    </div>
  );
}

export default App;
