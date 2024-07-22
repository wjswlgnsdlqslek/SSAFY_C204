import React from "react";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuthStore from "./store/authStore";

function App() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <header className="m-1">헤더위치</header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
