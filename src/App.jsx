import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { useContext } from "react";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Today from "./pages/Today";
import Habits from "./pages/Habits";
import Historic from "./pages/Historic";
import LoadingPlane from "./components/LoadingPlane";

import GlobalStyle from "./styles/GlobalStyle";

import { AuthProvider, AuthContext } from './contexts/auth';
import { UserDataProvider } from "./contexts/data";

const App = () => {

  const Private = ( {children} ) => {
    const { authenticated,loading } = useContext(AuthContext);

    if(loading){
      return <LoadingPlane />
    }

    if(!authenticated){
      return <Navigate to="/" />
    }

    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <UserDataProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/today" element={<Private> <Today /> </Private>} />
            <Route path="/habits" element={<Private> <Habits /> </Private>} />
            <Route path="/historic" element={<Private> <Historic /> </Private>} />
          </Routes>
          <GlobalStyle />
        </UserDataProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;