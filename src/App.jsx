import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { useContext } from "react";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Today from "./pages/Today";

import GlobalStyle from "./styles/GlobalStyle";

import { AuthProvider, AuthContext } from './contexts/auth';



const App = () => {

  const Private = ( {children} ) => {
    const { authenticated } = useContext(AuthContext);

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/today" element={<Private> <Today /> </Private>} />
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;