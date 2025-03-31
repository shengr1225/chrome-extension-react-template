import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>Dashboard (Coming Soon)</div>
      )}
    </div>
  );
}

export default App;
