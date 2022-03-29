import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import GlobalStyle from "./styles/GlobalStyle";



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;